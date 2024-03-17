let select = document.querySelectorAll(".currency");
let input = document.getElementById("input");
let output = document.getElementById("output");
let btn = document.getElementById("convert");

const host = "api.frankfurter.app";
fetch(`https://${host}/currencies`)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    let entries = Object.entries(data);
    console.log(entries);
    console.log(select);
    for (let i = 0; i < entries.length; i++) {
      select[0].innerHTML += ` <option value="${entries[i][0]}">${entries[i][0]}</option>`;
      select[1].innerHTML += ` <option value="${entries[i][0]}">${entries[i][0]}</option>`;
    }
  });

btn.addEventListener("click", () => {
  console.log("called");
  const host = "api.frankfurter.app";
  fetch(
    `https://${host}/latest?amount=${input.value}&from=${select[0].value}&to=${select[1].value}`
  )
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);
      let values = Object.values(data.rates)[0];
      console.log(values);
      output.value = values;
    });
});
