import React from 'react';
import { PropTypes } from 'prop-types';

const WelcomeBanner = ({ userName }) => {
	return (
		<div className="relative bg-blue-100 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
			{/* Content */}
			<div className="relative">
				<h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-1">
					Good afternoon, {userName}. 👋
				</h1>
				<p>Here are the numbers of your company</p>
			</div>
		</div>
	);
};

WelcomeBanner.propTypes = {
	userName: PropTypes.string.isRequired,
};

export default WelcomeBanner;
