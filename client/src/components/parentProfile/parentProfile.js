import React from 'react' ;
import axios from 'axios';
import cookie from 'react-cookie';
import HeaderC from '../header/index';
import Navbar from "../navbar/index";

import './profile.css';


export default class ParentProfile extends React.Component {
  state={
    name:"",
    language:"",
    superpower:"",
    curevents:"none",
    cookie: cookie.load('id')

  };

  componentDidMount(){
  const profileData = async () => {
    console.log("cookie isnt",this.state.cookie)

    try {
      return await
      axios.get('/api/parent/profile/'+this.state.cookie).then( (user) => {


        if(user.data.arabic){
          this.setState({language: "Arabic"})
          console.log("arabic")
        }

        if(user.data.music){
          this.setState({superpower: "Music"})

        }




        this.setState({
          name: user.data.name,
          phone: user.data.phone,
          email: user.data.email,

        })
        if( user.data.success ) {
          console.log("data is",data);
        }
      })
    } catch (error) {
      console.error(error)
    }
  }
  profileData()


}

  render() {
    return (
      <div>

      <HeaderC/>
            <h1>Parent's Desk</h1>
            <Navbar/>
      <div className="Card-Info">
    <pre>Name:{this.state.name}</pre>
    <pre>Email:{this.state.email}</pre>
      <pre>Languages:{this.state.language}</pre>
    <pre>Superpowers:{this.state.superpower}</pre>
    <pre>Current Events:{this.state.curevents}</pre>
    <button onClick={()=>{cookie.remove('id');
this.props.history.push('/');

}}>Logout</button>
      </div>

      </div>

     )
  }
}
