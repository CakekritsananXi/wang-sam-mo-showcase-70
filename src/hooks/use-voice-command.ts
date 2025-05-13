
import { useState, useEffect, useCallback, useRef } from 'react';

// Add TypeScript declarations for the Web Speech API
interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
  resultIndex: number;
  error: SpeechRecognitionError;
}

interface SpeechRecognitionError extends Event {
  error: string;
  message: string;
}

interface SpeechRecognitionResultList {
  length: number;
  item(index: number): SpeechRecognitionResult;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
  length: number;
  item(index: number): SpeechRecognitionAlternative;
  [index: number]: SpeechRecognitionAlternative;
  isFinal: boolean;
}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: (event: SpeechRecognitionEvent) => void;
  onerror: (event: SpeechRecognitionError) => void;
  onend: () => void;
}

// Extend the Window interface to include SpeechRecognition
declare global {
  interface Window {
    SpeechRecognition?: new () => SpeechRecognition;
    webkitSpeechRecognition?: new () => SpeechRecognition;
  }
}

interface VoiceCommandOptions {
  commands?: Record<string, () => void>;
  enabled?: boolean;
  language?: string;
}

interface VoiceCommandResult {
  isListening: boolean;
  lastCommand: string | null;
  startListening: () => void;
  stopListening: () => void;
  setEnabled: (enabled: boolean) => void;
  error: string | null;
}

/**
 * Custom hook for handling voice commands using Web Speech API
 * 
 * @param options Configuration options for voice commands
 * @returns Object with voice command state and control functions
 */
export function useVoiceCommand({
  commands = {},
  enabled = false,
  language = 'en-US',
}: VoiceCommandOptions = {}): VoiceCommandResult {
  const [isListening, setIsListening] = useState<boolean>(false);
  const [lastCommand, setLastCommand] = useState<string | null>(null);
  const [isEnabled, setIsEnabled] = useState<boolean>(enabled);
  const [error, setError] = useState<string | null>(null);
  
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  // Initialize speech recognition
  useEffect(() => {
    // Check for browser support
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (!SpeechRecognition) {
      setError('Speech recognition not supported in this browser');
      return;
    }

    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = false;
    recognitionRef.current.lang = language;

    recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
      setLastCommand(transcript);

      // Check if the transcript matches any command
      Object.entries(commands).forEach(([commandPhrase, action]) => {
        if (transcript.includes(commandPhrase.toLowerCase())) {
          action();
        }
      });
    };

    recognitionRef.current.onerror = (event: SpeechRecognitionError) => {
      setError(`Speech recognition error: ${event.error}`);
      setIsListening(false);
    };

    recognitionRef.current.onend = () => {
      setIsListening(false);
      // Auto-restart if still enabled
      if (isEnabled) {
        try {
          recognitionRef.current?.start();
          setIsListening(true);
          setError(null);
        } catch (e) {
          setError(`Failed to restart: ${e}`);
        }
      }
    };

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (e) {
          // Ignore errors when stopping an already stopped recognition
        }
      }
    };
  }, [commands, isEnabled, language]);

  const startListening = useCallback(() => {
    if (!recognitionRef.current) {
      setError('Speech recognition not initialized');
      return;
    }

    try {
      recognitionRef.current.start();
      setIsListening(true);
      setIsEnabled(true);
      setError(null);
    } catch (e) {
      setError(`Failed to start: ${e}`);
    }
  }, []);

  const stopListening = useCallback(() => {
    if (!recognitionRef.current) {
      return;
    }

    try {
      recognitionRef.current.stop();
      setIsListening(false);
      setIsEnabled(false);
    } catch (e) {
      setError(`Failed to stop: ${e}`);
    }
  }, []);

  const setEnabled = useCallback((enabled: boolean) => {
    setIsEnabled(enabled);
    if (enabled && !isListening && recognitionRef.current) {
      startListening();
    } else if (!enabled && isListening && recognitionRef.current) {
      stopListening();
    }
  }, [isListening, startListening, stopListening]);

  return {
    isListening,
    lastCommand,
    startListening,
    stopListening,
    setEnabled,
    error,
  };
}
