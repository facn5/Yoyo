import React, { Component } from 'react';

class ParentSignup extends React {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <label>Name:
      <input type="text" value={this.state.value} onChange={this.handleChange} />
      </label>
      <input type="submit" value="Submit" />
      </form>
    )
  }

  state = {
    name: '', password: '', phone: '', email: '', location: '', childAges: '',
    childSuperpowers: '', arabic: false, english: false, hebrew: false, russian: false}

    handleChange = event => {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      console.log("Typed: " + target.name, value);
      this.setState({[target.name]: value});
    };

    handleSubmit = event => {
      event.preventDefault();
      const data = JSON.stringify(this.state);
      console.log("(Fake) submitting data: ", data)
      this.setState({ name: '', password: '', phone: '', email: '', location: '',
      childAges: '', childSuperpowers: '', arabic: false, english: false, hebrew: false, russian: false});
    };

    render() {
      return (
        <form onSubmit={this.handleSubmit}>

        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' name='name' value={this.state.name}
        onChange={this.handleChange} />

        <label htmlFor='password'>Password:</label>
        <input type='password' id='password' name='password' value={this.state.password}
        onChange={this.handleChange} />

        <label htmlFor='phone'>Phone:</label>
        <input type='phone' id='phone' name='phone' value={this.state.phone}
        onChange={this.handleChange} />

        <label htmlFor='email'>Email:</label>
        <input type='email' id='email' name='email' value={this.state.email}
        onChange={this.handleChange} />

        <fieldset><legend>Childrens Languages</legend>Arabic:
        <input type='checkbox' id='arabic' name='arabic' value='arabic' checked={this.state.arabic}
        onChange={this.handleChange} />English:
        <input type='checkbox' id='english' name='english' value='english' checked={this.state.english}
        onChange={this.handleChange} />Hebrew:
        <input type='checkbox' id='hebrew' name='hebrew' value='hebrew' checked={this.state.hebrew}
        onChange={this.handleChange} />Russian:
        <input type='checkbox' id='russian' name='russian' value='russian' checked={this.state.russian}
        onChange={this.handleChange} />
        </fieldset>

        <fieldset><legend>Child Ages</legend>birth to 1:
        <input type='checkbox' id='birth to 1' name='birth to 1' value='birth to 1' checked={this.state.childAges}
        onChange={this.handleChange} />1 to 2:
        <input type='checkbox' id='1 to 2' name='1 to 2' value='1 to 2' checked={this.state.childAges}
        onChange={this.handleChange} />2 to 4:
        <input type='checkbox' id='2 to 4' name='2 to 4' value='2 to 4' checked={this.state.childAges}
        onChange={this.handleChange} />5 to 6:
        <input type='checkbox' id='5 to 6' name='5 to 6' value='5 to 6' checked={this.state.childAges}
        onChange={this.handleChange} />7 to 8:
        <input type='checkbox' id='7 to 8' name='7 to 8' value='7 to 8' checked={this.state.childAges}
        onChange={this.handleChange} />9 to 10:
        <input type='checkbox' id='9 to 10' name='9 to 10' value='9 to 10' checked={this.state.childAges}
        onChange={this.handleChange} />
        </fieldset>

        <button type='submit'>Submit</button>

        </form>
      );
    }
}

export default ParentSignup;
