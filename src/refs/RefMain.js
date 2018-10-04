import React, {Component} from 'react';
import ChangeEvent from './ChangeEvent';
import RefProperties from './RefProperties';
class RefMain extends Component{
	render(){
		return(
			<div>
			<RefProperties />
				<ChangeEvent />
			</div>);
	}
}
export default RefMain;