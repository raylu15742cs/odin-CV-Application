import React from 'react';

const Main = (props) => {
  return (
    <div className="Main">
      <div className="Formside">
        <form>
          <label>Personal Information </label>
          <input type="text" placeholder="First Name"></input>
          <input type="text" placeholder="Last Name"></input>
          <input type="text" placeholder="Title"></input>
          <input type="text" placeholder="Address"></input>
          <input type="number" placeholder="Phone Number"></input>
          <input type="mail" placeholder="Email"></input>
          <label>Experience </label>
          <input type="text" placeholder="Position"></input>
          <input type="text" placeholder="Company"></input>
          <input type="text" placeholder="City"></input>
          <div>
            <input type="text" placeholder="From"></input>
            <input type="text" placeholder="To"></input>
          </div>
          <button>Add</button>
          <button>Delete</button>
          <label>Education </label>
          <input type="text" placeholder="University Name"></input>
          <input type="text" placeholder="City"></input>
          <input type="text" placeholder="Major"></input>
          <div>
            <input type="text" placeholder="From"></input>
            <input type="text" placeholder="To"></input>
          </div>
        <button>Add</button>
        <button>Delete</button>
        <button className='Submit'>Submit</button>
        </form>
      </div>
      <div className="Appside">
        <h1> Main Content </h1>
      </div>
    </div>
  );
};

export default Main;
