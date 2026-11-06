// Header scroll effect
const header = document.querySelector('.site-header');
const menuBtn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
const navLinks = nav.querySelectorAll('a');

window.addEventListener('scroll', function () {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobile menu toggle
function closeMenu() {
  nav.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
}

if (menuBtn) {
  menuBtn.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', isOpen);
  });
}

navLinks.forEach(function (link) {
  link.addEventListener('click', closeMenu);
});

// Active section highlight
const sections = document.querySelectorAll('main section[id]');
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) return;
    navLinks.forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
    });
  });
}, { rootMargin: '-40% 0px -50% 0px' });

sections.forEach(function (s) { observer.observe(s); });

// Web Audio API Synthesized Cyber Sound Effects
const SoundFX = (function () {
  let audioCtx = null;
  let enabled = true;

  function initCtx() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) audioCtx = new AudioContext();
    }
  }

  function playBlip(freq = 600, duration = 0.04, type = 'sine') {
    if (!enabled) return;
    try {
      initCtx();
      if (!audioCtx || audioCtx.state === 'suspended') {
        audioCtx && audioCtx.resume();
      }
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.5, audioCtx.currentTime + duration);

      gain.gain.setValueAtTime(0.06, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {}
  }

  return {
    click: () => playBlip(750, 0.03, 'sine'),
    switchTab: () => playBlip(950, 0.05, 'triangle'),
    check: () => playBlip(1200, 0.04, 'sine'),
    toggleSound: function () {
      enabled = !enabled;
      return enabled;
    },
    isEnabled: () => enabled
  };
})();

// SFX Toggle Setup
(function initSFXControl() {
  const btn = document.getElementById('sfx-toggle');
  if (!btn) return;
  const onIcon = btn.querySelector('.sfx-on');
  const offIcon = btn.querySelector('.sfx-off');
  const label = btn.querySelector('.sfx-label');

  btn.addEventListener('click', () => {
    const isNowOn = SoundFX.toggleSound();
    if (isNowOn) {
      onIcon.style.display = 'inline';
      offIcon.style.display = 'none';
      label.textContent = 'SFX: ON';
      btn.classList.add('active');
      SoundFX.click();
    } else {
      onIcon.style.display = 'none';
      offIcon.style.display = 'inline';
      label.textContent = 'SFX: OFF';
      btn.classList.remove('active');
    }
  });
})();

// Dynamic Dev Typewriter Effect for the Terminal Code Line
(function initCodeTypewriter() {
  const codeElem = document.getElementById('code-typing');
  if (!codeElem) return;

  const commands = [
    'nextgen --inspect-team --available',
    'git commit -m "feat: ship robust enterprise apps"',
    'docker compose up -d --build production',
    'npx create-next-app@latest modern-web --ts',
    'react-native run-ios --device "Production"',
    'kubectl rollout status deployment/nextgen-api',
    'cargo build --release --target webassembly',
    'python -m ai_pipeline.train --precision fp16'
  ];

  let cmdIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 55;

  function typeStep() {
    const currentCmd = commands[cmdIndex];

    if (isDeleting) {
      codeElem.textContent = currentCmd.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 25;
    } else {
      codeElem.textContent = currentCmd.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 50 + Math.random() * 30;
    }

    if (!isDeleting && charIndex === currentCmd.length) {
      typingSpeed = 2400;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      cmdIndex = (cmdIndex + 1) % commands.length;
      typingSpeed = 500;
    }

    setTimeout(typeStep, typingSpeed);
  }

  typeStep();
})();

// Interactive 3D Card Hover Tilt Effect
(function init3DTilt() {
  const tiltCards = document.querySelectorAll('.tilt-card');
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  tiltCards.forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
})();

// Interactive Service Console Tabs
(function initServiceConsole() {
  const tabs = document.querySelectorAll('.console-tab');
  const panes = document.querySelectorAll('.console-pane');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      SoundFX.switchTab();
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      panes.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const targetId = 'pane-' + tab.getAttribute('data-tab');
      const targetPane = document.getElementById(targetId);
      if (targetPane) {
        targetPane.classList.add('active');
      }
    });
  });
})();

// Syntax Highlighter for Builder Summary JSON
function formatBlueprintHTML(obj) {
  return [
    '{',
    `  <span class="syn-key">"project_scope"</span>: <span class="syn-val-scope">"${obj.project_scope}"</span>,`,
    `  <span class="syn-key">"expected_timeline"</span>: <span class="syn-val-time">"${obj.expected_timeline}"</span>,`,
    `  <span class="syn-key">"required_features"</span>: [`,
    obj.required_features.map((f, i, arr) => `    <span class="syn-val-feat">"${f}"</span>${i < arr.length - 1 ? ',' : ''}`).join('\n'),
    `  ],`,
    `  <span class="syn-key">"quote_request"</span>: <span class="syn-str">"${obj.quote_request}"</span>,`,
    `  <span class="syn-key">"client_team"</span>: <span class="syn-str">"${obj.client_team}"</span>`,
    '}'
  ].join('\n');
}

