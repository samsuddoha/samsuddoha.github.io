// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Simple project search filter
const search = document.getElementById("projectSearch");
const items = document.querySelectorAll(".project-item");

if (search) {
  search.addEventListener("input", () => {
    const q = search.value.trim().toLowerCase();
    items.forEach((col) => {
      const text = col.innerText.toLowerCase();
      col.style.display = text.includes(q) ? "" : "none";
    });
  });
}
