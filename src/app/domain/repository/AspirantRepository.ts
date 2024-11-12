// src/repository/AspirantRepository.ts
import axios from 'axios';
import { loadAbort } from '@adapters/utils/LoadAbort';

const apiUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;

export const getAspirantProfile = (id: number) => {
    const controller = loadAbort();
    return {
        call: axios.get(`${apiUrl}/perfilAspirantes/:idPerfilUsuarioAspirante${id}`, {
            headers: {
                'Accept': 'application/json',
            },
            signal: controller.signal,
            timeout: 10000,
        }),
        controller,
    };
};
