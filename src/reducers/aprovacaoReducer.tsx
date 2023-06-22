/* eslint-disable no-case-declarations */
import {
	FETCH_APROVACAO,
	FETCH_DOCUMENTO,
	FETCH_APROVACAO_RESET,
	FETCH_DOCUMENTO_MODAL,
	FETCH_DOCUMENTO_CONFIRMACAO,
	SET_APROVACAO_FILTER_TYPE,
} from "../actions/types";

const INTIAL_STATE = {
	aprovacaoDetail: {},
	aprovacaoModal: {
		show: false,
		type: null,
		documento: null,
		fetchDocumentoModal: null,
	},
	aprovacaoModalResponse: null,
	aprovacaoList: null,
	aprovacaoFilterType: "pendentes",
	filter: {},
};

const aprovacaoReducer = (state: any = INTIAL_STATE, action: any) => {
	switch (action.type) {
		case FETCH_APROVACAO:
			return {
				...state,
				aprovacaoList: action.payload.response.data,
				filter: action.payload.filter,
			};
		// return { ...state, aprovacaoList: action.payload.response.data, filter: action.payload.filter, aprovacaoFilterType:  }
		case FETCH_APROVACAO_RESET:
			return INTIAL_STATE;
		case FETCH_DOCUMENTO:
			return { ...state, aprovacaoDetail: action.payload.data };
		case FETCH_DOCUMENTO_MODAL:
			return { ...state, aprovacaoModal: action.data };
		case FETCH_DOCUMENTO_CONFIRMACAO:
			const modalState = { show: false, type: null, documento: null };
			const documento = action.payload.data;
			const novosDocumentos = state.aprovacaoDetail.documentos.map(
				(doc: any) => {
					if (doc.id === documento.id) {
						return documento;
					} else {
						return doc;
					}
				}
			);
			const aprovacaoDetail = {
				...state.aprovacaoDetail,
				documentos: novosDocumentos,
			};
			return { ...state, aprovacaoModal: modalState, aprovacaoDetail };
		case SET_APROVACAO_FILTER_TYPE:
			return { ...state, aprovacaoFilterType: action.filterType };
		default:
			return INTIAL_STATE;
	}
};

export default aprovacaoReducer;
