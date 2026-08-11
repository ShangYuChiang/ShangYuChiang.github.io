const ICONS = {
  github: '<svg viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>',
  linkedin: '<svg viewBox="0 0 16 16"><path d="M12.68 12.68h-2.37V8.96c0-.89-.02-2.03-1.24-2.03-1.24 0-1.43.97-1.43 1.96v3.79H5.27V5.05h2.28v1.04h.03c.32-.6 1.09-1.24 2.25-1.24 2.4 0 2.85 1.58 2.85 3.64v4.19zM2.6 4.01a1.38 1.38 0 1 1 0-2.76 1.38 1.38 0 0 1 0 2.76zm1.19 8.67H1.41V5.05h2.38v7.63zM13.86 0H1.14C.51 0 0 .5 0 1.11v12.77C0 14.5.51 15 1.14 15h12.72c.63 0 1.14-.5 1.14-1.12V1.11C15 .5 14.49 0 13.86 0z"/></svg>',
  email: '<svg viewBox="0 0 16 16"><path d="M1.75 2h12.5c.97 0 1.75.78 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.78.78 2 1.75 2zm.53 1.5 5.28 4.4c.26.22.62.22.88 0l5.28-4.4H2.28zM14.5 4.7 9.4 8.95a2.25 2.25 0 0 1-2.8 0L1.5 4.7v7.55c0 .14.11.25.25.25h12.5a.25.25 0 0 0 .25-.25V4.7z"/></svg>',
  print: '<svg viewBox="0 0 16 16"><path d="M4 1.5A1.5 1.5 0 0 1 5.5 0h5A1.5 1.5 0 0 1 12 1.5V4h1.5A1.5 1.5 0 0 1 15 5.5v5A1.5 1.5 0 0 1 13.5 12H12v2.5a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 14.5V12H2.5A1.5 1.5 0 0 1 1 10.5v-5A1.5 1.5 0 0 1 2.5 4H4V1.5zM5.5 1a.5.5 0 0 0-.5.5V4h6V1.5a.5.5 0 0 0-.5-.5h-5zM5 14.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V10H5v4.5zm-1-9H2.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5H4V9.5A.5.5 0 0 1 4.5 9h7a.5.5 0 0 1 .5.5V11h1.5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5H12v1H4v-1z"/></svg>'
};
const LINKS = {
  github: "https://github.com/ShangYuChiang",
  linkedin: "https://www.linkedin.com/in/%E5%B0%9A%E7%91%80-%E6%B1%9F-859833100/",
  email: "mailto:shelly200318@hotmail.com.tw"
};

/* ===== Animation state (module-level so re-renders never spawn duplicate
   loops/timers — every re-render clears these before starting new ones). ===== */
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let typewriterTimer = null;
let revealObserver = null;
let revealFailsafeTimer = null;
let particleCanvas = null;
let particleCtx = null;
let particles = [];
let particleColor = "#2563eb";
let particleRAF = null;
let particlesRunning = false;
let heroVisible = true;
let mouseX = null;
let mouseY = null;
let progressRAF = null;

function getLang() { return localStorage.getItem("lang") || "en"; }
function getTheme() {
  return localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.getElementById("theme-toggle").textContent = theme === "dark" ? "☀" : "🌙";
  refreshParticleColor();
}

function renderNav(t) {
  const nav = document.getElementById("nav-links");
  nav.innerHTML = Object.entries(t.nav)
    .map(([id, label]) => `<a href="#${id}">${label}</a>`).join("");
}

// Delay helper for cascading reveal children (capped at 400ms, 60ms/step).
function revealDelay(idx) { return Math.min(idx * 60, 400); }
function revealAttr(idx) { return ` reveal" style="--reveal-delay:${revealDelay(idx)}ms`; }

