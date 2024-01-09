function onSubmit() {
  const tomeg = document.getElementById("testtomeg").value;
  const magassag = document.getElementById("magassag").value;
  const bmi = (tomeg / (magassag * magassag)).toFixed(2);
  const result = document.querySelector(".result");

  if (bmi < 16) {
    result.innerHTML = `Az Ön testtömeg indexe ${bmi}
    )}; Súlyos soványság`;
  } else if (bmi >= 16 && bmi <= 16.99) {
    result.innerHTML = `Az Ön testtömeg indexe ${bmi}; Mérsékelt soványság`;
  } else if (bmi >= 17 && bmi <= 18.49) {
    result.innerHTML = `Az Ön testtömeg indexe ${bmi}; Enyhe soványság`;
  } else if (bmi >= 18.5 && bmi <= 24.99) {
    result.innerHTML = `Az Ön testtömeg indexe ${bmi}; Normális testsúly`;
  } else if (bmi >= 25 && bmi <= 29.99) {
    result.innerHTML = `Az Ön testtömeg indexe ${bmi}; Túlsúlyos`;
  } else if (bmi >= 30 && bmi <= 34.99) {
    result.innerHTML = `Az Ön testtömeg indexe ${bmi}; I. fokú elhízás`;
  } else if (bmi >= 35 && bmi <= 39.99) {
    result.innerHTML = `Az Ön testtömeg indexe ${bmi}; II. fokú elhízás`;
  } else if (bmi >= 40) {
    result.innerHTML = `Az Ön testtömeg indexe ${bmi}; III. fokú (súlyos) elhízás`;
  } else {
    result.innerHTML = `Hiba történt, kérjük próbálja újra.`;
  }
}
