import { motion } from "framer-motion";
import { useAtom } from "jotai";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import emailjs from "emailjs-com";
import "boxicons/css/boxicons.min.css";
import { currentProjectAtom, projects } from "./Projects";
import { translations } from "../i18n";

const skills = [
  { title: "Git", level: 80 },
  { title: "Symfony", level: 80 },
  { title: "React / NextJS", level: 70 },
  { title: "NestJS", level: 50 },
  { title: "Flutter", level: 40 },
  { title: "Android", level: 40 },
  { title: "Vue", level: 40 },
  { title: "React Native", level: 30 },
];

const sectionClassNames = {
  mobile:
    "min-h-screen w-full px-6 py-16 max-w-screen-xl mx-auto flex flex-col items-start justify-center",
  desktop:
    "h-screen w-screen p-8 max-w-screen-2xl mx-auto flex flex-col items-start justify-center",
};

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Section = ({ children, className = "", id, isMobile = false }) => {
  const modeClassName = isMobile
    ? sectionClassNames.mobile
    : sectionClassNames.desktop;

  return (
    <motion.section
      id={id}
      className={`${modeClassName} ${className}`.trim()}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.2,
        },
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = ({ isMobile = false, setSection, language = "en" }) => {
  const t = translations[language];
  const navigationItems = [
    { label: t.menu.home, href: "#home" },
    { label: t.menu.resume, href: "#resume" },
    { label: t.menu.skills, href: "#skills" },
    { label: t.menu.projects, href: "#projects" },
    { label: t.menu.contact, href: "#contact" },
  ];

  return (
    <div
      className={`${
        isMobile ? "w-full overflow-x-hidden bg-slate-950 text-white" : "w-screen"
      } flex flex-col items-center`}
    >
      {isMobile ? <MobileNavigation items={navigationItems} /> : null}
      <AboutSection isMobile={isMobile} setSection={setSection} t={t} />
      <ResumeSection isMobile={isMobile} t={t} />
      <SkillsSection isMobile={isMobile} t={t} />
      <ProjectsSection isMobile={isMobile} t={t} />
      <ContactSection isMobile={isMobile} t={t} />
    </div>
  );
};

const MobileNavigation = ({ items }) => {
  return (
    <div className="w-full px-4 pt-4">
      <nav className="mx-auto flex max-w-6xl flex-wrap gap-2">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition-colors hover:bg-white/10"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

const AboutSection = ({ isMobile, setSection, t }) => {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: t.hero.typed,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 2000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, [t.hero.typed]);

  const handleContactClick = () => {
    if (isMobile) {
      scrollToSection("contact");
      return;
    }

    setSection?.(4);
  };

  return (
    <Section
      id="home"
      isMobile={isMobile}
      className={isMobile ? "relative overflow-hidden" : ""}
    >
      {isMobile ? (
        <div className="absolute inset-x-0 top-8 -z-10 h-64 rounded-full bg-sky-400/20 blur-3xl" />
      ) : null}
      <p
        className={`${
          isMobile ? "text-sm tracking-[0.35em] text-sky-300" : "text-base text-gray-600"
        } uppercase`}
      >
        {t.hero.role}
      </p>
      <h1
        className={`${
          isMobile ? "mt-6 text-5xl" : "text-6xl"
        } font-extrabold leading-tight`}
      >
        Elim
      </h1>
      <motion.p
        className={`${
          isMobile ? "mt-4 text-3xl text-slate-200" : "mt-4 text-5xl text-gray-600"
        }`}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        viewport={{ once: true }}
      >
        {t.hero.intro}
        <br />
        <span
          ref={typedElement}
          className={`${isMobile ? "text-sky-300" : "text-blue-600"} px-1 italic`}
        />
      </motion.p>
      <p
        className={`${
          isMobile ? "mt-6 max-w-xl text-base text-slate-300" : "hidden"
        }`}
      >
        {t.hero.mobileDescription}
      </p>
      <div className="mt-6 flex flex-wrap gap-4">
        <motion.a
          href="https://github.com/elimf"
          className="rounded-full bg-gray-800 p-2"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          <i className="bx bxl-github text-white" />
        </motion.a>
        <motion.a
          href="https://gitlab.com/elimf"
          className="rounded-full bg-gray-800 p-2"
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          <i className="bx bxl-gitlab text-white" />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/elimflorvil/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-blue-500 p-2"
          whileHover={{ scale: 1.1 }}
        >
          <i className="bx bxl-linkedin text-white" />
        </motion.a>
      </div>
      <motion.button
        onClick={handleContactClick}
        className={`mt-12 rounded-lg px-8 py-4 text-lg font-bold text-white ${
          isMobile ? "bg-sky-400 text-slate-950" : "bg-indigo-600"
        }`}
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        viewport={{ once: true }}
      >
        {t.hero.contact}
      </motion.button>
    </Section>
  );
};

const TimelineCard = ({ item, titleSize = "text-lg", subtitleKey }) => {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
      <p className="text-sm text-sky-300">{item.date}</p>
      <h3 className={`mt-2 font-semibold text-white ${titleSize}`}>{item.title}</h3>
      <p className="mt-1 text-sm text-slate-300">{item[subtitleKey]}</p>
      {item.responsibilities ? (
        <ul className="mt-4 space-y-2 text-sm text-slate-200">
          {item.responsibilities.map((responsibility) => (
            <li key={responsibility}>{responsibility}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

const ResumeSection = ({ isMobile, t }) => {
  const educationData = t.educationData;
  const experienceData = t.experienceData;

  if (isMobile) {
    return (
      <Section id="resume" isMobile className="gap-10">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-sky-300">{t.resume.eyebrow}</p>
          <h2 className="mt-3 text-4xl font-bold text-white">{t.resume.title}</h2>
        </div>
        <div className="grid w-full gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-100">{t.resume.education}</h3>
            {educationData.map((education) => (
              <TimelineCard
                key={`${education.title}-${education.date}`}
                item={education}
                subtitleKey="institution"
                titleSize="text-base"
              />
            ))}
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-slate-100">{t.resume.experience}</h3>
            {experienceData.map((experience) => (
              <TimelineCard
                key={`${experience.title}-${experience.date}`}
                item={experience}
                subtitleKey="company"
              />
            ))}
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section id="resume" className="relative">
      <motion.div
        className="absolute right-0 hidden p-4 md:ml-4 md:block lg:w-1/3 xl:w-1/4"
        whileInView="visible"
      >
        <h2 className="text-2xl font-bold text-gray-300">{t.resume.education}</h2>
        <div className="mt-8 space-y-4">
          {educationData.map((education) => (
            <div key={`${education.title}-${education.date}`}>
              <ol className="relative border-s border-gray-200 dark:border-gray-700">
                <li className="mb-10 ms-4">
                  <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700" />
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {education.date}
                  </time>
                  <h3 className="text-md font-semibold text-gray-900 dark:text-white">
                    {education.title}
                  </h3>
                </li>
              </ol>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="absolute left-0 hidden p-4 md:ml-4 md:block lg:w-1/3 xl:w-1/4"
        whileInView="visible"
      >
        <h2 className="text-2xl font-bold text-gray-300">{t.resume.experience}</h2>
        <div className="mt-8 space-y-4">
          {experienceData.map((experience) => (
            <div key={`${experience.title}-${experience.date}`}>
              <ol className="relative border-s border-gray-200 dark:border-gray-700">
                <li className="mb-10 ms-4">
                  <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700" />
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {experience.date}
                  </time>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {experience.title}
                  </h3>
                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    {experience.company}
                  </p>
                  <ul className="mt-3 space-y-1">
                    {experience.responsibilities.map((responsibility) => (
                      <li className="text-gray-300" key={responsibility}>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                </li>
              </ol>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

const SkillsSection = ({ isMobile, t }) => {
  return (
    <Section id="skills" isMobile={isMobile}>
      <motion.div whileInView="visible">
        <h2 className={`font-bold ${isMobile ? "text-4xl text-white" : "text-3xl text-white"}`}>
          {t.skills.title}
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {skills.map((skill, index) => (
            <div
              className={`${isMobile ? "w-full rounded-2xl border border-white/10 bg-white/5 p-4" : "w-64"}`}
              key={skill.title}
            >
              <motion.h3
                className={`${isMobile ? "text-base text-slate-100" : "text-sm text-gray-100"} font-bold`}
                initial={{ opacity: 0 }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 0.2 + index * 0.1,
                    },
                  },
                }}
              >
                {skill.title}
              </motion.h3>
              <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
                <motion.div
                  className={`h-full rounded-full ${isMobile ? "bg-sky-400" : "bg-sky-500"}`}
                  style={{ width: `${skill.level}%` }}
                  initial={{ scaleX: 0, originX: 0 }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 0.2 + index * 0.1,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
};

const ProjectsSection = ({ isMobile, t }) => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  if (isMobile) {
    return (
      <Section id="projects" isMobile className="gap-8">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-sky-300">{t.projects.eyebrow}</p>
          <h2 className="mt-3 text-4xl font-bold text-white">{t.projects.title}</h2>
        </div>
        <div className="grid w-full grid-cols-2 gap-4 max-[420px]:grid-cols-1">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-transform duration-300 hover:-translate-y-1"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-32 w-full object-cover sm:h-40"
              />
              <div className="space-y-3 p-4">
                <h3 className="text-base font-semibold text-white sm:text-lg">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-sky-300/30 bg-sky-300/10 px-2.5 py-1 text-[10px] uppercase tracking-wide text-sky-100 sm:text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </Section>
    );
  }

  return (
    <Section id="projects">
      <div className="my-24 flex h-full w-full items-center justify-center gap-8">
        <button
          className="transition-colors hover:text-indigo-600"
          onClick={previousProject}
        >
          {t.projects.previous}
        </button>
        <h2 className="text-5xl font-bold">{t.projects.desktopTitle}</h2>
        <button
          className="transition-colors hover:text-indigo-600"
          onClick={nextProject}
        >
          {t.projects.next}
        </button>
      </div>
    </Section>
  );
};

const ContactSection = ({ isMobile, t }) => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.init("d4o_tC0lj5hA2nUfA");
    emailjs
      .send("service_c7zq8tq", "template_h2h9jpl", {
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      })
      .then(
        (result) => {
          alert(t.contact.success);
          console.log("Email sent successfully:", result);
        },
        () => {
          alert(t.contact.error);
        }
      );

    e.target.reset();
  };

  return (
    <Section id="contact" isMobile={isMobile}>
      <h2 className={`font-bold ${isMobile ? "text-4xl text-white" : "text-5xl"}`}>
        {t.contact.title}
      </h2>
      <div
        className={`mt-8 rounded-3xl p-8 ${
          isMobile
            ? "w-full border border-white/10 bg-white/5 backdrop-blur-sm"
            : "w-96 max-w-full bg-white"
        }`}
      >
        <form onSubmit={sendEmail}>
          <label
            htmlFor="name"
            className={`mb-1 block font-medium ${
              isMobile ? "text-slate-100" : "text-gray-900"
            }`}
          >
            {t.contact.name}
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            required
          />
          <label
            htmlFor="email"
            className={`mb-1 mt-8 block font-medium ${
              isMobile ? "text-slate-100" : "text-gray-900"
            }`}
          >
            {t.contact.email}
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
          />
          <label
            htmlFor="message"
            className={`mb-1 mt-8 block font-medium ${
              isMobile ? "text-slate-100" : "text-gray-900"
            }`}
          >
            {t.contact.message}
          </label>
          <textarea
            name="message"
            id="message"
            className="block h-32 w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
            required
          />
          <button
            className={`mt-10 rounded-lg px-8 py-4 text-lg font-bold ${
              isMobile ? "bg-sky-400 text-slate-950" : "bg-indigo-600 text-white"
            }`}
          >
            {t.contact.submit}
          </button>
        </form>
      </div>
    </Section>
  );
};
