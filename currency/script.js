let select = document.querySelectorAll(".currency")
let btn = document.getElementById("btn")
let input = document.getElementById("input")
fetch("https://api.frankfurter.app/currencies")
  .then(res => res.json())
  .then(res => displayDropdown(res));
function displayDropdown(res) {
    let curr = Object.entries(res)
    for (let i=0;i<curr.length;i++) {
        let opt = `<option value="${curr[i][0]}">${curr[i][0]}</option>`
        select[0].innerHTML += opt
        select[1].innerHTML += opt
    }
}
btn.addEventListener("click", () => {
    let curr1 = select[0].value
    let curr2 = select[1].value
    let inputVal = input.value
    if (curr1 === curr2) {
        alert("Please select different currencies for conversion.")
    }
    else{
        convert(curr1,curr2,inputVal)
    }
});

function convert(curr1,curr2,inputVal) {
  const host= "https://api.frankfurter.app";
  fetch(`https://api.frankfurter.dev/v1/latest?base=${curr1}&symbols=${curr2}`)
    .then((resp) => resp.json())
    .then((data) => {
      document.getElementById("result").value = Object.values(data.rates)[0]
    });
  }
