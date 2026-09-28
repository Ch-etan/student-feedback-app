const feedbackForm = document.getElementById("feedbackForm");
const feedbackList = document.getElementById("feedbackList");

feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const course = document.getElementById("course").value.trim();
    const feedback = document.getElementById("feedback").value.trim();

    if (!name || !course || !feedback) {
        alert("Please fill in all fields.");
        return;
    }

    const feedbackCard = document.createElement("div");
    feedbackCard.className = "feedback-card";

    const studentName = document.createElement("h3");
    studentName.textContent = name;

    const courseName = document.createElement("p");
    courseName.textContent = `Course: ${course}`;

    const feedbackText = document.createElement("p");
    feedbackText.textContent = `Feedback: ${feedback}`;

    feedbackCard.appendChild(studentName);
    feedbackCard.appendChild(courseName);
    feedbackCard.appendChild(feedbackText);

    feedbackList.appendChild(feedbackCard);

    feedbackForm.reset();
});