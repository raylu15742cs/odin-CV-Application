import React , { Component }from 'react';
import Application from "./Application"
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      title: '',
      address: '',
      number: '',
      email: '',
      position: '',
      company: '',
      expcity: '',
      expfrom: '',
      expto: '',
      university: '',
      unicity: '',
      major: '',
      eduto: '',
      educfrom: '',
    };
  }
  onSubmitForm = (e) => {
    e.preventDefault(); 
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
    if (e.target.id === 'address') {
      this.setState({
        address: e.target.value,
      });
    }
    if (e.target.id === 'phonenumber') {
      this.setState({
        number: e.target.value,
      });
    }
    if (e.target.id === 'email') {
      this.setState({
        email: e.target.value,
      });
    }
    if (e.target.id === 'position') {
      this.setState({
        position: e.target.value,
      });
    }
    if (e.target.id === 'company') {
      this.setState({
        company: e.target.value,
      });
    }
    if (e.target.id === 'expcity') {
      this.setState({
        expcity: e.target.value,
      });
    }
    if (e.target.id === 'expfrom') {
      this.setState({
        expfrom: e.target.value,
      });
    }
    if (e.target.id === 'expto') {
      this.setState({
        expto: e.target.value,
      });
    }
    if (e.target.id === 'university') {
      this.setState({
        university: e.target.value,
      });
    }
    if (e.target.id === 'unicity') {
      this.setState({
        unicity: e.target.value,
      });
    }
    if (e.target.id === 'major') {
      this.setState({
        major: e.target.value,
      });
    }
    if (e.target.id === 'edufrom') {
      this.setState({
        educfrom: e.target.value,
      });
      console.log('hi')
    }
    if (e.target.id === 'eduto') {
      this.setState({
        eduto: e.target.value,
      });
    }
  };

  render() {
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
        <Application {...this.state} />
      </div>
    );
  }
};

export default Main;
