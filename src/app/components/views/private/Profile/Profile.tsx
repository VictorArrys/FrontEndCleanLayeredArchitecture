// src/components/Profile/ProfileComponent.tsx
import React, { useState } from 'react';
import { AdminService } from '@services/api/AdminService';
import { AspirantService } from '@services/api/AspirantService';
import { User, Admin, Aspirant, Demandant, Employer } from '@domain/models/User';
import useAsync from '@domain/hooks/useAsync';
import { useSelector } from 'react-redux';
import { RootState } from '@domain/redux/store';


const ProfileComponent: React.FC = ({ }) => {
    const [profile, setProfile] = useState<User | Admin | Aspirant | Demandant | Employer | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const { id, userType, isAuthenticated, token } = useSelector((state: RootState) => state.user);

    // GET API User Function
    const getUser = async () => {
        if (!id || !token) {
            throw new Error("ID de usuario no disponible");
        }

        switch (userType) {
            case 'Administrador':
                const adminService = new AdminService();
                return await adminService.getAdminProfile(id, token)                
            case 'Aspirante':
                const aspirantService = new AspirantService();
                return await aspirantService.getAspirantProfile(id);
            /*case 'Demandante':
                const demandantService = new DemandantService();
                return await demandantService.getDemandantProfile(userId);
            case 'Empleador':
                const employerService = new EmployerService();
                return await employerService.getEmployerProfile(userId);
            */
            default:
                throw new Error("Tipo de usuario desconocido");
        }
    };
     
    // Success function
    const handleResponse = (response: any) => {
        if (response.error) {
            setError(response.error);
        } else {
            setProfile(response.data);
        }
        setLoading(false); // Se completa la carga
    };
         
    // Load Data In Async
    useAsync(getUser, handleResponse, () => {[id, userType]});

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;
    if (!profile) return <p>Loading...</p>;

    return (
        <div className="profile-container">
            <h2>Perfil de {profile.username}</h2>
            <p>Email: {profile.email}</p>
            <p>Estado: {profile.status}</p>
            {userType === 'Administrador' && (
                <div>
                    <p>Teléfono: {(profile as Admin).phone}</p>
                </div>
            )}
            {userType === 'Aspirante' && (
                <div>
                    <p>Dirección: {(profile as Aspirant).address}</p>
                </div>
            )}
            {/* Render Demandant y Employer dynamic */}
        </div>
    );
};

export default ProfileComponent;
