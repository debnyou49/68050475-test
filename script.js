// ===== MOVIE DATA (JJK Theme) =====
const movies = [
  {
    title: "มหาเวทย์ผนึกมาร",
    director: "อาจารย์ เกเงะ อากูตามิ",
    actors: "โกะโจ ซาโตรุ, อิตาโดริ ยูจิ ฟุชิงุโระ เมงุมิ",
    synopsis: "เล่าเรื่องราวของ อิตาโดริ ยูจิ นักเรียนมัธยมพลังช้างเผือกที่กลืน นิ้วสุคุนะ คำสาประดับพิเศษเข้าไปเพื่อช่วยเพื่อน ทำให้เขาต้องกลายเป็นภาชนะของราชาคำสาป ยูจิเข้าเรียนโรงเรียนไสยเวทโตเกียวเพื่อตามหานิ้วที่เหลือและปัดเป่าคำสาป ร่วมกับเพื่อนๆ และอาจารย์โกะโจ ซาโตรุ",
    posterStyle: "background: linear-gradient(135deg, #0f0a1e, #2d1458, #1a0a2e);",
    posterIcon: "fas fa-mask"
  },
  {
    title: "วันพีช",
    director: " เออิจิโระ โอดะ",
    actors: "มังกี้ ดี. ลูฟี่, โรโรโนอา โซโร ซันจิ",
    synopsis: " เป็นเรื่องราวการผจญภัยของ มังกี้ ดี. ลูฟี่ เด็กหนุ่มผู้มีร่างกายเป็นยางจากการกินผลปีศาจ ที่ออกเดินทางรวบรวมพรรคพวกเพื่อค้นหาสมบัติในตำนาน ",
    posterStyle: "background: linear-gradient(135deg, #0a0a14, #1a1a3e, #0d2050);",
    posterIcon: "fas fa-dna"
  },
  {
    title: "Gundam Seed Freedom Special Edition",
    director: "Mitsuo Fukuda",
    actors: "Soichiro Hoshi, Rie Tanaka, Akira Ishida",
    synopsis: "ในปีจักรวาลที่ 75 หลังสงครามจบลง โลกยังคงอยู่ในความวุ่นวาย กีอัส ยามาโตะ นักรบ Freedom กลับมาอีกครั้งพร้อมภารกิจเพื่อปกป้องสันติภาพที่เขาและเพื่อนร่วมรบต่อสู้มาตลอดชีวิต ในรูปแบบ Special Edition ที่มาพร้อมฉากพิเศษและ CG ที่ถูกปรับปรุงใหม่ทั้งหมด",
    posterStyle: "background: linear-gradient(135deg, #050510, #0d1535, #071525);",
    posterIcon: "fas fa-robot"
  }
];

// ===== OPEN MODAL =====
function openModal(index) {
  const movie = movies[index];
  document.getElementById('modalTitle').textContent = movie.title + " - รายละเอียด";
  document.getElementById('modalDirector').textContent = movie.director;
  document.getElementById('modalActors').textContent = movie.actors;
  document.getElementById('modalSynopsis').textContent = movie.synopsis;

  const posterBox = document.getElementById('modalPoster');
  posterBox.style.cssText = movie.posterStyle;
  posterBox.innerHTML = `<i class="${movie.posterIcon}" style="font-size:5rem; color:rgba(168,85,247,0.3); filter:drop-shadow(0 0 20px rgba(168,85,247,0.5));"></i>`;

  const modal = new bootstrap.Modal(document.getElementById('movieModal'));
  modal.show();
}

// ===== SUBMIT FORM =====
function submitForm() {
  const name    = document.getElementById('inputName').value.trim();
  const email   = document.getElementById('inputEmail').value.trim();
  const message = document.getElementById('inputMessage').value.trim();
  const alertBox = document.getElementById('formAlert');

  if (!name || !email || !message) {
    alertBox.innerHTML = `
      <div class="alert border-0" style="background:rgba(124,58,237,0.15); color:#c084fc; border-radius:10px; border:1px solid rgba(124,58,237,0.3) !important;">
        <i class="fas fa-exclamation-circle me-2"></i>กรุณากรอกข้อมูลให้ครบทุกช่อง
      </div>`;
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alertBox.innerHTML = `
      <div class="alert border-0" style="background:rgba(124,58,237,0.15); color:#c084fc; border-radius:10px; border:1px solid rgba(124,58,237,0.3) !important;">
        <i class="fas fa-exclamation-circle me-2"></i>กรุณากรอกอีเมลให้ถูกต้อง
      </div>`;
    return;
  }

  alertBox.innerHTML = `
    <div class="alert border-0" style="background:rgba(6,182,212,0.1); color:#67e8f9; border-radius:10px; border:1px solid rgba(6,182,212,0.3) !important;">
      <i class="fas fa-check-circle me-2"></i>ส่งข้อมูลเรียบร้อยแล้ว ขอบคุณที่ติดต่อเรา!
    </div>`;

  document.getElementById('inputName').value    = '';
  document.getElementById('inputEmail').value   = '';
  document.getElementById('inputMessage').value = '';

  setTimeout(() => { alertBox.innerHTML = ''; }, 4000);
}

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
  const nav = document.getElementById('mainNav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// ===== SMOOTH SCROLL FOR NAV LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      const navMenu = document.getElementById('navMenu');
      if (navMenu.classList.contains('show')) {
        document.querySelector('.navbar-toggler').click();
      }
    }
  });
});

// ===== INTERSECTION OBSERVER (fade-in on scroll) =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity    = '1';
      entry.target.style.transform  = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.movie-card, .stat-box, .contact-card').forEach(el => {
  el.style.opacity    = '0';
  el.style.transform  = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ===== CURSED ENERGY CURSOR EFFECT =====
const canvas = document.createElement('canvas');
canvas.style.cssText = 'position:fixed;top:0;left:0;pointer-events:none;z-index:9999;';
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
});

const particles = [];
let mouseX = 0, mouseY = 0;

window.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  for (let i = 0; i < 3; i++) {
    particles.push({
      x: mouseX, y: mouseY,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      life: 1,
      size: Math.random() * 4 + 1,
      color: Math.random() > 0.5 ? '168,85,247' : '6,182,212'
    });
  }
});

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.x    += p.vx;
    p.y    += p.vy;
    p.life -= 0.035;
    if (p.life <= 0) { particles.splice(i, 1); continue; }
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${p.color},${p.life * 0.7})`;
    ctx.shadowColor = `rgba(${p.color},0.8)`;
    ctx.shadowBlur  = 8;
    ctx.fill();
  }
  requestAnimationFrame(animateParticles);
}

animateParticles();