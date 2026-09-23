import { CONTACT_INFO, directionsHref, whatsappHref } from "@/static/contact";
import DeferredSectionAnimation from "../animation/DeferredSectionAnimation";
import ContactLocationsMap from "./ContactLocationsMap";
import styles from "./ContactSection.module.css";
import Link from "next/link";

function Icon({ type }: { type: "phone" | "email" | "location" }) {
  const paths = {
    phone:
      "M5 3h4l2 5-2.5 2a16 16 0 0 0 5.5 5.5L16 13l5 2v4a2 2 0 0 1-2 2C10.2 21 3 13.8 3 5a2 2 0 0 1 2-2Z",
    email: "M3 5h18v14H3V5Zm0 2 9 7 9-7",
    location:
      "M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Zm-8 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
  };
  return (
    <span className="icon-circle" aria-hidden="true">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-5"
      >
        <path d={paths[type]} />
      </svg>
    </span>
  );
}

export default function ContactSection() {
  const {
    doctorName,
    registrationPhones,
    whatsapp,
    email,
    emailLabel,
    locations,
  } = CONTACT_INFO;
  const whatsappUrl = whatsappHref(whatsapp)!;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent("Appointment Request - Dr. Naser Dib")}`;
  const [mobilePhone, deskPhone] = registrationPhones;

  return (
    <section
      id="contact-section"
      aria-labelledby="contact-title"
      className="section section-white"
    >
      <div className="site-container">
        <header className={styles.header}>
          <div>
            <span className="contact-eyebrow eyebrow">Get in Touch</span>
            <h2 id="contact-title" className="contact-heading">
              Book Your Consultation
            </h2>
          </div>
          <p className="contact-description">
            Contact Dr. Naser Dib’s registration team for appointments and
            enquiries. Choose WhatsApp, call, or find the right location below.
          </p>
        </header>

        <div className={styles.layout}>
          <div className={`${styles.panel} contact-panel`}>
            <div className={`${styles.panelIntro} contact-panel-intro`}>
              <span className={styles.panelKicker}>Registration</span>
              <h3>Let’s arrange your visit.</h3>
              <p>
                Phone registration is the fastest option. For urgent matters,
                please call.
              </p>
            </div>

            <Link
              className={`${styles.primaryAction} btn-primary contact-primary`}
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Message ${doctorName}'s registration on WhatsApp at ${mobilePhone.display}`}
            >
              <Icon type="phone" />
              <span>
                <small>WhatsApp registration</small>
                <strong>{mobilePhone.display}</strong>
              </span>
              <span className={styles.arrow} aria-hidden="true">
                ↗
              </span>
            </Link>

            <address className={styles.contactList}>
              <div className={`${styles.contactRow} contact-method`}>
                <Icon type="phone" />
                <div>
                  <span className={styles.label}>Call registration</span>
                  <Link
                    href={`tel:${deskPhone.international}`}
                    aria-label={`Call registration at ${deskPhone.display}`}
                  >
                    {deskPhone.display}
                  </Link>
                  <span className={styles.rowHint}>
                    For telephone registration
                  </span>
                </div>
                <span className={styles.rowArrow} aria-hidden="true">
                  ↗
                </span>
              </div>
              <div className={`${styles.contactRow} contact-method`}>
                <Icon type="email" />
                <div>
                  <span className={styles.label}>{emailLabel}</span>
                  <Link
                    href={gmailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Compose email to ${email} in Gmail`}
                  >
                    {email}
                  </Link>
                  <span className={styles.rowHint}>Opens Gmail</span>
                </div>
                <span className={styles.rowArrow} aria-hidden="true">
                  ↗
                </span>
              </div>
            </address>
            <Link
              className={`${styles.urgentLink} contact-urgent`}
              href={`tel:${mobilePhone.international}`}
            >
              Urgent matter? Call {mobilePhone.display}{" "}
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className={styles.locationColumn}>
            <ContactLocationsMap />
            <div
              className={`${styles.locationList} contact-location-list`}
              aria-label="Consultation locations"
            >
              {locations.map((location) => (
                <div
                  className={`${styles.locationCard} contact-location-card`}
                  key={location.id}
                >
                  <Icon type="location" />
                  <div>
                    <span className={styles.label}>{location.purpose}</span>
                    <h3>{location.name}</h3>
                    <p>{location.address}</p>
                  </div>
                  <Link
                    href={directionsHref(location.address)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Get directions to ${location.name}`}
                  >
                    Directions <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <DeferredSectionAnimation section="contact" />
    </section>
  );
}
