import React from 'react' ;
import './login.css'
import axios from 'axios';

export default class Login extends React.Component {
  state = {
   email: '', password: '', text: 'Please login to access our app'
 };

 handleSubmit = event => {
   event.preventDefault();

   const valid = async () => {
     try {
       return await
       axios.post('/api/parent/user', this.state).then( ({data}) => {
         this.setState({text: data.msg})
         if( data.success ) {
           this.props.history.push('/events')
         }
       })
     } catch (error) {
       console.error(error)
     }
   }
   valid()
   this.setState({ email: '', password: ''})



};

handleChange = ({target}) => {
 const value = target.type === 'input' ? target.value : target.value;
 this.setState({[target.name]: value});
};

  render() {
    return (
      <div>
        <h1>Parent Log-In</h1>
      <form onSubmit={this.handleSubmit}>

       <label htmlFor='email'>Email:</label>
      <input type='text' name='email' value={this.state.email}  onChange={this.handleChange} />
      <div className="password">
       <label htmlFor='password'>Password:</label>
      <input type='password'  name='password' value={this.state.password}  onChange={this.handleChange} />
      </div>

      <button type='submit'>Submit</button>

      <p>{this.state.text}</p>


</form>
  </div>
     )
  }
}
