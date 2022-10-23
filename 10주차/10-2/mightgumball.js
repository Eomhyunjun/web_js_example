window.onload = function () {
  setInterval(handleRefresh, 3000);
};

function updateSales(sales) {
  var salesDiv = document.getElementById("sales");
  for (var i = 0; i < sales.length; i++)
  {
    var sale = sales[i];
    var div = document.createElement("div");
    div.setAttribute("class", "saleItem");
    div.innerHTML = sale.name + " sold " + sale.sales + " gumballs";
    salesDiv.appendChild(div);
  }
}

function handleRefresh() {
  alert("I'm alive");
}