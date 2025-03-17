"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, Calendar } from "lucide-react";
import SocialLinks from "./ui/socialLinks";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const githubSvgUrl =
    "https://www.dropbox.com/scl/fi/lktrff2kp56i24njtvxuy/github.svg?rlkey=nz8uqbse1o776ymlorz69hwxb&st=xfew7dn8&raw=1";
  const linkedinSvgUrl =
    "https://www.dropbox.com/scl/fi/qdsqw6wrc2jtv25u8xd24/linkedin.svg?rlkey=n5mg7lqhn5lets1gd1lm7h8fy&st=v603jxcx&raw=1";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="section-padding bg-gray-50 dark:bg-gray-800 pt-28 md:pt-32"
    >
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Contact
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div className="space-y-1">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div className="space-y-1">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-gray-700 dark:text-gray-300"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-4">
              <Card>
                <CardContent className="p-5">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div>
                        <div className="flex  gap-2">
                          <Mail className="h-5 text-primary mr-1 mt-0.5" />
                          <h4 className="font-medium text-gray-900 dark:text-white">
                            Email
                          </h4>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400">
                          lucianosotobonja95@gmail.com
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                        Connect
                      </h4>
                      <SocialLinks />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-5">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                    Let's Talk
                  </h3>
                  <Button className="w-full" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <Calendar className="mr-2 h-4 w-4" /> Schedule a Call
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
