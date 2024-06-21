import { React } from 'react';
import './App.scss';
import DisplayBarGraph from './components/DisplayBarGraph';
const App = (context) =>
	<div className="App">
		<DisplayBarGraph { ...context }/>
	</div>;

export default App;
