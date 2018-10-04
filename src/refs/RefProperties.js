import React , {Component} from 'react';
import '../App.css';

class RefProperties extends Component{
	constructor(props){
		super(props);
		this.state={userName:"surender"}
	}
	onClickHandeler=() =>{
		console.log("this is on click onClickHandeler  "+this.refs.userName.value);
		this.setState({userName:this.refs.userName.value})
	}
	render(){
		return(
			<div>
				<input type="text" ref= "userName"/>
				<button onClick={this.onClickHandeler}>click me</button><br/>
				Hi!! {this.state.userName}
			</div>
			);
	}
}
export default RefProperties;