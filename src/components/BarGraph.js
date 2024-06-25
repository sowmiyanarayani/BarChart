import { React } from 'react';
import RandomManager from '../services/RandomManager';
import Label from './Label';
import Bar from './Bar';
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
			<div key={ index } className="body">
				<Label subjectName={ data.subjectName }/>
				<Bar
					passedCount={ data.passedCount }
					barColor={ data.barColor }
				/>
				<div>{ data.passedCount }</div>
			</div>) }
	</div>;
};

export default BarChart;
