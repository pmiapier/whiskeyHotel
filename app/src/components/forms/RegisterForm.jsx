import RegisterInput from "./RegisterInput";
import FormButton from "./FormButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

export default function RegisterForm() {

  const { register } = useAuth();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    register(formData);
  }

  return (
    <form
    className="grid grid-cols-1 text-center gap-5 py-10"
    onSubmit={handleSubmit}
    >
      <h1 className="text-3xl font-bold">SIGN UP</h1>
      <h3 className="text-xl">Register to become a member.</h3>
      <RegisterInput
      placeholder="First Name" name="firstName"
      value={formData.first_name}
      onChange={(e) => setFormData({...formData, first_name: e.target.value})}
      />
      <RegisterInput
      placeholder="Last Name" name="lastName"
      value={formData.last_name}
      onChange={(e) => setFormData({...formData, last_name: e.target.value})}
       />
      <RegisterInput
      placeholder="Email address"
      value={formData.email}
      onChange={(e) => setFormData({...formData, email: e.target.value})}
       />
      <RegisterInput
      placeholder="Password" type="password"
      value={formData.password}
      onChange={(e) => setFormData({...formData, password: e.target.value})}
       />
      <RegisterInput
      placeholder="Confirm Password" type="password"
      value={formData.confirmPassword}
      onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
       />
      <FormButton>SIGN UP</FormButton>
      <h3 className="text-xl">Already have an account?</h3>
      <h5 className="text-xl text-greenPastel hover:underline cursor-pointer">
        <Link to="/login">Sign in</Link>
      </h5>
    </form>
  );
}
