import React from "react";
import { useState, useEffect } from "react";

import Modal from "../Modal/Modal.tsx";



import "./style-switch.css";

export default function StyleSwitch() {
    return (
        <div className="container flex items-center">
            <div className="style-switch flex items-center">
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
    );
}