            document.querySelectorAll('a[href^="#"]').forEach
            (anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute
                    ('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
            window.addEventListener('scroll', () => {
                const navbar = document.querySelector('.navbar');
                window.scrollY > 50 ? 
                    navbar.style.backgroundColor = 'rgba(10,10,10,0.98)' :
                    navbar.style.backgroundColor = 'rgba(10,10,10,0.95)';
            });
            const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
/* Typing Effect */
const text = "Full-Stack Developer";
let index = 0;
const typingElement = document.getElementById("typing-text");

function typeEffect() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 120);
    }
}
typeEffect();

/* Scroll Progress Bar */
window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    document.querySelector(".scroll-progress").style.width = progress + "%";
});

/* Mouse Follow Neon Light */
const neonCursor = document.querySelector(".neon-cursor");

document.addEventListener("mousemove", (e) => {
    neonCursor.style.left = e.clientX + "px";
    neonCursor.style.top = e.clientY + "px";
});
/* UI SOUND EFFECTS */
const hoverSound = new Audio("hover.mp3");
hoverSound.volume = 0.2;

document.querySelectorAll("a, button, .skill-card, .stat-card").forEach(el => {
  el.addEventListener("mouseenter", () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });
});
/* PARALLAX DEPTH EFFECT */
document.addEventListener("mousemove", (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 40;
  const y = (window.innerHeight / 2 - e.clientY) / 40;

  const heroImg = document.querySelector(".profile-img");
  if (heroImg) {
    heroImg.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
  }
});
/* 3D HOVER TILT */
document.querySelectorAll(".skill-card, .stat-card").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * 12;
    const rotateY = (x / rect.width - 0.5) * -12;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});
function animateCounter(element, target) {
  let count = 0;
  const increment = target / 100;
  const interval = setInterval(() => {
    count += increment;
    if(count >= target) {
      element.textContent = target + (element.dataset.suffix || "");
      clearInterval(interval);
    } else {
      element.textContent = Math.floor(count) + (element.dataset.suffix || "");
    }
  }, 20);
}

const statCards = document.querySelectorAll(".stat-card h3");

statCards.forEach(h3 => {
  const target = parseInt(h3.textContent.replace("+","").replace("%",""));
  h3.dataset.suffix = h3.textContent.includes("%") ? "%" : h3.textContent.includes("+") ? "+" : "";
  h3.textContent = "0" + h3.dataset.suffix;
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        animateCounter(h3, target);
        observer.unobserve(h3);
      }
    });
  }, { threshold: 0.6 });
  
  observer.observe(h3);
});

