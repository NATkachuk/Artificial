
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Header from "../../components/header/Header";
import './SignUp.scss';
import { useCallback, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const useYupValidationResolver = validationSchema =>
  useCallback(
    async data => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {}
        };
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? "validation",
                message: currentError.message,
              },
            }),
            {}
          ),
        };
      }
    },
    [validationSchema]
  );

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required(),
});

function SignUp() {
  const resolver = useYupValidationResolver(validationSchema);
  const { handleSubmit, register, formState, setError } = useForm({ resolver });
  const { errors } = formState;
  const navigate = useNavigate();

  const handleSignUp = async (data) => {
    try {
      // Here you would typically make an API call to create a new user
      // For demonstration purposes, we'll just log the data to the console
      console.log('New user data:', data);
      alert('User successfully created!');
      localStorage.setItem('email', data.email); // збереження email в localStorage
      navigate('/'); // перенаправлення на головну сторінку
    } catch (error) {
      console.error('Error creating user:', error);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <Header />
      <main className="main">
        <h1 className="main__title">Sign Up</h1>
        <form onSubmit={handleSubmit(handleSignUp)} className="main-form">
          <input
            {...register("email")}
            className="main-form__input"
            placeholder="Enter your email"
          />
          {errors.email && <div className="error-message">{errors.email.message}</div>}
          <input
            {...register("password")}
            className="main-form__input"
            placeholder="Enter your password"
          />
          {errors.password && <div className="error-message">{errors.password.message}</div>}
          <input
            {...register("confirmPassword")}
            className="main-form__input"
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && <div className="error-message">{errors.confirmPassword.message}</div>}
          <button type="submit" className="main-form__btn">Send</button>
        </form>
      </main>
    </div>
  );
}
export default SignUp;