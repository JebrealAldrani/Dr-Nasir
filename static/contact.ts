// Registration numbers and visit locations supplied by the site owner.
// The ECZ registration email comes from https://ecz-otwock.pl/contact.
// The site owner confirmed that 693 900 685 accepts WhatsApp.
export const CONTACT_INFO = {
  doctorName: "Dr. Naser Dib",
  registrationPhones: [
    { display: "693 900 685", international: "+48693900685", label: "Mobile registration" },
    { display: "22 710 34 40", international: "+48227103440", label: "Registration" },
  ],
  whatsapp: "+48693900685",
  email: "rejestracja@ecz-otwock.pl",
  emailLabel: "ECZ Otwock registration email",
  locations: [
    { id: "otwock", name: "ECZ Otwock", purpose: "Hospital", address: "ul. Borowa 14/18, Otwock" },
    { id: "warsaw", name: "Warszawa", purpose: "Consultations", address: "ul. Grochowska 80/82, Warszawa" },
  ],
} as const;

export function whatsappHref(number: string) {
  const normalized = number.replace(/\D/g, "");
  return normalized ? `https://wa.me/${normalized}?text=${encodeURIComponent("Hello, I would like to book an appointment with Dr. Naser Dib.")}` : null;
}

export function directionsHref(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}
