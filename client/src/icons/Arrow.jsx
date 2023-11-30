import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

const Arrow = ({ open }) => {
	const [openReference, setOpenReference] = useState(open);

	return (
		<svg
			className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
				openReference && 'rotate-180'
			}`}
			viewBox="0 0 12 12"
		>
			<path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
		</svg>
	);
};

Arrow.propTypes = {
	open: PropTypes.boolean.isRequired,
};

export default Arrow;
