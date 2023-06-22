import { format } from "date-fns";
import { toast } from "react-toastify";
import sgt20Api from "../apis/figgedBackend";
import {
	FETCH_APROVACAO,
	FETCH_DOCUMENTO,
	FETCH_APROVACAO_RESET,
	FETCH_DOCUMENTO_MODAL,
	FETCH_DOCUMENTO_CONFIRMACAO,
	SET_APROVACAO_FILTER_TYPE,
} from "./types";
import axios from "axios";

// Aprovacao
export const setAprovacaoFilterType = (filterType: string) => {
	return { type: SET_APROVACAO_FILTER_TYPE, filterType };
};

export const resetAprovacao = () => {
	return { type: FETCH_APROVACAO_RESET };
};

export const fetchAprovacao = (params: any) => async (dispatch: any) => {
	const filter: string = params.filter;
	const page: number = params.page;
	const filterType: string = params.filterType;
	let url = `/aprovacao/?format=json&filter_type=${filterType}&page=${page}`;
	if (filter) {
		const filterParams = new URLSearchParams(params.filter).toString();
		url = `${url}&${filterParams}`;
	}
	const response = await sgt20Api.get(url);
	if (filter) {
		toast.info("Filtro aplicado", {
			position: "top-right",
			autoClose: 1500,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	}
	const payload = { response, filter, filterType };
	dispatch({ type: FETCH_APROVACAO, payload });
};

// Documentos
export const fetchDocumento = (id: number) => async (dispatch: any) => {
	// const responseAprovacao = await axios.get(
	//   `http://10.0.0.155:1111/aprovacao/${id}/?format=json/${id}`,
	//   {
	//     headers: {
	//       Authorization: `Token ec4c56361ddbb8c058be23575e8bb7cff585c2c9`,
	//       "Access-Control-Allow-Origin": "*",
	//       "Content-Type": "application/json",
	//     },
	//   }
	// );

	const url = `/aprovacao/${id}/?format=json`;

	const response = await sgt20Api.get(url);
	dispatch({ type: FETCH_DOCUMENTO, payload: response });
};

export const fetchDocumentoModal = (data: any) => {
	return { type: FETCH_DOCUMENTO_MODAL, data };
};

interface IDocumentProps {
	id: number;
}

// aprovar bobinas
export const fetchDocumentoAprovar =
	(documento: IDocumentProps) => async (dispatch: any) => {
		const resulSecUsersId = localStorage.getItem("@sec_users_id");
		if (!resulSecUsersId) {
			const patchData = {
				status: "aprovado",
				status_reprovado_mensagem: null,
				sec_users_id: resulSecUsersId,
				data_atualizacao_usuario: format(
					new Date(Date.now()),
					"yyyy-MM-dd H:mm:ss.0000"
				),
			};
			// chamando api para realizar a reprovação de bobinas
			const responseData = await axios.patch(
				`http://10.0.0.155:1111/figged/documento/${documento.id}`,
				patchData,
				{
					headers: {
						Authorization: `Token ec4c56361ddbb8c058be23575e8bb7cff585c2c9`,
						"Access-Control-Allow-Origin": "*",
						"Content-Type": "application/json",
					},
				}
			);
			// se deu tudo certo, deve mostrar o toast-message

			if (responseData.data) {
				toast.success("Documento aprovado com sucesso.", {
					position: "top-right",
					autoClose: 1500,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}
			// regarrecar a pagina
			window.location.reload();
			dispatch({ type: FETCH_DOCUMENTO_CONFIRMACAO, payload: responseData });
		} else {
			// montando data
			const patchData = {
				status: "aprovado",
				status_reprovado_mensagem: null,
				sec_users_id: "sgt",
				data_atualizacao_usuario: format(
					new Date(Date.now()),
					"yyyy-MM-dd H:mm:ss.0000"
				),
			};

			// chamando api para realizar a reprovação de bobinas
			const responseData = await axios.patch(
				`http://10.0.0.155:1111/figged/documento/${documento.id}`,
				patchData,
				{
					headers: {
						Authorization: `Token ec4c56361ddbb8c058be23575e8bb7cff585c2c9`,
						"Access-Control-Allow-Origin": "*",
						"Content-Type": "application/json",
					},
				}
			);

			// recarge tela para o usuario
			window.location.reload();
			// se deu tudo certo, deve mostrar o toast-message
			if (responseData.data) {
				toast.success("Documento aprovado com sucesso.", {
					position: "top-right",
					autoClose: 1500,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}

			dispatch({ type: FETCH_DOCUMENTO_CONFIRMACAO, payload: responseData });
		}
	};

// reprovar bobinas
export const fetchDocumentoReprovar =
	(documento: IDocumentProps, formValues: any) => async (dispatch: any) => {
		const resulSecUsersId = localStorage.getItem("@sec_users_id");

		// se estiver o usuário salvo no storage vamos executar primero if se não iremos exutar o else
		if (!resulSecUsersId) {
			// montando dados para enviar para api
			const patchData = {
				status: "rejeitado",
				sec_users_id: resulSecUsersId ? JSON.parse(resulSecUsersId) : null,
				status_reprovado_mensagem: formValues.reprovacaoMotivo,
				data_atualizacao_usuario: format(
					new Date(Date.now()),
					"yyyy-MM-dd H:mm:ss.0000"
				),
			};

			// validando pra saber se usuátio informou o motivo do reijatamento
			if (formValues.reprovacaoMotivo === "nenhuma") {
				patchData.status_reprovado_mensagem = formValues.reprovacaoMotivoTexto;
			}

			// chamando api para realizar a reprovação de bobinas
			const responseData = await axios.patch(
				`http://10.0.0.155:1111/figged/documento/${documento.id}`,
				patchData,
				{
					headers: {
						Authorization: `Token ec4c56361ddbb8c058be23575e8bb7cff585c2c9`,
						"Access-Control-Allow-Origin": "*",
						"Content-Type": "application/json",
					},
				}
			);

			// se deu tudo certo, deve mostrar o toast-message
			if (responseData.data) {
				toast.success("Documento reprovado com sucesso.", {
					position: "top-right",
					autoClose: 1500,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}

			// recarge tela para o usuario
			window.location.reload();

			dispatch({ type: FETCH_DOCUMENTO_CONFIRMACAO, payload: responseData });
		} else {
			// montando dados para enviar para api
			const patchData = {
				status: "rejeitado",
				sec_users_id: "sgt",
				status_reprovado_mensagem: formValues.reprovacaoMotivo,
				data_atualizacao_usuario: format(
					new Date(Date.now()),
					"yyyy-MM-dd H:mm:ss.0000"
				),
			};

			// validando pra saber se usuátio informou o motivo do reijatamento
			if (formValues.reprovacaoMotivo === "nenhuma") {
				patchData.status_reprovado_mensagem = formValues.reprovacaoMotivoTexto;
			}

			// chamando api para realizar a reprovação de bobinas
			const responseData = await axios.patch(
				`http://10.0.0.155:1111/figged/documento/${documento.id}`,
				patchData,
				{
					headers: {
						Authorization: `Token ec4c56361ddbb8c058be23575e8bb7cff585c2c9`,
						"Access-Control-Allow-Origin": "*",
						"Content-Type": "application/json",
					},
				}
			);

			// se deu tudo certo, deve mostrar o toast-message
			if (responseData.data) {
				toast.success("Documento reprovado com sucesso.", {
					position: "top-right",
					autoClose: 1500,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
			}
			// recarge tela para o usuario
			window.location.reload();
			// dispatch
			dispatch({ type: FETCH_DOCUMENTO_CONFIRMACAO, payload: responseData });
		}
	};
