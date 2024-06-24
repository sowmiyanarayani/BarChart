import { React } from 'react';
import './App.scss';
import BarGraph from './components/BarGraph';
const App = (context) =>
	<div className="App">
		<h2>Passed Count</h2>
		<BarGraph { ...context }/>
	</div>;

export default App;
