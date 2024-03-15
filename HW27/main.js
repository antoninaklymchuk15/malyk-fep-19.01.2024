let storedData = [];

function showData() {
  const form = document.getElementById("registrationForm");

  const firstName = form.elements["firstName"].value.trim();
  const lastName = form.elements["lastName"].value.trim();
  const email = form.elements["email"].value.trim();

  if (!/^[a-zA-Z]+$/.test(firstName)) {
    alert("Будь ласка, введіть правильне ім'я.");
    return;
  }

  if (!/^[a-zA-Z]+$/.test(lastName)) {
    alert("Будь ласка, введіть правильне прізвище.");
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Будь ласка, введіть правильну електронну пошту.");
    return;
  }

  const data = {
    "Ім'я": firstName,
    Прізвище: lastName,
    Email: email,
    "Дата народження": form.elements["birthdate"].value,
    Стать: form.elements["gender"].value,
    Місто: form.elements["city"].value,
    Адреса: form.elements["address"].value,
    "Мови, якими володіє": getSelectedLanguages(form.elements["languages"]),
  };

  storedData.push(data);

  console.table(storedData);
}

function getSelectedLanguages(checkboxes) {
  const selectedLanguages = [];
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      selectedLanguages.push(checkbox.value);
    }
  });
  return selectedLanguages;
}
