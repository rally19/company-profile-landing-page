export interface CompanyStats {
    totalEmployees: number;
    totalDepartments: number;
    totalProjects: number;
}

export interface Employee {
    id: string;
    name: string;
    email: string;
    position: string;
    department: string;
    status: 'active' | 'inactive';
    avatarUrl?: string; // Optional for UI enhancement
}

export interface Department {
    id: string;
    name: string;
    description: string;
}

export interface Project {
    id: string;
    name: string;
    client: string;
    status: 'ongoing' | 'completed';
    description: string;
    startDate: string;
    endDate?: string;
    pic: string; // Employee ID or Name
}
