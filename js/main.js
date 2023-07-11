const timeElement = document.querySelector('.time');
const dateElement = document.querySelector('.date');


/**
 *  @param {Date} date
*/
   

function formatTime(date){
    const hours12 = date.getHours() % 12 || 12; //getHours() git a number between 0 and 23, the remains of the division by 12 convert the time from ex.: 17:00 to 5 PM
    const minutes = date.getMinutes();

    return `${hours12.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`; //if there are not 2 characters, the start will begin with "0"

}