function renderHero(t) {
  document.getElementById("hero").innerHTML = `
    <div class="hero-aurora" aria-hidden="true">
      <span class="aurora-blob blob-1"></span>
      <span class="aurora-blob blob-2"></span>
      <span class="aurora-blob blob-3"></span>
    </div>
    <canvas class="hero-canvas" aria-hidden="true"></canvas>
    <div class="hero-content">
      <h1 class="hero-name reveal hero-reveal" style="--reveal-delay:0ms">${t.hero.name}</h1>
      <div class="hero-name-alt reveal hero-reveal" style="--reveal-delay:90ms">${t.hero.nameAlt}</div>
      <div class="hero-tagline reveal hero-reveal" style="--reveal-delay:180ms">${t.hero.tagline}</div>
      <div class="hero-role reveal hero-reveal" style="--reveal-delay:180ms" aria-hidden="true">
        <span class="hero-role-text" id="hero-role-text"></span><span class="hero-caret" aria-hidden="true"></span>
      </div>
      <p class="hero-desc reveal hero-reveal" style="--reveal-delay:270ms">${t.hero.desc}</p>
      <div class="hero-links reveal hero-reveal" style="--reveal-delay:360ms">
        <a href="${LINKS.github}" target="_blank" rel="noopener">${ICONS.github} GitHub</a>
        <a href="${LINKS.linkedin}" target="_blank" rel="noopener">${ICONS.linkedin} LinkedIn</a>
        <a href="${LINKS.email}">${ICONS.email} Email</a>
        <button type="button" class="print-btn reveal hero-reveal" style="--reveal-delay:450ms" id="print-btn">${ICONS.print} ${t.ui.print}</button>
      </div>
    </div>`;
  document.getElementById("print-btn").addEventListener("click", () => window.print());
  initTypewriter(t);
  initParticles();
}

function computeStatValues() {
  const en = SITE_DATA.en;
  return {
    publications: en.publications.journals.length + en.publications.conferences.length,
    teaching: en.teaching.items.length,
    awards: en.awards.competitions.length,
    years: new Date().getFullYear() - 2019
  };
}

function renderStats(t) {
  const vals = computeStatValues();
  document.getElementById("stats").innerHTML = `
    <div class="stats-strip">
      ${t.stats.items.map((it, idx) => `
        <div class="stat-tile${revealAttr(idx)}">
          <div class="stat-value" id="stat-${it.key}" data-target="${vals[it.key] || 0}" data-suffix="${it.suffix}">0${it.suffix}</div>
          <div class="stat-label">${it.label}</div>
        </div>`).join("")}
    </div>`;
}

function renderAbout(t) {
  document.getElementById("about").innerHTML = `
    <h2 class="section-title reveal">${t.about.title}</h2>
    ${t.about.paragraphs.map((p, idx) => `<p class="about-p${revealAttr(idx)}">${p}</p>`).join("")}`;
}

function renderEducation(t) {
  const badge = tag => tag ? `<span class="badge">${tag}</span>` : "";
  document.getElementById("education").innerHTML = `
    <h2 class="section-title reveal">${t.education.title}</h2>
    <div class="edu-grid">
      ${t.education.entries.map((e, idx) => `
        <div class="edu-card${revealAttr(idx)}">
          <div class="edu-degree">${e.degree}</div>
          <div class="edu-school">${e.org}</div>
          <div class="edu-meta">${e.dept} · ${e.period}</div>
          ${e.thesis ? `<div class="edu-thesis">${t.education.thesisLabel}<em>${e.thesis}</em></div>` : ""}
          ${e.items && e.items.length ? `
          <ul class="edu-items">
            ${e.items.map(it => `<li>${badge(it.tag)}${it.text}</li>`).join("")}
          </ul>` : ""}
        </div>`).join("")}
    </div>`;
}

function renderSkills(t) {
  document.getElementById("skills").innerHTML = `
    <h2 class="section-title reveal">${t.skills.title}</h2>
    <div class="skill-grid">
      ${t.skills.groups.map((g, idx) => `
        <div class="card${revealAttr(idx)}"><h3>${g.name}</h3>
          <div class="tag-list">${g.items.map(i => `<span class="tag">${i}</span>`).join("")}</div>
        </div>`).join("")}
    </div>`;
}

function renderExperience(t) {
  document.getElementById("experience").innerHTML = `
    <h2 class="section-title reveal">${t.experience.title}</h2>
    <div class="exp-list">
      ${t.experience.entries.map((e, idx) => {
        const open = idx === 0;
        return `
        <div class="exp-card${revealAttr(idx)}">
          <span class="exp-accent" aria-hidden="true"></span>
          <div class="exp-head">
            <div>
              <div class="exp-role">${e.role}</div>
              <div class="exp-org">${e.org}${e.location ? " · " + e.location : ""}</div>
            </div>
            <div class="exp-period">${e.period}</div>
          </div>
          <button type="button" class="exp-toggle" aria-expanded="${open}" aria-controls="exp-detail-${idx}" data-idx="${idx}">
            ${open ? t.ui.detailsCollapse : t.ui.detailsExpand}
          </button>
          <div class="exp-detail${open ? " open" : ""}" id="exp-detail-${idx}">
            <ul>${e.bullets.map(b => `<li>${b}</li>`).join("")}</ul>
          </div>
        </div>`;
      }).join("")}
    </div>`;

  document.querySelectorAll(".exp-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const detail = document.getElementById(btn.getAttribute("aria-controls"));
      const willOpen = !detail.classList.contains("open");
      detail.classList.toggle("open", willOpen);
      btn.setAttribute("aria-expanded", String(willOpen));
      const lang = getLang();
      btn.textContent = willOpen ? SITE_DATA[lang].ui.detailsCollapse : SITE_DATA[lang].ui.detailsExpand;
    });
  });
}

