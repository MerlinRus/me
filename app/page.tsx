"use client";

import { useEffect, useState } from "react";

const copy = {
  ru: {
    nav: {
      work: "Проекты",
      expertise: "Компетенции",
      contact: "Контакты",
    },
    availability: "Открыт к сильным задачам",
    eyebrow: "AI-разработчик · DevOps · Product engineer",
    heroLineOne: "Создаю",
    heroLineTwo: "системы",
    heroLineThree: "целиком.",
    heroText:
      "От идеи и архитектуры до production-сервера. Беру сложную техническую задачу и превращаю её в продукт, которым можно пользоваться.",
    discuss: "Обсудить задачу",
    seeWork: "Смотреть проекты",
    portraitLabel: "Марк Пивоваров",
    portraitRole: "Инженер полного цикла",
    portraitMeta: "Россия · UTC+3",
    signal: "Код / инфраструктура / AI / продукт",
    introKicker: "01 — Чем занимаюсь",
    introTitle: "Не просто пишу код.",
    introAccent: "Закрываю систему.",
    introText:
      "Соединяю backend, frontend, инфраструктуру и AI-инструменты. Поэтому решения не рассыпаются на границах между командами и доходят до работающего production.",
    services: [
      {
        number: "01",
        title: "Продуктовая разработка",
        text: "Проектирую и собираю веб-продукты: API, интерфейсы, данные, интеграции и бизнес-логику.",
      },
      {
        number: "02",
        title: "DevOps и инфраструктура",
        text: "Разворачиваю сервисы, автоматизирую доставку, настраиваю серверы, наблюдаемость и надёжную эксплуатацию.",
      },
      {
        number: "03",
        title: "AI и автоматизация",
        text: "Встраиваю AI туда, где он сокращает ручную работу, ускоряет процессы и создаёт реальную ценность.",
      },
    ],
    projectsKicker: "02 — Избранные проекты",
    projectsTitle: "Продукты, а не учебные демо.",
    projectsIntro:
      "Два проекта в нишах, где готового решения было недостаточно — поэтому я собрал своё.",
    projects: [
      {
        number: "01",
        type: "Booking platform",
        title: "RentalAll",
        headline: "Аренда площадки без ручной рутины.",
        text: "Платформа для поиска и полностью автоматизированного бронирования площадок для мероприятий — единый путь от выбора до аренды.",
        stack: ["Python", "DRF", "Django ORM", "PostgreSQL", "Redis", "React"],
        link: "https://dev.rentalall.ru",
        linkText: "Открыть продукт",
      },
      {
        number: "02",
        type: "Open-source service",
        title: "QobuzSync",
        headline: "Музыка не должна запирать вас внутри сервиса.",
        text: "Бесплатный open-source сервис для переноса треков между Яндекс Музыкой и Qobuz — без ручного пересоздания медиатеки.",
        stack: ["Python", "SQLite", "Redis", "React"],
        link: "https://qobuz.rentalall.ru",
        linkText: "Открыть продукт",
      },
    ],
    stackKicker: "03 — Технологии",
    stackTitle: "Подбираю инструменты под задачу.",
    stackText:
      "Не продаю модный стек. Выбираю технологии, которые помогают быстрее запустить продукт и спокойно развивать его дальше.",
    stackGroups: [
      { label: "Backend", items: "Python · Django · DRF · REST API" },
      { label: "Frontend", items: "React · TypeScript · Modern CSS" },
      { label: "Data", items: "PostgreSQL · SQLite · Redis · Django ORM" },
      { label: "Ops", items: "Linux · Docker · CI/CD · Nginx · Servers" },
      { label: "AI", items: "LLM · Agents · Automation · Integrations" },
    ],
    fitKicker: "04 — Как работаем",
    fitTitle: "Лучший результат начинается с ясных правил.",
    fitCards: [
      {
        title: "Содержательное ТЗ",
        text: "Цель, ограничения и критерии результата сформулированы до того, как код становится дорогим.",
      },
      {
        title: "Командная ответственность",
        text: "Если проект командный, ответственность действительно распределена — без героя, который закрывает всё один.",
      },
      {
        title: "Уровень имеет цену",
        text: "Бюджет соответствует сложности, ответственности и качеству, которое ожидается от результата.",
      },
    ],
    contactKicker: "05 — Контакт",
    contactTitleOne: "Есть серьёзная",
    contactTitleTwo: "задача?",
    contactText:
      "Расскажите, что нужно запустить, исправить или автоматизировать. Я быстро пойму контекст и честно скажу, чем могу быть полезен.",
    telegram: "Написать в Telegram",
    email: "Отправить email",
    secondaryEmail: "Запасной email",
    footerRole: "AI-разработчик + DevOps",
    made: "Спроектировано и собрано как продукт.",
  },
  en: {
    nav: {
      work: "Work",
      expertise: "Expertise",
      contact: "Contact",
    },
    availability: "Open to ambitious work",
    eyebrow: "AI developer · DevOps · Product engineer",
    heroLineOne: "I build",
    heroLineTwo: "complete",
    heroLineThree: "systems.",
    heroText:
      "From the first architectural decision to the production server. I turn difficult technical problems into products people can actually use.",
    discuss: "Discuss a project",
    seeWork: "See selected work",
    portraitLabel: "Mark Pivovarov",
    portraitRole: "Full-cycle engineer",
    portraitMeta: "Russia · UTC+3",
    signal: "Code / infrastructure / AI / product",
    introKicker: "01 — What I do",
    introTitle: "I do more than code.",
    introAccent: "I close the whole system.",
    introText:
      "I connect backend, frontend, infrastructure, and AI tooling. The result survives the gaps between disciplines and makes it all the way to production.",
    services: [
      {
        number: "01",
        title: "Product engineering",
        text: "I design and build web products: APIs, interfaces, data, integrations, and the business logic holding them together.",
      },
      {
        number: "02",
        title: "DevOps & infrastructure",
        text: "I ship services, automate delivery, configure servers, observability, and reliable day-to-day operations.",
      },
      {
        number: "03",
        title: "AI & automation",
        text: "I apply AI where it removes repetitive work, accelerates processes, and creates measurable product value.",
      },
    ],
    projectsKicker: "02 — Selected work",
    projectsTitle: "Products, not tutorial demos.",
    projectsIntro:
      "Two products in spaces where an off-the-shelf answer was not enough — so I built one.",
    projects: [
      {
        number: "01",
        type: "Booking platform",
        title: "RentalAll",
        headline: "Venue rental without the manual overhead.",
        text: "A platform for discovering and fully automating the booking of event venues — one path from selection to rental.",
        stack: ["Python", "DRF", "Django ORM", "PostgreSQL", "Redis", "React"],
        link: "https://dev.rentalall.ru",
        linkText: "Open product",
      },
      {
        number: "02",
        type: "Open-source service",
        title: "QobuzSync",
        headline: "Your music should not lock you into one service.",
        text: "A free, open-source service for moving tracks between Yandex Music and Qobuz without rebuilding a library by hand.",
        stack: ["Python", "SQLite", "Redis", "React"],
        link: "https://qobuz.rentalall.ru",
        linkText: "Open product",
      },
    ],
    stackKicker: "03 — Technology",
    stackTitle: "The tool follows the problem.",
    stackText:
      "I do not sell a fashionable stack. I choose technology that helps launch sooner and keeps the product easy to evolve.",
    stackGroups: [
      { label: "Backend", items: "Python · Django · DRF · REST API" },
      { label: "Frontend", items: "React · TypeScript · Modern CSS" },
      { label: "Data", items: "PostgreSQL · SQLite · Redis · Django ORM" },
      { label: "Ops", items: "Linux · Docker · CI/CD · Nginx · Servers" },
      { label: "AI", items: "LLM · Agents · Automation · Integrations" },
    ],
    fitKicker: "04 — Working together",
    fitTitle: "The best work starts with clear rules.",
    fitCards: [
      {
        title: "A meaningful brief",
        text: "Goals, constraints, and success criteria are clear before code becomes expensive.",
      },
      {
        title: "Shared ownership",
        text: "On a team project, responsibility is truly distributed — no lone hero expected to carry everything.",
      },
      {
        title: "Quality has a price",
        text: "The budget matches the complexity, responsibility, and standard expected from the result.",
      },
    ],
    contactKicker: "05 — Contact",
    contactTitleOne: "Have a serious",
    contactTitleTwo: "problem to solve?",
    contactText:
      "Tell me what you need to launch, fix, or automate. I will understand the context quickly and tell you honestly how I can help.",
    telegram: "Message on Telegram",
    email: "Send an email",
    secondaryEmail: "Secondary email",
    footerRole: "AI developer + DevOps",
    made: "Designed and built like a product.",
  },
} as const;

