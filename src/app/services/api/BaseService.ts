// src/services/api/BaseService.ts

import { errorHandling } from "@adapters/utils/error/ErrorHandling";

export class BaseService {
    async fetchData<T>(apiCall: Promise<any>, transformResponse: (data: any) => T): Promise<{ data: T | null; error: string | null }> {
        let error: string | null = null;
        let data: T | null = null;

        try {
            const response = await apiCall;
            data = transformResponse(response.data);
        } catch (err: any) {
            error = errorHandling(err);
        }

        return { data, error };
    }
}