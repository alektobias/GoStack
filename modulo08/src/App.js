import React, { useState, useMemo, useCallback } from 'react';

export default function App() {
	const [tech, setTech] = useState(['react', 'react native']);

	const handleAdd = useCallback(() => {
		setTech([...tech, 'node']);
	}, []);
	
	const techSize = useMemo(() => tech.length, [tech]);
	return (
		<>
			<ul>
				{tech.map(t => (
					<li key={t}>{t}</li>
				))}
			</ul>
			<strong>Você tem {techSize} tecnologias</strong>
			<button type="button" onClick={() => handleAdd()}>
				adicionar
			</button>
		</>
	);
}
