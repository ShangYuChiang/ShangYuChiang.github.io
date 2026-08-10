const ICONS = {
  github: '<svg viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>',
  linkedin: '<svg viewBox="0 0 16 16"><path d="M12.68 12.68h-2.37V8.96c0-.89-.02-2.03-1.24-2.03-1.24 0-1.43.97-1.43 1.96v3.79H5.27V5.05h2.28v1.04h.03c.32-.6 1.09-1.24 2.25-1.24 2.4 0 2.85 1.58 2.85 3.64v4.19zM2.6 4.01a1.38 1.38 0 1 1 0-2.76 1.38 1.38 0 0 1 0 2.76zm1.19 8.67H1.41V5.05h2.38v7.63zM13.86 0H1.14C.51 0 0 .5 0 1.11v12.77C0 14.5.51 15 1.14 15h12.72c.63 0 1.14-.5 1.14-1.12V1.11C15 .5 14.49 0 13.86 0z"/></svg>',
  email: '<svg viewBox="0 0 16 16"><path d="M1.75 2h12.5c.97 0 1.75.78 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.78.78 2 1.75 2zm.53 1.5 5.28 4.4c.26.22.62.22.88 0l5.28-4.4H2.28zM14.5 4.7 9.4 8.95a2.25 2.25 0 0 1-2.8 0L1.5 4.7v7.55c0 .14.11.25.25.25h12.5a.25.25 0 0 0 .25-.25V4.7z"/></svg>'
};
const LINKS = {
  github: "https://github.com/ShangYuChiang",
  linkedin: "https://www.linkedin.com/in/%E5%B0%9A%E7%91%80-%E6%B1%9F-859833100/",
  email: "mailto:shelly200318@hotmail.com.tw"
};

function getLang() { return localStorage.getItem("lang") || "en"; }
function getTheme() {
  return localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.getElementById("theme-toggle").textContent = theme === "dark" ? "☀" : "🌙";
}

function renderNav(t) {
  const nav = document.getElementById("nav-links");
  nav.innerHTML = Object.entries(t.nav)
    .map(([id, label]) => `<a href="#${id}">${label}</a>`).join("");
}

function renderHero(t) {
  document.getElementById("hero").innerHTML = `
    <h1 class="hero-name">${t.hero.name}</h1>
    <div class="hero-name-alt">${t.hero.nameAlt}</div>
    <div class="hero-tagline">${t.hero.tagline}</div>
    <p class="hero-desc">${t.hero.desc}</p>
    <div class="hero-links">
      <a href="${LINKS.github}" target="_blank" rel="noopener">${ICONS.github} GitHub</a>
      <a href="${LINKS.linkedin}" target="_blank" rel="noopener">${ICONS.linkedin} LinkedIn</a>
      <a href="${LINKS.email}">${ICONS.email} Email</a>
    </div>`;
}

function renderAbout(t) {
  document.getElementById("about").innerHTML = `
    <h2 class="section-title">${t.about.title}</h2>
    ${t.about.paragraphs.map(p => `<p class="about-p">${p}</p>`).join("")}`;
}

function renderSkills(t) {
  document.getElementById("skills").innerHTML = `
    <h2 class="section-title">${t.skills.title}</h2>
    <div class="skill-grid">
      ${t.skills.groups.map(g => `
        <div class="card"><h3>${g.name}</h3>
          <div class="tag-list">${g.items.map(i => `<span class="tag">${i}</span>`).join("")}</div>
        </div>`).join("")}
    </div>`;
}

function renderEducation(t) {
  // 學歷時間軸。items 是該學位期間的研究成果（計畫／論文／獲獎），可留空陣列不顯示。
  // 每筆 items 可選填 tag（例如 Q1 / Q2 / Best Paper），會顯示成標籤。
  document.getElementById("education").innerHTML = `
    <h2 class="section-title">${t.education.title}</h2>
    <div class="timeline">
      ${t.education.entries.map(e => `
        <div class="tl-entry">
          <div class="tl-period">${e.period}</div>
          <div class="tl-body">
            <h3>${e.degree}</h3>
            <div class="tl-org">${e.org}${e.dept ? " · " + e.dept : ""}</div>
            ${e.thesis ? `<p class="edu-thesis"><span class="edu-thesis-label">${t.education.thesisLabel}</span>${e.thesis}</p>` : ""}
            ${(e.items && e.items.length) ? `<ul>${e.items.map(i =>
              `<li>${i.tag ? `<span class="edu-tag">${i.tag}</span>` : ""}${i.text}</li>`).join("")}</ul>` : ""}
          </div>
        </div>`).join("")}
    </div>`;
}