function renderTeaching(t) {
  document.getElementById("teaching").innerHTML = `
    <h2 class="section-title reveal">${t.teaching.title}</h2>
    <p class="section-intro reveal">${t.teaching.intro}</p>
    <ul class="teach-list reveal">
      ${t.teaching.items.map(i => `<li><strong>${i.org}</strong>${i.detail ? " — " + i.detail : ""}</li>`).join("")}
    </ul>`;
}

function renderProjects(t) {
  document.getElementById("projects").innerHTML = `
    <h2 class="section-title reveal">${t.projects.title}</h2>
    <div class="proj-grid">
      ${t.projects.cards.map((c, idx) => `
        <div class="card proj-card${revealAttr(idx)}">
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
    <h2 class="section-title reveal">${t.publications.title}</h2>
    <h3 class="pub-heading reveal">${t.publications.journalHeading}</h3>
    <ul class="pub-list reveal">${t.publications.journals.map(j =>
      `<li>${badge(j.badge)} ${j.citation}</li>`).join("")}</ul>
    <h3 class="pub-heading reveal">${t.publications.confHeading}</h3>
    <ul class="pub-list reveal">${t.publications.conferences.map(c =>
      `<li>${badge(c.badge)} <em>${c.titleText}</em> — ${c.venue}</li>`).join("")}</ul>`;
}

function renderAwards(t) {
  document.getElementById("awards").innerHTML = `
    <h2 class="section-title reveal">${t.awards.title}</h2>
    <h3 class="pub-heading reveal">${t.awards.competitionHeading}</h3>
    <ul class="award-list reveal">${t.awards.competitions.map(c => `<li>${c}</li>`).join("")}</ul>
    <h3 class="pub-heading reveal">${t.awards.certHeading}</h3>
    <ul class="award-list reveal">${t.awards.certs.map(c => `<li><strong>${c.org}</strong> — ${c.names}</li>`).join("")}</ul>`;
}

function renderContact(t) {
  document.getElementById("contact").innerHTML = `
    <h2 class="section-title reveal">${t.contact.title}</h2>
    <p class="about-p reveal">${t.contact.text}</p>
    <div class="hero-links reveal">
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
  renderStats(t);
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
  document.getElementById("back-to-top").setAttribute("aria-label", t.ui.backToTop);
  wireReveals();
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

const backToTop = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 400);
});
backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* =====================================================================
   Scroll-reveal engine
   Safety rule 1 (no-JS): handled purely in CSS — `.reveal` is only ever
   hidden under `html.js`, which this same script adds in an inline
   <head> tag. If this script fails after that point, elements stay
   hidden only until the failsafe timer below forces them visible.
   Safety rule 2 (no IntersectionObserver): reveal everything immediately.
   Safety rule 3 (failsafe): window.load + 3s forces any leftovers visible.
   ===================================================================== */
function isInViewport(el) {
  const r = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  return r.top < vh && r.bottom > 0;
}

function revealElement(el) {
  el.classList.add("in");
  const statVal = el.querySelector ? el.querySelector(".stat-value") : null;
  if (statVal) animateCountUp(statVal);
}

function wireReveals() {
  const els = document.querySelectorAll(".reveal:not(.in)");
  if (!("IntersectionObserver" in window)) {
    els.forEach(revealElement);
    return;
  }
  // A language switch rebuilds the DOM via innerHTML. Any element still being
  // observed was just destroyed, so drop those stale targets before re-wiring.
  if (revealObserver) revealObserver.disconnect();
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          revealElement(entry.target);
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  }
  els.forEach(el => {
    if (isInViewport(el)) {
      revealElement(el);
    } else {
      revealObserver.observe(el);
    }
  });
  armRevealFailsafe();
}

