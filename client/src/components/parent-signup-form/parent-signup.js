import React, { Component } from "react";
import './signup.css';

export class ParentSignup extends Component {
  state = {name: "", password: "", phone: "", email: "", location: "",
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    console.log("Typed: " + target.name, value);
    this.setState({ [target.name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = JSON.stringify(this.state);
    console.log("(Fake) submitting data: ", data);
    this.setState({name: "", password: "", phone: "", email: "", location: ""
    });
    this.props.history.push('/events')
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />

        <label htmlFor="phone">Phone:</label>
        <input type="phone" id="phone" name="phone"
          value={this.state.phone}
          onChange={this.handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email"
          value={this.state.email}
          onChange={this.handleChange}
        />

        <label htmlFor="location">Location:</label>
        <input type="location" id="location" name="location"
          value={this.state.location}
          onChange={this.handleChange}
        />

        <fieldset>
          <legend>Child Languages</legend>Arabic:
          <input type="checkbox" id="arabic" name="arabic" value="arabic"
            onChange={this.handleChange}
          />
          English:
          <input type="checkbox" id="english" name="english" value="english"
            onChange={this.handleChange}
          />
          Hebrew:
          <input type="checkbox" id="hebrew" name="hebrew" value="hebrew"
            onChange={this.handleChange}
          />
          Russian:
          <input type="checkbox" id="russian" name="russian" value="russian"
            onChange={this.handleChange}
          />
        </fieldset>

        <fieldset>
          <legend>Child Ages</legend>
          birth to 6 months:
          <input type="checkbox" id="birth to .5" name="birth to .5" value="birth to .5"
            onChange={this.handleChange}
          />
          6 months to 1 year:
          <input type="checkbox" id=".5 to 1" name=".5 to 1" value=".5 to 1"
            onChange={this.handleChange}
          />
          1 to 2:
          <input type="checkbox" id="1 to 2" name="1 to 2" value="1 to 2"
            onChange={this.handleChange}
          />
          2 to 4:
          <input type="checkbox" id="2 to 4" name="2 to 4" value="2 to 4"
            onChange={this.handleChange}
          />
          5 to 6:
          <input type="checkbox" id="5 to 6" name="5 to 6" value="5 to 6"
            onChange={this.handleChange}
          />
          7 to 8:
          <input type="checkbox" id="7 to 8" name="7 to 8" value="7 to 8"
            onChange={this.handleChange}
          />
          9 to 10:
          <input type="checkbox" id="9 to 10" name="9 to 10" value="9 to 10"
            onChange={this.handleChange}
          />
          11+:
          <input type="checkbox" id="11+" name="11+" value="11+"
            onChange={this.handleChange}
          />
        </fieldset>

        <fieldset>
          <legend>Superpowers</legend>Sports:
          <input type="checkbox" id="sports" name="sports" value="sports"
            onChange={this.handleChange}
          />
          Art:
          <input type="checkbox" id="art" name="art" value="art"
            onChange={this.handleChange}
          />
          Theater:
          <input type="checkbox" id="theater" name="theater" value="theater"
            onChange={this.handleChange}
          />
          Computers:
          <input type="checkbox" id="computers" name="computers" value="computers"
            onChange={this.handleChange}
          />
          Music:
          <input type="checkbox" id="music" name="music" value="music"
            onChange={this.handleChange}
          />
          Social:
          <input type="checkbox" id="social" name="social" value="social"
            onChange={this.handleChange}
          />
        </fieldset>

        <button type="submit"  >Submit</button>
      </form>
    );
  }
}
