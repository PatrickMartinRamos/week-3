import "./webApp.css";

function Test(){
   return <div className="headerCenter"> 
   <h1>Simple React SPA </h1>
   </div>
}

function BoxHead() {
  return <div className="center">
            <div className="button-group">
                <button className="button">Home</button>
                <button className="button">About Us</button>
                <button className="button">Contact Us</button>
            </div>
    </div>
}

function BodyText() {
    return (
        <div className="whiteBox">
            <h1>Test Title</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    );
}

export { Test, BoxHead, BodyText};