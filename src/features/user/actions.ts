/**
 * IMPORTS
 */
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { http } from '../../infra/http/http';
import axios from 'axios';
import { ILoginResponse, ILoginRequest, types } from "./actions-types";

 /**
 * I log in an user.
 */
const login = createAsyncThunk<ILoginResponse, ILoginRequest>(
  types.LOGIN,

  // request login
  async ({ email, password }, { dispatch }) =>
    await axios.post('http://localhost:3333/api/v1/users/auth/login', {
      body: { email, password },
      dispatch
    })
);

/**
 * EXPORTS
 */
export {
  login
};