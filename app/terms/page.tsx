import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { metadataForPath } from "@/lib/seo"

export const metadata = metadataForPath("/terms")

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section className="py-16 sm:py-20 border-b border-border/40 bg-muted/20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Legal</p>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-muted-foreground">Last updated: 10 April 2026</p>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="space-y-10 text-sm leading-7 text-foreground/80">

              <div>
                <h2 className="text-xl font-serif font-bold text-foreground mb-3">1. About Us and These Terms</h2>
                <p>
                  These Terms of Service ("<strong>Terms</strong>") govern your use of the website at{" "}
                  <span className="text-foreground font-medium">imvelowealth.co.za</span> (the "<strong>Site</strong>") and any
                  financial advisory services provided by Imvelo Wealth Solutions (Pty) Ltd ("<strong>Imvelo</strong>",
                  "<strong>we</strong>", "<strong>us</strong>").
                </p>
                <p className="mt-3">
                  Imvelo Wealth Solutions is licensed and regulated by the Financial Sector Conduct Authority (FSCA) as a
                  Financial Services Provider under the Financial Advisory and Intermediary Services Act, 37 of 2002 (FAIS Act).
                  FSP Licence Number: <strong>49944</strong>.
                </p>
                <p className="mt-3">
                  By accessing the Site or submitting an enquiry or consultation request, you acknowledge that you have read,
                  understood, and agree to be bound by these Terms and our{" "}
                  <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                  If you do not agree, do not use the Site.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif font-bold text-foreground mb-3">2. Nature of Information on This Site</h2>
                <p>
                  The content published on this Site, including resources and commentary, is provided for{" "}
                  <strong>general educational and informational purposes only</strong>. It does not constitute personalised
                  financial advice as defined under the FAIS Act.
                </p>
                <p className="mt-3">
                  Nothing on this Site constitutes:
                </p>
                <ul className="list-disc pl-5 mt-3 space-y-2">
                  <li>A solicitation or offer to buy or sell any financial product.</li>
                  <li>A recommendation specific to your personal circumstances.</li>
                  <li>Tax, legal, or accounting advice.</li>
                </ul>
                <p className="mt-3">
                  Before acting on any information published on this Site, you should obtain personalised financial advice from
                  a licensed financial adviser who has conducted a needs analysis appropriate to your circumstances.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif font-bold text-foreground mb-3">3. Financial Advisory Services</h2>
                <p>
                  Where you engage Imvelo Wealth Solutions for financial advisory services, a separate written mandate or
                  client agreement will govern that relationship. The following applies to our advisory engagements:
                </p>
                <ul className="list-disc pl-5 mt-3 space-y-2">
                  <li>
                    <strong>Fees and scope:</strong> Fees, service levels, and engagement scope should be disclosed in the
                    applicable client mandate, proposal, or advice documentation before work proceeds.
                  </li>
                  <li>
                    <strong>FAIS obligations:</strong> In providing advice, we comply with the General Code of Conduct for
                    Authorised Financial Services Providers (Board Notice 80 of 2003), including the obligation to act in your
                    best interests, conduct a needs analysis, and disclose all material information.
                  </li>
                  <li>
                    <strong>Product risk:</strong> All investments involve risk, including the risk of loss of capital. Past
                    performance is not indicative of future results. Market values fluctuate and are not guaranteed.
                  </li>
                  <li>
                    <strong>Client profile:</strong> Our services are available to individuals who are residents of South Africa
                    or South African citizens investing from abroad, subject to applicable exchange control regulations.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-serif font-bold text-foreground mb-3">4. Consultation Requests</h2>
                <p>
                  Submitting a consultation request through our website does not create a client relationship, financial advisory
                  mandate, or contractual obligation of any kind. A consultation request is a request for us to make contact with
                  you to explore whether our services are appropriate for your needs.
                </p>
                <p className="mt-3">
                  By submitting a consultation request, you consent to us contacting you via the contact details you provide for
                  the purpose of scheduling and conducting the consultation. For details on how we handle the personal information
                  you submit, see our{" "}
                  <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif font-bold text-foreground mb-3">5. Acceptable Use of the Site</h2>
                <p>You agree not to:</p>
                <ul className="list-disc pl-5 mt-3 space-y-2">
                  <li>Use the Site for any unlawful purpose or in violation of any applicable South African law.</li>
                  <li>Attempt to gain unauthorised access to any system or data associated with the Site.</li>
                  <li>Use automated means (scrapers, bots) to extract content from the Site without our prior written consent.</li>
                  <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity.</li>
                  <li>Post, transmit, or submit any material that is false, misleading, defamatory, or harmful.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-serif font-bold text-foreground mb-3">6. Intellectual Property</h2>
                <p>
                  All content on this Site — including text, articles, tools, logos, design, and code — is the intellectual
                  property of Imvelo Wealth Solutions or its licensors and is protected under South African and international
                  copyright law.
                </p>
                <p className="mt-3">
                  You may view and print content for your own personal, non-commercial use. You may not reproduce, republish,
                  distribute, sell, or create derivative works from any content on this Site without our prior written consent.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif font-bold text-foreground mb-3">7. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by applicable South African law:
                </p>
                <ul className="list-disc pl-5 mt-3 space-y-2">
                  <li>
                    The Site and its content are provided "as is" without warranties of any kind, express or implied, including
                    fitness for a particular purpose or accuracy.
                  </li>
                  <li>
                    Imvelo Wealth Solutions will not be liable for any direct, indirect, incidental, consequential, or special
                    damages arising from your use of or reliance on the Site or its content.
                  </li>
                  <li>
                    Our liability for any cause of action arising from the provision of financial advisory services is limited to
                    the fees paid by you in connection with the specific advice giving rise to the claim, except where such
                    limitation is prohibited by the Consumer Protection Act, 68 of 2008, or the FAIS Act.
                  </li>
                </ul>
                <p className="mt-3">
                  Nothing in these Terms excludes or limits our liability for fraud, gross negligence, or any liability that
                  cannot be excluded under applicable law.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif font-bold text-foreground mb-3">8. Third-Party Links</h2>
                <p>
                  The Site may contain links to third-party websites for your convenience. We do not control and are not
                  responsible for the content, privacy practices, or reliability of any third-party site. Links do not constitute
                  an endorsement of those sites or their content.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif font-bold text-foreground mb-3">9. FAIS Complaints and Ombud</h2>
                <p>
                  If you have a complaint about financial advice or services provided by Imvelo Wealth Solutions, please contact
                  us in the first instance at{" "}
                  <strong>admin@imvelowealth.co.za</strong>. Complaint handling timelines and escalation steps should be read
                  together with Imvelo’s current compliance documentation.
                </p>
                <p className="mt-3">
                  If your complaint is not resolved to your satisfaction, you may escalate it to the:
                </p>
                <ul className="list-none mt-3 space-y-1">
                  <li>
                    <strong>FAIS Ombud:</strong> The Office of the FAIS Ombud resolves disputes between consumers and financial
                    services providers. Website: <span className="text-foreground">faisombud.co.za</span>
                  </li>
                  <li>
                    <strong>FSCA:</strong> Financial Sector Conduct Authority. Website:{" "}
                    <span className="text-foreground">fsca.co.za</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-serif font-bold text-foreground mb-3">10. Governing Law and Jurisdiction</h2>
                <p>
                  These Terms are governed by the laws of the Republic of South Africa. Any dispute arising from these Terms or
                  your use of the Site will be subject to the jurisdiction of the South Gauteng High Court, Johannesburg, unless
                  otherwise required by applicable law.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif font-bold text-foreground mb-3">11. Changes to These Terms</h2>
                <p>
                  We may update these Terms from time to time. Material changes will be communicated by posting the revised
                  Terms on this page with an updated date. Your continued use of the Site after such changes constitutes
                  acceptance of the revised Terms.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-serif font-bold text-foreground mb-3">12. Contact</h2>
                <p>For questions about these Terms, contact us at:</p>
                <ul className="list-none mt-3 space-y-1">
                  <li><strong>Email:</strong> info@imvelowealth.co.za / admin@imvelowealth.co.za</li>
                  <li><strong>Address:</strong> EPPF Office Park, 24 Georgian Cres E, Bryanston East, Johannesburg, 2152</li>
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
