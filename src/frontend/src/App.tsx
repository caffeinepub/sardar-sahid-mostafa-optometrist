import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Briefcase,
  Camera,
  CheckCircle,
  Eye,
  FlaskConical,
  Glasses,
  GraduationCap,
  Mail,
  Menu,
  Monitor,
  Music,
  PenLine,
  Phone,
  ScanEye,
  Star,
  Stethoscope,
  TableIcon,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const WHATSAPP_URL = "https://wa.me/917449686802";
const EMAIL = "mailto:Sahidmostafa1325@gmail.com";
const PHONE = "tel:+917449686802";

const WhatsAppIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    aria-label="WhatsApp"
    role="img"
  >
    <title>WhatsApp</title>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F2F5F7] font-sans">
      {/* ─── NAVBAR ─── */}
      <header className="sticky top-0 z-50 w-full bg-[#0B2A4A] shadow-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Brand */}
          <a href="#home" className="flex items-center gap-2 text-white">
            <Eye className="w-6 h-6 text-[#1AA6A0]" />
            <span className="font-bold text-sm sm:text-base leading-tight">
              Sardar Sahid Mostafa
              <span className="block text-[10px] font-normal text-[#1AA6A0] tracking-widest uppercase">
                Optometrist
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-6"
            data-ocid="nav.panel"
          >
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-ocid="nav.link"
                className="text-sm text-white/80 hover:text-[#1AA6A0] transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              data-ocid="nav.primary_button"
            >
              <Button className="bg-[#1AA6A0] hover:bg-[#158a85] text-white rounded-full px-5 text-sm font-semibold">
                Book Appointment
              </Button>
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen((v) => !v)}
            data-ocid="nav.toggle"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-[#0E2F57] overflow-hidden"
            >
              <nav className="flex flex-col px-4 py-4 gap-3">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-white/80 hover:text-[#1AA6A0] text-sm transition-colors py-1"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setMobileOpen(false)}
                >
                  <Button className="w-full bg-[#1AA6A0] hover:bg-[#158a85] text-white rounded-full font-semibold">
                    Book Appointment
                  </Button>
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ─── HERO ─── */}
      <section
        id="home"
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #F2F5F7 55%, #d4e4ef 100%)",
        }}
      >
        {/* Wave SVG background */}
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 560"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
        >
          <path
            d="M0,200 C360,320 1080,80 1440,220 L1440,560 L0,560 Z"
            fill="#0B2A4A"
            opacity="0.06"
          />
          <path
            d="M0,280 C400,180 1000,380 1440,260 L1440,560 L0,560 Z"
            fill="#1AA6A0"
            opacity="0.07"
          />
        </svg>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Profile photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="flex-shrink-0"
            >
              <div className="relative">
                <div
                  className="w-56 h-56 md:w-72 md:h-72 rounded-full border-8 border-white shadow-2xl overflow-hidden"
                  style={{
                    boxShadow:
                      "0 8px 40px rgba(11,42,74,0.25), 0 0 0 4px #1AA6A0",
                  }}
                >
                  <img
                    src="/assets/generated/hero-profile.dim_600x700.jpg"
                    alt="Sardar Sahid Mostafa"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="absolute bottom-3 right-3 bg-[#1AA6A0] text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                  ✓ Available
                </span>
              </div>
            </motion.div>

            {/* Text content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-center md:text-left"
            >
              <p className="text-[#1AA6A0] font-semibold tracking-widest uppercase text-sm mb-2">
                Professional Optometrist
              </p>
              <h1 className="text-3xl md:text-5xl font-bold text-[#0B2A4A] leading-tight mb-3">
                Sardar Sahid
                <br />
                <span className="text-[#1AA6A0]">Mostafa</span>
              </h1>
              <p className="text-gray-600 max-w-lg mb-8 leading-relaxed">
                Dedicated optometrist committed to exceptional eye care, vision
                health, and patient-centered practice. Based in Diamond Harbour,
                West Bengal.
              </p>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  data-ocid="hero.primary_button"
                >
                  <Button
                    size="lg"
                    className="bg-[#25D366] hover:bg-[#1fbb58] text-white font-semibold rounded-full px-7 gap-2 shadow-lg"
                  >
                    <WhatsAppIcon />
                    WhatsApp Me
                  </Button>
                </a>
                <a href={EMAIL} data-ocid="hero.secondary_button">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#0B2A4A] text-[#0B2A4A] hover:bg-[#0B2A4A] hover:text-white font-semibold rounded-full px-7 gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Email Me
                  </Button>
                </a>
              </div>

              <div className="flex gap-6 mt-8 justify-center md:justify-start">
                {[
                  { label: "Eye Exams", value: "500+" },
                  { label: "OPD Cases", value: "200+" },
                  { label: "Eye Camps", value: "10+" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-[#0B2A4A]">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Navy bottom band */}
        <div className="h-8 bg-[#0B2A4A]" />
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>Who I Am</SectionLabel>
          <h2 className="section-heading">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center mt-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-gray-700 leading-relaxed text-base mb-5">
                I am a dedicated and detail-oriented optometrist with a strong
                commitment to providing exceptional eye care and enhancing
                patient vision and ocular health. With a solid foundation in
                clinical practice, I have experience in conducting comprehensive
                eye exams, diagnosing visual disorders, and prescribing
                corrective lenses.
              </p>
              <p className="text-gray-700 leading-relaxed text-base mb-6">
                My goal is to deliver patient-centered care while staying
                updated with the latest advancements in optometry and vision
                science.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Refraction",
                  "OPD Care",
                  "Retinoscopy",
                  "Lens Prescription",
                  "Color Vision",
                  "Slit Lamp",
                ].map((tag) => (
                  <Badge
                    key={tag}
                    className="bg-[#F2F5F7] text-[#0B2A4A] border border-[#1AA6A0]/30 hover:bg-[#1AA6A0]/10"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-card border border-gray-100">
                <img
                  src="/assets/generated/clinical-photo.dim_600x600.jpg"
                  alt="Mostafa in clinical setting"
                  className="w-full h-80 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── EDUCATION ─── */}
      <section id="education" className="py-16 md:py-24 bg-[#F2F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>Academic Background</SectionLabel>
          <h2 className="section-heading">Education Journey</h2>
          <div className="mt-12 relative">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-[#1AA6A0]/30" />
            <div className="space-y-8" data-ocid="education.list">
              {[
                {
                  year: "2016",
                  title: "10th (Madhyamik)",
                  school:
                    "SNKA High School, Hallyan, Bagnan, Diamond Harbour, West Bengal",
                  board: "WBBSE — Maulana Azad Academy",
                  ongoing: false,
                },
                {
                  year: "2018",
                  title: "12th (Higher Secondary)",
                  school: "Khalatpur High Madrasah (HS), Satragachi",
                  board: "WBCHSE — Al-Ameen Mission",
                  ongoing: false,
                },
                {
                  year: "2024–26",
                  title: "Diploma in Ophthalmology",
                  school: "Diamond Harbour Govt. Medical College",
                  board: "SMFWBJEE",
                  ongoing: true,
                },
                {
                  year: "2024–27",
                  title: "Graduation — Botany Hons.",
                  school: "NSOU (Distance Course)",
                  board: "Netaji Subhas Open University",
                  ongoing: true,
                },
              ].map((edu, i) => (
                <motion.div
                  key={edu.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-14"
                  data-ocid={`education.item.${i + 1}`}
                >
                  <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-[#0B2A4A] border-4 border-[#1AA6A0] flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-white" />
                  </div>
                  <Card className="shadow-card border-none">
                    <CardContent className="p-5">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-[#1AA6A0] font-bold text-sm">
                          {edu.year}
                        </span>
                        {edu.ongoing && (
                          <Badge className="bg-[#1AA6A0]/10 text-[#1AA6A0] border border-[#1AA6A0]/30 text-xs">
                            Ongoing
                          </Badge>
                        )}
                      </div>
                      <h3 className="font-bold text-[#0B2A4A] text-base">
                        {edu.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{edu.school}</p>
                      <p className="text-gray-400 text-xs mt-0.5">
                        {edu.board}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── EXPERIENCE ─── */}
      <section id="experience" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>Clinical Practice</SectionLabel>
          <h2 className="section-heading">Work Experience</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10"
          >
            <Card
              className="shadow-card border-none overflow-hidden"
              data-ocid="experience.card"
            >
              <div className="h-2 bg-gradient-to-r from-[#0B2A4A] to-[#1AA6A0]" />
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#0B2A4A] flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0B2A4A] text-lg">
                      Clinical Optometry Training
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Diamond Harbour Govt. Medical College · 2024–Present
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">
                  From the beginning of my journey as a student of optometry, I
                  have learned extensively about refraction — managing myopia,
                  hypermetropia, and astigmatism through corrective lenses. As a
                  primary eye examiner, I have observed patients in OPD with
                  various eye diseases and symptoms, learning their management
                  under senior ophthalmologists.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    "Myopia Management",
                    "Hypermetropia",
                    "Astigmatism",
                    "Retinoscopy (Pediatric)",
                    "Duochrome Test",
                    "Colour Vision",
                    "Lens Power Prescription",
                    "Cylinder Lens Angle",
                    "OPD Observation",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle className="w-4 h-4 text-[#1AA6A0] flex-shrink-0" />
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* ─── SKILLS ─── */}
      <section className="py-16 md:py-24 bg-[#F2F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>Expertise</SectionLabel>
          <h2 className="section-heading">Skills &amp; Expertise</h2>
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10"
            data-ocid="skills.list"
          >
            {[
              {
                icon: <Eye />,
                label: "Comprehensive Eye Exams",
                desc: "Full visual acuity testing",
              },
              {
                icon: <Glasses />,
                label: "Refraction & Lenses",
                desc: "Myopia, hypermetropia, astigmatism",
              },
              {
                icon: <ScanEye />,
                label: "Retinoscopy",
                desc: "Pediatric & adult eye exams",
              },
              {
                icon: <FlaskConical />,
                label: "Colour Vision Tests",
                desc: "Ishihara & anomaloscope",
              },
              {
                icon: <Stethoscope />,
                label: "OPD Patient Care",
                desc: "Diagnosis & management",
              },
              {
                icon: <Star />,
                label: "Duochrome Test",
                desc: "Binocular balancing technique",
              },
              {
                icon: <Monitor />,
                label: "Microsoft Word",
                desc: "Reports, tables, documents",
              },
              {
                icon: <TableIcon />,
                label: "Microsoft Excel",
                desc: "Data analysis, VLOOKUP, charts",
              },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                data-ocid={`skills.item.${i + 1}`}
              >
                <Card className="shadow-card border-none h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-5 flex flex-col gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0B2A4A] flex items-center justify-center text-[#1AA6A0]">
                      {s.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0B2A4A] text-sm">
                        {s.label}
                      </h3>
                      <p className="text-gray-500 text-xs mt-0.5">{s.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALLERY ─── */}
      <section id="gallery" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>In Action</SectionLabel>
          <h2 className="section-heading">Gallery &amp; Insights</h2>
          <div
            className="grid sm:grid-cols-3 gap-6 mt-10"
            data-ocid="gallery.list"
          >
            {[
              {
                src: "/assets/generated/slit-lamp-exam.dim_800x500.jpg",
                caption: "Slit Lamp Examination",
                desc: "Anterior segment evaluation with precision",
              },
              {
                src: "/assets/generated/eye-camp.dim_800x500.jpg",
                caption: "Eye Camp",
                desc: "Community outreach & screening",
              },
              {
                src: "/assets/generated/optometry-equipment.dim_800x500.jpg",
                caption: "Optometry Equipment",
                desc: "State-of-the-art diagnostic tools",
              },
            ].map((img, i) => (
              <motion.div
                key={img.caption}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                data-ocid={`gallery.item.${i + 1}`}
                className="group rounded-2xl overflow-hidden shadow-card border border-gray-100"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#0B2A4A]/0 group-hover:bg-[#0B2A4A]/30 transition-colors duration-300" />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-[#0B2A4A] text-sm">
                    {img.caption}
                  </h3>
                  <p className="text-gray-500 text-xs mt-0.5">{img.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOBBIES ─── */}
      <section className="py-12 bg-[#F2F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionLabel>Beyond Medicine</SectionLabel>
          <h2 className="section-heading">Hobbies &amp; Interests</h2>
          <div className="flex flex-wrap gap-5 mt-8">
            {[
              {
                icon: <PenLine className="w-6 h-6" />,
                label: "Poetry Writing",
                desc: "Expressing thoughts through verse and creative writing",
              },
              {
                icon: <Music className="w-6 h-6" />,
                label: "Singing",
                desc: "Music as a form of passion and expression",
              },
              {
                icon: <Camera className="w-6 h-6" />,
                label: "Eye Care Advocacy",
                desc: "Community awareness for visual health",
              },
            ].map((h) => (
              <Card
                key={h.label}
                className="flex-1 min-w-[200px] shadow-card border-none"
              >
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0B2A4A] flex items-center justify-center text-[#1AA6A0]">
                    {h.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0B2A4A]">{h.label}</h3>
                    <p className="text-gray-500 text-xs mt-0.5">{h.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden shadow-card">
            <div className="bg-[#0B2A4A] px-8 py-8 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-1">
                Get In Touch
              </h2>
              <p className="text-white/70 text-sm">
                Book an appointment or send a message
              </p>
            </div>

            <div className="bg-white px-8 py-10">
              <div className="grid sm:grid-cols-3 gap-6">
                <a
                  href={PHONE}
                  data-ocid="contact.primary_button"
                  className="group flex flex-col items-center gap-3 p-6 rounded-2xl border-2 border-gray-100 hover:border-[#0B2A4A] hover:shadow-card transition-all"
                >
                  <div className="w-14 h-14 rounded-full bg-[#0B2A4A] flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-[#0B2A4A] text-sm">
                      Phone
                    </p>
                    <p className="text-gray-600 text-xs mt-0.5">
                      +91 7449686802
                    </p>
                  </div>
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  data-ocid="contact.secondary_button"
                  className="group flex flex-col items-center gap-3 p-6 rounded-2xl border-2 border-[#25D366]/30 hover:border-[#25D366] hover:shadow-card transition-all"
                >
                  <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                    <WhatsAppIcon />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-[#0B2A4A] text-sm">
                      WhatsApp
                    </p>
                    <p className="text-gray-600 text-xs mt-0.5">
                      Chat instantly
                    </p>
                  </div>
                </a>

                <a
                  href={EMAIL}
                  data-ocid="contact.button"
                  className="group flex flex-col items-center gap-3 p-6 rounded-2xl border-2 border-gray-100 hover:border-[#1AA6A0] hover:shadow-card transition-all"
                >
                  <div className="w-14 h-14 rounded-full bg-[#1AA6A0] flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-[#0B2A4A] text-sm">
                      Email
                    </p>
                    <p className="text-gray-600 text-xs mt-0.5">
                      Sahidmostafa1325
                      <br />
                      @gmail.com
                    </p>
                  </div>
                </a>
              </div>

              <div className="mt-8 text-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  data-ocid="contact.open_modal_button"
                >
                  <Button
                    size="lg"
                    className="bg-[#25D366] hover:bg-[#1fbb58] text-white font-bold rounded-full px-10 gap-2 shadow-lg text-base"
                  >
                    <WhatsAppIcon />
                    Send Message on WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#0B2A4A] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-[#1AA6A0]" />
              <span className="font-bold">Sardar Sahid Mostafa</span>
            </div>
            <p className="text-white/50 text-xs text-center">
              © {new Date().getFullYear()}. Built with ❤️ using{" "}
              <a
                href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-white"
              >
                caffeine.ai
              </a>
            </p>
            <div className="flex gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="text-white/50 hover:text-[#25D366] transition-colors"
              >
                <WhatsAppIcon />
              </a>
              <a
                href={EMAIL}
                className="text-white/50 hover:text-[#1AA6A0] transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={PHONE}
                className="text-white/50 hover:text-[#1AA6A0] transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ─── FLOATING WHATSAPP ─── */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        data-ocid="whatsapp.primary_button"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#1fbb58] text-white font-semibold rounded-full pl-4 pr-5 py-3 shadow-2xl transition-all hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <WhatsAppIcon />
        <span className="text-sm hidden sm:inline">Chat with us</span>
      </a>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#1AA6A0] font-semibold tracking-widest uppercase text-xs mb-2">
      {children}
    </p>
  );
}
