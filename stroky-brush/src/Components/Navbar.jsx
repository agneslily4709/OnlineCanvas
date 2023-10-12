import * as React from "react";

const Navbar = ({ canvasRef, ctxRef }) => {
    function clearCanvas() {
        ctxRef.current.clearRect(
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height
        );
    }
    function downloadCanvas() {
        const canvas = canvasRef.current;
        const whiteBackgroundCanvas = document.createElement("canvas");
        whiteBackgroundCanvas.width = canvas.width;
        whiteBackgroundCanvas.height = canvas.height;

        const ctx = whiteBackgroundCanvas.getContext("2d");
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(canvas, 0, 0);
        const url = whiteBackgroundCanvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.download = "chart.png";
        link.href = url;
        link.click();
    }
    return (
        <nav className="navbar">
            <h1 className="brand">Stroky Brush</h1>
            <div className="nav-items">
                <button className="button" onClick={downloadCanvas}>
                    Download
                </button>
                <button className="button" onClick={clearCanvas}>
                    Reset
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
