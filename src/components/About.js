import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
        <h1>About Restaurant</h1>
        {/* <User /> */}
        <UserClass name={"Nithin"} location='Bengaluru' />
        {/* <UserClass name="Nithin" /> */}

        </div>
    );
}

export default About;
