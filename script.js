const roleInput = document.querySelector("#role-input");
const companyInput = document.querySelector("#company-input");
const letterBody = document.querySelector("#letter-body");
const copyButton = document.querySelector("#copy-letter");
const printButton = document.querySelector("#print-letter");
const copyStatus = document.querySelector("#copy-status");

function updateLetter() {
  const role = roleInput.value.trim() || "backend engineering";
  const company = companyInput.value.trim() || "your company";

  letterBody.querySelectorAll(".role-slot").forEach((slot) => {
    slot.textContent = role;
  });
  letterBody.querySelectorAll(".company-slot").forEach((slot) => {
    slot.textContent = company;
  });
}

function getLetterText() {
  return letterBody.innerText.trim();
}

roleInput.addEventListener("input", updateLetter);
companyInput.addEventListener("input", updateLetter);

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(getLetterText());
    copyStatus.textContent = "Letter copied.";
  } catch (error) {
    copyStatus.textContent = "Could not copy automatically. Select and copy the letter text.";
    console.error("Unable to copy cover letter to clipboard.", error);
  }
});

printButton.addEventListener("click", () => window.print());

document.querySelector("#letter-date").textContent = new Intl.DateTimeFormat(
  undefined,
  { year: "numeric", month: "long", day: "numeric" },
).format(new Date());
document.querySelector("#year").textContent = new Date().getFullYear();
