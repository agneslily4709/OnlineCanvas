import React from 'react'

const Canvas = ({startDrawing,endDrawing,draw,canvasRef}) => {
  return (
                <canvas 
                    onMouseDown={startDrawing} 
                    onMouseUp={endDrawing} 
                    onMouseMove={draw} 
                    ref={canvasRef} 
                    width={`1280px`} 
                    height={`720px`} 
                /> 
  )
}

export default Canvas