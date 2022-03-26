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
    } else if (timeBlocksId === now) {
        timeBlocks[i].classList.add('present')
    } else {
        timeBlocks[i].classList.add('future');
    }
};

//  saves the data to local storage when save button is clicked
$('.saveBtn').each(function (index) {
    // event listener for save button
    $(this).on("click", function () {
        // targets the text area element.
        var taskText = $(this).prev().val();
        // saves it based on the index
        localStorage.setItem(`${index}`, taskText);
    });
});

// for each text area element, it will load the data from local storage based on it's index.
$('textarea').each(function (index) {
    // gets the data from local storage based on the index if there is no data, it will display 'Event'.
    $(this).val(localStorage.getItem(`${index}`) || "Event");
});