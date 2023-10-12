import { Form } from "react-router-dom";
import RegisterInput from "./RegisterInput";
import FormButton from "./FormButton";
import { Link } from "react-router-dom";

export default function RegisterForm() {
  return (
    <form className="grid grid-cols-1 text-center gap-5 py-10 ">
      <h1 className="text-3xl font-bold">SIGN UP</h1>
      <h3 className="text-xl">Register to become a member.</h3>
      <RegisterInput placeholder="First Name" name="firstName" />
      <RegisterInput placeholder="Last Name" name="lastName" />
      <RegisterInput placeholder="Email address" />
      <RegisterInput placeholder="Password" type="password" />
      <RegisterInput placeholder="Confirm Password" type="password" />
      <FormButton>SIGN UP</FormButton>
      <h3 className="text-xl">Already have an account?</h3>
      <h5 className="text-xl text-greenPastel hover:underline cursor-pointer">
        <Link to="/login">Sign in</Link>
      </h5>
    </form>
  );
}
