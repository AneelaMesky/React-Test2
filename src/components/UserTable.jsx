import React, { useContext, useState } from "react";
import { UserContext } from "./User";

function UserTable({ users }) {
  const { theme } = useContext(UserContext);
  const [show, setShow] = useState({});

  const handleShow = (userId) => {
    setShow((prev) => ({
      ...prev,
      [userId]: !prev?.[userId],
    }));
  };

  const addressShow = (address) => `${address?.street}, ${address?.city}`;
  return (
    <div className={theme == 1 ? "light-theme" : "dark-theme"}>
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Company Name</th>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr>
              <td>{user?.id}</td>
              <td>{user?.name}</td>
              <td>{user?.email}</td>
              <td>{user?.company?.name}</td>
              <button
                onClick={() => handleShow(user?.id)}
                id={user?.id}
                className={
                  show[user?.id]
                    ? "bg-[red] text-white"
                    : "bg-[#437bac] text-white"
                }
              >
                {show[user?.id] ? "Hide" : "More Details.."}
              </button>
              {show[user?.id] && (
                <tr>
                  <td>
                    {" "}
                    <span className='font-bold'>Address:</span>{" "}
                    {addressShow(user?.address)}
                  </td>
                  <td>
                    {" "}
                    <span className='font-bold'>Phone Number:</span>{" "}
                    {user?.phone}
                  </td>
                </tr>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
