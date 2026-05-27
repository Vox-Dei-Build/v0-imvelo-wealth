import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { metadataForPath } from "@/lib/seo"

export const metadata = metadataForPath("/privacy")

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="py-16 sm:py-20 border-b border-border/40 bg-muted/20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Legal</p>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-muted-foreground">Last updated: 10 April 2026</p>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 prose prose-slate dark:prose-invert">
            <div className="space-y-10 text-sm leading-7 text-foreground/80">

              <div>
                <h2 className="text-xl font-serif font-bold text-foreground mb-3">1. Who We Are</h2>
                <p>
                  Imvelo Wealth Solutions (Pty) Ltd ("<strong>Imvelo</strong>", "<strong>we</strong>", "<strong>us</strong>", or
                  "<strong>our</strong>") is a South African Financial Services Provider licensed and regulated by the Financial
                  Sector Conduct Authority (FSCA) under the Financial Advisory and Intermediary Services Act, 37 of 2002 (FAIS Act).
                  Our registered office is at EPPF Office Park, 24 Georgian Cres E, Bryanston East, Johannesburg, 2152.
                </p>
                <p className="mt-3">
                  We process personal information as a responsible party in terms of the Protection of Personal Information Act,
                  4 of 2013 (<strong>POPIA</strong>). This Privacy Policy explains what personal information we collect, why we
                  collect it, how we use and protect it, how long we retain it, and what rights you have in respect of your
                  personal information.
                </p>
                <p className="mt-3">
                  For any privacy-related queries or to exercise your rights, contact our Information Officer:
                  <br />
                  <strong>Email:</strong> admin@imvelowealth.co.za
                  <br />
                  <strong>Postal address:</strong> Information Officer, Imvelo Wealth Solutions, EPPF Office Park, 24 Georgian Cres E, Bryanston East, Johannesburg, 2152
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif font-bold text-foreground mb-3">2. What Personal Information We Collect</h2>
                <p>We collect only the minimum personal information necessary for the purposes described in this policy. This includes:</p>
                <ul className="list-disc pl-5 mt-3 space-y-2">
                  <li>
                    <strong>Identity information:</strong> First name, last name, South African ID number or passport number
                    (collected only for regulatory onboarding where required by FICA).
                  </li>
                  <li>
                    <strong>Contact information:</strong> Email address, telephone number, and physical address.
                  </li>
                  <li>
                    <strong>Financial information:</strong> Income range, asset values, liability details, investment objectives,
                    and risk tolerance — collected during the financial needs analysis process required under FAIS.
                  </li>
                  <li>
                    <strong>Consultation preferences:</strong> Preferred appointment dates, times, and financial goals submitted
                    through our booking form.
                  </li>
                  <li>
                    <strong>Communication records:</strong> Correspondence by email, WhatsApp, or telephone that you initiate
                    with us.
                  </li>
                  <li>
                    <strong>Technical information:</strong> IP address, browser type, and anonymised page visit data collected
                    automatically through our website analytics (no personal identifiers are stored in analytics).
                  </li>
                </ul>
                <p className="mt-3">
                  We do not collect special personal information (as defined in section 26 of POPIA — including race, health, or
                  biometric data) unless required by law or with your explicit consent.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif font-bold text-foreground mb-3">3. Why We Collect It (Purpose)</h2>
                <p>We process your personal information for the following purposes:</p>
                <ul className="list-disc pl-5 mt-3 space-y-2">
                  <li>
                    <strong>To deliver financial advisory services:</strong> Completing the financial needs analysis, preparing
                    financial plans, and providing ongoing advice in terms of our mandate.
                  </li>
                  <li>
                    <strong>To fulfil regulatory obligations:</strong> Compliance with FAIS, FICA (Financial Intelligence Centre
                    Act), and SARS reporting requirements may require us to verify your identity and retain records.
                  </li>
                  <li>
                    <strong>To manage your consultation booking:</strong> Scheduling, confirming, and following up on consultation
                    appointments you request through our website.
                  </li>
                  <li>
                    <strong>To communicate with you:</strong> Responding to enquiries, sending appointment confirmations, and
                    providing regulatory updates or educational content you have opted into.
                  </li>
                  <li>
                    <strong>To improve our services:</strong> Analysing aggregated, anonymised usage patterns on our website to
                    improve functionality and content.
                  </li>
                </ul>
                <p className="mt-3">
                  We rely on the following lawful grounds under POPIA section 11 for processing: (a) your consent; (b) the
                  performance of a contract with you or steps prior to entering into a contract; (c) compliance with a legal
                  obligation; and (d) our legitimate interests, where those interests are not overridden by your right to privacy.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif font-bold text-foreground mb-3">4. How Long We Retain Your Information</h2>
                <ul className="list-disc pl-5 mt-3 space-y-2">
                  <li>
                    <strong>Consultation request data</strong> (name, contact details, appointment details): 12 months from the
                    date of submission, or for the duration of our advisory relationship if one commences.
                  </li>
                  <li>
                    <strong>Client records and financial advice records:</strong> 5 years from the date of the last advice
                    interaction, as required by FAIS Board Notice 80 of 2003 (Record Keeping).
                  </li>
                  <li>
                    <strong>FICA identity verification records:</strong> 5 years from the date on which the business relationship
                    ends, as required by the Financial Intelligence Centre Act.
                  </li>
                  <li>
                    <strong>Website analytics data:</strong> Anonymised — retained for 26 months per industry standard.
                  </li>
                </ul>
                <p className="mt-3">
                  After the applicable retention period, personal information is securely deleted or anonymised.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif font-bold text-foreground mb-3">5. Sharing Your Information</h2>
                <p>
                  We do not sell your personal information. We share your information only in the following limited circumstances:
                </p>
                <ul className="list-disc pl-5 mt-3 space-y-2">
                  <li>
                    <strong>Service providers (operators):</strong> We use third-party services including Resend (email delivery)
                    and Vercel (website hosting). These parties process personal information on our behalf under written operator
                    agreements that bind them to POPIA-equivalent data protection obligations.
                  </li>
                  <li>
                    <strong>Product providers and platforms:</strong> Where you instruct us to execute a financial product on your
                    behalf, we share the minimum required personal information with the relevant licenced product provider (e.g.,
                    asset management platforms, insurers).
                  </li>
                  <li>
                    <strong>Regulatory and legal obligations:</strong> We may disclose personal information to the FSCA, SARS,
                    the Financial Intelligence Centre, or courts where required by law.
                  </li>
                </ul>
                <p className="mt-3">
                  Cross-border transfers of personal information (e.g., to cloud infrastructure hosted outside South Africa) are
                  subject to the protections required under POPIA section 72, including ensuring the recipient country or contract
                  provides equivalent protection.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif font-bold text-foreground mb-3">6. How We Protect Your Information</h2>
                <p>
                  We implement appropriate technical and organisational measures to protect your personal information against
                  unauthorised access, disclosure, alteration, and destruction. These measures include:
                </p>
                <ul className="list-disc pl-5 mt-3 space-y-2">
                  <li>TLS encryption for all data transmitted through our website.</li>
                  <li>Access controls limiting personal information to staff who require it for their role.</li>
                  <li>Operator agreements with all third-party service providers.</li>
                  <li>Regular security reviews of our digital infrastructure.</li>
                </ul>
                <p className="mt-3">
                  In the event of a data breach that is likely to affect your rights adversely, we will notify the Information
                  Regulator and you as required by POPIA section 22.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif font-bold text-foreground mb-3">7. Your Rights Under POPIA</h2>
                <p>As a data subject under POPIA, you have the following rights:</p>
                <ul className="list-disc pl-5 mt-3 space-y-2">
                  <li>
                    <strong>Right to access:</strong> You may request confirmation of whether we hold your personal information
                    and obtain a copy of it.
                  </li>
                  <li>
                    <strong>Right to correction:</strong> You may request that we correct inaccurate or incomplete personal
                    information.
                  </li>
                  <li>
                    <strong>Right to deletion:</strong> You may request deletion of your personal information, subject to our
                    legal retention obligations.
                  </li>
                  <li>
                    <strong>Right to object:</strong> You may object to the processing of your personal information on grounds
                    relating to your particular situation, where processing is based on legitimate interests.
                  </li>
                  <li>
                    <strong>Right to withdraw consent:</strong> Where processing is based on your consent, you may withdraw that
                    consent at any time. Withdrawal does not affect the lawfulness of processing prior to withdrawal.
                  </li>
                  <li>
                    <strong>Right to complain:</strong> You may lodge a complaint with the Information Regulator of South Africa
                    at{" "}
                    <span className="text-foreground">inforeg@justice.gov.za</span> if you believe we have processed your
                    personal information unlawfully.
                  </li>
                </ul>
                <p className="mt-3">
                  To exercise any of these rights, submit a written request to{" "}
                  <strong>admin@imvelowealth.co.za</strong>. We will respond within 30 days.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif font-bold text-foreground mb-3">8. Cookies and Website Analytics</h2>
                <p>
                  Our website uses no third-party advertising or tracking cookies. We use privacy-respecting, anonymised analytics
                  to understand aggregate usage patterns. No personally identifiable information is stored in our analytics
                  system. You may disable cookies in your browser settings without any loss of core website functionality.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif font-bold text-foreground mb-3">9. Marketing Communications</h2>
                <p>
                  We may send you educational content, regulatory updates, or information about our services where you have opted
                  in or where we have a pre-existing relationship and you have not opted out. Every marketing communication
                  includes an unsubscribe mechanism. We do not send unsolicited commercial communications.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif font-bold text-foreground mb-3">10. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Material changes will be communicated by posting the
                  updated policy on this page with a revised "Last updated" date. We encourage you to review this page periodically.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif font-bold text-foreground mb-3">11. Contact Us</h2>
                <p>
                  For privacy-related queries, to exercise your rights, or to reach our Information Officer:
                </p>
                <ul className="list-none mt-3 space-y-1">
                  <li><strong>Email:</strong> admin@imvelowealth.co.za</li>
                  <li><strong>General enquiries:</strong> info@imvelowealth.co.za / admin@imvelowealth.co.za</li>
                  <li><strong>Physical address:</strong> EPPF Office Park, 24 Georgian Cres E, Bryanston East, Johannesburg, 2152</li>
                </ul>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
