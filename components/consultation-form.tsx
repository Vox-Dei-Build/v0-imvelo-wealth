"use client"

import { useMemo, useState } from "react"
import { ArrowLeft, ArrowRight, Check, LockKeyhole } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { waLink } from "@/lib/whatsapp"

const topics = [
  "Build a complete financial plan",
  "Review investments and savings",
  "Plan for retirement",
  "Protect my family and estate",
  "Plan for my business or employees",
  "I am not sure yet",
]

const lifeStages = [
  "Growing my career",
  "Building a family",
  "Established professional",
  "Approaching retirement",
  "Already retired",
  "Business owner or employer",
]

const timeWindows = ["Weekday mornings", "Weekday afternoons", "Any time during office hours"]

const stepCopy = [
  {
    kicker: "What brings you here?",
    title: "What would you like help making clearer?",
    description: "Choose the closest fit. It is completely fine if you are still figuring it out.",
  },
  {
    kicker: "A little context",
    title: "Where are you in life right now?",
    description: "This helps the right adviser understand the season and decisions around your question.",
  },
  {
    kicker: "In your own words",
    title: "What is on your mind?",
    description: "Your first name is all we need. Add a note only if it would make the first reply more useful.",
  },
  {
    kicker: "Ready when you are",
    title: "When should we pick up the conversation?",
    description: "Your answers will be placed into WhatsApp. You can review the message before choosing to send it.",
  },
]

function ChoiceGrid({
  options,
  value,
  onChange,
}: {
  options: string[]
  value: string
  onChange: (value: string) => void
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2" role="radiogroup">
      {options.map((option) => {
        const selected = value === option
        return (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(option)}
            className={`flex min-h-16 items-center justify-between rounded-2xl border px-5 py-4 text-left text-sm font-semibold leading-6 transition-all ${
              selected
                ? "border-[#005166] bg-[#005166] text-white shadow-lg"
                : "border-[#C8DDE1] bg-[#F7FAFB] text-[#455E65] hover:border-[#307283]/50 hover:bg-white"
            }`}
          >
            <span>{option}</span>
            <span
              className={`ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
                selected ? "border-[#8FD3DD] bg-[#8FD3DD] text-[#005166]" : "border-[#B9D2D7]"
              }`}
              aria-hidden="true"
            >
              {selected ? <Check className="h-3.5 w-3.5" strokeWidth={3} /> : null}
            </span>
          </button>
        )
      })}
    </div>
  )
}

export function ConsultationForm() {
  const [step, setStep] = useState(0)
  const [topic, setTopic] = useState("")
  const [lifeStage, setLifeStage] = useState("")
  const [name, setName] = useState("")
  const [note, setNote] = useState("")
  const [timeWindow, setTimeWindow] = useState("")

  const message = useMemo(
    () =>
      [
        `Hi Imvelo Wealth 👋 My name is ${name.trim()}.`,
        `I would like help with: ${topic}.`,
        `Where I am in life: ${lifeStage}.`,
        note.trim() ? `What is on my mind: ${note.trim()}` : null,
        `Best time to continue: ${timeWindow}.`,
      ]
        .filter(Boolean)
        .join("\n"),
    [lifeStage, name, note, timeWindow, topic],
  )

  const canContinue = [Boolean(topic), Boolean(lifeStage), Boolean(name.trim()), Boolean(timeWindow)][step]
  const progress = ((step + 1) / stepCopy.length) * 100
  const current = stepCopy[step]

  return (
    <section className="overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_80px_rgba(0,81,102,0.13)] ring-1 ring-[#CFDFE2]">
      <div className="h-1.5 bg-[#D9E7EA]" aria-hidden="true">
        <div className="h-full bg-[#36859A] transition-all duration-500" style={{ width: `${progress}%` }} />
      </div>

      <div className="p-7 sm:p-10 lg:p-12">
        <div className="flex items-center justify-between">
          <p className="section-kicker text-[#307283]">Step {step + 1} of {stepCopy.length}</p>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#536A70]">
            <LockKeyhole className="h-3.5 w-3.5" aria-hidden="true" />
            Private until you send
          </div>
        </div>

        <div className="mt-8 min-h-[8.5rem]">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#536A70]">{current.kicker}</p>
          <h2 className="mt-3 text-3xl font-medium leading-[1.15] tracking-[-0.035em] text-[#005166] sm:text-4xl">{current.title}</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#536A70]">{current.description}</p>
        </div>

        <div className="mt-8 min-h-[18rem]">
          {step === 0 ? <ChoiceGrid options={topics} value={topic} onChange={setTopic} /> : null}
          {step === 1 ? <ChoiceGrid options={lifeStages} value={lifeStage} onChange={setLifeStage} /> : null}
          {step === 2 ? (
            <div className="space-y-7">
              <div className="space-y-3">
                <Label htmlFor="consultation-name" className="text-sm font-bold text-[#005166]">Your first name *</Label>
                <Input
                  id="consultation-name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="e.g. Naledi"
                  autoComplete="given-name"
                  className="h-14 rounded-xl border-[#C8DDE1] bg-[#F7FAFB] px-4 text-base"
                />
              </div>
              <div className="space-y-3">
                <Label htmlFor="consultation-note" className="text-sm font-bold text-[#005166]">A short note (optional)</Label>
                <Textarea
                  id="consultation-note"
                  value={note}
                  onChange={(event) => setNote(event.target.value)}
                  placeholder="e.g. I recently changed jobs and need to decide what to do with my pension…"
                  rows={4}
                  className="rounded-xl border-[#C8DDE1] bg-[#F7FAFB] p-4 text-base"
                />
              </div>
            </div>
          ) : null}
          {step === 3 ? (
            <div className="space-y-7">
              <ChoiceGrid options={timeWindows} value={timeWindow} onChange={setTimeWindow} />
              {timeWindow ? (
                <div className="rounded-2xl bg-[#EAF4F6] p-5 text-sm leading-7 text-[#455E65]">
                  <span className="font-bold text-[#005166]">Your introduction is ready.</span> WhatsApp will open with
                  it filled in. Nothing is sent until you choose to send it there.
                </div>
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="mt-9 flex flex-col-reverse gap-3 border-t border-[#D3E3E6] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <Button
            type="button"
            variant="ghost"
            onClick={() => setStep((currentStep) => Math.max(0, currentStep - 1))}
            disabled={step === 0}
            className="rounded-full px-5 text-[#455E65]"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          {step < stepCopy.length - 1 ? (
            <Button
              type="button"
              onClick={() => setStep((currentStep) => Math.min(stepCopy.length - 1, currentStep + 1))}
              disabled={!canContinue}
              className="h-12 rounded-full px-7 font-bold"
            >
              Continue
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              asChild={canContinue}
              disabled={!canContinue}
              className="h-12 rounded-full bg-[#25D366] px-7 font-bold text-[#073844] hover:bg-[#20bd5b]"
            >
              {canContinue ? (
                <a href={waLink(message)} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="mr-2 h-5 w-5" />
                  Continue in WhatsApp
                </a>
              ) : (
                <span>
                  <WhatsAppIcon className="mr-2 h-5 w-5" />
                  Continue in WhatsApp
                </span>
              )}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
