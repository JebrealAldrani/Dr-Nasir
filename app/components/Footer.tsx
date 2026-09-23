import Link from "next/link";
import { expertise } from "@/static";
import { CONTACT_INFO, directionsHref, whatsappHref } from "@/static/contact";
import styles from "./Footer.module.css";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About Dr. Naser Dib", href: "/about" },
  { label: "Professional Experience", href: "/experience" },
  { label: "Areas of Expertise", href: "/expertise" },
  { label: "Certificates & Qualifications", href: "/certificates" },
  { label: "Contact & Locations", href: "/#contact-section" },
] as const;

export default function Footer() {
  const { doctorName, registrationPhones, whatsapp, email, locations } = CONTACT_INFO;
  const whatsappUrl = whatsappHref(whatsapp);

  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className="site-container">
        <div className={styles.main}>
          <div className={styles.brand}>
            <Link href="/" className={styles.name} aria-label={`${doctorName}, home`}>{doctorName}</Link>
            <p className={styles.role}>Specialist in General Surgery<br />and Surgical Oncology</p>
            <p className={styles.summary}>Surgical care informed by experience, clear communication and an individual approach to each patient.</p>
            {whatsappUrl && <Link className={`btn-primary ${styles.cta}`} href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label={`Contact ${doctorName} on WhatsApp to ask about an appointment`}>Book an Appointment <span aria-hidden="true">↗</span></Link>}
          </div>

          <nav className={styles.links} aria-label="Footer navigation">
            <h2 className={styles.groupTitle}>Explore</h2>
            <ul>{exploreLinks.map(({ label, href }) => <li key={href}><Link href={href}>{label}</Link></li>)}</ul>
          </nav>

          <nav className={styles.links} aria-label="Areas of expertise">
            <h2 className={styles.groupTitle}>Expertise</h2>
            <ul>{expertise.map(({ slug, title }) => <li key={slug}><Link href={`/expertise#${slug}`}>{title}</Link></li>)}</ul>
          </nav>

          <div className={styles.contact}>
            <h2 className={styles.groupTitle}>Contact</h2>
            <address>
              {whatsappUrl && <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label={`Message ${doctorName} on WhatsApp at ${registrationPhones[0].display}`}>WhatsApp <span>{registrationPhones[0].display}</span></Link>}
              <Link href={`tel:${registrationPhones[1].international}`} aria-label={`Call registration at ${registrationPhones[1].display}`}>Call registration <span>{registrationPhones[1].display}</span></Link>
              <Link href={`mailto:${email}`} aria-label={`Email ECZ Otwock registration at ${email}`}>Email registration <span className={styles.email}>{email}</span></Link>
            </address>
          </div>
        </div>

        <div className={styles.locations} aria-label="Visit locations">
          <span className={styles.groupTitle}>Visit locations</span>
          {locations.map((location) => (
            <address key={location.id}>
              <strong>{location.name}</strong>
              <span>{location.address}</span>
              <Link href={directionsHref(location.address)} target="_blank" rel="noopener noreferrer" aria-label={`Get directions to ${location.name}`}>Directions <span aria-hidden="true">↗</span></Link>
            </address>
          ))}
        </div>

        <div className={styles.bottom}>
          <span>© {new Date().getFullYear()} {doctorName}. All rights reserved.</span>
          <span>General Surgery <span aria-hidden="true">·</span> Surgical Oncology</span>
        </div>
      </div>
    </footer>
  );
}
