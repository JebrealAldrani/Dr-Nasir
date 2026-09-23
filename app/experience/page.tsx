import Link from "next/link";
import Header from "../components/Header";
import ExperienceBreadcrumbs from "../components/experience/ExperienceBreadcrumbs";
import ExperienceSeo, { experienceMetadata } from "../components/experience/ExperienceSeo";
import ExperiencePageAnimation from "../components/experience/ExperiencePageAnimation";
import styles from "../components/experience/ExperiencePages.module.css";
import { MILESTONES } from "@/static";

export const metadata = experienceMetadata();

export default function ExperiencePage() {
  return (
    <>
      <Header />
      <main id="experience-archive">
        <section className={`section section-white ${styles.hero}`} aria-labelledby="experience-archive-title">
          <div className="site-container">
            <div className="experience-page-breadcrumb"><ExperienceBreadcrumbs /></div>
            <div className={styles.heroIntro}>
              <div><span className="experience-page-eyebrow eyebrow">Professional Journey</span><h1 id="experience-archive-title" className="experience-page-heading">Experience &amp; Career Milestones</h1></div>
              <p className="experience-page-description">Key stages in Dr. Naser Dib’s medical career, from phlebology to surgical oncology and clinical leadership.</p>
            </div>
          </div>
        </section>

        <section className={`section ${styles.timelineSection}`} aria-labelledby="journey-title">
          <div className="site-container">
            <h2 id="journey-title" className="sr-only">Professional milestones in chronological order</h2>
            <div className={styles.timeline}>
              <div className={styles.track} aria-hidden="true" />
              <div className={`${styles.trackFill} experience-page-line`} aria-hidden="true" />
              <ol className={styles.timeline}>
                {MILESTONES.map((milestone) => (
                  <li className={`${styles.item} experience-page-item`} key={milestone.slug}>
                    <span className={styles.node} aria-hidden="true" />
                    {milestone.year === "Today" ? <span className={styles.year}>Today</span> : <time className={styles.year} dateTime={milestone.year}>{milestone.year}</time>}
                    <article className={styles.card}>
                      <div className={styles.cardTop}><span>{milestone.organization ?? "Professional milestone"}</span></div>
                      <h2>{milestone.title}</h2>
                      <p>{milestone.description}</p>
                      <Link href={`/experience/${milestone.slug}`} aria-label={`View experience milestone: ${milestone.title}`}>View Experience <span aria-hidden="true">→</span></Link>
                    </article>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="section section-white" aria-label="Contact Dr. Naser Dib">
          <div className={`site-container ${styles.closing}`}><div><h2>Planning a consultation?</h2><p>Contact the registration team to discuss an appointment.</p></div><Link className="btn-primary" href="/#contact-section">Contact Dr. Naser Dib <span aria-hidden="true">→</span></Link></div>
        </section>
        <ExperienceSeo />
        <ExperiencePageAnimation mode="archive" />
      </main>
    </>
  );
}
