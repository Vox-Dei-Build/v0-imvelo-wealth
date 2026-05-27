import Link from "next/link"
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
    { name: "Schedule Consultation", href: "/consultation" },
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
    <footer className="bg-muted/30" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-28">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div>
              <span className="font-serif text-2xl font-bold text-foreground">Imvelo</span>
              <span className="ml-2 text-sm font-medium text-muted-foreground">Wealth Solutions</span>
            </div>
            <p className="text-sm leading-6 text-muted-foreground max-w-md">
              Independent financial planning and wealth advice for South African individuals, families, and businesses.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0" />
                <div className="flex flex-col">
                  <a href="mailto:info@imvelowealth.co.za" className="hover:text-foreground transition-colors">
                    info@imvelowealth.co.za
                  </a>
                  <a href="mailto:admin@imvelowealth.co.za" className="hover:text-foreground transition-colors">
                    admin@imvelowealth.co.za
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0" />
                <a href="tel:+27101095097" className="hover:text-foreground transition-colors">010 109 5097</a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0" />
                <span>EPPF Office Park, 24 Georgian Cres E, Bryanston East, Johannesburg, 2152</span>
              </div>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://www.facebook.com/imvelowealth" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Facebook">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/imvelowealth/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/company/imvelo-wealth-solutions/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-foreground">Services</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-foreground">Company</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-foreground">Resources</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="text-sm font-semibold leading-6 text-foreground mt-8">Legal</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.legal.map((item) =>
                  item.external ? (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                        <ExternalLink className="h-3 w-3 shrink-0" aria-hidden="true" />
                      </a>
                    </li>
                  ) : (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-muted-foreground hover:text-foreground transition-colors"
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
        <div className="mt-16 border-t border-border/40 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-5 text-muted-foreground">
              &copy; {new Date().getFullYear()} Imvelo Wealth Solutions (PTY) Ltd. All rights reserved. FSP Licence No. 49944. Reg No. 2018/195882/07.
            </p>
            <p className="mt-4 text-xs leading-5 text-muted-foreground sm:mt-0">
              Regulated by the Financial Sector Conduct Authority (FSCA)
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
