const tableBody = document.querySelector(".table-body");
const priceMain = document.querySelector(".price-main");

function toNumber(currencyString) {
  const cleanedString = currencyString.replace(/₹|,/g, "");

  const intValue = parseInt(cleanedString, 10);

  return isNaN(intValue) ? 0 : intValue; // Handle invalid input gracefully
}

function calPercent(originalValue, newValue) {
  const difference = newValue - originalValue;
  const percentageDifference = (difference / originalValue) * 100;

  return percentageDifference;
}

const price = toNumber(priceMain.textContent);

let fetchedData = [];
const fetchData = async () => {
  try {
    const res = await fetch("http://localhost:3001/api/crypto");
    const data = await res.json();
    fetchedData = data;
    console.log(fetchedData);
    renderData();
  } catch (error) {
    console.log(error.message);
  }
};
fetchData();

// name, last, buy, Sell, volume, base_unit
const renderData = () => {
  let html = "";
  fetchedData.forEach((data, index) => {
    html += `
      <tr>
        <td>${index + 1}</td>
        <td>${data.name}</td>
        <td>₹ ${data.last}</td>
        <td>₹ ${data.buy} / ₹ ${data.sell}</td>
        <td class=${
          calPercent(price, data.last) > 0 ? "positive" : "negative"
        }>${calPercent(price, data.last).toFixed(2)} %</td>
        <td class=${price - data.last > 0 ? "positive" : "negative"}>₹ ${
      price - data.last
    }</td>
      </tr>
    `;
  });
  tableBody.innerHTML = html;
};
