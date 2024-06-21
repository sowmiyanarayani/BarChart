/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
import { React } from 'react';
import RandomManager from '../services/RandomManager';
const BarChart = (context) => {
	const { config: { subjects }} = context;
	const barColors = ['yellow', 'violet', 'pink', 'green', 'red'];
	const updatedSubjects = subjects.map((subject, index) => ({
		...subject,
		passedCount: RandomManager.randomPassedCount(),
		barColor: barColors[index % barColors.length],
	}));

	return 		<div className="chart">
		{ updatedSubjects.map((data, index) =>
			<div
				key={ index }
				style={ { display: 'flex', alignItems: 'center' } }
			>
				<div className="label"> { data.subjectName }</div>
				<div
					className="bar"
					style={ { width: `${ data.passedCount }%`, backgroundColor: data.barColor } }
				/>
				<div>{ data.passedCount }</div>
			</div>) }
	</div>;
};

export default BarChart;
