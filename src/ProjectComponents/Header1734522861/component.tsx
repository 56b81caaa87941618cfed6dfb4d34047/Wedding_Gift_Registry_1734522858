
import React from 'react';

const GuestTable: React.FC = () => {
  return (
    <div className="p-5 bg-gradient-to-br from-gray-50 to-white">
      <div className="overflow-x-auto">
        <table className="w-full bg-gradient-to-r from-white to-gray-50 shadow-xl rounded-xl border border-gray-200">
          <thead className="bg-gradient-to-r from-purple-600 to-blue-500 text-white">
            <tr>
              <th className="p-4 text-left font-bold tracking-wider uppercase text-sm transition-all duration-300 hover:scale-105">
                <div className="flex items-center">
                  <i className='bx bx-user mr-2 text-white opacity-90'></i>
                  Name
                </div>
              </th>
              <th className="p-4 text-left font-bold tracking-wider uppercase text-sm transition-all duration-300 hover:scale-105">
                <div className="flex items-center">
                  <i className='bx bx-envelope mr-2 text-white opacity-90'></i>
                  Invitation Status
                </div>
              </th>
              <th className="p-4 text-left font-bold tracking-wider uppercase text-sm transition-all duration-300 hover:scale-105">
                <div className="flex items-center">
                  <i className='bx bx-calendar mr-2 text-white opacity-90'></i>
                  RSVP Date
                </div>
              </th>
              <th className="p-4 text-left font-bold tracking-wider uppercase text-sm transition-all duration-300 hover:scale-105">
                <div className="flex items-center">
                  <i className='bx bx-plus-circle mr-2 text-white opacity-90'></i>
                  Plus One
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100 transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:shadow-md">
              <td className="p-4 cursor-pointer font-medium text-gray-700 transition-all duration-300 hover:text-purple-600 hover:scale-105" contentEditable>John Doe</td>
              <td className="p-4 cursor-pointer font-medium text-gray-700 transition-all duration-300 hover:text-purple-600 hover:scale-105" contentEditable>Invited</td>
              <td className="p-4 cursor-pointer font-medium text-gray-700 transition-all duration-300 hover:text-purple-600 hover:scale-105" contentEditable>2023-05-10</td>
              <td className="p-4 cursor-pointer font-medium text-gray-700 transition-all duration-300 hover:text-purple-600 hover:scale-105" contentEditable>Yes</td>
            </tr>
            <tr className="border-b border-gray-100 transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:shadow-md">
              <td className="p-4 cursor-pointer font-medium text-gray-700 transition-all duration-300 hover:text-purple-600 hover:scale-105" contentEditable>Jane Smith</td>
              <td className="p-4 cursor-pointer font-medium text-gray-700 transition-all duration-300 hover:text-purple-600 hover:scale-105" contentEditable>Invited</td>
              <td className="p-4 cursor-pointer font-medium text-gray-700 transition-all duration-300 hover:text-purple-600 hover:scale-105" contentEditable>2023-05-11</td>
              <td className="p-4 cursor-pointer font-medium text-gray-700 transition-all duration-300 hover:text-purple-600 hover:scale-105" contentEditable>No</td>
            </tr>
            <tr className="border-b border-gray-100 transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:shadow-md">
              <td className="p-4 cursor-pointer font-medium text-gray-700 transition-all duration-300 hover:text-purple-600 hover:scale-105" contentEditable>Emily Davis</td>
              <td className="p-4 cursor-pointer font-medium text-gray-700 transition-all duration-300 hover:text-purple-600 hover:scale-105" contentEditable>Invited</td>
              <td className="p-4 cursor-pointer font-medium text-gray-700 transition-all duration-300 hover:text-purple-600 hover:scale-105" contentEditable>2023-05-15</td>
              <td className="p-4 cursor-pointer font-medium text-gray-700 transition-all duration-300 hover:text-purple-600 hover:scale-105" contentEditable>Yes</td>
            </tr>
            <tr className="border-b border-gray-100 transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:shadow-md">
              <td className="p-4 cursor-pointer font-medium text-gray-700 transition-all duration-300 hover:text-purple-600 hover:scale-105" contentEditable>Michael Brown</td>
              <td className="p-4 cursor-pointer font-medium text-gray-700 transition-all duration-300 hover:text-purple-600 hover:scale-105" contentEditable>Invited</td>
              <td className="p-4 cursor-pointer font-medium text-gray-700 transition-all duration-300 hover:text-purple-600 hover:scale-105" contentEditable>2023-05-16</td>
              <td className="p-4 cursor-pointer font-medium text-gray-700 transition-all duration-300 hover:text-purple-600 hover:scale-105" contentEditable>No</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { GuestTable as component };