// Safety rule 3: failsafe — nothing can stay hidden forever. Re-armed after
// every wireReveals() (a language switch rebuilds the DOM long after `load`
// has fired, so binding this to `load` alone would leave the new nodes
// unprotected if the observer never reports them).
function armRevealFailsafe() {
  clearTimeout(revealFailsafeTimer);
  revealFailsafeTimer = setTimeout(() => {
    document.querySelectorAll(".reveal:not(.in)").forEach(revealElement);
  }, 3000);
}
window.addEventListener("load", armRevealFailsafe);

/* ===== Animated stat count-up (values always come from computeStatValues,
   never hardcoded, so they can't drift from the résumé content). ===== */
function animateCountUp(el) {
  const target = Number(el.getAttribute("data-target")) || 0;
  const suffix = el.getAttribute("data-suffix") || "";
  if (prefersReducedMotion) {
    el.textContent = target + suffix;
    return;
  }
  const start = performance.now();
  const duration = 1200;
  function step(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased) + suffix;
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target + suffix;
  }
  requestAnimationFrame(step);
  // A stat on a CV must never display a wrong number. requestAnimationFrame is
  // paused in background tabs and can stop entirely in embedded viewers, which
  // would freeze the counter mid-tween, so pin the true value on a plain timer.
  setTimeout(() => { el.textContent = target + suffix; }, duration + 400);
}

/* ===== Rotating role typewriter =====
   Timer id lives in the module-level `typewriterTimer` and is cleared at
   the top of every call, so a language switch (which rebuilds the DOM and
   calls this again) can never leave a stray loop running. */
function initTypewriter(t) {
  clearTimeout(typewriterTimer);
  typewriterTimer = null;
  const el = document.getElementById("hero-role-text");
  if (!el) return;
  const roles = (t.hero && t.hero.roles) || [];
  if (!roles.length) return;
  if (prefersReducedMotion) {
    el.textContent = roles[0];
    return;
  }
  let roleIdx = 0;
  let charIdx = 0;
  let deleting = false;
  function tick() {
    const full = roles[roleIdx];
    if (!deleting) {
      charIdx++;
      el.textContent = full.slice(0, charIdx);
      if (charIdx === full.length) {
        deleting = true;
        typewriterTimer = setTimeout(tick, 1600);
        return;
      }
      typewriterTimer = setTimeout(tick, 55);
    } else {
      charIdx--;
      el.textContent = full.slice(0, charIdx);
      if (charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        typewriterTimer = setTimeout(tick, 300);
        return;
      }
      typewriterTimer = setTimeout(tick, 30);
    }
  }
  typewriterTimer = setTimeout(tick, 400);
}

/* ===== Hero particle constellation canvas =====
   Recreated on every renderHero() call (language switch replaces the
   canvas element), so the loop is always stopped first to avoid leaking
   rAF callbacks that draw onto a detached canvas. */
function refreshParticleColor() {
  try {
    particleColor = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || particleColor;
  } catch (e) { /* ignore */ }
}

function particleCount() {
  return window.innerWidth < 700 ? 25 : 55;
}

function createParticles(w, h) {
  const n = particleCount();
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35
    });
  }
  return arr;
}

function resizeCanvas() {
  if (!particleCanvas || !particleCtx) return;
  const heroEl = document.getElementById("hero");
  if (!heroEl) return;
  const w = heroEl.clientWidth || 1;
  const h = heroEl.clientHeight || 1;
  const dpr = window.devicePixelRatio || 1;
  particleCanvas.width = Math.round(w * dpr);
  particleCanvas.height = Math.round(h * dpr);
  particleCanvas.style.width = w + "px";
  particleCanvas.style.height = h + "px";
  particleCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  particles = createParticles(w, h);
}

function drawParticles() {
  if (!particleCtx || !particleCanvas) return;
  const w = particleCanvas.clientWidth;
  const h = particleCanvas.clientHeight;
  particleCtx.clearRect(0, 0, w, h);

  particles.forEach(p => {
    if (mouseX != null && mouseY != null) {
      const dx = mouseX - p.x, dy = mouseY - p.y;
      const dist = Math.hypot(dx, dy);
      if (dist < 140 && dist > 0.01) {
        const force = ((140 - dist) / 140) * 0.02;
        p.vx += (dx / dist) * force;
        p.vy += (dy / dist) * force;
      }
    }
    p.x += p.vx;
    p.y += p.vy;
    p.vx *= 0.98;
    p.vy *= 0.98;
    if (p.x < 0) p.x = w; else if (p.x > w) p.x = 0;
    if (p.y < 0) p.y = h; else if (p.y > h) p.y = 0;
  });

  particleCtx.fillStyle = particleColor;
  particleCtx.globalAlpha = 0.55;
  particles.forEach(p => {
    particleCtx.beginPath();
    particleCtx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
    particleCtx.fill();
  });

  particleCtx.strokeStyle = particleColor;
  particleCtx.lineWidth = 1;
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.hypot(dx, dy);
      if (dist < 120) {
        particleCtx.globalAlpha = (1 - dist / 120) * 0.45;
        particleCtx.beginPath();
        particleCtx.moveTo(particles[i].x, particles[i].y);
        particleCtx.lineTo(particles[j].x, particles[j].y);
        particleCtx.stroke();
      }
    }
  }
  particleCtx.globalAlpha = 1;
}

