import axios, { AxiosResponse } from 'axios';
import { loadAbort } from '@adapters/utils/LoadAbort';

const apiUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

// GET API-URL + /PerfilUsuarios
export const getUserById = (id: number): { call: Promise<AxiosResponse<any>>, controller: AbortController } => {
  const controller = loadAbort();
  const endpointUrl = `/PerfilUsuarios/:idPerfilUsuario${id}`;

  return {
    call: axios.get(`${apiUrl}${endpointUrl}`, {
      headers: {
        'Accept': 'application/json',
      },
      signal: controller.signal,
      timeout: 10000,
    }),
    controller,
  };
};

// GET API-URL + /Auth/Login
export const loginUser = (credentials: { username: string; password: string }): { call: Promise<AxiosResponse<any>>, controller: AbortController } => {
  const controller = loadAbort();
  const endpointUrl = '/iniciarSesion';
  return {
    call: axios.get(`${apiUrl}${endpointUrl}?nombreUsuario=${credentials.username}&clave=${credentials.password}`, {
      headers: {
        'Accept': 'application/json',
      },
      signal: controller.signal,
      timeout: 10000,
    }),
    controller,
  };
};

