const dateFormat = (dateTime) => {
    month = dateTime.getMonth();
    day = dateTime.getDate();
    year = dateTime.getFullYear();
    hours = dateTime.getHours();
    minutes = dateTime.getMinutes();

    dayTime = "AM"

    if (hours < 24 && hours > 11) {
        dayTime = "PM";
    }
    if (hours > 12) {
        hours -= 12;
    }
    if (minutes < 10) {
        minutes = "0" + minutes.toString();
    }

    return `${month}/${day}/${year} ${hours}:${minutes} ${dayTime}`;
}

export default dateFormat;