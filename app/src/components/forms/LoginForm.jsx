import FormButton from "./FormButton";
import LoginInput from "./LoginIput";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "react-toastify";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();

  const submitLogin = (e) => {
    e.preventDefault();
    login(formData)
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };

  return (
    <form
      className="grid grid-cols-1 text-center gap-5 py-10"
      onSubmit={submitLogin}
    >
      <div className="text-3xl font-bold">WELCOME BACK!</div>
      <div className="text-xl">Log in to access your account.</div>
      <LoginInput
        placeholder="Email address"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <LoginInput
        value={formData.password}
        type="password"
        placeholder="Password"
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <FormButton>LOG IN</FormButton>
      <h3 className="text-xl">Don't have an account?</h3>
      <h5 className="text-xl text-greenPastel hover:underline cursor-pointer">
        <Link to="/register">Sign up</Link>
      </h5>
    </form>
  );
}
