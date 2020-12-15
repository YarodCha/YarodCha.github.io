import React from 'react';

export default function About() {
  return (
    <div>
      <h1>About me</h1>
      <Caja text="JAJA"></Caja>
    </div>
  );
}



class Caja extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleDateString(),
    };
  }

  render() {
    return (
      <div>
        {this.state.time}
        <p> {this.props.text} </p>
      </div>
    );
  }
}
