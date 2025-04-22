import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // name: "Nithin Gowda",
            // location: "Bangalore",
            // contact: "1234567890",
            // about: "Software Engineer",
            // hobbies: ["Coding", "Reading"],
            // skills: ["React", "Node.js"]
            count : 0,
        };// Initializing state with default values in older class component style
    // Constructor to initialize state and bind methods if needed
    // super(props) is called to access this.props in the constructor
    }
  render() {
   // const { name, location } = this.props; // Destructuring props for cleaner code
     const { name, location } = this.state; // Destructuring state for cleaner code
    // const { contact, about, hobbies, skills } = this.state; // Destructuring state for cleaner code
    const { count } = this.state; // Destructuring state for cleaner code
    return (
        
      <div className="user-card">
        {/* <h1>Name: {this.props.name}</h1> */}
        {/* <h2>Location: {this.props.location}</h2> */}
        {/* <h2>Contact: {this.state.contact}</h2> 
         <h3>About: {this.state.about}</h3> 
        <h3>Hobbies: {this.state.hobbies.join(", ")}</h3> 
        <h3>Skills: {this.state.skills.join(", ")}</h3> */}
        {/* Using state values directly in the render method */}
       {/* <h1>Name: {name}</h1> //for state */}
       <h1>count : {count}</h1>
        <button onClick={() => this.setState({ count: count + 1 })}>Increment</button> // Incrementing count in state and never use state variabele directly
        <button onClick={() => { this.setState({ count: count - 1 })}}>Decrement</button> // Decrementing count in state and never use state variabele directly

        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <h2>Contact: 1234567890</h2>
        <h3>About: Software Engineer</h3>
        <h3>Hobbies: Coding, Reading</h3>
        <h3>Skills: React, Node.js</h3>
      </div>
    );
  }
}

export default UserClass;