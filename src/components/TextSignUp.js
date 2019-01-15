import React from 'react'
class TextSignUp extends React.Component{
	constructor(props){
		super()
	}	
	render(){ 
		return(
			<div>
				<label>Enter Your Phone Number</label>
				<input ref="phone"/>
				<input type="submit" onClick={this.submitPhoneNumber.bind(this)}/>
			</div>
		)
	}

	submitPhoneNumber(){
		this.props.onClick(this.refs.phone.value)
	}
}

const postPhoneNumber = () => {
	
}


export default TextSignUp