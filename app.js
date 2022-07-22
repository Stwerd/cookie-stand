'use strict';

let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
let HourTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let tbody = document.getElementById('TableBody');
let thead = document.getElementById('TableHead');
let tfoot = document.getElementById('Total');
let everySingleCookie = 0;
let custFlow = [0.5, 0.75, 1.0, 0.6, 0.8, 1.0, 0.7, 0.4, 0.6, 0.9, 0.7, 0.5, 0.3, 0.4, 0.6];
let TosserHead = document.getElementById('TosserBody');
let TosserHeader = document.getElementById('TosserHeader');

function Location(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.cookiesArray = [];
  this.dailyTotal = 0;
  this.custToTosser = [];
}

Location.prototype.randCustomer = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};

Location.prototype.cookiesSales = function () {
  for (let i = 0; i < hours.length; i++) {
    let custThisHour = custFlow[i] * this.randCustomer();
    //Just added the flow array that adds in the slowest and busiest times.
    let cookiesalesThisHour = Math.ceil(custThisHour * this.avg);
    this.cookiesArray.push(cookiesalesThisHour);
    this.dailyTotal += cookiesalesThisHour;

    this.custToTosser.push(cookiesalesThisHour);
  }
};
Location.prototype.tosser = function () {
  for (let i = 0; i < 14; i++) {
    let tossed = 0;
    while (this.custToTosser[i] > 0) {
      this.custToTosser[i] -= 20;
      tossed++;
    }
    if (tossed < 2) {
      this.custToTosser[i] = 2;
    }
    else {
      this.custToTosser[i] = tossed;
    }
  }
};
Location.prototype.appendTossers = function () {
  let tr = document.createElement('tr');
  TosserHead.appendChild(tr);
  let td = document.createElement('td');
  td.textContent = `${this.name}`;
  tr.appendChild(td);
  for (let z = 0; z < hours.length; z++) {
    let td = document.createElement('td');
    td.textContent = `${this.custToTosser[z]} Tossers`;
    tr.appendChild(td);
  }
};

Location.prototype.render = function () {
  this.cookiesSales();
  this.tosser();
  this.appendTossers();
  //render stored data as li's
  let tr = document.createElement('tr');
  tbody.appendChild(tr);
  let tname = document.createElement('td');
  tr.textContent = this.name;
  tbody.appendChild(tname);
  for (let i = 0; i < hours.length; i++) {
    let tableItem = document.createElement('td');
    tableItem.textContent = `${this.cookiesArray[i]} Cookies`;
    tr.appendChild(tableItem);
    HourTotal[i] += this.cookiesArray[i];
    everySingleCookie += this.cookiesArray[i];
  }
  let totalLi = document.createElement('td');
  totalLi.textContent = `${this.dailyTotal} Cookies`;
  tr.appendChild(totalLi);
};
let headRender = function () {
  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    td.textContent = hours[i];
    thead.appendChild(td);
  }
  let TotalHeader = document.createElement('td');
  TotalHeader.textContent = 'Daily Total';
  thead.appendChild(TotalHeader);
};

let footRender = function () {
  let Totals = document.createElement('td');
  Totals.textContent = 'Total';
  tfoot.appendChild(Totals);
  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    td.textContent = `${HourTotal[i]} Cookies`;
    tfoot.appendChild(td);
  }
  let last1 = document.createElement('td');
  last1.textContent = `We sold ${everySingleCookie} Cookies's Today!`;
  tfoot.appendChild(last1);
};
let TossHeadRender = function () {
  let td = document.createElement('td');
  td.textContent = `Time`;
  TosserHeader.appendChild(td);
  for (let i = 0; i < hours.length; i++) {
    let td = document.createElement('td');
    td.textContent = hours[i];
    TosserHeader.appendChild(td);
  }
};
//I'll be creating a window into the DOM

let form = document.getElementById('formid');

function handleSubmit(event) {
  event.preventDefault();
  let newLocation = event.target.newLocation.value;
  let min = event.target.newmin.value;
  let max = event.target.newmax.value;
  let avg = event.target.newavg.value;
  let newCity = new Location(newLocation, min, max, avg);
  newCity.render();
}
form.addEventListener('submit', handleSubmit);


headRender();

let seattle = new Location('Seattle', 23, 65, 6.3);
seattle.render();

let tokyo = new Location('Tokyo', 3, 24, 1.2);
tokyo.render();

let paris = new Location('Paris', 20, 28, 2.3);
paris.render();

let dubai = new Location('Dubai', 11, 38, 3.7);
dubai.render();

let lima = new Location('Lima', 2, 16, 4.8);
lima.render();

footRender();

TossHeadRender();
