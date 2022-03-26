//  creates a new instance for time and date.
const currentDay = luxon.DateTime.now().toLocaleString(luxon.DateTime.DATETIME_MED);
//  format's the date and time.
var newFormat = {
    //  The selected date format from luxon documentation.
    ...luxon.DateTime.DATETIME_MED,
    //  added the day of the week.
    weekday: 'long'
};

// creates a new instance for time and date.
const newCurrentDay = luxon.DateTime.now().toLocaleString(newFormat);
//  checks if time works.
console.log(newCurrentDay);

//  creates a new instance to parse the date and time into the header html.
var ol = document.querySelector('header');
//  creates the ol element.
const list = document.createElement('ol');
//  styles the <ol> element.
list.setAttribute('style', 'color: white; background-color: black; display: flex; flex-direction: column; justify-content: center; align-items: center;');
//  displays newCurrentDay variable in the header as readable text.
list.innerText = newCurrentDay;
//  appends the newCurrentDay variable to the ol element.
ol.appendChild(list);


//  Get the current day to display on the page.


//  create time blocks for standard business hours

//  color coat the blocks based on past, present, or future

//  you can click a time block

//  can enter an event into time block

//  can save button for time block

//  event is saved into time block using local storage