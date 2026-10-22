const transitionOverlay = document.getElementById("transitionOverlay");
const pageContent = document.querySelector(".page-content");

// Handle semua link yang punya class nav-link
document.addEventListener("click", (e) => {
  const link = e.target.closest(".nav-link");

  if (!link) return;

  const href = link.getAttribute("href");

  // Skip jika link adalah anchor (#) atau kosong
  if (!href || href === "#" || href.startsWith("#")) {
    return;
  }

  // Skip jika link external atau email
  if (href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel")) {
    return;
  }

  e.preventDefault();

  // Mulai transisi
  startTransition(href);
});

function startTransition(href) {
  // Fade out halaman
  pageContent.classList.add("fade-out");

  // Tampilkan overlay
  transitionOverlay.classList.add("active");

  // Tunggu transisi selesai, lalu pindah halaman
  setTimeout(() => {
    window.location.href = href;
  }, 400);
}

// Fade in saat halaman load
window.addEventListener("load", () => {
  transitionOverlay.classList.remove("active");
  pageContent.classList.remove("fade-out");
});

// Handle back button browser
window.addEventListener("pageshow", (e) => {
  transitionOverlay.classList.remove("active");
  pageContent.classList.remove("fade-out");
});