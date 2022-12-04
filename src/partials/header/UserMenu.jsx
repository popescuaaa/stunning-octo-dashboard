import React from "react";
import { PropTypes } from "prop-types";

const UserMenu = ({ userName }) => {
  return (
    <div className="relative inline-flex">
      <div className="flex items-center truncate">
        <span className="truncate ml-2 text-sm font-medium group-hover:text-slate-800">
          {userName}
        </span>
      </div>
    </div>
  );
};

UserMenu.propTypes = {
  userName: PropTypes.string.isRequired,
};

export default UserMenu;
