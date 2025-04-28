import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
        <h1>About Restaurant</h1>
        <p>Lets in touch</p>
        <p>Contact : 967898789</p>
        {/* <User /> */}
        <UserClass name={"Nithin"} location='Bengaluru' />
        {/* <UserClass name="Nithin" /> */}

        </div>
    );
}

export default About;
