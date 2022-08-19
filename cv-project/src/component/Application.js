import React from "react";

const Application = (props) => {
    
    const { firstname, lastname, title, address, number, email, position, company, expcity, expfrom, expto, university, unicity, major, educfrom, eduto } = props
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
              <h1>Experience</h1>
              <h2>Company: {company}</h2>
              <h2>Position: {position}</h2>
              <h2>City: {expcity}</h2>
              <h3>{expfrom} - {expto}</h3>
              <h1>Educaion</h1>
              <h2>{university}</h2>
              <h2> City {unicity}</h2>
              <h2>Major {major}</h2>
              <h3>{educfrom}-{eduto}</h3>
            </div>
            <div className="rightmainApp">
              <h1>Personal Details</h1>
              <h2>Address</h2>
              <p>{address}</p>
              <h2>Phone Number</h2>
              <p>{number}</p>
              <h2>Email</h2>
              <p>{email}</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Application