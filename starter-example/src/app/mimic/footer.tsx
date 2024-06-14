import React from 'react';
function Footer() {
  return (
    <footer>
      <div className="h-40 w-full overflow-hidden bg-blue-700">
        <div className="flex justify-between">
          <div className="h-full w-full">
            <div className="flex h-20 w-full items-center justify-center overflow-clip bg-red-200">
              <p className="text-lg">SMALL WORLD</p>
            </div>
            <div className="w-10 bg-green-200">2 buttons</div>
            <div className="w-full bg-yellow-200"></div>
          </div>
          <div className="h-full w-full">right side</div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
