import { CompanyStats, Department, Employee, Project } from './types';

const API_BASE_URL = 'https://wicked-katleen-companyuhuy-cda70a58.koyeb.app/api';

export const getCompanyStats = async (): Promise<CompanyStats> => {
    const res = await fetch(`${API_BASE_URL}/dashboard/stats`);
    if (!res.ok) throw new Error('Failed to fetch stats');
    const data = await res.json();

    // API returns { totalEmployees, totalDivisions, activeProjects }
    // We map totalDivisions -> totalDepartments and activeProjects -> totalProjects (or use it as is)
    return {
        totalEmployees: data.totalEmployees,
        totalDepartments: data.totalDivisions,
        totalProjects: data.activeProjects,
    };
};

export const getEmployees = async (): Promise<Employee[]> => {
    const res = await fetch(`${API_BASE_URL}/employee`);
    if (!res.ok) throw new Error('Failed to fetch employees');
    const data = await res.json();

    return data.map((emp: any) => ({
        id: emp.id,
        name: emp.name,
        email: emp.email,
        position: emp.position,
        department: emp.department_name, // Map department_name -> department
        status: emp.status === 'aktif' ? 'active' : 'inactive', // Map status
        avatarUrl: `https://ui-avatars.com/api/?name=${encodeURIComponent(emp.name)}&background=random`, // Generate avatar
    }));
};

export const getProjects = async (): Promise<Project[]> => {
    const res = await fetch(`${API_BASE_URL}/projects`);
    if (!res.ok) throw new Error('Failed to fetch projects');
    const data = await res.json();

    return data.map((proj: any) => {
        // Map status: "Planning" -> "planning", "On Progress" -> "ongoing", "Completed" -> "completed"
        let status: 'planning' | 'ongoing' | 'completed' = 'planning';
        if (proj.status === 'On Progress') status = 'ongoing';
        if (proj.status === 'Completed') status = 'completed';

        return {
            id: proj.id,
            name: proj.name,
            client: proj.client,
            status: status,
            description: proj.name, // API doesn't have description, use name or empty
            startDate: new Date(proj.start_date).toLocaleDateString(), // Format date
            endDate: proj.end_date ? new Date(proj.end_date).toLocaleDateString() : undefined,
            pic: proj.pic,
        };
    });
};

export const getDepartments = async (): Promise<Department[]> => {
    const res = await fetch(`${API_BASE_URL}/departments`);
    if (!res.ok) throw new Error('Failed to fetch departments');
    const data = await res.json();

    return data.map((dept: any) => ({
        id: dept.id,
        name: dept.name,
        description: dept.description,
    }));
};
