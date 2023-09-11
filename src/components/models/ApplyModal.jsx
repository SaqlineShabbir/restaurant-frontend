import React from 'react';
import closeImg from '../../assets/svg/close-icon.png';
const ApplyModal = ({ setControl }) => {
  return (
    <div
      id="close"
      onClick={(e) => {
        if (e.target.id === 'close') {
          setControl(false);
        }
      }}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center z-50 w-full h-full"
      style={{ marginLeft: 0 }}
    >
      <div className="rounded  w-[400px] lg:w-[600px] space-y-8 bg-white p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
        <img
          src={closeImg}
          className="w-5"
          onClick={() => setControl(false)}
          alt="alt"
        />

        <h1 className="text-center text-3xl text-gray-700 mb-5">Apply here</h1>

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
            />
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="phone"
              autoComplete="current-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
              placeholder="Phone"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="sr-only">
              Address
            </label>
            <input
              id="text"
              name="address"
              type="text"
              autoComplete="current-confirmPassword"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
              placeholder="Address"
            />
          </div>
        </div>

        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
          <button className="bg-slate-400 text-white active:bg-indigo-300 px-3 py-1">
            Submit Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplyModal;
