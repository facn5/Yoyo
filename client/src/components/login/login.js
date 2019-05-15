import React from 'react' ;
import './login.css'

export default class Login extends React.Component {
  state = {
   email: '', password: ''
 };

 handleSubmit = event => {
  event.preventDefault();
  const data = JSON.stringify(this.state);
  this.setState({ email: '', password: ''});
};

handleChange = event => {
 const target = event.target;
 const value = target.type === 'input' ? target.value : target.value;
 this.setState({[target.name]: value});
};

  render() {
    return (
      <div>
        <h1>  Parent Log-In </h1>
      <form onSubmit={this.handleSubmit}>

       <label htmlFor='name'>Email:</label>
      <input type='text' name='name' value={this.state.name}  onChange={this.handleChange} />
      <div className="password">
       <label htmlFor='password'>Password:</label>
      <input type='password'  name='password' value={this.state.password}  onChange={this.handleChange} />
      </div>
      <div className="submit">
      <button type='submit'>Submit</button>
      </div>

</form>
  </div>
     )
  }
}
