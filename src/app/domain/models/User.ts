// app/domain/models/User.ts

export interface User {
    id: number;
    username: string;
    email: string;
    status: number;
    type: UserType;
    photo?: string; // Opcional si el usuario tiene fotografía
    token?: string | null;
}

export type UserType = 'Administrador' | 'Aspirante' | 'Demandante' | 'Empleado';

export interface Admin extends User {
    phone: string;
    idAdminProfile: number;
}

export interface Aspirant extends User {
    address: string;
    birthDate: string;
    idAspirantProfile: number;
    phone: string;
    video?: string;
    trades?: string[];
    averageRating?: number;
}

export interface Demandant extends User {
    idDemandantProfile: number;
    birthDate: string;
    phone: string;
    address: string;
}

export interface Employer extends User {
    idEmployerProfile: number;
    organizationName: string;
    birthDate: string;
    phone: string;
    address: string;
    warnings?: number;
}
