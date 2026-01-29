setInterval(()=>{
  document.getElementById("clock").innerHTML =
  new Date().toLocaleTimeString();
},1000);
function login(){
  if(u.value=="admin" && p.value=="admin")
    location.href="dashboard.html";
  else
    alert("Invalid Login");
}
function addStock(){
  let name = sname.value;
  let price = sprice.value;

  if(name=="" || price=="") return alert("Fill all fields");

  let div = document.createElement("div");
  div.className="stock-card";
  div.innerHTML = `<h3>${name}</h3><p>${price}</p>`;
  document.getElementById("newStocks").appendChild(div);

  sname.value="";
  sprice.value="";
}
let stocks = JSON.parse(localStorage.getItem("stocks")) || [];

function renderStocks(){
  let area = document.getElementById("newStocks");
  if(!area) return;
  area.innerHTML = "";
  stocks.forEach(s=>{
    let div = document.createElement("div");
    div.className = "stock-card";
    div.innerHTML = `<h3>${s.name}</h3><p>${s.price}</p>`;
    area.appendChild(div);
  });
}

function addStock(){
  let name = sname.value;
  let price = sprice.value;
  if(name=="" || price=="") return alert("Fill all fields");

  stocks.push({name, price});
  localStorage.setItem("stocks", JSON.stringify(stocks));
  renderStocks();
}
renderStocks();
function logout(){
  location.href="login.html";
}let change = Math.random()>0.5 ? "📈" : "📉";
div.innerHTML = `<h3>${s.name} ${change}</h3><p>${s.price}</p>`;
let color = Math.random() > 0.5 ? "lime" : "red";
div.innerHTML = `
  <h3>${s.name}</h3>
  <p style="color:${color}">${s.price}</p>
`;
div.innerHTML = `
  <h3>${s.name}</h3>
  <p>${s.price}</p>
  <button onclick="deleteStock(${i})">Delete</button>
`;
let pl = Math.random()>0.5 ? "Profit" : "Loss";
div.innerHTML += `<small>${pl}</small>`;
function searchStock(){
  let value = search.value.toLowerCase();
  document.querySelectorAll(".stock-card").forEach(card=>{
    card.style.display =
      card.innerText.toLowerCase().includes(value) ? "block" : "none";
  });
}
function autoUpdatePrices(){
  stocks = stocks.map(s=>{
    let change = (Math.random()*10 - 5).toFixed(2);
    let newPrice = (parseFloat(s.price) + parseFloat(change)).toFixed(2);
    return { name: s.name, price: newPrice };
  });
  localStorage.setItem("stocks", JSON.stringify(stocks));
  renderStocks();
}

setInterval(autoUpdatePrices, 5000); // every 5 seconds
function marketStatus(){
  let h = new Date().getHours();
  let status = (h >= 9 && h < 15) ? "🟢 Market Open" : "🔴 Market Closed";
  document.getElementById("market").innerText = status;
}
marketStatus();
function deleteStock(i){
  stocks.splice(i,1);
  localStorage.setItem("stocks", JSON.stringify(stocks));
  renderStocks();
}
setTimeout(()=>{
  let l = document.getElementById("loader");
  if(l) l.style.display="none";
},2000);
