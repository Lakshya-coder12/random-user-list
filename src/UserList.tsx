import axios from "axios";
import React, { useEffect, useState } from "react";
import UserRow from "./UserRow";

interface Props {}

const UserList: React.FC<Props> = (props) => {
  const [users, setUsers] = useState<any>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    axios
      .get(
        "https://randomuser.me/api/?inc=id,name,gender,email&page=" +
          page +
          "&results=20"
      )
      .then((response) => {
        setUsers(response.data.results);
      });
  }, [page]);

  return (
    <div className="flex items-center justify-center bg-indigo-400">
      <div className="flex-1 max-w-5xl pt-20 pb-4 pl-48 pr-48">
        <div className="grid justify-center grid-cols-2 gap-4 space-y-5 grid-row-20">
          <div className="p-2 mt-5 font-semibold text-center bg-white border border-transparent rounded-md shadow-md">
            GENDER
          </div>
          <div className="p-2 mt-5 font-semibold text-center bg-white border border-transparent rounded-md shadow-md">
            E-MAIL
          </div>
          {users.map((u: { email: string; gender: string }) => (
            <UserRow email={u.email} gender={u.gender} />
          ))}
        </div>
        <div className="pt-8">
          <button
            onClick={() => setPage(page + 1)}
            className="block px-4 py-2 mx-auto font-semibold bg-indigo-100 border border-transparent rounded-full shadow-md"
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};

UserList.defaultProps = {
  page: 1,
};

export default React.memo(UserList);
