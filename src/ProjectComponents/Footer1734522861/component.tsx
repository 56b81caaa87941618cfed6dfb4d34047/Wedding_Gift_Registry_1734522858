import React from 'react';

const Footer: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <footer className="bg-pink-50 text-gray-800 p-8 w-full h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-center h-full relative">
          <div className="absolute top-0 left-0 text-pink-200">
            <i className="bx bxs-flower text-4xl rotate-45"></i>
          </div>
          <div className="absolute top-0 right-0 text-pink-200">
            <i className="bx bxs-flower text-4xl -rotate-45"></i>
          </div>
          
          <h3 className="text-3xl font-serif italic text-pink-700 mb-8 relative">
            <span className="relative">
              <i className="bx bxs-heart absolute -left-8 top-1 text-pink-300"></i>
              RSVP
              <i className="bx bxs-heart absolute -right-8 top-1 text-pink-300"></i>
            </span>
          </h3>
          
          <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6 relative">
            <div className="flex items-center space-x-2">
              <i className="bx bx-user text-xl text-pink-400"></i>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-white border-2 border-pink-200 text-gray-700 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent font-serif"
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <i className="bx bx-envelope text-xl text-pink-400"></i>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-lg bg-white border-2 border-pink-200 text-gray-700 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent font-serif"
                required
              />
            </div>

            <div className="flex items-center space-x-2">
              <i className="bx bx-plus-circle text-xl text-pink-400"></i>
              <select
                className="w-full p-3 rounded-lg bg-white border-2 border-pink-200 text-gray-700 placeholder-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:border-transparent font-serif"
                required
              >
                <option value="">Plus One?</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full p-3 mt-6 bg-pink-500 hover:bg-pink-600 text-white rounded-lg shadow-md transition duration-300 flex items-center justify-center space-x-2 font-serif"
            >
              <i className="bx bx-envelope-heart text-xl"></i>
              <span>Send RSVP</span>
            </button>

            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-pink-200">
              <i className="bx bxs-flower-tulip text-3xl"></i>
            </div>
          </form>

        </div>
      </div>
    </footer>
  );
};

export { Footer as component };