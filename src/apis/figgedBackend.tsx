import axios from "axios";

const Token = JSON.stringify(process.env.REACT_APP_API_TOKEN);
const urlBase = JSON.stringify(process.env.REACT_APP_API_HOST);

export default axios.create({
	baseURL: `${urlBase}/figged`,
	headers: {
		Authorization: `${Token}`,
	},
});
