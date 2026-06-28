const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const form = document.querySelector(".contact-form");
const note = document.querySelector(".form-note");

function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

toggle.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  note.textContent = "已收到需求範例。正式上線時可串接 Email、LINE 或表單服務。";
  form.reset();
});

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
