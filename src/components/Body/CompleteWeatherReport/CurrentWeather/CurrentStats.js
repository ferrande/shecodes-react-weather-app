import React from "react";

function CurrentStats({ wind, humidity }) {
    return (
        <div className="text-center">
            <ul>
                <li>
                    <strong>wind:</strong> <span>{Math.round(wind)}</span> km/h
                </li>
                <li>
                    <strong>humidity:</strong> <span>{Math.round(humidity)}</span>%
                </li>
            </ul>
        </div>
    )
}

export default CurrentStats;