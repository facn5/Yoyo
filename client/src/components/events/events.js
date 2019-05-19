import React from 'react' ;
import CardComponent from '../cardComponent/cardComponent'

export default class Events extends React.Component {

  render() {
    return (
      <div>
      <h1>Hello from events</h1>
      <CardComponent name="name" />
      <CardComponent name="location" />
      <CardComponent name="description" />
      <CardComponent name="photo" />
      <CardComponent name="days" />
      <CardComponent name="singlePrice" />
      <CardComponent name="termPrice" />
      <CardComponent name="maxChild" />
      <CardComponent name="ages" />
      <CardComponent name="superpowers" />
      <CardComponent name="languages" />

      </div>

     )
  }
}