function renderExperience(t) {
  document.getElementById("experience").innerHTML = `
    <h2 class="section-title">${t.experience.title}</h2>
    <div class="timeline">
      ${t.experience.entries.map(e => `
        <div class="tl-entry">
          <div class="tl-period">${e.period}</div>
          <div class="tl-body">
            <h3>${e.role}</h3>
            <div class="tl-org">${e.org}${e.location ? " · " + e.location : ""}</div>
            <ul>${e.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
          </div>
        </div>`).join("")}
    </div>`;
}

function renderTeaching(t) {
  document.getElementById("teaching").innerHTML = `
    <h2 class="section-title">${t.teaching.title}</h2>
    <p class="section-intro">${t.teaching.intro}</p>
    <ul class="teach-list">
      ${t.teaching.items.map(i => `<li><strong>${i.org}</strong>${i.detail ? " — " + i.detail : ""}</li>`).join("")}
    </ul>`;
}

function renderProjects(t) {
  document.getElementById("projects").innerHTML = `
    <h2 class="section-title">${t.projects.title}</h2>
    <div class="proj-grid">
      ${t.projects.cards.map(c => `
        <div class="card proj-card">
          <h3>${c.name}</h3>
          <p>${c.desc}</p>
          <div class="tag-list">${c.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
          <a href="${c.linkUrl}" target="_blank" rel="noopener">${c.linkLabel} →</a>
        </div>`).join("")}
    </div>`;
}

function renderPublications(t) {
  const badge = b => b ? `<span class="badge">${b}</span>` : "";
  document.getElementById("publications").innerHTML = `
    <h2 class="section-title">${t.publications.title}</h2>
    <h3 class="pub-heading">${t.publications.journalHeading}</h3>
    <ul class="pub-list">${t.publications.journals.map(j =>
      `<li>${badge(j.badge)} ${j.citation}</li>`).join("")}</ul>
    <h3 class="pub-heading">${t.publications.confHeading}</h3>
    <ul class="pub-list">${t.publications.conferences.map(c =>
      `<li>${badge(c.badge)} <em>${c.titleText}</em> — ${c.venue}</li>`).join("")}</ul>`;
}

function renderAwards(t) {
  document.getElementById("awards").innerHTML = `
    <h2 class="section-title">${t.awards.title}</h2>
    <h3 class="pub-heading">${t.awards.competitionHeading}</h3>
    <ul class="award-list">${t.awards.competitions.map(c => `<li>${c}</li>`).join("")}</ul>
    <h3 class="pub-heading">${t.awards.certHeading}</h3>
    <ul class="award-list">${t.awards.certs.map(c => `<li><strong>${c.org}</strong> — ${c.names}</li>`).join("")}</ul>`;
}

function renderContact(t) {
  document.getElementById("contact").innerHTML = `
    <h2 class="section-title">${t.contact.title}</h2>
    <p class="about-p">${t.contact.text}</p>
    <div class="hero-links">
      <a href="${LINKS.email}">${ICONS.email} shelly200318@hotmail.com.tw</a>
      <a href="${LINKS.github}" target="_blank" rel="noopener">${ICONS.github} GitHub</a>
      <a href="${LINKS.linkedin}" target="_blank" rel="noopener">${ICONS.linkedin} LinkedIn</a>
    </div>`;
}

function renderAll(lang) {
  const t = SITE_DATA[lang];
  document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
  document.getElementById("lang-toggle").textContent = lang === "zh" ? "EN" : "中";
  renderNav(t);
  renderHero(t);
  renderAbout(t);
  renderEducation(t);
  renderSkills(t);
  renderExperience(t);
  renderTeaching(t);
  renderProjects(t);
  renderPublications(t);
  renderAwards(t);
  renderContact(t);
  document.getElementById("footer").textContent = t.footer;
}

document.getElementById("lang-toggle").addEventListener("click", () => {
  const next = getLang() === "en" ? "zh" : "en";
  localStorage.setItem("lang", next);
  renderAll(next);
});
document.getElementById("theme-toggle").addEventListener("click", () => {
  const next = getTheme() === "dark" ? "light" : "dark";
  localStorage.setItem("theme", next);
  applyTheme(next);
});

applyTheme(getTheme());
renderAll(getLang());

document.getElementById("nav-burger").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("open");
  document.getElementById("nav-burger").setAttribute("aria-expanded",
    document.getElementById("nav-links").classList.contains("open"));
});
document.getElementById("nav-links").addEventListener("click", e => {
  if (e.target.tagName === "A") {
    document.getElementById("nav-links").classList.remove("open");
    document.getElementById("nav-burger").setAttribute("aria-expanded", "false");
  }
});
const spy = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      document.querySelectorAll(".nav-links a").forEach(a =>
        a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id));
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll("main section").forEach(s => spy.observe(s));
