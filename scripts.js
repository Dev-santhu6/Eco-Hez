
const animatedImage = document.getElementById('animatedImage');
const homeContent = document.querySelector('#home .content');
const aboutContent = document.querySelector('#about .content');
const contactForm = document.querySelector('#contact form');
const navLinks = document.querySelectorAll('.navbar .nav-link');

window.addEventListener('scroll', function () {
  const aboutSection = document.getElementById('about').offsetTop;
  const contactSection = document.getElementById('contact').offsetTop;

  requestAnimationFrame(() => {
    if (window.scrollY > aboutSection - window.innerHeight / 2 && window.scrollY < contactSection - window.innerHeight / 2) {
      animatedImage.classList.remove('move-to-contact');
      animatedImage.classList.add('move-to-about');
      updateActiveLink('about');
    } else if (window.scrollY >= contactSection - window.innerHeight / 2) {
      animatedImage.classList.remove('move-to-about');
      animatedImage.classList.add('move-to-contact');
      updateActiveLink('contact');
    } else {
      animatedImage.classList.remove('move-to-about', 'move-to-contact');
      updateActiveLink('home');
    }

    if (window.scrollY < aboutSection - window.innerHeight / 2) {
      homeContent.classList.add('fade-in');
    } else {
      homeContent.classList.remove('fade-in');
    }

    if (window.scrollY >= aboutSection - window.innerHeight / 2 && window.scrollY < contactSection - window.innerHeight / 2) {
      aboutContent.classList.add('fade-in');
    } else {
      aboutContent.classList.remove('fade-in');
    }

    if (window.scrollY >= contactSection - window.innerHeight / 2) {
      contactForm.classList.add('fade-in');
    } else {
      contactForm.classList.remove('fade-in');
    }
  });
});

function updateActiveLink(section) {
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${section}`) {
      link.classList.add('active');
    }
  });
}

const navbarToggler = document.getElementById('navbarToggler');
const navbarNav = document.getElementById('navbarNav');


navbarToggler.addEventListener('click', () => {
  navbarToggler.classList.toggle('active');
  navbarNav.classList.toggle('active');
});

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#054ebb"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#054ebb"
      }
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": false
      }
    },
    "size": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#054ebb",
      "opacity": 1.5,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1.5,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "repulse": {
        "distance": 100,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});

function isMobileDevice() {
  return /Mobi|Android/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
  document.documentElement.classList.add('disable-animations');
}

const sentences = [
  "Pollution.", "Fuel Costs.", "Poor Efficiency."
];

const typingSpeed = 50;
const erasingSpeed = 50;
const sentencePause = 1000;

let sentenceIndex = 0;
let charIndex = 0;
let isErasing = false;

function typeText() {
  const typingContainer = document.getElementById('typingText');

  if (!isErasing && charIndex < sentences[sentenceIndex].length) {
    typingContainer.innerHTML += sentences[sentenceIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else if (isErasing && charIndex > 0) {
    typingContainer.innerHTML = sentences[sentenceIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(typeText, erasingSpeed);
  } else if (!isErasing && charIndex === sentences[sentenceIndex].length) {
    isErasing = true;
    setTimeout(typeText, sentencePause);
  } else if (isErasing && charIndex === 0) {
    isErasing = false;
    sentenceIndex = (sentenceIndex + 1) % sentences.length;
    setTimeout(typeText, typingSpeed);
  }
}

window.addEventListener('load', typeText);

function animatePercentages() {
  const percentages = document.querySelectorAll('.percentage');
  percentages.forEach(percentage => {
    const target = +percentage.getAttribute('data-target');
    let count = 0;
    const increment = target / 500;

    const updateCount = () => {
      count += increment;
      if (count < target) {
        percentage.innerText = `${Math.floor(count)}%`;
        requestAnimationFrame(updateCount);
      } else {
        percentage.innerText = `${target}%`;
      }
    };
    updateCount();
  });
}

const aboutSection = document.getElementById('about');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animatePercentages();
      observer.unobserve(aboutSection);
    }
  });
}, { threshold: 0.5 });

observer.observe(aboutSection);
function showImage() {
  const imageContainer = document.getElementById('imageContainer-table');
  const overlaytable = document.getElementById('overlaytable');
  overlaytable.style.display = 'block';
  imageContainer.classList.add('show');
}

function closeImage() {
  const imageContainer = document.getElementById('imageContainer-table');
  const overlaytable = document.getElementById('overlaytable');
  overlaytable.style.display = 'none';
  imageContainer.classList.remove('show');
}


window.addEventListener('load', animatePercentages);



const themeToggle = document.getElementById("theme-toggle");
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.checked = true;
}

themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
});


document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); 
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const message = document.getElementById('message').value;
const phone = document.getElementById('phone').value;


const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=engineer.ecosteem@gmail.com&su=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0A%0AMessage:%0A${encodeURIComponent(message)}%0A%0APhone:%0A${encodeURIComponent(phone)}`;

window.open(gmailLink, '_blank');
setTimeout(() => {
            location.reload();
        }, 1000);
});





