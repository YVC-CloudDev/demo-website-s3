const copyButtons = document.querySelectorAll("[data-copy-target]");

copyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-copy-target");
    const source = document.getElementById(targetId);
    if (!source) {
      return;
    }

    const text = source.innerText;
    navigator.clipboard.writeText(text).then(() => {
      const original = button.textContent;
      button.textContent = "Copied";
      setTimeout(() => {
        button.textContent = original;
      }, 1200);
    });
  });
});

const progress = document.getElementById("lab-progress");
const checkboxes = document.querySelectorAll("[data-step-check]");

if (progress && checkboxes.length > 0) {
  const updateProgress = () => {
    const done = Array.from(checkboxes).filter((item) => item.checked).length;
    progress.value = done;
    progress.max = checkboxes.length;
    progress.setAttribute("aria-valuetext", `${done} of ${checkboxes.length} steps complete`);
  };

  checkboxes.forEach((item) => item.addEventListener("change", updateProgress));
  updateProgress();
}

const faqTriggers = document.querySelectorAll(".faq-q");

faqTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const answerId = trigger.getAttribute("aria-controls");
    const panel = document.getElementById(answerId);
    if (!panel) {
      return;
    }

    const isOpen = !panel.hasAttribute("hidden");
    if (isOpen) {
      panel.setAttribute("hidden", "");
      trigger.setAttribute("aria-expanded", "false");
    } else {
      panel.removeAttribute("hidden");
      trigger.setAttribute("aria-expanded", "true");
    }
  });
});
