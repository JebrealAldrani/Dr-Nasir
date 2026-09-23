import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import ExperienceBreadcrumbs from "../../components/experience/ExperienceBreadcrumbs";
import ExperienceSeo, { experienceMetadata } from "../../components/experience/ExperienceSeo";
import ExperiencePageAnimation from "../../components/experience/ExperiencePageAnimation";
import styles from "../../components/experience/ExperiencePages.module.css";
import { MILESTONES, expertise, getMilestone } from "@/static";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return MILESTONES.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const milestone = getMilestone((await params).slug);
  if (!milestone) notFound();
  return experienceMetadata(milestone);
}

export default async function ExperienceDetailPage({ params }: Props) {
  const milestone = getMilestone((await params).slug);
  if (!milestone) notFound();
  const index = MILESTONES.findIndex((item) => item.slug === milestone.slug);
  const previous = MILESTONES[index - 1];
  const next = MILESTONES[index + 1];
  const related = expertise.find((item) => item.slug === milestone.relatedExpertise);

  return (
    <>
      <Header />
      <main id="experience-detail">
        <section className={`section section-cream ${styles.detailHero}`} aria-labelledby="experience-detail-title">
          <div className="site-container">
            <div className="experience-page-breadcrumb"><ExperienceBreadcrumbs title={milestone.title} /></div>
            <span className={`${styles.detailYear} experience-page-eyebrow`}>{milestone.year}</span>
            <h1 id="experience-detail-title" className="experience-page-heading">{milestone.title}</h1>
            <p className="experience-page-description">{milestone.description}</p>
          </div>
        </section>

        <section className="section section-white" aria-labelledby="experience-overview-title">
          <div className={`site-container ${styles.detailBody}`}>
            <div className={`${styles.overview} experience-detail-overview`}>
              <h2 id="experience-overview-title">Experience Overview</h2>
              <p>{milestone.fullDescription}</p>
              {related && <div className="mt-9 border-t border-border pt-7"><h2>Related Expertise</h2><p>{related.summary}</p><Link href={`/expertise#${related.slug}`}>Explore {related.title} <span aria-hidden="true">→</span></Link></div>}
            </div>
            <dl className={`${styles.facts} experience-detail-facts`} aria-label="Milestone facts">
              <div><dt>Period</dt><dd>{milestone.year}</dd></div>
              {milestone.role && <div><dt>Role</dt><dd>{milestone.role}</dd></div>}
              {milestone.organization && <div><dt>Organization</dt><dd>{milestone.organization}</dd></div>}
              {milestone.location && <div><dt>Location</dt><dd>{milestone.location}</dd></div>}
              {related && <div><dt>Medical field</dt><dd>{related.title}</dd></div>}
            </dl>
          </div>

          <nav className={`site-container ${styles.detailNav}`} aria-label="Adjacent experience milestones">
            {previous && <Link href={`/experience/${previous.slug}`}><span>← Previous Milestone</span><strong>{previous.year} · {previous.title}</strong></Link>}
            {next && <Link href={`/experience/${next.slug}`}><span>Next Milestone →</span><strong>{next.year} · {next.title}</strong></Link>}
          </nav>
          <div className="site-container"><Link href="/experience" className={styles.backLink}>← View All Experience</Link></div>
        </section>
        <ExperienceSeo milestone={milestone} />
        <ExperiencePageAnimation mode="detail" />
      </main>
    </>
  );
}