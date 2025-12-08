
export interface Hire {
  id: string;
  name: string;
  title: string;
  level: 'Senior Leadership' | 'Manager' | 'Lead IC' | 'IC';
  location: string;
  hireDate: string;
  actions: string[];
  diversity?: {
    gender?: 'Female' | 'Male' | 'Non-binary';
    ethnicity?: 'African American' | 'Hispanic' | 'Asian' | 'White' | 'Other';
  };
}

export const MOCK_HIRES: Hire[] = [
  { id: '1', name: "Sarah Chen", title: "VP of Engineering", level: "Senior Leadership", location: "San Francisco, CA", hireDate: "2024-01-15", actions: ["Exported", "Contacted", "Evaluated"], diversity: { gender: "Female", ethnicity: "Asian" } },
  { id: '2', name: "Michael Rodriguez", title: "Senior Product Manager", level: "Manager", location: "Austin, TX", hireDate: "2024-01-20", actions: ["Exported", "Added to Project"], diversity: { gender: "Male", ethnicity: "Hispanic" } },
  { id: '3', name: "Jennifer Thompson", title: "Data Scientist", level: "IC", location: "New York, NY", hireDate: "2024-02-01", actions: ["Contacted", "Evaluated"], diversity: { gender: "Female", ethnicity: "White" } },
  { id: '4', name: "David Okonjo", title: "Lead Backend Engineer", level: "Lead IC", location: "Remote", hireDate: "2024-02-10", actions: ["Exported", "Contacted", "Added to Project"], diversity: { gender: "Male", ethnicity: "African American" } },
  { id: '5', name: "Emily Zhang", title: "Product Designer", level: "IC", location: "Seattle, WA", hireDate: "2024-02-15", actions: ["Exported"], diversity: { gender: "Female", ethnicity: "Asian" } },
  { id: '6', name: "James Wilson", title: "Director of Sales", level: "Senior Leadership", location: "Chicago, IL", hireDate: "2024-02-28", actions: ["Contacted", "Added to Project"], diversity: { gender: "Male", ethnicity: "White" } },
  { id: '7', name: "Maria Garcia", title: "HR Business Partner", level: "Manager", location: "Miami, FL", hireDate: "2024-03-05", actions: ["Exported", "Contacted"], diversity: { gender: "Female", ethnicity: "Hispanic" } },
  { id: '8', name: "Robert Johnson", title: "Staff Software Engineer", level: "Lead IC", location: "San Francisco, CA", hireDate: "2024-03-12", actions: ["Added to Project"], diversity: { gender: "Male", ethnicity: "African American" } },
  { id: '9', name: "Lisa Park", title: "Marketing Manager", level: "Manager", location: "Los Angeles, CA", hireDate: "2024-03-20", actions: ["Exported", "Contacted"], diversity: { gender: "Female", ethnicity: "Asian" } },
  { id: '10', name: "Thomas Anderson", title: "Security Engineer", level: "IC", location: "Austin, TX", hireDate: "2024-03-25", actions: ["Exported"], diversity: { gender: "Male", ethnicity: "White" } },
  { id: '11', name: "Rachel Kim", title: "Frontend Developer", level: "IC", location: "New York, NY", hireDate: "2024-04-02", actions: ["Contacted"], diversity: { gender: "Female", ethnicity: "Asian" } },
  { id: '12', name: "Kevin O'Connor", title: "Account Executive", level: "IC", location: "Boston, MA", hireDate: "2024-04-10", actions: ["Exported", "Added to Project"], diversity: { gender: "Male", ethnicity: "White" } },
  { id: '13', name: "Priya Patel", title: "Senior Data Analyst", level: "Lead IC", location: "Remote", hireDate: "2024-04-15", actions: ["Exported", "Contacted"], diversity: { gender: "Female", ethnicity: "Asian" } },
  { id: '14', name: "Marcus Jones", title: "Engineering Manager", level: "Manager", location: "Atlanta, GA", hireDate: "2024-04-22", actions: ["Contacted", "Added to Project"], diversity: { gender: "Male", ethnicity: "African American" } },
  { id: '15', name: "Sophie Martin", title: "UX Researcher", level: "IC", location: "Seattle, WA", hireDate: "2024-05-01", actions: ["Exported"], diversity: { gender: "Female", ethnicity: "White" } },
  { id: '16', name: "Daniel Lee", title: "DevOps Engineer", level: "IC", location: "San Francisco, CA", hireDate: "2024-05-08", actions: ["Exported", "Contacted"], diversity: { gender: "Male", ethnicity: "Asian" } },
  { id: '17', name: "Amanda White", title: "Chief Marketing Officer", level: "Senior Leadership", location: "New York, NY", hireDate: "2024-05-15", actions: ["Added to Project"], diversity: { gender: "Female", ethnicity: "White" } },
  { id: '18', name: "Carlos Ruiz", title: "Sales Director", level: "Senior Leadership", location: "Miami, FL", hireDate: "2024-05-20", actions: ["Exported", "Contacted"], diversity: { gender: "Male", ethnicity: "Hispanic" } },
  { id: '19', name: "Michelle Wright", title: "Customer Success Manager", level: "IC", location: "Chicago, IL", hireDate: "2024-06-01", actions: ["Contacted"], diversity: { gender: "Female", ethnicity: "White" } },
  { id: '20', name: "Alex Turner", title: "Principal Engineer", level: "Lead IC", location: "Remote", hireDate: "2024-06-10", actions: ["Exported", "Added to Project"], diversity: { gender: "Male", ethnicity: "White" } },
  { id: '21', name: "Grace Liu", title: "Product Manager", level: "IC", location: "Austin, TX", hireDate: "2024-06-15", actions: ["Exported", "Contacted"], diversity: { gender: "Female", ethnicity: "Asian" } },
  { id: '22', name: "Samuel Green", title: "QA Lead", level: "Lead IC", location: "Boston, MA", hireDate: "2024-06-22", actions: ["Contacted"], diversity: { gender: "Male", ethnicity: "African American" } },
  { id: '23', name: "Natalie Scott", title: "Content Strategist", level: "IC", location: "Los Angeles, CA", hireDate: "2024-07-01", actions: ["Exported"], diversity: { gender: "Female", ethnicity: "White" } },
  { id: '24', name: "Benjamin Baker", title: "Head of People", level: "Senior Leadership", location: "San Francisco, CA", hireDate: "2024-07-08", actions: ["Exported", "Contacted"], diversity: { gender: "Male", ethnicity: "White" } },
  { id: '25', name: "Isabella Martinez", title: "Recruiter", level: "IC", location: "Remote", hireDate: "2024-07-15", actions: ["Added to Project"], diversity: { gender: "Female", ethnicity: "Hispanic" } },
  { id: '26', name: "Ethan Hall", title: "Finance Director", level: "Senior Leadership", location: "New York, NY", hireDate: "2024-07-20", actions: ["Exported", "Contacted"], diversity: { gender: "Male", ethnicity: "White" } },
  { id: '27', name: "Victoria Adams", title: "Legal Counsel", level: "Lead IC", location: "Washington, DC", hireDate: "2024-08-01", actions: ["Contacted"], diversity: { gender: "Female", ethnicity: "White" } },
  { id: '28', name: "Ryan Clark", title: "Solutions Architect", level: "Lead IC", location: "Denver, CO", hireDate: "2024-08-10", actions: ["Exported", "Added to Project"], diversity: { gender: "Male", ethnicity: "White" } },
  { id: '29', name: "Olivia King", title: "Operations Manager", level: "Manager", location: "Seattle, WA", hireDate: "2024-08-15", actions: ["Exported", "Contacted"], diversity: { gender: "Female", ethnicity: "White" } },
  { id: '30', name: "Justin Wright", title: "Full Stack Engineer", level: "IC", location: "San Francisco, CA", hireDate: "2024-08-22", actions: ["Exported"], diversity: { gender: "Male", ethnicity: "White" } },
  { id: '31', name: "Sophia Davis", title: "VP of Product", level: "Senior Leadership", location: "New York, NY", hireDate: "2024-09-01", actions: ["Contacted", "Added to Project"], diversity: { gender: "Female", ethnicity: "White" } },
  { id: '32', name: "Jordan Taylor", title: "Account Manager", level: "IC", location: "Chicago, IL", hireDate: "2024-09-08", actions: ["Exported", "Contacted"], diversity: { gender: "Male", ethnicity: "African American" } },
  { id: '33', name: "Emma Wilson", title: "Data Engineer", level: "Lead IC", location: "Austin, TX", hireDate: "2024-09-15", actions: ["Contacted"], diversity: { gender: "Female", ethnicity: "White" } },
  { id: '34', name: "Lucas Brown", title: "Head of Sales", level: "Senior Leadership", location: "San Francisco, CA", hireDate: "2024-09-20", actions: ["Exported", "Added to Project"], diversity: { gender: "Male", ethnicity: "White" } },
  { id: '35', name: "Ava Garcia", title: "Marketing Specialist", level: "IC", location: "Miami, FL", hireDate: "2024-10-01", actions: ["Exported", "Contacted"], diversity: { gender: "Female", ethnicity: "Hispanic" } }
];

