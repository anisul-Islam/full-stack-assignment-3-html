const handleSubmit = (event) => {
  event.preventDefault();

  const myForm = event.target;
  const formData = new FormData(myForm);
  const messageDiv = document.getElementById("submissionMessage");

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
        messageDiv.style.marginTop="15px";
      messageDiv.textContent = "Thank you for your submission";
      messageDiv.style.color = "green"; // Optionally, change the color to green
    })
    .catch((error) => {
      messageDiv.textContent = `Submission failed: ${error}`;
      messageDiv.style.color = "red"; // Optionally, change the color to red
    });
};

document.querySelector("form").addEventListener("submit", handleSubmit);
