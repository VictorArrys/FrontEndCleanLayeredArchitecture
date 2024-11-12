import { getUserById, loginUser } from '@domain/repository/UserRepository';
import { UserAdapter } from '@adapters/mappers/UserMapper';
import { User } from '@domain/models/User';

export class UserService {

    // Get User Profile
    async getUserProfile(id: number): Promise<User> {
        const { call } = getUserById(id);
        const response = await call;
        const data = response.data;

        //Another bussines logic

        return UserAdapter.toModel(data);
    }
    // GET Login
    async authenticate(credentials: { username: string; password: string }): Promise<User> {
        const { call } = loginUser(credentials);
        const response = await call;
        const data = response.data;

        //Another bussines logic

        return UserAdapter.toModel(data);
    }
}