// Interactive Project Builder & Live Spec Generator
(function initProjectBuilder() {
  const platformButtons = document.querySelectorAll('#platform-options .opt-btn');
  const timelineButtons = document.querySelectorAll('#timeline-options .opt-btn');
  const checkboxes = document.querySelectorAll('.checkbox-grid input[type="checkbox"]');
  const blueprintOutput = document.getElementById('blueprint-output');
  const sendSpecBtn = document.getElementById('send-spec-btn');

  let selectedPlatform = 'เว็บทั่วไป (Landing Page)';
  let selectedTimeline = 'ตามกำหนดมาตรฐาน (1 เดือน)';

  function updateBlueprint() {
    const selectedFeatures = [];
    checkboxes.forEach(cb => {
      if (cb.checked) selectedFeatures.push(cb.value);
    });

    const specObj = {
      project_scope: selectedPlatform,
      expected_timeline: selectedTimeline,
      required_features: selectedFeatures.length > 0 ? selectedFeatures : ['ยังไม่ได้ระบุฟีเจอร์'],
      quote_request: 'Free Consultation & Price Estimation',
      client_team: 'NextGen Unemployed Fullstack Squad'
    };

    blueprintOutput.innerHTML = formatBlueprintHTML(specObj);

    // Format message to prepopulate LINE URL
    const messageLines = [
      'สวัสดีครับทีมงาน NextGen Unemployed ขอปรึกษาโปรเจกต์ครับ:',
      `- ประเภท: ${selectedPlatform}`,
      `- ไทม์ไลน์: ${selectedTimeline}`,
      `- ฟีเจอร์ที่ต้องการ: ${selectedFeatures.join(', ')}`
    ];
    const encodedMsg = encodeURIComponent(messageLines.join('\n'));
    sendSpecBtn.href = `https://lin.ee/rmQq8nq?text=${encodedMsg}`;
  }

  platformButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      SoundFX.click();
      platformButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedPlatform = btn.getAttribute('data-val');
      updateBlueprint();
    });
  });

  timelineButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      SoundFX.click();
      timelineButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      selectedTimeline = btn.getAttribute('data-val');
      updateBlueprint();
    });
  });

  checkboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      SoundFX.check();
      updateBlueprint();
    });
  });

  updateBlueprint();
})();

// Interactive Tech Stack Filter Tabs
(function initStackFilter() {
  const tabBtns = document.querySelectorAll('.stack-tab-btn');
  const stackGroups = document.querySelectorAll('.stack-group');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      SoundFX.click();
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      stackGroups.forEach(group => {
        const cat = group.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          group.classList.remove('hidden');
        } else {
          group.classList.add('hidden');
        }
      });
    });
  });
})();

// FAQ accordion single open behavior
const faqs = document.querySelectorAll('.faq-box');
faqs.forEach(function (item) {
  item.addEventListener('toggle', function () {
    if (!item.open) return;
    SoundFX.click();
    faqs.forEach(function (other) {
      if (other !== item) other.open = false;
    });
  });
});

// Interactive Cyberpunk Constellation Canvas Background with Mouse Repulsion
(function initCanvasBackground() {
  const canvas = document.getElementById('canvas-bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const particleCount = 50;
  let mouse = { x: -1000, y: -1000, radius: 150 };

  window.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.45;
      this.vy = (Math.random() - 0.5) * 0.45;
      this.radius = Math.random() * 1.6 + 0.6;
      this.alpha = Math.random() * 0.5 + 0.2;
      this.color = Math.random() > 0.5 ? '0, 210, 255' : '147, 51, 234';
    }
    update() {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.hypot(dx, dy);
      if (dist < mouse.radius) {
        const force = (mouse.radius - dist) / mouse.radius;
        this.x -= (dx / dist) * force * 2;
        this.y -= (dy / dist) * force * 2;
      }

      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
        this.reset();
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = `rgba(${this.color}, 0.8)`;
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function render() {
    ctx.clearRect(0, 0, width, height);
    ctx.shadowBlur = 0;

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.hypot(dx, dy);

        if (dist < 125) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          const lineAlpha = (1 - dist / 125) * 0.16;
          ctx.strokeStyle = `rgba(0, 210, 255, ${lineAlpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
})();
