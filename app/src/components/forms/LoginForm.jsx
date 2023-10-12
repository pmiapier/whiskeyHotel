import FormButton from "./FormButton";
import LoginInput from "./LoginIput";
import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <form className="grid grid-cols-1 text-center gap-10 py-48">
      <h1 className="text-6xl font-bold">WELCOME BACK!</h1>
      <h3 className="text-3xl">Log in to access your account.</h3>
      <LoginInput placeholder="Email address" />
      <LoginInput type="password" placeholder="Password" />
      <FormButton>LOG IN</FormButton>
      <h3 className="text-2xl">Don't have an account?</h3>
      <h5 className="text-2xl text-greenPastel hover:underline cursor-pointer">
        <Link to="/register">Sign up</Link>
      </h5>
    </form>
  );
}
