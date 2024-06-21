import { React } from 'react';
import BarGraph from './BarGraph';
import BarGraphHeader from './BarGraphHeader';
const DisplayBarGraph = (context) =>
	<table className="chart">
		<thead>
			<BarGraphHeader/>
		</thead>
		<BarGraph { ...context }/>
	</table>;

export default DisplayBarGraph;
