/* eslint-disable no-self-compare */
import React, { useState } from "react";

interface IUserProps {
	initialUsers: string[];
}

const UserComponent = ({ initialUsers }: IUserProps) => {
	const [users, setUsers] = useState(initialUsers);

	const [userText, setUserText] = useState("");

	function handleAddNewUser() {
		// simulando chamada api
		setTimeout(() => {
			setUsers(state => [...state, "Novo"]);
		}, 500);
	}

	function handleRemoverUser(user: string) {
		// simulando chamada api
		setTimeout(() => {
			setUsers(state => state.filter(item => item !== user));
		}, 500);
	}
	return (
		<div>
			<input
				placeholder="Novo usuário"
				value={userText}
				onChange={event => {
					setUserText(event.target.value);
				}}
			/>

			<button onClick={handleAddNewUser}>Adicionar Usuário</button>

			<ul>
				{users.map(item => (
					<li key={item}>
						{item}
						<button
							onClick={() => {
								handleRemoverUser(item);
							}}
						>
							Remover Usuário
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default UserComponent;
