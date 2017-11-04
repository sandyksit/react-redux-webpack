import React from 'react';
import * as searchActions from '../../actions';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import './RangeSlider.scss';


const RangeSlider = class RangeSlider extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			minValue: 100,
			maxValue: 10000,
			defaultValue: 10000,
			defaultStep: 100
		};
		this.filterSearchResult = this.filterSearchResult.bind(this);
	}
	filterSearchResult(e) {
		this.setState({
			defaultValue: e.target.value
		});

		this.props.actions.getFlightDataByPrice({amount: e.target.value});
	}
	render(){
		let sliderData = this.state;

		return (
			<div className="row left-section__slider">
				<div className="col s12">
					<div className="left-section__slider_heading mt-10">Refine flight search</div>
					<div className="form-group left-section__slider_steps">
						<span className="fl-left">{sliderData.minValue}</span><span className="fl-right">{sliderData.defaultValue}</span>
						<input type="range"
							min={sliderData.minValue}
							max={sliderData.maxValue}
							value={sliderData.defaultValue}
							step={sliderData.defaultStep}
							onChange={this.filterSearchResult}/>
					</div>
				</div>
			</div>
		);
	}
};

function mapStateToProps(state) {
	return {
		flightData: state.flightdata
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(Object.assign({}, searchActions), dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(RangeSlider);
