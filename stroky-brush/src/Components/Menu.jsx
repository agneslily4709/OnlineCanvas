import React from "react"; 
import "../App.css"; 

const Menu = ({ setLineColor, setLineWidth, 
	setLineOpacity }) => { 
	return ( 
		<div className="Menu"> 
                <div className="menu-item">
                <label>Brush Color </label> 
			<input type="color"onChange={(e) => { setLineColor(e.target.value); }} /> 
                </div>
                <div className="menu-item">
                        <label>Brush Width </label> 
			<input type="range"min="3"max="20"onChange={(e) => { 	setLineWidth(e.target.value); }} /> 
                </div>
                <div className="menu-item">
                        <label>Brush Opacity</label> 
			<input type="range"min="1"max="100"onChange={(e) => { 	setLineOpacity(e.target.value / 100); }} />
                </div>
		</div> 
	); 
}; 

export default Menu;
