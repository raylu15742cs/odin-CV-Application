import React, {useState} from "react";
import Application from "./Application";


const Main = () => {
    const [firstname , setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [position, setPosition] = useState('');
    const [company, setCompany] = useState('');
    const [expcity, setExpcity] = useState('');
    const [expfrom, setExpfrom] = useState('');
    const [expto, setExpto] = useState('');
    const [university, setUniversity] = useState('');
    const [unicity, setUnicity] = useState('');
    const [major, setMajor] = useState('');
    const [eduto, setEduto] = useState('');
    const [edufrom, setEdufrom] = useState('');

    let onSubmitForm = (e) => {
      e.preventDefault();
    };

    let handleChange = (e) => {
      if (e.target.id === 'firstname') {
        setFirstname(e.target.value)
      }
      if (e.target.id === 'lastname') {
        setLastname(e.target.value);
      }
      if (e.target.id === 'title') {
        setTitle(e.target.value);
      }
      if (e.target.id === 'address') {
        setAddress(e.target.value);
      }
      if (e.target.id === 'phonenumber') {
        setNumber(e.target.value);
      }
      if (e.target.id === 'email') {
        setEmail(e.target.value);
      }
      if (e.target.id === 'position') {
        setPosition(e.target.value);
      }
      if (e.target.id === 'company') {
        setCompany(e.target.value);
      }
      if (e.target.id === 'expcity') {
        setExpcity(e.target.value);
      }
      if (e.target.id === 'expfrom') {
        setExpfrom(e.target.value);
      }
      if (e.target.id === 'expto') {
        setExpto(e.target.value);
      }
      if (e.target.id === 'university') {
        setUniversity(e.target.value);
      }
      if (e.target.id === 'unicity') {
        setUnicity(e.target.value);
      }
      if (e.target.id === 'major') {
        setMajor(e.target.value);
      }
      if (e.target.id === 'edufrom') {
        setEdufrom(e.target.value)
      }
      if (e.target.id === 'eduto') {
        setEduto(e.target.value)
      }
    };

    return (
      <div className="Main">
        <div className="Formside">
          <form onSubmit={this.onSubmitForm}>
            <label>Personal Information </label>
            <input
              onChange={this.handleChange}
              id="firstname"
              type="text"
              placeholder="First Name"
            ></input>
            <input
              onChange={this.handleChange}
              id="lastname"
              type="text"
              placeholder="Last Name"
            ></input>
            <input
              type="text"
              placeholder="Title"
              onChange={this.handleChange}
              id="title"
            ></input>
            <input
              type="text"
              placeholder="Address"
              onChange={this.handleChange}
              id="address"
            ></input>
            <input
              type="number"
              placeholder="Phone Number"
              onChange={this.handleChange}
              id="phonenumber"
            ></input>
            <input
              type="mail"
              placeholder="Email"
              onChange={this.handleChange}
              id="email"
            ></input>
            <label>Experience </label>
            <input
              type="text"
              placeholder="Position"
              onChange={this.handleChange}
              id="position"
            ></input>
            <input
              type="text"
              placeholder="Company"
              onChange={this.handleChange}
              id="company"
            ></input>
            <input
              type="text"
              placeholder="City"
              onChange={this.handleChange}
              id="expcity"
            ></input>
            <div>
              <input
                type="text"
                placeholder="From"
                onChange={this.handleChange}
                id="expfrom"
              ></input>
              <input
                type="text"
                placeholder="To"
                onChange={this.handleChange}
                id="expto"
              ></input>
            </div>
            <button>Add</button>
            <button>Delete</button>
            <label>Education </label>
            <input
              type="text"
              placeholder="University Name"
              onChange={this.handleChange}
              id="university"
            ></input>
            <input
              type="text"
              placeholder="City"
              onChange={this.handleChange}
              id="unicity"
            ></input>
            <input
              type="text"
              placeholder="Major"
              onChange={this.handleChange}
              id="major"
            ></input>
            <div>
              <input
                type="text"
                placeholder="From"
                onChange={this.handleChange}
                id="edufrom"
              ></input>
              <input
                type="text"
                placeholder="To"
                onChange={this.handleChange}
                id="eduto"
              ></input>
            </div>
            <button>Add</button>
            <button>Delete</button>
            <button className="Submit">Submit</button>
          </form>
        </div>
        <Application  />
      </div>
    );
}

export default Main;