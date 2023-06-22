// /**
//  * IMPORTS
//  */

// // validar se no minha (dom) html tem o texo esperado (toBeInTheDocument())
// // validar se no minha (dom) html tem a className esperada (toHaveAttribute("class", "teste"))

// // types das propiedae de testes

// // 1) Query -> Eles não falham quando eu não encontro o elemento em tela esperado ou seja se eu quero testar se um elemento estar
// // em tela ou não eu posso utilizar o Query por que meus testes não irão falhar caso eu não encontre meu elemento em tela
// //
// // 2 Get -> Se ele não encontrar o elemento esperado em tela ele fazera seu teste falhar ou seja seu teste não passará para a frente
// // ou seja para utilização do Get o elemento precisa sempre estar em tela
// //
// // 3 Find -> Indentico ao (Get) mas porém ele espera o elemento aparecer em tela
import { render, waitFor } from "@testing-library/react";
import userfireEvent from "@testing-library/user-event";

import UserComponet from "./users";

describe("User Testing Component User", () => {
	it("Deve ser possível renderizar a list de usuário em tela", () => {
		const { getByText } = render(
			<UserComponet initialUsers={["Luan", "Andre", "Thales", "Lucas"]} />
		);

		expect(getByText("Luan")).toBeInTheDocument(); // espero que o nome de usuário esteja em tela
		expect(getByText("Thales")).toBeInTheDocument(); // espero que o nome de usuário esteja em tela
		expect(getByText("Andre")).toBeInTheDocument(); // espero que o nome de usuário esteja em tela
		expect(getByText("Lucas")).toBeInTheDocument(); // espero que o nome de usuário esteja em tela
	});

	it("Deve ser possível adicionar um novo usuário na lista", async () => {
		const { getByText, getByPlaceholderText } = render(
			<UserComponet initialUsers={["Novo"]} />
		);
		// procurando pelo input e vamos simular que o usuário estar digitando
		const inputElement = getByPlaceholderText("Novo usuário");

		// procurando pelo elemento button em tela
		const addButton = getByText("Adicionar Usuário");

		// chamar func type e passando nosso elemento e o texto que desejamso digitar
		await userfireEvent.type(inputElement, "Novo");

		// vou chamar a função do button
		await userfireEvent.setup().click(addButton);

		// waitFor ele rodar um loop que fica rodando varias vezes ate que retorne um valor valído
		await waitFor(async () => {
			// agora eu espero que quando esse função for chamada
			// tenha um novo usuário na minha lista
			expect(getByText("Novo")).toBeInTheDocument(); // espero que o nome de usuário esteja em tela
		});
	});

	it("Deve ser possível remover um novo usuário na lista", async () => {
		const { getAllByText, queryByText } = render(
			<UserComponet initialUsers={["Luan"]} />
		);

		// pegando todos botãos em tela que ira remover um usuario
		// vou ter um array
		const removeButtons = getAllByText("Remover Usuário");

		// agora iremo pegar o primeiro botão da possição do arraye  vamos executa-lo
		await userfireEvent.setup().click(removeButtons[0]);

		// waitFor ele rodar um loop que fica rodando varias vezes ate que retorne um valor valído
		await waitFor(async () => {
			// agora eu espero que quando esse função for chamada
			// o usuário luan não esteja na minha lista
			expect(queryByText("Luan")).not.toBeInTheDocument(); // espero que o nome de usuário esteja em tela
		});
	});
});
