import { CompanyStats, Department, Employee, Project } from './types';

export const mockStats: CompanyStats = {
    totalEmployees: 125,
    totalDepartments: 8,
    totalProjects: 42,
};

export const mockDepartments: Department[] = [
    { id: 'd1', name: 'Engineering', description: 'Software development and IT operations' },
    { id: 'd2', name: 'Marketing', description: 'Brand awareness and lead generation' },
    { id: 'd3', name: 'Human Resources', description: 'Talent acquisition and employee relations' },
    { id: 'd4', name: 'Finance', description: 'Financial planning and accounting' },
    { id: 'd5', name: 'Design', description: 'Product and graphic design' },
];

export const mockEmployees: Employee[] = [
    { id: 'e1', name: 'Alice Johnson', email: 'alice@company.com', position: 'Senior Software Engineer', department: 'Engineering', status: 'active', avatarUrl: 'https://i.pravatar.cc/150?u=e1' },
    { id: 'e2', name: 'Bob Smith', email: 'bob@company.com', position: 'Marketing Manager', department: 'Marketing', status: 'active', avatarUrl: 'https://i.pravatar.cc/150?u=e2' },
    { id: 'e3', name: 'Charlie Brown', email: 'charlie@company.com', position: 'Product Designer', department: 'Design', status: 'active', avatarUrl: 'https://i.pravatar.cc/150?u=e3' },
    { id: 'e4', name: 'Diana Prince', email: 'diana@company.com', position: 'HR Specialist', department: 'Human Resources', status: 'active', avatarUrl: 'https://i.pravatar.cc/150?u=e4' },
    { id: 'e5', name: 'Ethan Hunt', email: 'ethan@company.com', position: 'DevOps Engineer', department: 'Engineering', status: 'active', avatarUrl: 'https://i.pravatar.cc/150?u=e5' },
    { id: 'e6', name: 'Fiona Gallagher', email: 'fiona@company.com', position: 'Financial Analyst', department: 'Finance', status: 'active', avatarUrl: 'https://i.pravatar.cc/150?u=e6' },
    { id: 'e7', name: 'George Martin', email: 'george@company.com', position: 'Frontend Developer', department: 'Engineering', status: 'inactive', avatarUrl: 'https://i.pravatar.cc/150?u=e7' },
    { id: 'e8', name: 'Hannah Abbott', email: 'hannah@company.com', position: 'Content Strategist', department: 'Marketing', status: 'active', avatarUrl: 'https://i.pravatar.cc/150?u=e8' },
];

export const mockProjects: Project[] = [
    { id: 'p1', name: 'Website Redesign', client: 'Acme Corp', status: 'ongoing', description: 'Complete overhaul of corporate website', startDate: '2023-10-01', pic: 'Alice Johnson' },
    { id: 'p2', name: 'Mobile App Launch', client: 'Globex Inc', status: 'completed', description: 'Launch iOS and Android apps for retail customers', startDate: '2023-01-15', endDate: '2023-08-30', pic: 'Charlie Brown' },
    { id: 'p3', name: 'Internal HR System', client: 'Internal', status: 'ongoing', description: 'Automating leave requests and payroll integration', startDate: '2023-11-20', pic: 'Ethan Hunt' },
    { id: 'p4', name: 'Q4 Marketing Campaign', client: 'Internal', status: 'completed', description: 'Holiday season ad campaign across social media', startDate: '2023-09-01', endDate: '2023-12-31', pic: 'Bob Smith' },
    { id: 'p5', name: 'Cloud Migration', client: 'Stark Ind', status: 'ongoing', description: 'Migrating legacy infrastructure to AWS', startDate: '2024-01-10', pic: 'Ethan Hunt' },
    { id: 'p6', name: 'Brand Refresh', client: 'Wayne Ent', status: 'ongoing', description: 'New logo and brand guidelines rollout', startDate: '2024-02-01', pic: 'Charlie Brown' },
];
