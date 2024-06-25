import React from 'react';

const Bar = ({ passedCount, barColor }) =>
	<div
		className="bar"
		style={ { width: `${ passedCount }%`, backgroundColor: barColor } }
	/>;

export default Bar;
