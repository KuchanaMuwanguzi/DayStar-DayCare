let teachers = [];

function addTeacher(name) {
  teachers.push({ name: name, available: true, duty: null });
  updateAvailableTeachers();
}

function checkIn(name) {
  const teacher = teachers.find((teacher) => teacher.name === name);
  if (teacher) {
    teacher.available = true;
    updateAvailableTeachers();
    console.log(`${name} checked in successfully.`);
  } else {
    console.log(`Teacher ${name} not found.`);
  }
}

function assignDuty() {
  const dutyInput = document.getElementById("duty-input");
  const duty = dutyInput.value.trim();
  dutyInput.value = "";
  if (!duty) {
    alert("Please enter a duty.");
    return;
  }
  const availableTeacher = teachers.find((teacher) => teacher.available);
  if (availableTeacher) {
    availableTeacher.duty = duty;
    availableTeacher.available = false;
    updateAvailableTeachers();
    console.log(`${availableTeacher.name} has been assigned duty: ${duty}.`);
  } else {
    console.log("No available teachers to assign duty.");
  }
}

function updateAvailableTeachers() {
  const availableTeachersList = document.getElementById("available-teachers");
  availableTeachersList.innerHTML = "";
  teachers.forEach((teacher) => {
    if (teacher.available) {
      const li = document.createElement("li");
      li.textContent = teacher.name;
      availableTeachersList.appendChild(li);
    }
  });
}

// Example usage:
addTeacher("Teacher 1");
addTeacher("Teacher 2");
addTeacher("Teacher 3");


