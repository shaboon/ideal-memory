import React from "react";

import "./style-switch.css";

export default function StyleSwitch() {
    return (
        <div className="style-switch flex items-center">
        <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
        </label>
        </div>
    );
}