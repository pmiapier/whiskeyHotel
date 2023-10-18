import RegisterInput from "./RegisterInput";
import FormButton from "./FormButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { toast } from 'react-toastify';
import InputErrorMessage from './InputErrorMessage';
import Joi from 'joi';

const registerSchema = Joi.object({
  first_name: Joi.string().trim().required(),
  last_name: Joi.string().trim().required(),
  email: Joi.string().email({ tlds: false }).required(),
  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,30}$/)
    .trim()
    .required(),
    // declare custom error message
  confirmPassword: Joi.string().valid(Joi.ref('password')).trim().required().messages({
    'any.only': 'Password does not match'
  })
});

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, { abortEarly: false });
  if (error) {
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, {});
    return result;
  }
};

export default function RegisterForm() {
  const { register } = useAuth();
  const [error, setError] = useState({});

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateRegister(formData);
    if (validationError) {
      return setError(validationError);
    }
    setError({})
    register(formData).catch(err => {
      toast.error(err.response?.data.message);
    });
  };

  return (
    <form
      className="grid grid-cols-1 text-center gap-5 py-10"
      onSubmit={handleSubmit}
    >
      <h1 className="text-3xl font-bold">SIGN UP</h1>
      <h3 className="text-xl">Register to become a member.</h3>
      <RegisterInput
        placeholder="First Name"
        name="firstName"
        value={formData.first_name}
        onChange={(e) =>
          setFormData({ ...formData, first_name: e.target.value })
        }
        hasError={error.first_name}
      />
      {error.first_name && <InputErrorMessage message={error.first_name} />}
      <RegisterInput
        placeholder="Last Name"
        name="lastName"
        value={formData.last_name}
        onChange={(e) =>
          setFormData({ ...formData, last_name: e.target.value })
        }
        hasError={error.last_name}
      />
      {error.last_name && <InputErrorMessage message={error.last_name} />}
      <RegisterInput
        placeholder="Email address"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        hasError={error.email}
      />
      {error.email && <InputErrorMessage message={error.email} />}
      <RegisterInput
        placeholder="Password"
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        hasError={error.password}
      />
      {error.password && <InputErrorMessage message={error.password} />}
      <RegisterInput
        placeholder="Confirm Password"
        type="password"
        value={formData.confirmPassword}
        onChange={(e) =>
          setFormData({ ...formData, confirmPassword: e.target.value })
        }
        hasError={error.confirmPassword}
      />
      {error.confirmPassword && <InputErrorMessage message={error.confirmPassword} />}
      <FormButton>SIGN UP</FormButton>
      <h3 className="text-xl">Already have an account?</h3>
      <h5 className="text-xl text-greenPastel hover:underline cursor-pointer">
        <Link to="/login">Sign in</Link>
      </h5>
    </form>
  );
}
