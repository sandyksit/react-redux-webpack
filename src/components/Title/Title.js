import React from 'react';
import './Title.scss';

const Header = class Header extends React.Component {
	render() {
		return (
			<div className="row border__bottom mb-0"><div className="col s12"><h1>Flight Search Engine</h1></div></div>
		);
	}
};

export default Header;
