const currentDay = luxon.DateTime.now().toLocaleString(luxon.DateTime.DATETIME_MED);
var newFormat = {
    ...luxon.DateTime.DATETIME_MED,
    weekday: 'long'
};

const newCurrentDay = luxon.DateTime.now().toLocaleString(newFormat);
console.log(newCurrentDay);


// var ol = document.querySelector('ol');
// console.log(ol);
// const list = document.createElement('ol');
// list.innerText = "this is a list";


// document.appendChild(list);

//  Get the current day to display on the page.


//  create time blocks for standard business hours

//  color coat the blocks based on past, present, or future

//  you can click a time block

//  can enter an event into time block

//  can save button for time block

//  event is saved into time block using local storage