import * as React from 'react';

const Navbar = ({canvas,ctx})=> {
        function clearCanvas() {
                console.log(canvas, ctx)
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                var w = canvas.width;
                canvas.width = 1;
                canvas.width = w;
              }
  return (
        <nav className="navbar">
                <h1 className='brand'>Stroky Brush</h1>
                <div className='nav-items'>
                        <button>Download</button>
                        <button>Get Link</button>
                        <button onClick={clearCanvas}>Reset</button>
                </div>
        </nav>
  );
}

export default Navbar