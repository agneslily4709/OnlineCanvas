import React from "react";
import "../App.css";

const Menu = ({
    isEraser,
    setLineColor,
    setLineWidth,
    setLineOpacity,
    setIsEraser,
}) => {
    return (
        <div className="Menu">
            <div className="menu-item">
                <label>Eraser </label>
                <input
                    type="checkbox"
                    checked={isEraser}
                    onChange={(e) => {
                        setIsEraser((prev) => !prev);
                    }}
                />
            </div>
            <div className="menu-item">
                <label>Brush Color </label>
                <input
                    type="color"
                    onChange={(e) => {
                        setLineColor(e.target.value);
                    }}
                />
            </div>
            <div className="menu-item">
                <label>Brush Width </label>
                <input
                    type="range"
                    min="3"
                    max="20"
                    step={1}
                    defaultValue={5}
                    onChange={(e) => {
                        setLineWidth(e.target.value);
                    }}
                />
            </div>
            <div className="menu-item">
                <label>Brush Opacity</label>
                <input
                    type="range"
                    min="0.1"
                    max="1"
                    step={0.1}
                    defaultValue={1}
                    onChange={(e) => {
                        setLineOpacity(e.target.value);
                    }}
                />
            </div>
        </div>
    );
};

export default Menu;