// src/hooks/useAsync.ts
import { useEffect } from 'react';

const useAsync = <T>(
  asyncFn: () => Promise<T>,               // Aceptamos cualquier tipo de dato en lugar de AxiosResponse
  successFunction: (data: T) => void,      // La función de éxito ahora se basa en T
  returnFunction: () => void,
  dependencies: any[] = []
) => {
  useEffect(() => {
    let isActive = true;
    asyncFn().then((result) => {
      if (isActive) successFunction(result);
    });
    return () => {
      returnFunction && returnFunction();
      isActive = false;
    };
  }, dependencies);
};

export default useAsync;
