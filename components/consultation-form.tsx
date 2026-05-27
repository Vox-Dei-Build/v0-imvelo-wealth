"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "lucide-react"

export function ConsultationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    preferredTime: "",
    preferredDate: "",
    goals: "",
    currentSituation: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent("Consultation request")
    const body = encodeURIComponent(
      [
        `Name: ${formData.firstName} ${formData.lastName}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone}`,
        `Preferred date: ${formData.preferredDate || "Not provided"}`,
        `Preferred time: ${formData.preferredTime || "Not selected"}`,
        "",
        "Main financial goals:",
        formData.goals || "Not provided",
        "",
        "Current situation:",
        formData.currentSituation || "Not provided",
      ].join("\n")
    )

    window.location.href = `mailto:info@imvelowealth.co.za?subject=${subject}&body=${body}`
  }

  return (
    <Card className="border-primary/20 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-serif">Book Your Session</CardTitle>
        <CardDescription>
          Complete the form below and your email app will open a prepared consultation request.
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
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+27 XX XXX XXXX"
              required
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="preferredDate">Preferred Date</Label>
              <Input
                id="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="preferredTime">Preferred Time</Label>
              <Select
                value={formData.preferredTime}
                onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning (9:00 - 12:00)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (12:00 - 17:00)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="goals">What are your main financial goals?</Label>
            <Textarea
              id="goals"
              value={formData.goals}
              onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
              placeholder="e.g., Retirement planning, wealth preservation, estate planning, investment growth..."
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="currentSituation">Tell us about your current financial situation</Label>
            <Textarea
              id="currentSituation"
              value={formData.currentSituation}
              onChange={(e) => setFormData({ ...formData, currentSituation: e.target.value })}
              placeholder="e.g., Assets, income, existing investments, challenges you're facing..."
              rows={3}
            />
          </div>

          <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
            <Calendar className="mr-2 h-5 w-5" />
            Prepare Consultation Email
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Office hours are Monday to Friday, 09:00-17:00.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
