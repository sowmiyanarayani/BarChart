import { React } from 'react';
import './App.scss';
import BarGraph from './components/BarGraph';
const App = (context) =>
	<div className="App">
		<BarGraph { ...context }/>
	</div>;

export default App;
