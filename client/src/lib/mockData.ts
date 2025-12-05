
export interface UsageData {
  id: string;
  name: string;
  role: string;
  department: string;
  lastActive: string;
  searchesLastMonth: number;
  profilesViewedLastMonth: number;
  projectsCreated: number;
  status: 'Active' | 'Inactive';
}

export const MOCK_USAGE_DATA: UsageData[] = [
  { id: '1', name: "Sarah Chen", role: "VP of Engineering", department: "Engineering", lastActive: "2024-05-15", searchesLastMonth: 45, profilesViewedLastMonth: 120, projectsCreated: 2, status: 'Active' },
  { id: '2', name: "Michael Rodriguez", role: "Senior Product Manager", department: "Product", lastActive: "2024-05-14", searchesLastMonth: 12, profilesViewedLastMonth: 34, projectsCreated: 1, status: 'Active' },
  { id: '3', name: "Jennifer Thompson", role: "Data Scientist", department: "Data", lastActive: "2024-05-10", searchesLastMonth: 89, profilesViewedLastMonth: 210, projectsCreated: 3, status: 'Active' },
  { id: '4', name: "David Okonjo", role: "Lead Backend Engineer", department: "Engineering", lastActive: "2024-05-12", searchesLastMonth: 5, profilesViewedLastMonth: 15, projectsCreated: 0, status: 'Inactive' },
  { id: '5', name: "Emily Zhang", role: "Product Designer", department: "Design", lastActive: "2024-05-15", searchesLastMonth: 23, profilesViewedLastMonth: 67, projectsCreated: 1, status: 'Active' },
  { id: '6', name: "James Wilson", role: "Director of Sales", department: "Sales", lastActive: "2024-05-11", searchesLastMonth: 150, profilesViewedLastMonth: 400, projectsCreated: 5, status: 'Active' },
  { id: '7', name: "Maria Garcia", role: "HR Business Partner", department: "HR", lastActive: "2024-05-13", searchesLastMonth: 200, profilesViewedLastMonth: 550, projectsCreated: 8, status: 'Active' },
  { id: '8', name: "Robert Johnson", role: "Staff Software Engineer", department: "Engineering", lastActive: "2024-05-01", searchesLastMonth: 2, profilesViewedLastMonth: 5, projectsCreated: 0, status: 'Inactive' },
  { id: '9', name: "Lisa Park", role: "Marketing Manager", department: "Marketing", lastActive: "2024-05-15", searchesLastMonth: 18, profilesViewedLastMonth: 45, projectsCreated: 2, status: 'Active' },
  { id: '10', name: "Thomas Anderson", role: "Security Engineer", department: "Security", lastActive: "2024-05-08", searchesLastMonth: 10, profilesViewedLastMonth: 22, projectsCreated: 1, status: 'Active' },
  { id: '11', name: "Rachel Kim", role: "Frontend Developer", department: "Engineering", lastActive: "2024-05-14", searchesLastMonth: 8, profilesViewedLastMonth: 12, projectsCreated: 0, status: 'Active' },
  { id: '12', name: "Kevin O'Connor", role: "Account Executive", department: "Sales", lastActive: "2024-05-15", searchesLastMonth: 120, profilesViewedLastMonth: 310, projectsCreated: 4, status: 'Active' },
  { id: '13', name: "Priya Patel", role: "Senior Data Analyst", department: "Data", lastActive: "2024-05-12", searchesLastMonth: 65, profilesViewedLastMonth: 150, projectsCreated: 2, status: 'Active' },
  { id: '14', name: "Marcus Jones", role: "Engineering Manager", department: "Engineering", lastActive: "2024-05-13", searchesLastMonth: 35, profilesViewedLastMonth: 80, projectsCreated: 1, status: 'Active' },
  { id: '15', name: "Sophie Martin", role: "UX Researcher", department: "Design", lastActive: "2024-05-14", searchesLastMonth: 42, profilesViewedLastMonth: 95, projectsCreated: 2, status: 'Active' },
  { id: '16', name: "Daniel Lee", role: "DevOps Engineer", department: "Engineering", lastActive: "2024-05-05", searchesLastMonth: 3, profilesViewedLastMonth: 8, projectsCreated: 0, status: 'Inactive' },
  { id: '17', name: "Amanda White", role: "Chief Marketing Officer", department: "Marketing", lastActive: "2024-05-10", searchesLastMonth: 5, profilesViewedLastMonth: 20, projectsCreated: 1, status: 'Active' },
  { id: '18', name: "Carlos Ruiz", role: "Sales Director", department: "Sales", lastActive: "2024-05-15", searchesLastMonth: 95, profilesViewedLastMonth: 240, projectsCreated: 3, status: 'Active' },
  { id: '19', name: "Michelle Wright", role: "Customer Success Manager", department: "CS", lastActive: "2024-05-15", searchesLastMonth: 180, profilesViewedLastMonth: 480, projectsCreated: 6, status: 'Active' },
  { id: '20', name: "Alex Turner", role: "Principal Engineer", department: "Engineering", lastActive: "2024-05-11", searchesLastMonth: 25, profilesViewedLastMonth: 60, projectsCreated: 1, status: 'Active' },
  { id: '21', name: "Grace Liu", role: "Product Manager", department: "Product", lastActive: "2024-05-14", searchesLastMonth: 30, profilesViewedLastMonth: 75, projectsCreated: 2, status: 'Active' },
  { id: '22', name: "Samuel Green", role: "QA Lead", department: "Engineering", lastActive: "2024-05-13", searchesLastMonth: 15, profilesViewedLastMonth: 35, projectsCreated: 0, status: 'Active' },
  { id: '23', name: "Natalie Scott", role: "Content Strategist", department: "Marketing", lastActive: "2024-05-12", searchesLastMonth: 22, profilesViewedLastMonth: 50, projectsCreated: 1, status: 'Active' },
  { id: '24', name: "Benjamin Baker", role: "Head of People", department: "HR", lastActive: "2024-05-15", searchesLastMonth: 85, profilesViewedLastMonth: 220, projectsCreated: 4, status: 'Active' },
  { id: '25', name: "Isabella Martinez", role: "Recruiter", department: "HR", lastActive: "2024-05-15", searchesLastMonth: 250, profilesViewedLastMonth: 680, projectsCreated: 12, status: 'Active' },
  { id: '26', name: "Ethan Hall", role: "Finance Director", department: "Finance", lastActive: "2024-05-08", searchesLastMonth: 4, profilesViewedLastMonth: 10, projectsCreated: 0, status: 'Inactive' },
  { id: '27', name: "Victoria Adams", role: "Legal Counsel", department: "Legal", lastActive: "2024-05-09", searchesLastMonth: 8, profilesViewedLastMonth: 15, projectsCreated: 0, status: 'Inactive' },
  { id: '28', name: "Ryan Clark", role: "Solutions Architect", department: "Sales", lastActive: "2024-05-14", searchesLastMonth: 55, profilesViewedLastMonth: 130, projectsCreated: 2, status: 'Active' },
  { id: '29', name: "Olivia King", role: "Operations Manager", department: "Operations", lastActive: "2024-05-13", searchesLastMonth: 28, profilesViewedLastMonth: 65, projectsCreated: 1, status: 'Active' },
  { id: '30', name: "Justin Wright", role: "Full Stack Engineer", department: "Engineering", lastActive: "2024-05-15", searchesLastMonth: 18, profilesViewedLastMonth: 40, projectsCreated: 1, status: 'Active' }
];
