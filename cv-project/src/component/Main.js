import React , { Component }from 'react';
import Application from "./Application"
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname:"",
      title: ""
    };
  }
  handleChange = (e) => {
    if (e.target.id === 'firstname') {
        this.setState({
           firstname: e.target.value
        });
    }
    if (e.target.id === 'lastname') {
      this.setState({
           lastname: e.target.value
        });
    }
    if (e.target.id === 'title') {
      this.setState({
        title: e.target.value,
      });
    }
    if (e.target.id === 'lastname') {
      this.setState({
        lastname: e.target.value,
      });
    }
    if (e.target.id === 'lastname') {
      this.setState({
        lastname: e.target.value,
      });
    }
  };

  render() {
    return (
      <div className="Main">
        <div className="Formside">
          <form>
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
              id="city"
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
              id="city"
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
        <Application {...this.state} />
      </div>
    );
  }
};

export default Main;
