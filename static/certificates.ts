export type Certificate = {
  title: string;
  slug: string;
  institution?: string;
  date?: string;
  dateLabel?: string;
  location?: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  imageAlt: string;
  category: string;
  kind: "Attendance" | "Training" | "Professional record";
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  featured?: boolean;
  seo?: { title?: string; description?: string };
};

// Source: the supplied scans in public/images/certificates, visually transcribed.
// Dates describe the document/event, not current credential validity.
// TODO(owner): confirm English translations and supply any missing issuer/date
// information from originals. Never infer credential IDs from registration numbers.
// Duplicate scans: dyplom-1 = Certyfikaty - 3-2; dyplom-5 = Certyfikaty - 3-5;
// dyplom-7 = Certyfikaty - 3-4. Each document has one stable canonical record.
const records: Omit<Certificate, "imageAlt">[] = [
  {
    slug: "bariatric-re-do-surgery-clinical-immersion",
    title: "Bariatric Re-do Surgery Clinical Immersion",
    institution: "Medtronic", date: "2022-04-21", dateLabel: "20–21 April 2022",
    location: "AZ Sint-Jan Hospital, Bruges, Belgium", category: "Bariatric surgery", kind: "Attendance", featured: true,
    shortDescription: "On-site clinical immersion in bariatric re-do surgery.",
    fullDescription: "The certificate records Naser Dib’s completion of the on-site clinical immersion programme in bariatric re-do surgery on 20–21 April 2022. It identifies AZ Sint-Jan Hospital in Bruges as the training location and Dr. Bruno Dillemans as the clinical signatory.",
    image: "/images/certificates/Certyfikat (Bariatric re-do surgery)-1 (1).jpg",
    skills: ["Bariatric re-do surgery"],
  },
  {
    slug: "medtronic-proctor-and-trainer",
    title: "Medtronic Proctor and Trainer Record",
    institution: "Medtronic", date: "2023-02-23", dateLabel: "23 February 2023",
    category: "Surgical education", kind: "Professional record", featured: true,
    shortDescription: "A dated record of proctoring and surgical training activities in the CEMA region.",
    fullDescription: "The letter issued on 23 February 2023 identifies Dr. Naser Dib as a proctor and trainer for Medtronic training in the CEMA region. It describes hands-on laparoscopic general and colorectal surgery training, masterclasses, proctoring and follow-up assessment. The letter describes activities from 2015 up to its issue date; it does not establish a current appointment beyond that date.",
    image: "/images/certificates/Certyfikat (Bariatric re-do surgery)-2 (1).jpg",
    skills: ["Laparoscopic surgery training", "Colorectal surgery training", "Proctoring"],
  },
  {
    slug: "non-thermal-non-tumescent-varicose-vein-workshop",
    title: "Non-thermal Varicose Vein Treatment Workshop",
    institution: "VVT Medical / NASMED", date: "2020-01-17", dateLabel: "17 January 2020", location: "Warsaw, Poland",
    category: "Phlebology", kind: "Attendance", featured: true,
    shortDescription: "Workshop on non-thermal, non-tumescent treatment of lower-limb varicose veins.",
    fullDescription: "This workshop certificate names Dr. Naser Dib and records participation in Warsaw on 17 January 2020. The stated topic is non-thermal, non-tumescent treatment of lower-limb varicose veins using ScleroSafe and V-Block System. VVT Medical and NASMED appear on the document.",
    image: "/images/certificates/Certyfikaty-2 (1).jpg",
    skills: ["Non-thermal vein treatment"],
  },
  {
    slug: "advanced-colorectal-clinical-immersion",
    title: "Advanced Colorectal Clinical Immersion",
    institution: "Medtronic", date: "2016-02-10", dateLabel: "9–10 February 2016", location: "Bordeaux University Hospital, France",
    category: "Colorectal surgery", kind: "Attendance", featured: true,
    shortDescription: "Participation in an advanced colorectal physician education programme in Bordeaux.",
    fullDescription: "The certificate records Dr. Naser Dib’s participation in the Clinical Immersion Colorectal Advanced programme at Bordeaux University Hospital on 9–10 February 2016. Professors Rullier and Laurent are named as the programme’s clinical educators.",
    image: "/images/certificates/Certyfikaty - 2-4 (1).jpg",
    skills: ["Colorectal surgery"],
  },
  {
    slug: "venaseal-closure-system-physician-training",
    title: "VenaSeal Closure System Physician Training",
    institution: "Medtronic", date: "2015-11-13", dateLabel: "13 November 2015",
    category: "Phlebology", kind: "Training", featured: true,
    shortDescription: "Completion of the VenaSeal Closure System physician training programme.",
    fullDescription: "The certificate states that Naser Dib, MD completed the VenaSeal Closure System training programme on 13 November 2015. The listed components are an online course and test, dry-model training and case support.",
    image: "/images/certificates/Certyfikaty - 3-3 (1).jpg",
    skills: ["VenaSeal Closure System"],
  },
  {
    slug: "evf-hands-on-venous-disease-workshop",
    title: "EVF Hands-on Workshop on Venous Disease",
    institution: "EVF HOW", date: "2015-10-24", dateLabel: "22–24 October 2015", location: "Kraków, Poland",
    category: "Phlebology", kind: "Attendance", featured: true,
    shortDescription: "Attendance at the sixth EVF HOW workshop on venous disease.",
    fullDescription: "The attendance certificate names Naser Dib as a participant in the sixth EVF HOW Hands-on Workshop on Venous Disease, held in Kraków on 22–24 October 2015. The document records 18 CME credits.",
    image: "/images/certificates/Certyfikaty - 3-1 (1).jpg",
    skills: ["Venous disease"],
  },
  {
    slug: "hook-phlebectomy-complementary-techniques",
    title: "Hook Phlebectomy & Complementary Techniques",
    institution: "Eurocenter Venalinfa", date: "2015-04-26", dateLabel: "25–26 April 2015", location: "San Benedetto del Tronto, Italy",
    category: "Phlebology", kind: "Attendance", featured: true,
    shortDescription: "International course attendance in hook phlebectomy and complementary techniques.",
    fullDescription: "This certificate records Dr. Naser Dib’s attendance at the Hook Phlebectomy and Complementary Techniques course at Eurocenter Venalinfa in San Benedetto del Tronto, Italy, on 25–26 April 2015. It forms part of the document collection on phlebology and lymphology education.",
    image: "/images/certificates/Certyfikaty-1 (1).jpg",
    skills: ["Hook phlebectomy"],
  },
  {
    slug: "ewma-gneaupp-wound-management-conference",
    title: "EWMA–GNEAUPP Wound Management Conference",
    institution: "EWMA / GNEAUPP", date: "2014-05-16", dateLabel: "14–16 May 2014", location: "Madrid, Spain",
    category: "Wound care", kind: "Attendance", featured: true,
    shortDescription: "Attendance at the 24th European Wound Management Association conference.",
    fullDescription: "The certificate confirms Naser Dib’s attendance at the 24th Conference of the European Wound Management Association and the tenth national GNEAUPP symposium on pressure ulcers and chronic wounds. The joint event took place in Madrid on 14–16 May 2014.",
    image: "/images/certificates/dyplom-6 (1).jpg",
    skills: ["Wound management"],
  },
  {
    slug: "cee-colorectal-symposium",
    title: "First CEE Colorectal Symposium",
    institution: "Ethicon", date: "2016-02-25", dateLabel: "24–25 February 2016", location: "Prague, Czech Republic",
    category: "Colorectal surgery", kind: "Attendance",
    shortDescription: "Participation in the first CEE colorectal symposium in Prague.",
    fullDescription: "The certificate names Naser Dib as a participant at the first CEE Colorectal Symposium, held on 24–25 February 2016 in Prague. The document carries Ethicon branding and records participation in this educational event.",
    image: "/images/certificates/Certyfikaty-4 (1).jpg",
  },
  {
    slug: "venous-interventions-symposium-venous-ulcer",
    title: "Venous Interventions: Focus on Venous Ulcer",
    institution: "Polskie Towarzystwo Flebologiczne", date: "2015-12-12", dateLabel: "11–12 December 2015", location: "Kraków, Poland",
    category: "Phlebology", kind: "Attendance",
    shortDescription: "Participation in the fourth international symposium on venous interventions.",
    fullDescription: "The certificate records Naser Dib’s participation in the fourth International Symposium on Venous Interventions, with a focus on venous ulcer. The event was held in Kraków on 11–12 December 2015.",
    image: "/images/certificates/Certyfikaty-3 (1).jpg",
    skills: ["Venous ulcer"],
  },
  {
    slug: "polish-society-phlebology-international-congress",
    title: "International Congress of the Polish Society of Phlebology",
    institution: "Polskie Towarzystwo Flebologiczne", date: "2015-05-13", dateLabel: "11–13 May 2015", location: "Kraków, Poland",
    category: "Phlebology", kind: "Attendance",
    shortDescription: "Active participation in the society’s international congress in Kraków.",
    fullDescription: "The Polish-language certificate records Naser Dib’s active participation in the International Congress of the Polish Society of Phlebology. It identifies the society as the organiser and gives the event dates as 11–13 May 2015 in Kraków.",
    image: "/images/certificates/Certyfikaty - 2-5 (1).jpg",
  },
  {
    slug: "intragastric-air-balloon-trainer",
    title: "Intragastric Air Balloon Workshop Trainer",
    institution: "Helioscopie", date: "2013-02-05", dateLabel: "5 February 2013", location: "NASMED Clinic, Warsaw, Poland",
    category: "Bariatric surgery", kind: "Professional record",
    shortDescription: "Trainer certificate for an obesity-treatment workshop using an intragastric air balloon.",
    fullDescription: "This trainer certificate names Dr. Naser Dib for a workshop on obesity treatment using the Heliosphere Newtech intragastric air balloon. It identifies NASMED Clinic in Warsaw and the date 5 February 2013. The document records this specific workshop role.",
    image: "/images/certificates/dyplom-3 (1).jpg",
    skills: ["Intragastric balloon training"],
  },
  {
    slug: "school-of-endosonography-workshop",
    title: "School of Endosonography Workshop",
    institution: "G-PHARMA Consulting", date: "2011-06-10", dateLabel: "10 June 2011", location: "Warsaw, Poland",
    category: "Endoscopy", kind: "Attendance",
    shortDescription: "Participation in the School of Endosonography educational workshop.",
    fullDescription: "This Polish-language participation certificate names Naser Dib for the School of Endosonography educational workshop in Warsaw on 10 June 2011. G-PHARMA Consulting is identified as the organiser.",
    image: "/images/certificates/dyplom-2 (1).jpg",
    skills: ["Endosonography"],
  },
  {
    slug: "open-abdomen-vac-therapy-workshop",
    title: "Open Abdomen Management Using V.A.C. Therapy",
    institution: "KCI Austria GmbH", date: "2010-03-25", dateLabel: "25 March 2010", location: "Vienna, Austria",
    category: "Wound care", kind: "Attendance",
    shortDescription: "Participation in the first CEE workshop on open abdomen management.",
    fullDescription: "The certificate issued by KCI Austria names Naser Dib as a participant in the first CEE workshop on management of the open abdomen using V.A.C. therapy. The event took place in Vienna on 25 March 2010.",
    image: "/images/certificates/Certyfikaty - 3-2 (1).jpg",
    skills: ["Open abdomen management", "V.A.C. therapy"],
  },
  {
    slug: "metabolic-masterclass",
    title: "Metabolic MasterClass",
    institution: "Covidien France Holdings Inc.", date: "2009-12-18", dateLabel: "17–18 December 2009", location: "Élancourt, France",
    category: "Bariatric surgery", kind: "Training",
    shortDescription: "Certificate of completion for the Metabolic MasterClass at the Covidien training centre.",
    fullDescription: "The certificate of completion names Naser Dib and records attendance at the Metabolic MasterClass on 17–18 December 2009. The course took place at the Covidien European Training Centre in Élancourt, France.",
    image: "/images/certificates/dyplom-5 (1).jpg",
  },
  {
    slug: "diagnostic-operative-gastrointestinal-endoscopy",
    title: "Diagnostic & Operative Gastrointestinal Endoscopy",
    institution: "Sekcja Chirurgii Endoskopowej Towarzystwa Chirurgów Polskich", date: "2009-12-08", dateLabel: "8 December 2009", location: "Warsaw, Poland",
    category: "Endoscopy", kind: "Professional record",
    shortDescription: "A dated certificate concerning independent diagnostic and operative gastrointestinal endoscopy.",
    fullDescription: "The certificate names Dr. Naser Dib and states authorisation to perform diagnostic and operative endoscopic procedures of the gastrointestinal tract independently. It was issued on 8 December 2009 through the NZOZ ENDOTERAPIA endoscopy unit in Warsaw under the Endoscopic Surgery Section of the Association of Polish Surgeons. This page presents the historical document, without asserting current licensing status.",
    image: "/images/certificates/dyplom-7 (1).jpg",
    skills: ["Diagnostic endoscopy", "Operative endoscopy"],
  },
  {
    slug: "intragastric-balloon-obesity-treatment-workshop",
    title: "Intragastric Balloon Obesity Treatment Workshop",
    institution: "Helioscopie", date: "2009-04-08", dateLabel: "6–8 April 2009",
    category: "Bariatric surgery", kind: "Attendance",
    shortDescription: "Workshop attendance on obesity treatment with the Heliosphere intragastric balloon system.",
    fullDescription: "The certificate names Naser Dib as an attendee at a workshop on treatment of obesity using the Heliosphere intragastric balloon system. The printed dates are 6–8 April 2009.",
    image: "/images/certificates/dyplom-4 (1).jpg",
    skills: ["Intragastric balloon system"],
  },
  {
    slug: "asklepios-barmbek-endoscopy-placement",
    title: "Asklepios Barmbek Endoscopy Placement",
    institution: "Asklepios Klinik Barmbek", date: "2009-04-03", dateLabel: "30 March–3 April 2009", location: "Hamburg, Germany",
    category: "Endoscopy", kind: "Professional record",
    shortDescription: "Confirmation of a hospital placement in gastroenterology, focused on endoscopy.",
    fullDescription: "The letter dated 3 April 2009 confirms that Naser Dib attended the gastroenterology department at Asklepios Klinik Barmbek from 30 March to 3 April 2009. It describes full-time hospital engagement, particularly in endoscopy, and is signed by the head of department.",
    image: "/images/certificates/Certyfikaty - 2-2 (1).jpg",
    skills: ["Endoscopy"],
  },
  {
    slug: "polish-ultrasound-society-certificate",
    title: "Polish Ultrasound Society Certificate",
    institution: "Polskie Towarzystwo Ultrasonograficzne", date: "2004-08-30", dateLabel: "30 August 2004", location: "Warsaw, Poland",
    category: "Medical diagnostics", kind: "Professional record",
    shortDescription: "Historical ultrasound qualification certificate issued in 2004.",
    fullDescription: "The Polish Ultrasound Society certificate names Naser Dib, identifies general surgery as his specialty, and records qualification to perform ultrasound examinations independently. It was issued in Warsaw on 30 August 2004 and explicitly states a five-year validity period. It is displayed as a historical record, not evidence of a currently valid certification.",
    image: "/images/certificates/Certyfikaty - 2-1 (1).jpg",
    skills: ["Ultrasound examinations"],
  },
  {
    slug: "compact-micro-sclerotherapy-training",
    title: "Compact Micro-Sclerotherapy Training Course",
    // No single issuing institution or date is unambiguously printed on this scan.
    category: "Phlebology", kind: "Training",
    shortDescription: "Training in the theory and practice of micro-sclerotherapy.",
    fullDescription: "The certificate names Dr. Naser Dib as having successfully attended the Compact Micro-Sclerotherapy Training Course. The syllabus covers spider and reticular veins, indications and contraindications, technique, dosage and effects of sclerosing agents, with practical diagnostic and treatment elements. The scan does not provide a clearly readable issue date.",
    image: "/images/certificates/Certyfikaty - 2-3 (1).jpg",
    skills: ["Micro-sclerotherapy"],
  },
];

export const CERTIFICATES: readonly Certificate[] = records.map((record) => ({
  ...record,
  imageAlt: `${record.title} — original document naming Naser Dib`,
}));

export const FEATURED_CERTIFICATES = CERTIFICATES.filter((item) => item.featured).slice(0, 8);
export function getCertificate(slug: string) {
  return CERTIFICATES.find((item) => item.slug === slug);
}
export function getRelatedCertificates(certificate: Certificate) {
  return CERTIFICATES.filter((item) => item.slug !== certificate.slug && item.category === certificate.category).slice(0, 3);
}
