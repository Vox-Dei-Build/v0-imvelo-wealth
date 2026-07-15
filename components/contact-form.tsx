"use client"

import type React from "react"
import { useState } from "react"
import { ArrowRight, LockKeyhole } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const subject = encodeURIComponent("Website enquiry")
    const body = encodeURIComponent(
      [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone || "Not provided"}`,
        "",
        formData.message,
      ].join("\n"),
    )

    window.location.href = `mailto:info@imvelowealth.co.za?subject=${subject}&body=${body}`
  }

  return (
    <section className="overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_80px_rgba(0,81,102,0.13)] ring-1 ring-[#CFDFE2]" data-aos="fade-right">
      <div className="h-1.5 bg-[#36859A]" aria-hidden="true" />
      <div className="p-7 sm:p-10 lg:p-12">
        <div className="flex items-center justify-between gap-5">
          <p className="section-kicker text-[#307283]">Send an email</p>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#536A70]">
            <LockKeyhole className="h-3.5 w-3.5" aria-hidden="true" />
            Opens in your email app
          </div>
        </div>

        <h2 className="mt-7 text-3xl font-medium leading-[1.15] tracking-[-0.035em] text-[#005166] sm:text-4xl">
          Write to the team.
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-[#536A70]">
          Share the question or decision on your mind. We will respond during office hours.
        </p>

        <form onSubmit={handleSubmit} className="mt-9 space-y-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-3">
              <Label htmlFor="contact-name" className="font-bold text-[#005166]">Your name *</Label>
              <Input
                id="contact-name"
                value={formData.name}
                onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                autoComplete="name"
                required
                className="h-14 rounded-xl border-[#C8DDE1] bg-[#F7FAFB] px-4 text-base"
              />
            </div>
            <div className="space-y-3">
              <Label htmlFor="contact-email" className="font-bold text-[#005166]">Email *</Label>
              <Input
                id="contact-email"
                type="email"
                value={formData.email}
                onChange={(event) => setFormData({ ...formData, email: event.target.value })}
                autoComplete="email"
                required
                className="h-14 rounded-xl border-[#C8DDE1] bg-[#F7FAFB] px-4 text-base"
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label htmlFor="contact-phone" className="font-bold text-[#005166]">Phone number</Label>
            <Input
              id="contact-phone"
              type="tel"
              value={formData.phone}
              onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
              autoComplete="tel"
              placeholder="+27"
              className="h-14 rounded-xl border-[#C8DDE1] bg-[#F7FAFB] px-4 text-base"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="contact-message" className="font-bold text-[#005166]">What is on your mind? *</Label>
            <Textarea
              id="contact-message"
              value={formData.message}
              onChange={(event) => setFormData({ ...formData, message: event.target.value })}
              required
              rows={6}
              placeholder="Tell us briefly what you would like help with."
              className="rounded-xl border-[#C8DDE1] bg-[#F7FAFB] p-4 text-base"
            />
          </div>

          <Button type="submit" size="lg" className="group h-13 w-full rounded-full bg-[#005166] font-bold text-white hover:bg-[#307283] sm:w-auto sm:px-8">
            Prepare email
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </form>
      </div>
    </section>
  )
}