function particleLoop() {
  drawParticles();
  particleRAF = requestAnimationFrame(particleLoop);
}

function startParticleLoop() {
  if (particlesRunning || prefersReducedMotion || !particleCtx) return;
  particlesRunning = true;
  particleRAF = requestAnimationFrame(particleLoop);
}

function stopParticleLoop() {
  particlesRunning = false;
  if (particleRAF) cancelAnimationFrame(particleRAF);
  particleRAF = null;
}

function initParticles() {
  stopParticleLoop();
  particleCanvas = document.querySelector(".hero-canvas");
  if (!particleCanvas || prefersReducedMotion) {
    particleCtx = null;
    return;
  }
  particleCtx = particleCanvas.getContext("2d");
  refreshParticleColor();
  resizeCanvas();
  if (heroVisible && !document.hidden) startParticleLoop();
}

// Persistent listeners set up once — #hero and #progress-bar are static
// elements from index.html that survive every re-render (only their
// innerHTML is replaced), so these never need to be re-attached.
if (!prefersReducedMotion) {
  const heroSectionEl = document.getElementById("hero");
  if (heroSectionEl) {
    heroSectionEl.addEventListener("mousemove", (e) => {
      if (!particleCanvas) return;
      const rect = particleCanvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    });
    heroSectionEl.addEventListener("mouseleave", () => {
      mouseX = null;
      mouseY = null;
    });
    if ("IntersectionObserver" in window) {
      const heroVisObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          heroVisible = entry.isIntersecting;
          if (heroVisible && !document.hidden) startParticleLoop();
          else stopParticleLoop();
        });
      }, { threshold: 0 });
      heroVisObserver.observe(heroSectionEl);
    }
  }
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopParticleLoop();
    else if (heroVisible) startParticleLoop();
  });
  let resizeTimer = null;
  window.addEventListener("resize", () => {
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (particleCanvas) resizeCanvas();
    }, 150);
  });
}

/* ===== Reading progress bar ===== */
function updateProgress() {
  progressRAF = null;
  const doc = document.documentElement;
  const scrollable = doc.scrollHeight - doc.clientHeight;
  const pct = scrollable > 0 ? Math.min(100, Math.max(0, (window.scrollY / scrollable) * 100)) : 0;
  const bar = document.getElementById("progress-bar");
  if (bar) bar.style.width = pct + "%";
}
window.addEventListener("scroll", () => {
  if (progressRAF) return;
  progressRAF = requestAnimationFrame(updateProgress);
}, { passive: true });
updateProgress();

/* ===== Anchor scrolling with sticky-navbar offset ===== */
document.addEventListener("click", (e) => {
  const a = e.target.closest ? e.target.closest('a[href^="#"]') : null;
  if (!a) return;
  const id = a.getAttribute("href").slice(1);
  if (!id) return;
  const target = document.getElementById(id);
  if (!target) return;
  e.preventDefault();
  const navEl = document.querySelector(".navbar");
  const navH = navEl ? navEl.offsetHeight : 0;
  const top = target.getBoundingClientRect().top + window.scrollY - navH - 8;
  window.scrollTo({ top: Math.max(0, top), behavior: prefersReducedMotion ? "auto" : "smooth" });
  if (history.pushState) history.pushState(null, "", "#" + id);
});

/* ===== Print safety net =====
   Belt-and-braces alongside the @media print CSS overrides: force every
   reveal + count-up to its final state before the print dialog renders,
   in case a section was never scrolled into view. */
window.addEventListener("beforeprint", () => {
  document.querySelectorAll(".reveal:not(.in)").forEach(revealElement);
  document.querySelectorAll(".stat-value").forEach(el => {
    const target = el.getAttribute("data-target");
    const suffix = el.getAttribute("data-suffix") || "";
    if (target != null) el.textContent = target + suffix;
  });
});
