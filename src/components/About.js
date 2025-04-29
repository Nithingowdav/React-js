import User from "./User";
import UserClass from "./UserClass";
import React from 'react';

class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("parent Constructor called"); // Logging to check if constructor is called 1st
    }
     componentDidMount() {
        //console.log("parent Component did mount called"); // Logging to check if componentDidMount is called last when child completed its lifecycle componentdidmount used to fetch data from API
    // API call or any other side effects can be done here
    // This method is called after the component is mounted in the DOM
    // It is a good place to fetch data or perform any setup that requires the component to be in the DOM
    
    }

    render() {
        console.log(" parent Render method called"); // Logging to check if render method is called 2nd
        return (
            <div>
                <h1>About Restaurant</h1>
                {/* <User /> */}
                <UserClass name={"Nithin"} location='Bengaluru' />
                {/* <UserClass name="Nithin" /> */}

            </div>
        );
    }
}
            

// const About = () => {
//     return (
//         <div>
//         <h1>About Restaurant</h1>
//         {/* <User /> */}
//         <UserClass name={"Nithin"} location='Bengaluru' />
//         {/* <UserClass name="Nithin" /> */}

//         </div>
//     );
// }

export default About;


//parent constructor
//parent render method called
//child constructor called in user
//child render method called in user    
//child component did mount in user
//parent Component did mount in user


// parent constructor called
// parent Render method called
// child Constructor called in user
// child Render method called in user
// child constructor called in 2nd component
// child render method called in 2nd component
//child component did mount in user
// child component did mount in 2nd component
// parent Component did mount 