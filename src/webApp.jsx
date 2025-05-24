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

export { Test, BoxHead};