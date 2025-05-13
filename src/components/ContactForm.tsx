
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Store contact form submission in Supabase
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          status: 'new'
        }]);
      
      if (error) {
        console.error('Error submitting contact form:', error);
        toast({
          variant: 'destructive',
          title: 'ส่งข้อความไม่สำเร็จ',
          description: 'เกิดข้อผิดพลาดในการส่งข้อความ กรุณาลองใหม่อีกครั้ง',
        });
        setIsSubmitting(false);
        return;
      }
      
      toast({
        title: "ส่งข้อความเรียบร้อยแล้ว",
        description: "เราจะติดต่อกลับโดยเร็วที่สุด",
        duration: 5000,
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      console.error('Unexpected error submitting form:', err);
      toast({
        variant: 'destructive',
        title: 'เกิดข้อผิดพลาด',
        description: 'ไม่สามารถส่งข้อความได้ในขณะนี้ กรุณาลองใหม่ภายหลัง',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium">
            ชื่อ <span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="กรุณาใส่ชื่อของคุณ"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            อีเมล <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
            required
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="subject" className="block text-sm font-medium">
          หัวข้อ <span className="text-red-500">*</span>
        </label>
        <Input
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="กรุณาระบุหัวข้อ"
          required
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium">
          ข้อความ <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="กรุณาพิมพ์ข้อความของคุณที่นี่..."
          rows={6}
          required
        />
      </div>
      
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="consent"
          className="w-4 h-4 accent-tour-orange"
          required
        />
        <label htmlFor="consent" className="text-sm">
          ฉันยินยอมให้เก็บข้อมูลเพื่อติดต่อกลับ
        </label>
      </div>
      
      <div className="pt-2">
        <Button
          type="submit"
          className="w-full bg-tour-orange hover:bg-tour-orange-dark"
          disabled={isSubmitting}
        >
          {isSubmitting ? "กำลังส่งข้อความ..." : "ส่งข้อความ"}
        </Button>
        <p className="text-xs text-gray-500 mt-2 text-center">
          เราจะตอบกลับภายใน 24-48 ชั่วโมง
        </p>
      </div>
    </form>
  );
};

export default ContactForm;
