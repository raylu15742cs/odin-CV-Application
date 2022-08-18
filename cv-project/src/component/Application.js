import React from "react";

const Application = (props) => {
    
    const { firstname, lastname, title } = props
    return (
      <div>
        <div className="Appside">
          <div className="topApp">
            <h1>
              {firstname} {lastname}
            </h1>
            <p>{title}</p>
          </div>
          <div className="mainApp">
            <div className="leftmainApp">
              <h1>left side</h1>
            </div>
            <div className="rightmainApp">
              <h1>right side</h1>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Application