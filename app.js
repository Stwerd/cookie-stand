'use strict';

let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];

let Seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calcCookiesperHour: function () {
    let customersThisHours = this.getRandomCustomers();
    let cookiesSoldthisHours = Math.ceil(customersThisHours * this.avg);
    return cookiesSoldthisHours;
  },
  render: function (listName) {
    let total = 0;
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      let num = this.calcCookiesperHour();
      li.textContent = `${hours[i]} | ${num} Cookies`;
      listName.appendChild(li);
      total = total + num;
      if (i === hours.length - 1) {
        let li = document.createElement('li');
        li.textContent = `Total | ${total} Cookies`;
        listName.appendChild(li);
      }
    }
  }
};

let SeaGroup = document.createElement('article');
document.body.appendChild(SeaGroup);
let Header1 = document.createElement('h3');
Header1.textContent = 'Seattle';
SeaGroup.appendChild(Header1);
let SeaList = document.createElement('ul');
SeaGroup.appendChild(SeaList);
Seattle.render(SeaList);

let Paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calcCookiesperHour: function () {
    let customersThisHours = this.getRandomCustomers();
    let cookiesSoldthisHours = Math.ceil(customersThisHours * this.avg);
    return cookiesSoldthisHours;
  },
  render: function (listName) {
    let total = 0;
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      let num = this.calcCookiesperHour();
      li.textContent = `${hours[i]} | ${num} Cookies`;
      listName.appendChild(li);
      total = total + num;
      if (i === hours.length - 1) {
        let li = document.createElement('li');
        li.textContent = `Total | ${total} Cookies`;
        listName.appendChild(li);
      }
    }
  }
};

let ParGroup = document.createElement('article');
document.body.appendChild(ParGroup);
let Header2 = document.createElement('h3');
Header2.textContent = 'Paris';
ParGroup.appendChild(Header2);
let ParList = document.createElement('ul');
ParGroup.appendChild(ParList);
Paris.render(ParList);

let Tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calcCookiesperHour: function () {
    let customersThisHours = this.getRandomCustomers();
    let cookiesSoldthisHours = Math.ceil(customersThisHours * this.avg);
    return cookiesSoldthisHours;
  },
  render: function (listName) {
    let total = 0;
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      let num = this.calcCookiesperHour();
      li.textContent = `${hours[i]} | ${num} Cookies`;
      listName.appendChild(li);
      total = total + num;
      if (i === hours.length - 1) {
        let li = document.createElement('li');
        li.textContent = `Total | ${total} Cookies`;
        listName.appendChild(li);
      }
    }
  }
};

let TokGroup = document.createElement('article');
document.body.appendChild(TokGroup);
let Header3 = document.createElement('h3');
Header3.textContent = 'Tokyo';
TokGroup.appendChild(Header3);
let TokList = document.createElement('ul');
TokGroup.appendChild(TokList);
Tokyo.render(TokList);


let Dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calcCookiesperHour: function () {
    let customersThisHours = this.getRandomCustomers();
    let cookiesSoldthisHours = Math.ceil(customersThisHours * this.avg);
    return cookiesSoldthisHours;
  },
  render: function (listName) {
    let total = 0;
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      let num = this.calcCookiesperHour();
      li.textContent = `${hours[i]} | ${num} Cookies`;
      listName.appendChild(li);
      total = total + num;
      if (i === hours.length - 1) {
        let li = document.createElement('li');
        li.textContent = `Total | ${total} Cookies`;
        listName.appendChild(li);
      }
    }
  }
};

let DubGroup = document.createElement('article');
document.body.appendChild(DubGroup);
let Header4 = document.createElement('h3');
Header4.textContent = 'Dubai';
DubGroup.appendChild(Header4);
let DubList = document.createElement('ul');
DubGroup.appendChild(DubList);
Dubai.render(DubList);


let Lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  getRandomCustomers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  calcCookiesperHour: function () {
    let customersThisHours = this.getRandomCustomers();
    let cookiesSoldthisHours = Math.ceil(customersThisHours * this.avg);
    return cookiesSoldthisHours;
  },
  render: function (listName) {
    let total = 0;
    for (let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      let num = this.calcCookiesperHour();
      li.textContent = `${hours[i]} | ${num} Cookies`;
      listName.appendChild(li);
      total = total + num;
      if (i === hours.length - 1) {
        let li = document.createElement('li');
        li.textContent = `Total | ${total} Cookies`;
        listName.appendChild(li);
      }
    }
  }
};

let LimaGroup = document.createElement('article');
document.body.appendChild(LimaGroup);
let Header5 = document.createElement('h3');
Header5.textContent = 'Lima';
LimaGroup.appendChild(Header5);
let LimaList = document.createElement('ul');
LimaGroup.appendChild(LimaList);
Lima.render(LimaList);

console.log(Seattle);
