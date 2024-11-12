import { UserAdapter } from '@adapters/mappers/UserMapper';
import { Admin } from '@domain/models/User';
import { getAdminProfile } from '@domain/repository/AdminRepository';
import { BaseService } from './BaseService';

export class AdminService extends BaseService {

    // Get Admin Profile
    async getAdminProfile(id: number, token: string): Promise<{ data: Admin | null; loading: boolean; error: string | null }> {
        const { call, controller } = getAdminProfile(id, token);
        const { data, error } = await this.fetchData(call, UserAdapter.toAdminModel);

        return { data, loading: !error, error };
    }
}
