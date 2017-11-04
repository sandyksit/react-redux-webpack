import React from 'react';
//import PropTypes from 'prop-types';
import './Navigation.scss';

const Navigation = class Navigation extends React.Component {
	render(){
		return (
				<div className="row border__bottom mb-10">
					<div className="col s9">
						<h2>Pune > Delhi > Pune</h2>
					</div>
					<div className="col s3 padd-15">
						<div><span>Depart :</span><span>1st Jan 2012</span></div>
						<div><span>Return :</span><span>10th Jan 2012</span></div>
					</div>
				</div>
		);
	}
};

// Header.propTypes = {
// 	title: PropTypes.string
// };

export default Navigation;
