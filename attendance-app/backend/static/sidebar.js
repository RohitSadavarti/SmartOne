const body = document.querySelector("body");
const sidebar = body.querySelector("nav.sidebar");
const toggle = body.querySelector(".toggle");
const searchBtn = body.querySelector(".search-box");
const modeSwitch = body.querySelector(".toggle-switch");
const modeText = body.querySelector(".mode-text");
const backdrop = document.querySelector(".sidebar-toggle-backdrop");

// For desktop: toggle 'close' class on click
toggle.addEventListener("click", () => {
  document.getElementById("skeleton-overlay").style.display = "flex"; // ✅ Show loader
  // For mobile view, use overlay
  setTimeout(() => {
    if (window.innerWidth <= 768) {
      sidebar.classList.toggle("open");
      backdrop.classList.toggle("show");
    } else {
      sidebar.classList.toggle("close");
    }

    document.getElementById("skeleton-overlay").style.display = "none"; // ✅ Hide loader
  }, 300); // Delay for effect; adjust as needed
});

// Optional: clicking search opens sidebar (desktop)
searchBtn?.addEventListener("click", () => {
  if (window.innerWidth > 768) {
    sidebar.classList.remove("close");
  }
});

// Dark mode toggle
modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});

// Used by backdrop click
function closeSidebar() {
  sidebar.classList.remove("open");
  backdrop.classList.remove("show");
}

// Optional if you want to control programmatically
function toggleSidebar() {
  sidebar.classList.toggle("open");
  backdrop.classList.toggle("show");
}

function toggleSubMenu(el) {
  const parent = el.closest('.has-submenu');
  parent.classList.toggle('active');
}

