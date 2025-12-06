<<<<<<< HEAD
document.getElementById("submit-btn").addEventListener("click", function () {
  
  // Correct answers
  const answers = {
    q1: "b",
    q2: "b",
    q3: "b",
    q4: "c",
    q5: "b"
  };

  let score = 0;
  let total = Object.keys(answers).length;

  // Check answers
  for (let key in answers) {
    let selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === answers[key]) {
      score++;
    }
  }

  // Display result
  const resultBox = document.getElementById("result");
  resultBox.textContent = `Your Score: ${score} out of ${total}`;

  // Color feedback
  if (score === total) {
    resultBox.style.color = "green";
  } else if (score >= total / 2) {
    resultBox.style.color = "orange";
  } else {
    resultBox.style.color = "red";
  }
});
=======
document.getElementById("submit-btn").addEventListener("click", function () {
  
  // Correct answers
  const answers = {
    q1: "b",
    q2: "b",
    q3: "b",
    q4: "c",
    q5: "b"
  };

  let score = 0;
  let total = Object.keys(answers).length;

  // Check answers
  for (let key in answers) {
    let selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === answers[key]) {
      score++;
    }
  }

  // Display result
  const resultBox = document.getElementById("result");
  resultBox.textContent = `Your Score: ${score} out of ${total}`;

  // Color feedback
  if (score === total) {
    resultBox.style.color = "green";
  } else if (score >= total / 2) {
    resultBox.style.color = "orange";
  } else {
    resultBox.style.color = "red";
  }
});
>>>>>>> 8368897584796b0afbd4eaffec87d6567eb699b6
