import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoImage from '../assets/react.svg';
import authImg from '../assets/svg/auth-removebg-preview.png';
import { useRegisterMutation } from '../features/auth/authApi';

export default function Register() {
  //get all the field
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');

  const [register, { data, isLoading, error: responseError }] =
    useRegisterMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (responseError?.data) {
      setError(responseError?.data?.message);
    }
    if (data?.status === 'success') {
      navigate('/');
    }
  }, [data, responseError, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setError('');

    if (confirmPassword !== password) {
      setError('Passwords do not match');
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };

  return (
    <div className="grid place-items-center lg:place-items-between h-screen   dark:bg-[#0a0c1c] dark:text-gray-100">
      <div className="min-h-full lg:flex justify-center  px-4 sm:px-6 lg:px-8 py-20 lg:space-x-[100px]">
        <div>
          <img className="lg:h-[550px] lg:w-[700px]" src={authImg} alt="" />
        </div>
        <div className="max-w-md w-full space-y-8 space-x-10   lg:mt-20">
          <div>
            <Link to="/">
              <img
                className="mx-auto h-12 w-auto"
                src={logoImage}
                alt="Learn with sumit"
              />
            </Link>
            <h2 className="mt-6 text-center text-3xl font-extrabold ">
              Create your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Full Name
                </label>
                <input
                  id="name"
                  name="Name"
                  type="Name"
                  autoComplete="Name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="sr-only">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="current-confirmPassword"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                  placeholder="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="agree"
                  name="agree"
                  type="checkbox"
                  className="h-4 w-4 text-violet-600 focus:ring-violet-500 border-gray-300 rounded"
                  checked={agreed}
                  required
                  onChange={(e) => setAgreed(e.target.checked)}
                />
                <label htmlFor="accept-terms" className="ml-2 block text-sm ">
                  Agreed with the terms and condition
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                disabled={isLoading}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                Sign up
              </button>
            </div>
            {responseError && (
              <p className="text-red-500 py-1  text-center bg-red-100">
                {error}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
