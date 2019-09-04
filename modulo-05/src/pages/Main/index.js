import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
	FaGithubAlt as GitHubIcon,
	FaPlus as Plus,
	FaSpinner as Spinner,
} from 'react-icons/fa';
import { Form, SubmitButton, List } from './styles';
import Container from '../../components/Container';
import api from '../../services/api';

class Main extends Component {
	state = {
		newRepo: '',
		repositories: [],
		loading: false,
	};

	componentDidMount() {
		const repositories = localStorage.getItem('repositories');
		if (repositories) {
			this.setState({ repositories: JSON.parse(repositories) });
		}
	}

	componentDidUpdate(_, prevState) {
		const { repositories } = this.state;

		if (prevState.repositories !== repositories) {
			localStorage.setItem('repositories', JSON.stringify(repositories));
		}
	}

	handleInputChange = e => {
		this.setState({ newRepo: e.target.value });
	};

	handleSubmit = async e => {
		e.preventDefault();
		const { newRepo, repositories } = this.state;
		this.setState({ loading: true });
		const response = await api.get(`/repos/${newRepo}`);
		const data = {
			name: response.data.full_name,
		};
		this.setState({
			repositories: [...repositories, data],
			newRepo: '',
			loading: false,
		});
		console.log(this.state);
	};

	render() {
		const { newRepo, repositories, loading } = this.state;
		return (
			<Container>
				<h1>
					<GitHubIcon />
					Repositories
				</h1>
				<Form onSubmit={e => this.handleSubmit(e)}>
					<input
						type="text"
						placeholder="Adiconar repositório"
						value={newRepo}
						onChange={this.handleInputChange}
					/>
					<SubmitButton loading={loading}>
						{loading ? <Spinner /> : <Plus />}
					</SubmitButton>
				</Form>
				<List>
					{repositories.map(repo => (
						<li key={repo.name}>
							<span>{repo.name}</span>
							<Link to={`/repository/${encodeURIComponent(repo.name)}`}>
								Detalhes
							</Link>
						</li>
					))}
				</List>
			</Container>
		);
	}
}
export default Main;
