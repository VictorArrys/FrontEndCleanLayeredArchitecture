// src/adapters/UserAdapter.ts
import { User, Admin, Aspirant, Demandant, Employer } from '@domain/models/User';

export class UserAdapter {
    // Mapea el perfil general de usuario
    static toModel(data: any): User {
        return {
            id: data.idPerfilUsuario,
            username: data.nombre,
            email: data.correoElectronico,
            status: data.estatus,
            type: data.tipoUsuario,
            photo: data.fotografia,
            token: data.token,
        };
    }

    // Métodos específicos para mapear cada tipo de usuario
    static toAdminModel(data: any): Admin {
        return {
            ...UserAdapter.toModel(data),
            phone: data.telefono,
            idAdminProfile: data.idPerfilAdministrador,
        };
    }

    static toAspirantModel(data: any): Aspirant {
        return {
            ...UserAdapter.toModel(data),
            address: data.direccion,
            birthDate: data.fechaNacimiento,
            idAspirantProfile: data.idPerfilAspirante,
            phone: data.telefono,
            video: data.video,
            trades: data.oficios,
            averageRating: data.valoracionPromedio,
        };
    }

    static toDemandantModel(data: any): Demandant {
        return {
            ...UserAdapter.toModel(data),
            birthDate: data.fechaNacimiento,
            phone: data.telefono,
            address: data.direccion,
            idDemandantProfile: data.idPerfilDemandante,
        };
    }

    static toEmployerModel(data: any): Employer {
        return {
            ...UserAdapter.toModel(data),
            organizationName: data.nombreOrganizacion,
            birthDate: data.fechaNacimiento,
            phone: data.telefono,
            address: data.direccion,
            warnings: data.amonestaciones,
            idEmployerProfile: data.idPerfilEmpleador,
        };
    }
}
