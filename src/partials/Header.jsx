import React from "react";
import Notifications from "./header/Notifications";
import Help from "./header/Help";
import UserMenu from "./header/UserMenu";

const Header = () => {
  const userName = "John Doe";

  return (
    <header className="sticky top-0 bg-white border-b border-slate-200 z-30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-16 -mb-px">
          {/* Header content */}
          <div className="flex items-center">
            {/* Light / Dark theme switch */}
            <Notifications />
            <Help />
            {/*  Divider */}
            <hr className="w-px h-6 bg-slate-200 mx-3" />
            <UserMenu userName={userName} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
