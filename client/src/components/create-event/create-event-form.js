import React, { Component } from 'react';

class CreateEvent extends React.Component {
  state = { name: '', location: '', description: '', ages: '', photo: '',
  dates: '', time: '', singlePrice: '', termPrice: '', maxChild: '', superpowers: ''
  }

  handleChange = event => {
    const target = event.target;
    const value = target.type ==='checkbox' ? target.checked : target.value;
    console.log("Typed:" + target.name, value);
    this.setState({[target.name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const data = JSON.stringify(this.state);
    console.log('Fake submitting: ', data)
    this.setState({ name: '', location: '', description: '', photo: '',
    days: '', singlePrice: '', termPrice: '', maxChild: '', ages: '', superpowers: '', languages: ''});
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

      <label htmlFor='name'>Name:</label>
      <input type='text' id='name' name='name' value={this.state.name}
      onChange={this.handleChange} />

      <label htmlFor='location'>Location:</label>
      <input type='text' id='location' name='location' value={this.state.location}
      onChange={this.handleChange} />

      <label htmlFor='description'>Description:</label>
      <input type='text' id='description' name='description' value={this.state.description}
      onChange={this.handleChange} />

      <label htmlFor='photo'>Photo:</label>
      <input type='text' id='photo' name='photo' value={this.state.photo}
      onChange={this.handleChange} />

      <fieldset><legend>Days</legend>Sunday:
      <input type='checkbox' id='sunday' name='sunday' value='sunday'
      checked={this.state.sunday} onChange={this.handleChange} />Monday:
      <input type='checkbox' id='monday' name='monday' value='monday'
      checked={this.state.monday} onChange={this.handleChange} />Tuesday:
      <input type='checkbox' id='tuesday' name='tuesday' value='tuesday'
      checked={this.state.tuesday} onChange={this.handleChange} />Wednesday:
      <input type='checkbox' id='wednesday' name='wednesday' value='wednesday'
      checked={this.state.wednesday} onChange={this.handleChange} />Thursday:
      <input type='checkbox' id='thursday' name='thursday' value='thursday'
      checked={this.state.thursday} onChange={this.handleChange} />Friday:
      <input type='checkbox' id='friday' name='friday' value='friday'
      checked={this.state.friday} onChange={this.handleChange} />Saturday:
      <input type='checkbox' id='saturday' name='saturday' value='saturday'
      checked={this.state.saturday} onChange={this.handleChange} />
      </fieldset>

      <label htmlFor='singlePrice'>Single Price:</label>
      <input type='text' id='singlePrice' name='singlePrice' value={this.state.singlePrice}
      onChange={this.handleChange} />

      <label htmlFor='termPrice'>Term Price:</label>
      <input type='text' id='termPrice' name='termPrice' value={this.state.termPrice}
      onChange={this.handleChange} />

      <label htmlFor='maxChild'>Max Child:</label>
      <input type='text' id='maxChild' name='maxChild' value={this.state.maxChild}
      onChange={this.handleChange} />

      <fieldset><legend>Child Languages</legend>Arabic:
      <input type='checkbox' id='arabic' name='arabic' value='arabic'
      checked={this.state.arabic} onChange={this.handleChange} />English:
      <input type='checkbox' id='english' name='english' value='english'
      checked={this.state.english} onChange={this.handleChange} />Hebrew:
      <input type='checkbox' id='hebrew' name='hebrew' value='hebrew'
      checked={this.state.hebrew} onChange={this.handleChange} />Russian:
      <input type='checkbox' id='russian' name='russian' value='russian'
      checked={this.state.russian} onChange={this.handleChange} />
      </fieldset>

      <fieldset><legend>Child Ages</legend>birth to 1:
      <input type='checkbox' id='birth to 1' name='birth to 1' value='birth to 1'
      checked={this.state.childAges} onChange={this.handleChange} />1 to 2:
      <input type='checkbox' id='1 to 2' name='1 to 2' value='1 to 2'
      checked={this.state.childAges} onChange={this.handleChange} />2 to 4:
      <input type='checkbox' id='2 to 4' name='2 to 4' value='2 to 4'
      checked={this.state.childAges} onChange={this.handleChange} />5 to 6:
      <input type='checkbox' id='5 to 6' name='5 to 6' value='5 to 6'
      checked={this.state.childAges} onChange={this.handleChange} />7 to 8:
      <input type='checkbox' id='7 to 8' name='7 to 8' value='7 to 8'
      checked={this.state.childAges} onChange={this.handleChange} />9 to 10:
      <input type='checkbox' id='9 to 10' name='9 to 10' value='9 to 10'
      checked={this.state.childAges} onChange={this.handleChange} />
      </fieldset>

      <fieldset><legend>Superpowers</legend>Sports:
      <input type='checkbox' id='Sports' name='Sports' value='Sports'
      checked={this.state.childSuperpowers} onChange={this.handleChange} />Art:
      <input type='checkbox' id='Art' name='Art' value='Art'
      checked={this.state.childSuperpowers} onChange={this.handleChange} />Theater:
      <input type='checkbox' id='Theater' name='Theater' value='Theater'
      checked={this.state.childSuperpowers} onChange={this.handleChange} />Computers:
      <input type='checkbox' id='Computers' name='Computers' value='Computers'
      checked={this.state.childSuperpowers} onChange={this.handleChange} />Music:
      <input type='checkbox' id='Music' name='Music' value='Music'
      checked={this.state.childSuperpowers} onChange={this.handleChange} />Social:
      <input type='checkbox' id='Social' name='Social' value='Social'
      checked={this.state.childSuperpowers} onChange={this.handleChange} />
      </fieldset>

      <button type='submit'>Submit</button>

      </form>
    )
  }
}

export default CreateEvent;
