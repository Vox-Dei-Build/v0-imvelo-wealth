"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Send } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    newsletter: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent("Website enquiry")
    const body = encodeURIComponent(
      [
        `Name: ${formData.firstName} ${formData.lastName}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone || "Not provided"}`,
        `Service interest: ${formData.service || "Not selected"}`,
        `Newsletter opt-in: ${formData.newsletter ? "Yes" : "No"}`,
        "",
        "Message:",
        formData.message || "Not provided",
      ].join("\n")
    )

    window.location.href = `mailto:info@imvelowealth.co.za?subject=${subject}&body=${body}`
  }

  return (
    <Card className="border-primary/20 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-serif">Get Started Today</CardTitle>
        <CardDescription>
          Share your details and your email app will open a prepared message to Imvelo Wealth Solutions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name *</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name *</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+27 XX XXX XXXX"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">Service Interest</Label>
            <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="financial-planning">Comprehensive Financial Planning</SelectItem>
                <SelectItem value="investment-management">Investment Management</SelectItem>
                <SelectItem value="retirement-planning">Retirement Planning</SelectItem>
                <SelectItem value="estate-planning">Estate Planning</SelectItem>
                <SelectItem value="tax-planning">Tax Planning</SelectItem>
                <SelectItem value="business-planning">Business Financial Planning</SelectItem>
                <SelectItem value="other">Other / Not Sure</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Tell us about your goals</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="What are your main financial goals? What challenges are you facing? Any specific questions?"
              rows={4}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="newsletter"
              checked={formData.newsletter}
              onCheckedChange={(checked) => setFormData({ ...formData, newsletter: checked as boolean })}
            />
            <Label htmlFor="newsletter" className="text-sm">
              I'd like to receive market insights and financial planning tips via email
            </Label>
          </div>

          <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
            <Send className="mr-2 h-5 w-5" />
            Prepare Email
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you agree to our privacy policy. We'll never share your information.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
