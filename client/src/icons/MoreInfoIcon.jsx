import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

const MoreInfoIcon = ({ pathname }) => {
	const [pathnameReference, setPathnameReference] = useState(pathname);

	return (
		<svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24">
			<circle
				className={`fill-current text-slate-400 ${
					pathnameReference.includes('utility') && 'text-indigo-300'
				}`}
				cx="18.5"
				cy="5.5"
				r="4.5"
			/>
			<circle
				className={`fill-current text-slate-600 ${
					pathnameReference.includes('utility') && 'text-indigo-500'
				}`}
				cx="5.5"
				cy="5.5"
				r="4.5"
			/>
			<circle
				className={`fill-current text-slate-600 ${
					pathnameReference.includes('utility') && 'text-indigo-500'
				}`}
				cx="18.5"
				cy="18.5"
				r="4.5"
			/>
			<circle
				className={`fill-current text-slate-400 ${
					pathnameReference.includes('utility') && 'text-indigo-300'
				}`}
				cx="5.5"
				cy="18.5"
				r="4.5"
			/>
		</svg>
	);
};

MoreInfoIcon.propTypes = {
	pathname: PropTypes.string.isRequired,
};

export default MoreInfoIcon;
