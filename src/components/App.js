import React from 'react' ;
import Title from './Title/Title';
import SearchForm from './SearchForm/SearchForm';
import Navigation from './Navigation/Navigation';
import RangeSlider from './RangeSlider/RangeSlider';
import ListView from './ListView/ListView';

require('../../src/libs/materialize-src/sass/materialize.scss');
require('../../src/assets/css/common.scss');


const App = class App extends React.Component {
	render() {
		return (
			<div className="row main-container">
			<Title />
				<div className="row mb-0">
					<div className="col s3 left-section">
						<SearchForm />
						<RangeSlider />
					</div>
					<div className="col s9 no-padding right-section">
						<div className="row mb-0 border__left list">
							<div className="col s12 no-padding">
								<Navigation />
								<ListView />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

export default App;
