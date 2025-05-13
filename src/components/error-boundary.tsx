
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

/**
 * ErrorBoundary component to catch JS errors in child components
 * and display a fallback UI instead of crashing the app
 */
class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log the error to an error reporting service
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
    });
  };

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI
      return (
        <div className="p-6 rounded-lg border border-red-200 bg-white dark:bg-gray-900 dark:border-red-900/20 shadow-sm">
          <div className="flex items-center gap-3 text-red-500 mb-4">
            <AlertCircle className="h-6 w-6" />
            <h2 className="text-lg font-medium">Something went wrong</h2>
          </div>
          
          <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/10 rounded border border-red-100 dark:border-red-900/20 text-sm">
            <p className="font-mono">{this.state.error?.toString()}</p>
          </div>
          
          <div className="flex justify-end">
            <Button 
              variant="outline" 
              onClick={this.handleReset} 
              className="flex items-center gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Try again
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export { ErrorBoundary };
