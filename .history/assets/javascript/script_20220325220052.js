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

//  creates an array to change the blocks bases on their time.
const timeBlocks = Array.from(document.getElementsByClassName('description'));
// assigning timeBlocks based on time.
for (let i = 0; i < timeBlocks.length; i++) {
    const now = luxon.DateTime.now().toLocaleString({
        hour: 'numeric'
    });
    console.log(now);
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

// for (i = 0; i < timeBlocks.length; i++) {
//     const timeBlock = timeBlocks[i];
//     const hour = timeBlock.dataset.hour;
//     const date = luxon.DateTime.fromObject({hour: hour});
//     const formattedHour = date.toLocaleString(luxon.DateTime.TIME_SIMPLE);
//     timeBlock.textContent = formattedHour;
// }


// TODO: color coat the blocks based on past, present, or future

// TODO:  can enter an event into time block

//  TODO: can save button for time block

// TODO:  event is saved into time block using local storage