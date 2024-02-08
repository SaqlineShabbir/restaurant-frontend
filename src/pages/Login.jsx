import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoImage from '../assets/react.svg';
import authImg from '../assets/svg/auth-removebg-preview.png';
import { useLoginMutation } from '../features/auth/authApi';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  //from redux
  const [login, { data, isLoading, error: responseError }] = useLoginMutation();

  const navigate = useNavigate();
  const location = useLocation();
  //check where user came from
  const form = location.state?.form?.pathname || '/';
  // console.log(form);

  useEffect(() => {
    if (responseError?.data) {
      setError(responseError?.data?.message);
    }
    if (data?.status === 'success') {
      navigate(form, { replace: true });


    }
  }, [data, responseError, navigate]);

  //submit data
  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');

    login({
      email,
      password,
    });


    // fetch('http://localhost:5000/api/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     email,
    //     password,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data) {
    //       window.alert('success');
    //     }
    //   });
  };

  return (
    <div className="grid place-items-center h-screen dark:bg-[#0a0c1c] dark:text-white">
      <div className="min-h-full lg:flex  py-12 px-4 sm:px-6 lg:px-8 ">
        <div>
          <img className="lg:h-[550px] lg:w-[700px]" src={authImg} alt="" />
        </div>
        <div className="max-w-md w-full space-y-5 lg:pt-[140px] lg:ml-20">
          <div>
            <Link to="/">
              <img
                className="mx-auto h-12 w-auto"
                src={logoImage}
                alt="Learn with sumit"
              />
            </Link>
            <h2 className="mt-6 text-center text-3xl font-extrabold ">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
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
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="pt-5">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-end">
              <div className="text-sm">
                {/* <Link
                  to="/register"
                  className="font-medium text-violet-600 hover:text-violet-500"
                >
                  Register
                </Link> */}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                disabled={isLoading}
              >
                Sign in
              </button>
            </div>
            {/* //show error here */}
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
