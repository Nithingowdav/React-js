import { useRouteError } from "react-router";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops! Something went wrong.</h1>
      <p>Please try again later.</p>
      <p>If the problem persists, contact support.</p>
      <h2>{err.status + " : " + err.statusText}</h2>
    </div>
  );
};
export default Error;
