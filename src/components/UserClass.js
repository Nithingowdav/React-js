import React from "react";

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
      //count : 0,
      userInfo: {
        name: "Dummy",
        login: "Dummy",
        user_view_type: "Dummy",
        html_url: "Dummy",
        avatar_url: "Dummy",
      },
    }; // Initializing state with default values in older class component style
    console.log("Constructor called in user"); // Logging to check if constructor is called 1st
    // Constructor to initialize state and bind methods if needed
    // super(props) is called to access this.props in the constructor
  }
  async componentDidMount() {
    //console.log("Component did mount in user"); // Logging to check if componentDidMount is called 3rd
    const data = await fetch("https://api.github.com/users/Nithingowdav");
    const json = await data.json();

    this.setState({
      userInfo: json,
    }); // Updating state with fetched data
    console.log(json); // Logging to check if data is fetched from API
  }
  render() {
    // const { name, location } = this.props; // Destructuring props for cleaner code
    //const { name, location } = this.state; // Destructuring state for cleaner code
    // const { contact, about, hobbies, skills } = this.state; // Destructuring state for cleaner code
    //const { count } = this.state; // Destructuring state for cleaner code
    //console.log("Render method called in user"); // Logging to check if render method is called 2nd
    const { name, login, user_view_type, html_url, avatar_url } =
      this.state.userInfo; // Destructuring state for cleaner code
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
        {/* <h1>count : {count}</h1>
        <button onClick={() => this.setState({ count: count + 1 })}>Increment</button> // Incrementing count in state and never use state variabele directly
        <button onClick={() => { this.setState({ count: count - 1 })}}>Decrement</button> // Decrementing count in state and never use state variabele directly */}
        <img
          src={avatar_url}
          alt="User Avatar"
          style={{ width: "100px", height: "100px" }}
        />
        <h1>Name: {name}</h1>
        <h2>login: {login}</h2>
        <h2>userType: {user_view_type}</h2>
        <h3>GitLink: {html_url}</h3>
        <h3>Hobbies: Coding, Reading</h3>
        <h3>Skills: React, Node.js</h3>
      </div>
    );
  }
}

export default UserClass;
