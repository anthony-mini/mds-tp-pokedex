import React, { useState } from 'react';
import SVGMemes from '../../assets/doge-hand-drawn.svg';
import DataModels from '../../models/data-interface.tsx';
import UserModels from '../../models/user-interface.tsx';

const transformDataToUser = (data: Data): User => {
  return {
    id: data.login.uuid,
    photo: data.picture.thumbnail,
    name: `${data.name.first} ${data.name.last}`,
    email: data.email,
    phone: data.phone,
    website: data.login.uuid
  };
};

const Grid: React.FC<{ data: Data[] }> = ({ data }) => {
  const users: User[] = data.map(transformDataToUser);
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Photo
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nom
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Age
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Genre
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tel
              </th>
            </tr>
          </thead>
          {data.length > 0 && (
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((user) => (
                <tr key={user.login.uuid}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.picture.thumbnail}
                      alt="user"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.name.first} {user.name.last}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.dob.age}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.gender === 'male' ? '🥸' : '😈'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.phone}</td>
                </tr>
              ))}
            </tbody>
          )}
          <tbody className="bg-white">
            <tr>
              <td colSpan={6} className="px-6 py-10 whitespace-nowrap text-center">
                <div className="flex justify-center items-center flex-col space-y-5">
                  <p className="text-lg font-semibold">Please Fetch Users</p>
                  <img className="animate-blink w-20" src={SVGMemes} alt="dog-memes" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Grid;
