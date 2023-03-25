// Purchased on 7-12-2018
// Purchased Received 7-16-2018
// Cost 2771.21
document.querySelector("#run").addEventListener("click", run);

const datePurchased = document.querySelector("#purchaseDate").innerHTML;
const totalCost = document.querySelector("#usd").innerHTML;
const cost = Number(document.querySelector("#usd").innerHTML);
console.log(datePurchased);

function run() {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  today = mm + "/" + dd + "/" + yyyy;
  console.log(today);

  const datePurchasedFormat = new Date(datePurchased);
  const todayFormat = new Date(today);

  // To calculate the time difference of two dates
  let Difference_In_Time =
    todayFormat.getTime() - datePurchasedFormat.getTime();
  console.log(Difference_In_Time);

  // To calculate the no. of days between two dates
  let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

  console.log(`${Difference_In_Days} - Difference in days`);

  // daily cost is totalCost/difference_InDays
  document.querySelector("#dailycost").value = cost / Difference_In_Days;
}