export const LEVEL_STATS = [
  { name: "Senior Leadership", value: 8 },
  { name: "Managers", value: 5 },
  { name: "Lead ICs", value: 12 },
  { name: "ICs", value: 10 },
];

export const DIVERSITY_STATS = [
  { name: "Female", value: 40, color: "hsl(var(--chart-1))" },
  { name: "Male", value: 52, color: "hsl(var(--chart-2))" }, // Implied remainder
  { name: "Non-binary", value: 8, color: "hsl(var(--chart-3))" }
];

export const ETHNICITY_STATS = [
  { name: "White", value: 40, color: "hsl(var(--chart-4))" },
  { name: "Asian", value: 30, color: "hsl(var(--chart-5))" },
  { name: "Hispanic", value: 12, color: "hsl(var(--chart-1))" },
  { name: "African American", value: 8, color: "hsl(var(--chart-2))" },
  { name: "Other", value: 10, color: "hsl(var(--chart-3))" },
];

export const MONTHLY_ACTIVE_USERS = [
  { month: 'Jan', users: 15 },
  { month: 'Feb', users: 18 },
  { month: 'Mar', users: 17 },
  { month: 'Apr', users: 20 },
  { month: 'May', users: 21 },
  { month: 'Jun', users: 22 },
];

export const FEATURE_UTILIZATION = [
  { feature: "Diversity Filters", usage: 56 },
  { feature: "SeekOut Assist", usage: 45 },
  { feature: "Workspaces", usage: 32 },
  { feature: "Talent Rediscovery", usage: 28 },
];

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
