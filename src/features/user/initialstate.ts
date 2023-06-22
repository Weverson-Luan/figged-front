/**
 * IMPORTS
 */
import { type IUserState } from "./interface";

/**
 * I am the user initial state.
 */
const initialState: IUserState = {
	token: "",
	refresh_token: "",
	user: {
		id: "1",
		name: "Luan Sousa",
		username: "Luan Dev",
		email: "luan.dev@gmail.com",
		role: "admin",
		isLogged: true,
	},
};

/**
 * EXPORTS
 */
export { initialState };
