import React from 'react';
import PropTypes from 'prop-types';

const Input = class Input extends React.Component {
	constructor (props) {
		super(props);
		this.getCities = this.getCities.bind(this);
	}
	getCities(response) {
		if(response.length) {
			return response.map((item) => ( <option value={item.city.code}><label>{item.city.name}</label></option> ));
		}
	}
	render() {
		let options = this.props.param;
		return (
			<div>
				<input list={options.datalist} placeholder={options.placeholder} className="form-control" ref={options.fieldref} name={options.name} onChange={this.props.changeHandler} />

				<datalist id={options.datalist}>
					{ this.getCities(options.cities) }
				</datalist>
			</div>
		);
	}
};
Input.propTypes = {
	param: PropTypes.object
};
export default Input;
