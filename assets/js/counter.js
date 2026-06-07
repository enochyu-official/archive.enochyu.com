document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".view-count").forEach(async (span) => {
    const itemName = span.getAttribute("unique-id");
    try {
      const response = await fetch(`https://archive-view-count-db.enochyu.workers.dev/?name=${itemName}`);
      const text = await response.text();
      
      span.textContent = text.match(/\d+$/)?.[0];
    } catch {
      span.textContent = "—";
    }
  });
});

