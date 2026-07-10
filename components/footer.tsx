import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin, ExternalLink } from "lucide-react"

const navigation = {
  services: [
    { name: "Financial Planning", href: "/services/financial-planning" },
    { name: "Estate Planning", href: "/services/estate-planning" },
    { name: "Employee Benefits", href: "/services/employee-benefits" },
    { name: "Retirement Counselling", href: "/services/retirement-counselling" },
    { name: "Financial Coaching", href: "/services/financial-coaching" },
    { name: "Business Assurance", href: "/services/business-assurance" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Start on WhatsApp", href: "/consultation" },
  ],
  resources: [
    { name: "All Resources", href: "/resources" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    {
      name: "COI Management Policy",
      href: "https://imvelowealth.co.za/wp-content/uploads/2022/09/COI-Management-Policy_2022-Update-Imvelo-Wealth.pdf",
      external: true,
    },
    {
      name: "PAIA Manual",
      href: "https://imvelowealth.co.za/wp-content/uploads/2022/09/PAIA-Manual_2022-Update-Imvelo-Wealth-1.pdf",
      external: true,
    },
    {
      name: "POPIA Privacy Statement",
      href: "https://imvelowealth.co.za/wp-content/uploads/2022/09/POPIA-Data-Private-Policy-Statement-Imvelo-Wealth-Solutions-1.pdf",
      external: true,
    },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#073844] text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-[90rem] px-6 pb-8 pt-16 sm:px-8 sm:pt-24 lg:px-12 lg:pt-28">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div aria-label="Imvelo Wealth">
              <Image
                src="/imvelo-logo-transparent.png"
                alt="Imvelo Wealth"
                width={190}
                height={81}
                className="h-14 w-auto brightness-0 invert"
              />
            </div>
            <p className="max-w-md font-serif text-2xl leading-snug text-white/80">
              Bringing clarity to the wealth behind a life, a family, and a business.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-white/55">
                <Mail className="h-4 w-4 shrink-0" />
                <div className="flex flex-col">
                  <a href="mailto:info@imvelowealth.co.za" className="transition-colors hover:text-white">
                    info@imvelowealth.co.za
                  </a>
                  <a href="mailto:admin@imvelowealth.co.za" className="transition-colors hover:text-white">
                    admin@imvelowealth.co.za
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/55">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+27101095097" className="transition-colors hover:text-white">010 109 5097</a>
              </div>
              <div className="flex items-center gap-2 text-sm text-white/55">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>Sandton, Johannesburg</span>
              </div>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://www.facebook.com/imvelowealth" target="_blank" rel="noopener noreferrer" className="text-white/55 transition-colors hover:text-[#8FD3DD]" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/imvelowealth/" target="_blank" rel="noopener noreferrer" className="text-white/55 transition-colors hover:text-[#8FD3DD]" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/company/imvelo-wealth-solutions/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-white/55 transition-colors hover:text-[#8FD3DD]" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-white/50 transition-colors hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-white/50 transition-colors hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Resources</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-white/50 transition-colors hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="mt-8 text-sm font-semibold leading-6 text-white">Legal</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.legal.map((item) =>
                  item.external ? (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm leading-6 text-white/50 transition-colors hover:text-white"
                      >
                        {item.name}
                        <ExternalLink className="h-3 w-3 shrink-0" aria-hidden="true" />
                      </a>
                    </li>
                  ) : (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-white/50 transition-colors hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-white/40">
              &copy; {new Date().getFullYear()} Imvelo Wealth Solutions (PTY) Ltd. All rights reserved. FSP Licence No. 49944. Reg No. 2018/195882/07.
            </p>
            <p className="mt-4 text-xs leading-5 text-white/40 sm:mt-0">
              Regulated by the Financial Sector Conduct Authority (FSCA)
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
