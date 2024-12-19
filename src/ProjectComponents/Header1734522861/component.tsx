
import React from 'react';

const GuestTable: React.FC = () => {
  return (
    <div className="p-5">
      <div className="overflow-x-auto">
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-4 text-left font-semibold">
                <div className="flex items-center">
                  <i className='bx bx-user mr-2'></i>
                  Name
                </div>
              </th>
              <th className="p-4 text-left font-semibold">
                <div className="flex items-center">
                  <i className='bx bx-envelope mr-2'></i>
                  Invitation Status
                </div>
              </th>
              <th className="p-4 text-left font-semibold">
                <div className="flex items-center">
                  <i className='bx bx-calendar mr-2'></i>
                  RSVP Date
                </div>
              </th>
              <th className="p-4 text-left font-semibold">
                <div className="flex items-center">
                  <i className='bx bx-plus-circle mr-2'></i>
                  Plus One
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t hover:bg-gray-50">
              <td className="p-4">John Doe</td>
              <td className="p-4">Invited</td>
              <td className="p-4">2023-05-10</td>
              <td className="p-4">Yes</td>
            </tr>
            <tr className="border-t hover:bg-gray-50">
              <td className="p-4">Jane Smith</td>
              <td className="p-4">Invited</td>
              <td className="p-4">2023-05-11</td>
              <td className="p-4">No</td>
            </tr>
            <tr className="border-t hover:bg-gray-50">
              <td className="p-4">Emily Davis</td>
              <td className="p-4">Invited</td>
              <td className="p-4">2023-05-15</td>
              <td className="p-4">Yes</td>
            </tr>
            <tr className="border-t hover:bg-gray-50">
              <td className="p-4">Michael Brown</td>
              <td className="p-4">Invited</td>
              <td className="p-4">2023-05-16</td>
              <td className="p-4">No</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { GuestTable as component };