type Language = keyof typeof copy;

export default function Home() {
  const [language, setLanguage] = useState<Language>("ru");
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="MAARK — home">
          M<span>AA</span>RK
        </a>
        <nav className="desktop-nav" aria-label={language === "ru" ? "Основная навигация" : "Primary navigation"}>
          <a href="#work">{t.nav.work}</a>
          <a href="#expertise">{t.nav.expertise}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>
        <div className="header-tools">
          <span className="availability">
            <i aria-hidden="true" />
            {t.availability}
          </span>
          <div className="language-switch" aria-label={language === "ru" ? "Выбор языка" : "Language selection"}>
            {(["ru", "en"] as const).map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setLanguage(item)}
                aria-pressed={language === item}
              >
                {item.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-main">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>
            <span>{t.heroLineOne}</span>
            <span className="outline-word">{t.heroLineTwo}</span>
            <span>{t.heroLineThree}</span>
          </h1>
          <div className="hero-bottom">
            <p className="hero-copy">{t.heroText}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="https://t.me/orysege" target="_blank" rel="noreferrer">
                {t.discuss}
                <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#work">
                {t.seeWork}
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </div>

        <aside className="identity-card" aria-label={t.portraitLabel}>
          <div className="identity-grid" aria-hidden="true">
            <span className="cross cross-one">+</span>
            <span className="cross cross-two">+</span>
            <span className="identity-mark">M</span>
            <span className="coordinate">55° / 37°</span>
          </div>
          <div className="identity-caption">
            <div>
              <strong>{t.portraitLabel}</strong>
              <span>{t.portraitRole}</span>
            </div>
            <span>{t.portraitMeta}</span>
          </div>
        </aside>
      </section>

      <div className="signal-strip" aria-hidden="true">
        <div>
          <span>{t.signal}</span>
          <b>✳</b>
          <span>{t.signal}</span>
          <b>✳</b>
          <span>{t.signal}</span>
          <b>✳</b>
        </div>
      </div>

      <section className="section expertise-section" id="expertise">
        <div className="section-heading">
          <p className="kicker">{t.introKicker}</p>
          <div>
            <h2>
              {t.introTitle}
              <br />
              <em>{t.introAccent}</em>
            </h2>
            <p>{t.introText}</p>
          </div>
        </div>
        <div className="service-grid">
          {t.services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div className="card-arrow" aria-hidden="true">↘</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects-section" id="work">
        <div className="projects-heading">
          <p className="kicker">{t.projectsKicker}</p>
          <h2>{t.projectsTitle}</h2>
          <p>{t.projectsIntro}</p>
        </div>
        <div className="project-list">
          {t.projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-index">
                <span>{project.number}</span>
                <span>{project.type}</span>
              </div>
              <div className="project-name">
                <h3>{project.title}</h3>
                <p>{project.headline}</p>
              </div>
              <div className="project-details">
                <p>{project.text}</p>
                <ul aria-label={`${project.title} stack`}>
                  {project.stack.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <a href={project.link} target="_blank" rel="noreferrer">
                  {project.linkText}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section stack-section">
        <div className="stack-intro">
          <p className="kicker">{t.stackKicker}</p>
          <h2>{t.stackTitle}</h2>
          <p>{t.stackText}</p>
        </div>
        <div className="stack-list">
          {t.stackGroups.map((group) => (
            <div className="stack-row" key={group.label}>
              <span>{group.label}</span>
              <p>{group.items}</p>
              <span aria-hidden="true">+</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section fit-section">
        <p className="kicker">{t.fitKicker}</p>
        <div className="fit-layout">
          <h2>{t.fitTitle}</h2>
          <div className="fit-cards">
            {t.fitCards.map((card, index) => (
              <article key={card.title}>
                <span>0{index + 1}</span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <p className="kicker">{t.contactKicker}</p>
        <div className="contact-title">
          <h2>
            {t.contactTitleOne}
            <br />
            <em>{t.contactTitleTwo}</em>
          </h2>
          <span aria-hidden="true">↘</span>
        </div>
        <div className="contact-bottom">
          <p>{t.contactText}</p>
          <div className="contact-links">
            <a className="contact-primary" href="https://t.me/orysege" target="_blank" rel="noreferrer">
              <span>Telegram</span>
              <strong>@orysege</strong>
              <i aria-hidden="true">↗</i>
            </a>
            <a href="mailto:pivovarof.marck@gmail.com">
              <span>{t.email}</span>
              <strong>pivovarof.marck@gmail.com</strong>
              <i aria-hidden="true">↗</i>
            </a>
            <a href="mailto:pivovarov.marck@yandex.ru">
              <span>{t.secondaryEmail}</span>
              <strong>pivovarov.marck@yandex.ru</strong>
              <i aria-hidden="true">↗</i>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div>
          <a className="wordmark" href="#top">MAARK</a>
          <span>{t.footerRole}</span>
        </div>
        <p>{t.made}</p>
        <div className="footer-links">
          <a href="https://github.com/MerlinRus" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://t.me/orysege" target="_blank" rel="noreferrer">Telegram ↗</a>
          <span>© {new Date().getFullYear()} Mark Pivovarov</span>
        </div>
      </footer>
    </main>
  );
}
