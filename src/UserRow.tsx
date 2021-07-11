import React from "react";

interface Props {
  gender: string;
  email: string;
}

const UserRow: React.FC<Props> = ({ gender, email }) => {
  return (
    <>
      <div className="p-1 mt-5 text-center bg-white border border-transparent rounded-md shadow-md">
        {gender}
      </div>
      <div className="p-1 mt-5 text-center bg-white border border-transparent rounded-md shadow-md">
        {email}
      </div>
    </>
  );
};

UserRow.defaultProps = {};

export default React.memo(UserRow);
