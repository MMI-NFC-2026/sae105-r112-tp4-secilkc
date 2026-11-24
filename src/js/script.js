// *** ACCORDEON ***

const accordeon = document.querySelector(".accordeon");

accordeon.addEventListener("click", (event) => {
  const summary = event.target.closest("summary");
  if (!summary) return;

  const courant = summary.parentElement;
  accordeon.querySelectorAll("details").forEach((det) => {
    if (det !== courant) det.open = false;
  });
});