import Navbar from "./Components/Navbar";
import "./App.css";
import Menu from "./Components/Menu";
import { useEffect, useRef, useState } from "react";

function App() {
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [lineWidth, setLineWidth] = useState(5);
    const [lineColor, setLineColor] = useState("black");
    const [lineOpacity, setLineOpacity] = useState(0.1);
    const startDrawing = (e) => {
        ctxRef.current.beginPath();
        ctxRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        setIsDrawing(true);
    };

    const endDrawing = () => {
        ctxRef.current.closePath();
        setIsDrawing(false);
    };

    const draw = (e) => {
        if (!isDrawing) {
            return;
        }
        ctxRef.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        ctxRef.current.stroke();
    };

    useEffect(() => { 
        let canvas = canvasRef.current; 

        let ctx = canvas.getContext("2d"); 
        ctx.lineCap = "round"; 
        ctx.lineJoin = "round"; 
        ctx.globalAlpha = lineOpacity; 
        ctx.strokeStyle = lineColor; 
        ctx.lineWidth = lineWidth; 
        ctxRef.current = ctx; 
    }, [lineColor, lineOpacity, lineWidth]);

    return (
        <div className="App">
                <Navbar canvasRef={canvasRef} ctxRef={ctxRef}/>
            <Menu
                setLineColor={setLineColor}
                setLineWidth={setLineWidth}
                setLineOpacity={setLineOpacity}
            />
            <div className="canvas">
            <canvas 
                    onMouseDown={startDrawing} 
                    onMouseUp={endDrawing} 
                    onMouseMove={draw} 
                    ref={canvasRef} 
                    width={`1480px`} 
                    height={`720px`} 
                /> 
            </div>
        </div>
    );
}

export default App;
