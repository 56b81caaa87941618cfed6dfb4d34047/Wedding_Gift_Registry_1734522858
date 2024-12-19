import React from 'react';

const Footer: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <footer className="bg-gray-800 text-white p-8 w-full h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-center h-full">
          
          <h3 className="text-2xl font-bold mb-6">RSVP</h3>
          
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
            <div className="flex items-center space-x-2">
              <i className="bx bx-user text-xl text-gray-400"></i>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <i className="bx bx-envelope text-xl text-gray-400"></i>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <i className="bx bx-plus-circle text-xl text-gray-400"></i>
              <select
                className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              >
                <option value="">Plus One?</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full p-2 mt-4 bg-purple-600 hover:bg-purple-700 text-white rounded-lg shadow-md transition duration-300 flex items-center justify-center space-x-2"
            >
              <i className="bx bx-send text-xl"></i>
              <span>Submit RSVP</span>
            </button>
          </form>

        </div>
      </div>
    </footer>
  );
};

export { Footer as component };