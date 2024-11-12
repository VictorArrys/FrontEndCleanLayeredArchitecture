import { UserAdapter } from '@adapters/mappers/UserMapper';
import { Aspirant } from '@domain/models/User';
import { getAspirantProfile } from '@domain/repository/AspirantRepository';
import { BaseService } from './BaseService';

export class AspirantService extends BaseService {

    // Get Aspirant Profile
    async getAspirantProfile(id: number): Promise<{ data: Aspirant | null; loading: boolean; error: string | null }> {
        const { call, controller } = getAspirantProfile(id);
        const { data, error } = await this.fetchData(call, UserAdapter.toAspirantModel);

        return { data, loading: !error, error };
    }

    // Others services
    
}
