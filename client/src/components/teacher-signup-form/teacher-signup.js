import React, { Component } from "react";
import './teacher-signup.css';
import axios from 'axios';

export class TeacherSignUp extends Component {
  state = {name: "", password: "", phone: "", email: "", location: "",
  photo: "", bio: "", website: "", childSafeCert: false
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    console.log("Typed: " + target.name, value);
    this.setState({ [target.name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const addTeacher = async () => {
      try {
        return await
        axios.post('/api/teacher/create', this.state)
      } catch (error) {
        console.error(error)
      }
    }
    addTeacher();
    this.props.history.push('/events');
    this.setState({name: "", password: "", phone: "", email: "", location: "",
    photo: "", bio: "", website: "", childSafeCert: false
    });
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

        <label htmlFor="photo">Photo:</label>
        <input type="photo" id="photo" name="photo"
          value={this.state.photo}
          onChange={this.handleChange}
        />

        <label htmlFor="bio">Biography:</label>
        <input type="bio" id="bio" name="bio"
          value={this.state.bio}
          onChange={this.handleChange}
        />

        <label htmlFor="website">Website:</label>
        <input type="website" id="website" name="website"
          value={this.state.website}
          onChange={this.handleChange}
        />

        <label htmlFor="childSafeCert">Child-Safe Certificate?:</label>
        <input type="childSafeCert" id="childSafeCert" name="childSafeCert"
          value={this.state.childSafeCert}
          onChange={this.handleChange}
        />

        <fieldset>
          <legend>Spoken Languages</legend>Arabic:
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
