import { format } from 'date-fns'
import { toast } from 'react-toastify';
import sgt20Api from '../apis/figgedBackend';
import {
  FETCH_APROVACAO,
  FETCH_DOCUMENTO,
  FETCH_APROVACAO_RESET,
  FETCH_DOCUMENTO_MODAL,
  FETCH_DOCUMENTO_CONFIRMACAO,
  SET_APROVACAO_FILTER_TYPE,
} from './types'
import axios from 'axios';

// Aprovacao
export const setAprovacaoFilterType = (filterType: string) => {
  return { type: SET_APROVACAO_FILTER_TYPE, filterType }
}

export const resetAprovacao = () => {
  return { type: FETCH_APROVACAO_RESET }
}

export const fetchAprovacao = (params:any) => async (dispatch:any) => {
  let filter = params.filter
  const page = params.page
  const filterType = params.filterType
  let url = `/aprovacao/?format=json&filter_type=${filterType}&page=${page}`
  if (filter) {
    const filterParams = new URLSearchParams(params.filter).toString();
    url = `${url}&${filterParams}`
  }
  const response = await sgt20Api.get(url)
  if (filter) {
    toast.info('Filtro aplicado', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }
  const payload = { response, filter, filterType}
  dispatch({ type: FETCH_APROVACAO, payload })
}

// Documentos
export const fetchDocumento = (id:any) => async (dispatch:any) => {
  const url = `/aprovacao/${id}/?format=json`
  const response = await sgt20Api.get(url)
  dispatch({ type: FETCH_DOCUMENTO, payload: response })
}

export const fetchDocumentoModal = (data:any) => {
  return { type: FETCH_DOCUMENTO_MODAL, data: data }
}

export const fetchDocumentoAprovar = (documento:any, sec_users_id:string) => async (dispatch:any) => {
  const patchData = { 
    status: 'aprovado',
    status_reprovado_mensagem: null,
    sec_users_id,
    data_atualizacao_usuario: format(new Date(Date.now()), 'yyyy-MM-dd H:mm:ss.0000')
  }
  const response = await sgt20Api.patch(`/documento/${documento.id}/?format=json`, patchData)
  
  toast.success('Documento aprovado com sucesso.', {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  })
  dispatch({ type: FETCH_DOCUMENTO_CONFIRMACAO, payload: response })
}

export const fetchDocumentoReprovar = (documento:any, formValues:any, sec_users_id:string) => async (dispatch:any) => {
 
  const resulSecUsersId = await localStorage.getItem("@sec_users_id")
  // console.log("sewwc", resulSecUsersId)
  const patchData = {
    status: 'rejeitado',
    sec_users_id: resulSecUsersId ? JSON.parse(resulSecUsersId) : null,
    status_reprovado_mensagem: formValues.reprovacaoMotivo,
    data_atualizacao_usuario: format(new Date(Date.now()), 'yyyy-MM-dd H:mm:ss.0000')
  }

  if (formValues.reprovacaoMotivo === 'nenhuma') {
    patchData['status_reprovado_mensagem'] = formValues.reprovacaoMotivoTexto
  }
  // const response = await sgt20Api.patch(`/documento/${documento.id}/?format=json`, patchData)
  const responseData = await axios.patch(`http://10.0.0.155:1111/figged/documento/${documento.id}`, patchData, {
    headers: {
      Authorization: `Token ec4c56361ddbb8c058be23575e8bb7cff585c2c9`,
     "Access-Control-Allow-Origin": '*',
     "Content-Type": "application/json"
    }
    
  })

  if(responseData.data){
    toast.success('Documento reprovado com sucesso.', {
      position: 'top-right',
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  
  }
  dispatch({ type: FETCH_DOCUMENTO_CONFIRMACAO, payload: responseData })

}