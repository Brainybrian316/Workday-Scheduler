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

//  creates an array to change the blocks bases on their time in the text area element.
const timeBlocks = Array.from(document.getElementsByClassName('description'));
// assigning timeBlocks based on time.
for (var i = 0; i < timeBlocks.length; i++) {
    //  gets the current hour to connect the color changing feature in the text area element based on the 24hr format.
    const now = luxon.DateTime.now().hour.toLocaleString();
    //  if statement's to change the color of the blocks based on time using the 24hr time format.
    if (timeBlocks[i].id < now) {
        timeBlocks[i].classList.add('past');
    }
    if (timeBlocks[i].id > now) {
        timeBlocks[i].classList.add('future');
    }
    if (timeBlocks[i].id === now) {
        timeBlocks[i].classList.add('present');
    }
}



//  TODO: can save button for time block

// TODO:  event is saved into time block using local storage