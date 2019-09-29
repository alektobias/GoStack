import React, { Component } from 'react';
import TechItem from './TechItem';

export default class TechList extends Component {
	
	state = {
		newTech: '',
		techs: ['NodeJS', 'ReactJS', 'React Native '],
	}
	handleInputChange = e => {
		this.setState({newTech: e.target.value});
	}
	handleSubmit = e => {
		e.preventDefault();
		this.setState({newTech: '', techs: [ ...this.state.techs, this.state.newTech]})
	}
	handleDelete = (tech) => {
		this.setState({techs: this.state.techs.filter(t => t !== tech)})
	} 
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<ul>
					{this.state.techs.map(tech => (
						<TechItem key={tech} tech={tech} onDelete={() => this.handleDelete(tech)}/>
					))}
				</ul>
				<input type="text" value={this.state.newTech} onChange={this.handleInputChange}/>
				<button type="submit">Enviar</button>
			</form>
		);
	}
}