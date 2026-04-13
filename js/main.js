const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.left = mx - 6 + 'px';
  cursor.style.top = my - 6 + 'px';
});

function animateRing() {
  rx += (mx - rx - 20) * 0.12;
  ry += (my - ry - 20) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animateRing);
}

animateRing();

document.querySelectorAll('a, button, .project-card, .about-card, .traj-item, .contact-channel-card, .contact-info-card, .cert-category, .photo-frame').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(2)';
    ring.style.transform = 'scale(1.5)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
    ring.style.transform = 'scale(1)';
  });
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const reveals = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

reveals.forEach(r => obs.observe(r));

const skillsObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.w + '%';
      });
    }
  });
}, { threshold: 0.2 });

if (document.getElementById('skills-grid')) {
  skillsObs.observe(document.getElementById('skills-grid'));
}

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  sections.forEach(s => {
    const top = s.offsetTop - 120;
    const id = s.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);

    if (link && scrollY >= top && scrollY < top + s.offsetHeight) {
      document.querySelectorAll('.nav-links a').forEach(a => {
        a.style.color = '';
      });
      link.style.color = 'var(--accent)';
    }
  });
});

const certModal = document.getElementById('certModal');
const certData = {
  'google-hacking-ii': {
    title: 'Curso de Google Hacking II Dorks Comandos para Hackear',
    issuer: 'Udemy',
    date: 'Completado en 2025',
    image: 'certificados/Curso_de_Google_Hacking_II_Dorks_comandos_para_Hackear.png'
  },
  'google-ai': {
    title: 'Inteligencia Artificial y productividad',
    issuer: 'Google / Santander Open Academy',
    date: 'En progreso - 90%',
    image: 'certificados/Inteligencia_Artificial_y_productividad.png'
  },
  'google-python': {
    title: 'Python',
    issuer: 'Google / Santander Open Academy',
    date: 'Completado en 2026',
    image: 'certificados/python.png'
  },
  'power-bi': {
    title: 'Power BI',
    issuer: 'Google / Santander Open Academy',
    date: 'Completado en 2026',
    image: 'certificados/power_bi.png'
  },
  'power-bi-intermedio': {
    title: 'Power BI Intermedio: Análisis y modelado de datos',
    issuer: 'Google / Santander Open Academy',
    date: 'Completado en 2026',
    image: 'certificados/power-bi-intermedio-analisis-modelado-datos.png'
  },
  'seguridad-digital': {
    title: 'Seguridad digital para tu día a día',
    issuer: 'Google / Santander Open Academy',
    date: 'Completado en 2026',
    image: 'certificados/Seguridad_digital_para_tu_dia_a_dia.png'
  },
  'excel': {
    title: 'Excel',
    issuer: 'Google / Santander Open Academy',
    date: 'Completado en 2026',
    image: 'certificados/excel.png'
  },
  'excel-avanzado': {
    title: 'Excel – de intermedio a avanzado',
    issuer: 'Google / Santander Open Academy',
    date: 'Completado en 2026',
    image: 'certificados/excel2.png'
  },
  'programar-app-desde-cero': {
    title: 'Cómo Programar Aplicaciones Desde cero',
    issuer: 'HoyAprendo',
    date: 'Completado en 2026',
    image: 'certificados/Cómo Programar Aplicaciones Desde cero .png'
  },
  'pag-wordpress': {
    title: 'Cómo Crear una Página Web con WordPress',
    issuer: 'HoyAprendo',
    date: 'Completado en 2026',
    image: 'certificados/Curso paginas web en Wordpress.png'
  },
  'diseno-canva': {
    title: 'Aprende Diseño en Canva',
    issuer: 'HoyAprendo',
    date: 'Completado en 2026',
    image: 'certificados/aprende-diseno-en-canva.png'
  }
};

document.querySelectorAll('.cert-view-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const certId = btn.getAttribute('data-cert');
    const cert = certData[certId];

    if (cert) {
      document.getElementById('certImage').src = cert.image;
      document.getElementById('certTitle').textContent = cert.title;
      document.getElementById('certIssuer').textContent = cert.issuer;
      document.getElementById('certDate').textContent = cert.date;
      certModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      cursor.style.display = 'none';
      ring.style.display = 'none';
    }
  });
});

function closeCertModal() {
  certModal.classList.remove('active');
  document.body.style.overflow = 'auto';
  cursor.style.display = 'block';
  ring.style.display = 'block';
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && certModal.classList.contains('active')) {
    closeCertModal();
  }
});
