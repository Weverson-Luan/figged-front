/**
 * EXPORTS
 */

const options = [
	{ value: "chocolate", label: "Chocolate" },
	{ value: "strawberry", label: "Strawberry" },
	{ value: "vanilla", label: "Vanilla" },
];

interface ColourOption {
	readonly value: string;
	readonly label: string;
}

const colourOptions: readonly ColourOption[] = [
	{ value: "102030", label: "102030" },
	{ value: "112031", label: "112031" },
	{ value: "103020", label: "103020" },
	{ value: "122031", label: "122031" },
	{ value: "132042", label: "132042" },
	{ value: "103446", label: "103446" },
	{ value: "149845", label: "149845" },
	{ value: "150894", label: "150894" },
	{ value: "193455", label: "193455" },
	{ value: "160869", label: "160869" },
];

interface DrivernameOption {
	readonly value: string;
	readonly label: string;
}

const optionsNameMotorista: readonly DrivernameOption[] = [
	{ value: "Weverson", label: "Weverson" },
	{ value: "Andre", label: "Andre" },
	{ value: "Thales Santiago", label: "Thales Santiago" },
	{ value: "Gustavo Liberte", label: "Gustavo Liberte" },
	{ value: "Lucas Rodrigues", label: "Lucas Rodrigues" },
	{ value: "Rodrigo Gonçalves", label: "Rodrigo Gonçalves" },
	{ value: "Murilo Rodolfo", label: "Murilo Rodolfo" },
	{ value: "Carlos Roberto", label: "Carlos Roberto" },
	{ value: "Isauro Neto", label: "Isauro Neto" },
	{ value: "Charles Mendes", label: "Charles Mendes" },
];

/**
 * EXPORTS
 *
 */
export { options, colourOptions, optionsNameMotorista };
export type { ColourOption, DrivernameOption };
