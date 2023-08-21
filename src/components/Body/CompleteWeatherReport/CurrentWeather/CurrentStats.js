import React from "react";

function CurrentStats({ wind, humidity }) {
    return (
        <div>
            <p className="text-center">
                <ul>
                    <li>
                        wind: <span>{Math.round(wind)}</span> km/h
                    </li>
                    <li>
                        humidity: <span>{Math.round(humidity)}</span>%
                    </li>
                </ul>
            </p>
        </div>
    )
}

export default CurrentStats;