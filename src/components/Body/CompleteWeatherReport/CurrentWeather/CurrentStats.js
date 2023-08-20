import React from "react";

function CurrentStats() {
    return (
        <div>
            <p className="wind-humidity text-center">
                <ul>
                    <li>
                        wind: <span>4</span> km/h
                    </li>
                    <li>
                        humidity: <span>55</span>%
                    </li>
                </ul>
            </p>
        </div>
    )
}

export default CurrentStats;