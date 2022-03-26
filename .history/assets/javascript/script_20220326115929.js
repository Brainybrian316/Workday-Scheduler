saveBtn = document.getElementsByClassName('saveBtn');

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

for (let i = 0; i < timeBlocks.length; i++) {

    //  gets the current hour to connect the color changing feature in the text area element based on the 24hr format.
    const hour = luxon.DateTime.now().hour.toLocaleString();

    // converts timeBlocks 'id' into an integer.
    let timeBlocksId = parseInt(timeBlocks[i].id);
    // convert hour into an integer.
    let now = parseInt(hour);

    //  if statement's to change the color of the blocks based on time using the 24hr time format.
    if (timeBlocksId < now) {
        timeBlocks[i].classList.add('past');
    }
    if (timeBlocksId === now) {
        timeBlocks[i].classList.add('present')
    }
    if (timeBlocksId > now) {
        timeBlocks[i].classList.add('future');
    }

};

// *third attempt
// // * testing
// saveBtn = document.getElementsByClassName('saveBtn');

// var save = addEventListener('click', function () {
//     //  creates a new instance to parse the date and time into the header html. 
//     var textarea = document.querySelector('textarea');

//     this.window.localStorage.setItem('textarea', textarea.value);

//     this.window.localStorage.getItem('textarea');
// });




//  TODO: can  use save button for event text to persist even when refreshed.
// * first attempt
// $('.saveBtn').on("click", function () {
//     window.localStorage.setItem('task', $(this).siblings('.description').val());
// })
// console.log(loadTask);

// loadTask = function () {

//     // return window.localStorage.getItem('task').value;
// }

// *second attempt
// let taskArray = [{
//     21: "",
//     22: "",
//     23: "",
// }];

// $('.saveBtn').on("click", function () {
//     window.localStorage.setItem('tasks', JSON.stringify(taskArray));

//     JSON.parse(window.localStorage.getItem('tasks'));
//     console.log(taskArray.value);

//     var storedData = window.localStorage.getItem(taskArray);
// });
// if (storedData) {
//     taskArray = JSON.parse(storedData);
//     alert(taskArray);
// }
// });

// *fourth attempt
function populateStorage() {
    $('.saveBtn').on("click", function () {
        window.localStorage.setItem('tasks',
            document.getElementsByClassName('description').value);

    })
    loadTask();
};

function loadTask() {
    var task = window.localStorage.getItem('tasks');

    document.getElementsByClassName('description').value = task;
};






// TODO:  event is saved into time block using local storage


// TODO:  have my minutes actively change. 