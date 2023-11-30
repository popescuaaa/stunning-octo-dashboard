import React from 'react';
import Help from './header/Help';

const Header = () => {
	return (
		<header className="sticky top-0 bg-white border-b border-slate-200 z-30">
			<div className="px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-end h-16 -mb-px">
					{/* Header content */}
					<div className="flex items-center">
						<Help />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
