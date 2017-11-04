import React from 'react';
import './Loader.scss';

const Loader = class Loader extends React.Component {
	render(){
		return (
			<div className = "preloader-wrapper big active">
				<div className = "circle-clipper right">
					<div className = "circle"></div>
				</div>
			</div>
		);
	}
};

export default Loader;
