export interface CompanyStats {
    totalEmployees: number;
    totalDepartments: number;
    totalProjects: number;
}

export interface Employee {
    id: string | number;
    name: string;
    email: string;
    position: string;
    department: string;
    status: 'active' | 'inactive';
    avatarUrl?: string; // Optional for UI enhancement
}

export interface Department {
    id: string | number;
    name: string;
    description: string;
}

export interface Project {
    id: string | number;
    name: string;
    client: string;
    status: 'planning' | 'ongoing' | 'completed';
    description: string; // May be missing in API, handle optional or map
    startDate: string;
    endDate?: string;
    pic: string; // Employee ID or Name
}
