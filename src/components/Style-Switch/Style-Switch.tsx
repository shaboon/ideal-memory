import React from "react";
import { useState, useEffect } from "react";

import Modal, { toggleModal } from "../Modal.tsx";

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
            <button onClick={() => toggleModal("test-modal")}>o</button>
            <Modal label="test-modal">
              <h1>Test Modal</h1>
              <button onClick={() => toggleModal("test-modal")}>x</button>
            </Modal>
        </div>
    );
}