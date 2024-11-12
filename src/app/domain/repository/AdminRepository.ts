// src/repository/AdminRepository.ts
import axios from 'axios';
import { loadAbort } from '@adapters/utils/LoadAbort';

const apiUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

export const getAdminProfile = (id: number, token: string) => {
    const controller = loadAbort();
    return {
        call: axios.get(`${apiUrl}/perfilAdministradores/${id}`, {
            headers: {
                'Accept': 'application/json',
                'x-access-token': token,
            },
            signal: controller.signal,
            timeout: 10000,
        }),
        controller,
    };
};
