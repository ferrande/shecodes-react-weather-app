import React from "react";

function FormattedDate(props) {
    const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

    let day = days[props.date.getDay()];

    let hours = props.date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }

    let minutes = props.date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    return (
        <h2>
            <span id="currentDay">{day}</span> <span id="currentHour">{hours}</span>:
            <span id="currentMinutes">{minutes}</span>
        </h2 >
    )
}

export default FormattedDate;