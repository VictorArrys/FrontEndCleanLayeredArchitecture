import { errorHandling } from '@adapters/utils/error/ErrorHandling';
import { AxiosCall } from '@domain/models/Utils/AxiosCall';
import { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';

const useFetchAndLoad = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  let controller: AbortController;

  const callEndpoint = async (axiosCall: AxiosCall<any>) => {
    if (axiosCall.controller) controller = axiosCall.controller;
    
    // Loading solicitud
    setLoading(true);
    let result: AxiosResponse<any> | null = null; // Cambiamos a null para manejar mejor el estado inicial
    
    try {
      // Esperamos a la llamada del endpoint
      result = await axiosCall.call; // Esto ahora debería funcionar, ya que axiosCall.call es una promesa
    } catch (err: any) {
      // Desactivamos el loading al capturar un error
      setLoading(false);
      // Manejo de errores
      const errorMessage = errorHandling(err);
      setError(errorMessage);
      return null; // Puedes retornar null o un valor que consideres apropiado en caso de error
    }
  
    // Loading success
    setLoading(false);
    return result; // Devolvemos el resultado de la llamada
  };
  

  const cancelEndpoint = () => {
    setLoading(false);
    controller && controller.abort();
  };

  useEffect(() => {
    return () => {
      cancelEndpoint();
    };
  }, []);

  return { loading, error, callEndpoint };
};

export default useFetchAndLoad;