import { mockDepartments, mockEmployees, mockProjects, mockStats } from './mockData';
import { CompanyStats, Department, Employee, Project } from './types';

const NETWORK_DELAY_MS = 1500; // Simulated network delay

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getCompanyStats = async (): Promise<CompanyStats> => {
    await delay(NETWORK_DELAY_MS);
    return mockStats;
};

export const getEmployees = async (): Promise<Employee[]> => {
    await delay(NETWORK_DELAY_MS);
    return mockEmployees;
};

export const getProjects = async (): Promise<Project[]> => {
    await delay(NETWORK_DELAY_MS);
    return mockProjects;
};

// Optional: Get filtered projects if backend logic was needed, but for now client-side filtering or full fetch is fine.
// We can just return all projects and filter in component, or add params here.
export const getDepartments = async (): Promise<Department[]> => {
    await delay(NETWORK_DELAY_MS);
    return mockDepartments;
};
