import { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";
import userfireEvent from "@testing-library/user-event";

// component
import { Button } from "../button";

// styles
import theme from "../../../global/styles/theme";

const Providers: React.FC = ({ children }: any) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const svg = `<path d="M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3 22.2 52.4 53.9 99.5 94.3 139.9 40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6 52.4-22.2 99.5-53.9 139.9-94.3 40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9 437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7-63.1 26.8-130.2 40.3-199.3 40.3z"></path>`;

describe("Teste Componente Butão", () => {
	it("Deve ser possível renderizar o componente de Butão", () => {
		const { getByTestId } = render(<Button dataTestid="component-button" />, {
			wrapper: Providers,
		});

		const buttonElement = getByTestId("component-button");

		expect(buttonElement).toBeTruthy();
	});

	it("Deve ser possível renderizar o texto (Adicionar) caso o loding dentro do componente butão estaja (falso)", () => {
		const { getByTestId } = render(
			<Button
				dataTestid="button-component"
				title="Adicionar"
				width={300}
				height={45}
				loading={false}
			/>,
			{
				wrapper: Providers,
			}
		);

		const element = getByTestId("button-component");

		// vamos encontrar o texto passado para o botão
		const textElement = element.firstChild?.textContent;

		expect(textElement).toBe("Adicionar");
	});

	it("Deve ser possível visualizar o icone de carregamento quando o botão receber a propiedade loading como (true)", () => {
		const { getByTestId } = render(
			<Button
				dataTestid="button-component"
				title="Adicionar"
				width={300}
				height={45}
				loading={true}
			/>,
			{
				wrapper: Providers,
			}
		);

		const element = getByTestId("button-component");

		// vamos encontrar o texto passado para o botão
		const textElement = element.children.item(0);

		// espero que encontre um elemento do tipo svg
		expect(textElement?.innerHTML.match(svg)).toBeTruthy();
	});

	it("Deve ser possível chamar a função (onClick) pelo menos uma vez do Botão", async () => {
		const onClickTestingMock = jest.fn();

		const { getByTestId } = render(
			<Button
				dataTestid="component-button"
				title="Adiconar Item"
				width={"100%"}
				height={45}
				loading={false}
				onClick={() => onClickTestingMock()}
			/>,
			{
				wrapper: Providers,
			}
		);

		const buttonElement = getByTestId("component-button");

		// encontrou o elemento e vamos selecionar o onClick dele
		await userfireEvent.setup().click(buttonElement);

		// Garante que uma função fictícia seja chamada.
		expect(onClickTestingMock).toHaveBeenCalledTimes(1);
	});
});
