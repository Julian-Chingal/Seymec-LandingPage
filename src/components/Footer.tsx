import {
  socialLinks,
  address,
  openingHours,
  contactInfo,
} from "@/config/links";

import {LinkedInLogoIcon } from '@radix-ui/react-icons'
export function Footer() {
  return (
    <footer className="p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* <!-- Logo y redes sociales --> */}
        <div className="space-y-4">
          <img className="h-28" src="/logo.svg" alt="Logo" />
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                href={link.href}
                aria-label={`Visitar perfil de ${link.name}`}
                className={`p-2 rounded-full  transition-colors`}
              >
                <LinkedInLogoIcon className="h-6 w-6 hover:text-[#1d9ade]" /> 
              </a>
            ))}
          </div>
        </div>

        {/* <!-- Información de contacto --> */}
        <ul className="space-y-2">
          <li className="font-bold text-lg">Contacto</li>
          {contactInfo.map((contact) => (
            <li>
              <a href={contact.href} className="hover:text-primary">
               {contact.label}: {contact.value}
              </a>
            </li>
          ))}
        </ul>

        {/* <!-- Dirección y horarios --> */}
        <ul className="space-y-2">
          <li className="font-bold text-lg">Dirección</li>
          <li>{address[0].value}</li>
          <li className="font-bold text-lg mt-4">Horarios de atención</li>
          {openingHours.map((hour) => (
            <div>
              <li>{hour.label}:</li>
              <li className="">{hour.value}</li>
            </div>
          ))}
        </ul>
      </div>
    </footer>
  );
}
