function saveMorningLog() {
  const focus = document.getElementById('focus').value;
  const goal = document.getElementById('goal').value;
  const mood = document.getElementById('moodMorning').value;

  const date = new Date().toISOString().split('T')[0];

  const log = {
    focus,
    goal,
    mood,
    time: 'morning'
  };

  localStorage.setItem(`log-${date}-morning`, JSON.stringify(log));
  
  // ✅ Display log preview
  document.getElementById("morning-output").innerHTML = `
    <p><strong>Focus:</strong> ${focus}</p>
    <p><strong>Goal:</strong> ${goal}</p>
    <p><strong>Mood:</strong> ${mood}</p>
  `;

  alert("Morning log saved.");
}

function clearMorningLog() {
  const date = new Date().toISOString().split('T')[0];
  localStorage.removeItem(`log-${date}-morning`);
  document.getElementById("morning-output").innerHTML = "";
  alert("Morning log cleared.");
}






function saveEveningLog() {
  const accomplishment = document.getElementById('accomplishment').value;
  const improve = document.getElementById('improve').value;
  const mood = document.getElementById('moodEvening').value;

  const date = new Date().toISOString().split('T')[0];

  const log = {
    accomplishment,
    improve,
    mood,
    time: 'evening'
  };

  localStorage.setItem(`log-${date}-evening`, JSON.stringify(log));

    document.getElementById("evening-output").innerHTML = `
    <p><strong>Accomplishment:</strong> ${accomplishment}</p>
    <p><strong>Improvement:</strong> ${improve}</p>
    <p><strong>Mood:</strong> ${mood}</p>
  `;

  alert("Evening log saved.");
}

function clearEveningLog() {
  const date = new Date().toISOString().split('T')[0];
  localStorage.removeItem(`log-${date}-evening`);
  document.getElementById("evening-output").innerHTML = "";
  alert("Evening log cleared.");
}






//Goals stuff!

function saveGoals() {
  const longGoal = document.getElementById("longGoal").value;
  const shortGoal = document.getElementById("shortGoal").value;
  const dailyGoal = document.getElementById("dailyGoal").value;

  const goals = {
    long: longGoal,
    short: shortGoal,
    daily: dailyGoal
  };

  localStorage.setItem("goals", JSON.stringify(goals));

  document.getElementById("goal-output").innerHTML = `
    <p><strong>Long-Term:</strong> ${longGoal}</p>
    <p><strong>Short-Term:</strong> ${shortGoal}</p>
    <p><strong>Today:</strong> ${dailyGoal}</p>
  `;

  alert("Goals saved.");
}




// Below is ensuring to save on refresh

window.onload = function () {
  const date = new Date().toISOString().split('T')[0];

  // Load Morning Log
  const morningLog = localStorage.getItem(`log-${date}-morning`);
  if (morningLog) {
    const log = JSON.parse(morningLog);
    document.getElementById("morning-output").innerHTML = `
      <p><strong>Focus:</strong> ${log.focus}</p>
      <p><strong>Goal:</strong> ${log.goal}</p>
      <p><strong>Mood:</strong> ${log.mood}</p>
    `;
  }

  // Load Evening Log
  const eveningLog = localStorage.getItem(`log-${date}-evening`);
  if (eveningLog) {
    const log = JSON.parse(eveningLog);
    document.getElementById("evening-output").innerHTML = `
      <p><strong>Accomplishment:</strong> ${log.accomplishment}</p>
      <p><strong>Improvement:</strong> ${log.improve}</p>
      <p><strong>Mood:</strong> ${log.mood}</p>
    `;
  }

    const savedGoals = localStorage.getItem("goals");
  if (savedGoals) {
    const goals = JSON.parse(savedGoals);
    document.getElementById("goal-output").innerHTML = `
      <p><strong>Long-Term:</strong> ${goals.long}</p>
      <p><strong>Short-Term:</strong> ${goals.short}</p>
      <p><strong>Today:</strong> ${goals.daily}</p>
    `;
    // Optional: pre-fill the input boxes
    document.getElementById("longGoal").value = goals.long;
    document.getElementById("shortGoal").value = goals.short;
    document.getElementById("dailyGoal").value = goals.daily;
  }

};