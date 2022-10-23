window.onload = function () {
//   var url = "http://localhost:8080/gumball/sales.json";
  var url = "https://gumball.wickedlysmart.com/";
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = function () {
    if (request.status == 200) {
      updateSales(request.responseText);
    }
  };
  request.send(null);
};

function updateSales(responseText) {
  var salesDiv = document.getElementById("sales");
  var sales = JSON.parse(responseText);
  for (var i = 0; i < sales.length; i++)
  {
    var sale = sales[i];
    var div = document.createElement("div");
    div.setAttribute("class", "saleItem");
    div.innerHTML = sale.name + " sold " + sale.sales + " gumballs";
    salesDiv.appendChild(div);
  }
}
