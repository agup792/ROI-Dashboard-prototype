
export interface Hire {
  id: string;
  name: string;
  title: string;
  level: 'Senior Leadership' | 'Manager' | 'Lead IC' | 'IC';
  location: string;
  hireDate: string;
  actions: string[];
  primarySource:
    | "Public"
    | "GitHub"
    | "Expert"
    | "Healthcare"
    | "ATS"
    | "Internal"
    | "Rediscovery"
    | "Other";
  diversity?: {
    gender?: 'Female' | 'Male' | 'Non-binary';
    ethnicity?: 'African American' | 'Hispanic' | 'Asian' | 'White' | 'Other';
  };
  region?: "Americas" | "EMEA" | "APAC" | "Other";
  country?: string;
  sourceCompany?: string;
  degreeLevel?: "High School" | "Bachelor's" | "Master's" | "PhD" | "Other";
}

export const MOCK_HIRES: Hire[] = [
  { id: '1', name: "Sarah Chen", title: "VP of Engineering", level: "Senior Leadership", location: "San Francisco, CA", hireDate: "2024-01-15", actions: ["Exported", "Contacted", "Evaluated"], primarySource: "GitHub", diversity: { gender: "Female", ethnicity: "Asian" }, region: "Americas", country: "United States", sourceCompany: "Google", degreeLevel: "Master's" },
  { id: '2', name: "Michael Rodriguez", title: "Senior Product Manager", level: "Manager", location: "Austin, TX", hireDate: "2024-01-20", actions: ["Exported", "Added to Project"], primarySource: "Public", diversity: { gender: "Male", ethnicity: "Hispanic" }, region: "Americas", country: "United States", sourceCompany: "Meta", degreeLevel: "Bachelor's" },
  { id: '3', name: "Jennifer Thompson", title: "Data Scientist", level: "IC", location: "New York, NY", hireDate: "2024-02-01", actions: ["Contacted", "Evaluated"], primarySource: "Expert", diversity: { gender: "Female", ethnicity: "White" }, region: "Americas", country: "United States", sourceCompany: "Amazon", degreeLevel: "PhD" },
  { id: '4', name: "David Okonjo", title: "Lead Backend Engineer", level: "Lead IC", location: "Remote", hireDate: "2024-02-10", actions: ["Exported", "Contacted", "Added to Project"], primarySource: "ATS", diversity: { gender: "Male", ethnicity: "African American" }, region: "Americas", country: "United States", sourceCompany: "Microsoft", degreeLevel: "Bachelor's" },
  { id: '5', name: "Emily Zhang", title: "Product Designer", level: "IC", location: "Seattle, WA", hireDate: "2024-02-15", actions: ["Exported"], primarySource: "Public", diversity: { gender: "Female", ethnicity: "Asian" }, region: "Americas", country: "United States", sourceCompany: "Adobe", degreeLevel: "Master's" },
  { id: '6', name: "James Wilson", title: "Director of Sales", level: "Senior Leadership", location: "Chicago, IL", hireDate: "2024-02-28", actions: ["Contacted", "Added to Project"], primarySource: "Expert", diversity: { gender: "Male", ethnicity: "White" }, region: "Americas", country: "United States", sourceCompany: "Salesforce", degreeLevel: "Bachelor's" },
  { id: '7', name: "Maria Garcia", title: "HR Business Partner", level: "Manager", location: "Miami, FL", hireDate: "2024-03-05", actions: ["Exported", "Contacted"], primarySource: "Public", diversity: { gender: "Female", ethnicity: "Hispanic" }, region: "Americas", country: "United States", sourceCompany: "Workday", degreeLevel: "Master's" },
  { id: '8', name: "Robert Johnson", title: "Staff Software Engineer", level: "Lead IC", location: "San Francisco, CA", hireDate: "2024-03-12", actions: ["Added to Project"], primarySource: "GitHub", diversity: { gender: "Male", ethnicity: "African American" }, region: "Americas", country: "United States", sourceCompany: "Apple", degreeLevel: "Bachelor's" },
  { id: '9', name: "Lisa Park", title: "Marketing Manager", level: "Manager", location: "Los Angeles, CA", hireDate: "2024-03-20", actions: ["Exported", "Contacted"], primarySource: "Public", diversity: { gender: "Female", ethnicity: "Asian" }, region: "Americas", country: "United States", sourceCompany: "Netflix", degreeLevel: "Bachelor's" },
  { id: '10', name: "Thomas Anderson", title: "Security Engineer", level: "IC", location: "Austin, TX", hireDate: "2024-03-25", actions: ["Exported"], primarySource: "Other", diversity: { gender: "Male", ethnicity: "White" }, region: "Americas", country: "United States", sourceCompany: "IBM", degreeLevel: "Master's" },
  { id: '11', name: "Rachel Kim", title: "Frontend Developer", level: "IC", location: "New York, NY", hireDate: "2024-04-02", actions: ["Contacted"], primarySource: "GitHub", diversity: { gender: "Female", ethnicity: "Asian" }, region: "Americas", country: "United States", sourceCompany: "Spotify", degreeLevel: "Bachelor's" },
  { id: '12', name: "Kevin O'Connor", title: "Account Executive", level: "IC", location: "Boston, MA", hireDate: "2024-04-10", actions: ["Exported", "Added to Project"], primarySource: "Public", diversity: { gender: "Male", ethnicity: "White" }, region: "Americas", country: "United States", sourceCompany: "Oracle", degreeLevel: "Bachelor's" },
  { id: '13', name: "Priya Patel", title: "Senior Data Analyst", level: "Lead IC", location: "Remote", hireDate: "2024-04-15", actions: ["Exported", "Contacted"], primarySource: "ATS", diversity: { gender: "Female", ethnicity: "Asian" }, region: "EMEA", country: "United Kingdom", sourceCompany: "Palantir", degreeLevel: "Master's" },
  { id: '14', name: "Marcus Jones", title: "Engineering Manager", level: "Manager", location: "Atlanta, GA", hireDate: "2024-04-22", actions: ["Contacted", "Added to Project"], primarySource: "Public", diversity: { gender: "Male", ethnicity: "African American" }, region: "Americas", country: "United States", sourceCompany: "Dell", degreeLevel: "Bachelor's" },
  { id: '15', name: "Sophie Martin", title: "UX Researcher", level: "IC", location: "Seattle, WA", hireDate: "2024-05-01", actions: ["Exported"], primarySource: "Public", diversity: { gender: "Female", ethnicity: "White" }, region: "Americas", country: "United States", sourceCompany: "Airbnb", degreeLevel: "Master's" },
  { id: '16', name: "Daniel Lee", title: "DevOps Engineer", level: "IC", location: "San Francisco, CA", hireDate: "2024-05-08", actions: ["Exported", "Contacted"], primarySource: "GitHub", diversity: { gender: "Male", ethnicity: "Asian" }, region: "Americas", country: "United States", sourceCompany: "Tesla", degreeLevel: "Bachelor's" },
  { id: '17', name: "Amanda White", title: "Chief Marketing Officer", level: "Senior Leadership", location: "New York, NY", hireDate: "2024-05-15", actions: ["Added to Project"], primarySource: "Expert", diversity: { gender: "Female", ethnicity: "White" }, region: "Americas", country: "United States", sourceCompany: "HubSpot", degreeLevel: "Master's" },
  { id: '18', name: "Carlos Ruiz", title: "Sales Director", level: "Senior Leadership", location: "Miami, FL", hireDate: "2024-05-20", actions: ["Exported", "Contacted"], primarySource: "Public", diversity: { gender: "Male", ethnicity: "Hispanic" }, region: "Americas", country: "United States", sourceCompany: "Zoom", degreeLevel: "Bachelor's" },
  { id: '19', name: "Michelle Wright", title: "Customer Success Manager", level: "IC", location: "Chicago, IL", hireDate: "2024-06-01", actions: ["Contacted"], primarySource: "Internal", diversity: { gender: "Female", ethnicity: "White" }, region: "Americas", country: "United States", sourceCompany: "Zendesk", degreeLevel: "Bachelor's" },
  { id: '20', name: "Alex Turner", title: "Principal Engineer", level: "Lead IC", location: "Remote", hireDate: "2024-06-10", actions: ["Exported", "Added to Project"], primarySource: "GitHub", diversity: { gender: "Male", ethnicity: "White" }, region: "APAC", country: "Australia", sourceCompany: "Atlassian", degreeLevel: "Master's" },
  { id: '21', name: "Grace Liu", title: "Product Manager", level: "IC", location: "Austin, TX", hireDate: "2024-06-15", actions: ["Exported", "Contacted"], primarySource: "Public", diversity: { gender: "Female", ethnicity: "Asian" }, region: "Americas", country: "United States", sourceCompany: "Uber", degreeLevel: "Bachelor's" },
  { id: '22', name: "Samuel Green", title: "QA Lead", level: "Lead IC", location: "Boston, MA", hireDate: "2024-06-22", actions: ["Contacted"], primarySource: "ATS", diversity: { gender: "Male", ethnicity: "African American" }, region: "Americas", country: "United States", sourceCompany: "Cisco", degreeLevel: "Bachelor's" },
  { id: '23', name: "Natalie Scott", title: "Content Strategist", level: "IC", location: "Los Angeles, CA", hireDate: "2024-07-01", actions: ["Exported"], primarySource: "Public", diversity: { gender: "Female", ethnicity: "White" }, region: "Americas", country: "United States", sourceCompany: "LinkedIn", degreeLevel: "Master's" },
  { id: '24', name: "Benjamin Baker", title: "Head of People", level: "Senior Leadership", location: "San Francisco, CA", hireDate: "2024-07-08", actions: ["Exported", "Contacted"], primarySource: "Public", diversity: { gender: "Male", ethnicity: "White" }, region: "Americas", country: "United States", sourceCompany: "Stripe", degreeLevel: "Master's" },
  { id: '25', name: "Isabella Martinez", title: "Recruiter", level: "IC", location: "Remote", hireDate: "2024-07-15", actions: ["Added to Project"], primarySource: "Rediscovery", diversity: { gender: "Female", ethnicity: "Hispanic" }, region: "Americas", country: "Mexico", sourceCompany: "Indeed", degreeLevel: "Bachelor's" },
  { id: '26', name: "Ethan Hall", title: "Finance Director", level: "Senior Leadership", location: "New York, NY", hireDate: "2024-07-20", actions: ["Exported", "Contacted"], primarySource: "Public", diversity: { gender: "Male", ethnicity: "White" }, region: "Americas", country: "United States", sourceCompany: "Goldman Sachs", degreeLevel: "Master's" },
  { id: '27', name: "Victoria Adams", title: "Legal Counsel", level: "Lead IC", location: "Washington, DC", hireDate: "2024-08-01", actions: ["Contacted"], primarySource: "Public", diversity: { gender: "Female", ethnicity: "White" }, region: "Americas", country: "United States", sourceCompany: "Baker McKenzie", degreeLevel: "Other" },
  { id: '28', name: "Ryan Clark", title: "Solutions Architect", level: "Lead IC", location: "Denver, CO", hireDate: "2024-08-10", actions: ["Exported", "Added to Project"], primarySource: "Expert", diversity: { gender: "Male", ethnicity: "White" }, region: "Americas", country: "United States", sourceCompany: "AWS", degreeLevel: "Master's" },
  { id: '29', name: "Olivia King", title: "Operations Manager", level: "Manager", location: "Seattle, WA", hireDate: "2024-08-15", actions: ["Exported", "Contacted"], primarySource: "Public", diversity: { gender: "Female", ethnicity: "White" }, region: "Americas", country: "United States", sourceCompany: "Expedia", degreeLevel: "Bachelor's" },
  { id: '30', name: "Justin Wright", title: "Full Stack Engineer", level: "IC", location: "San Francisco, CA", hireDate: "2024-08-22", actions: ["Exported"], primarySource: "GitHub", diversity: { gender: "Male", ethnicity: "White" }, region: "Americas", country: "United States", sourceCompany: "Dropbox", degreeLevel: "Bachelor's" },
  { id: '31', name: "Sophia Davis", title: "VP of Product", level: "Senior Leadership", location: "New York, NY", hireDate: "2024-09-01", actions: ["Contacted", "Added to Project"], primarySource: "Public", diversity: { gender: "Female", ethnicity: "White" }, region: "Americas", country: "United States", sourceCompany: "Twitter", degreeLevel: "Master's" },
  { id: '32', name: "Jordan Taylor", title: "Account Manager", level: "IC", location: "Chicago, IL", hireDate: "2024-09-08", actions: ["Exported", "Contacted"], primarySource: "Internal", diversity: { gender: "Male", ethnicity: "African American" }, region: "Americas", country: "United States", sourceCompany: "Slack", degreeLevel: "Bachelor's" },
  { id: '33', name: "Emma Wilson", title: "Data Engineer", level: "Lead IC", location: "Austin, TX", hireDate: "2024-09-15", actions: ["Contacted"], primarySource: "Public", diversity: { gender: "Female", ethnicity: "White" }, region: "Americas", country: "United States", sourceCompany: "Snowflake", degreeLevel: "Master's" },
  { id: '34', name: "Lucas Brown", title: "Head of Sales", level: "Senior Leadership", location: "San Francisco, CA", hireDate: "2024-09-20", actions: ["Exported", "Added to Project"], primarySource: "Public", diversity: { gender: "Male", ethnicity: "White" }, region: "Americas", country: "United States", sourceCompany: "DocuSign", degreeLevel: "Bachelor's" },
  { id: '35', name: "Ava Garcia", title: "Marketing Specialist", level: "IC", location: "Miami, FL", hireDate: "2024-10-01", actions: ["Exported", "Contacted"], primarySource: "Healthcare", diversity: { gender: "Female", ethnicity: "Hispanic" }, region: "Americas", country: "United States", sourceCompany: "CVS Health", degreeLevel: "Bachelor's" }
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

// Activity Report Data (from Admin Activity Dashboard)
export const ACTIVITY_REPORT_DATA = {
  profileTotals: {
    total: 35339,
    unique: 16551,
    uniqueDiverse: 9169
  },
  diversity: {
    women: 7228,
    africanAmerican: 651,
    hispanic: 743,
    asian: 1359,
    veteran: 795
  },
  talentPools: {
    public: 15847,
    rediscovery: 263,
    internalTalent: 160,
    healthcare: 1123,
    nursing: 1295,
    applicantReview: 4,
    github: 1379,
    expert: 1248
  },
  profilesWith: {
    securityClearance: 919,
    enrichedATS: 470
  },
  activityTypes: {
    requestContact: 40.87,
    addedToProject: 31.88,
    profilesViewed: 9.60,
    exportedProfiles: 17.65,
    movedStages: 0.00
  },
  topLists: ["Companies", "Titles", "Diverse Titles", "Cleared Titles"]
};

// Sourced Applications Funnel Data
export interface FunnelCandidate {
  id: string;
  name: string;
  linkedInUrl: string;
  email: string;
  currentStage: string;
  daysInStage: number;
  seekOutActivityDate: string;
  seekOutActivityType: string;
  diversity?: {
    gender?: 'Female' | 'Male';
    ethnicity?: 'African American' | 'Hispanic' | 'Asian' | 'White' | 'Other';
  };
  requisition?: string;
}

export const FUNNEL_STAGES = [
  { name: "SeekOut Activity", count: 1250, color: "hsl(var(--chart-1))" },
  { name: "Phone Screen", count: 420, color: "hsl(var(--chart-2))" },
  { name: "Interview", count: 280, color: "hsl(var(--chart-3))" },
  { name: "Final Interview", count: 95, color: "hsl(var(--chart-4))" },
  { name: "Offer Extended", count: 40, color: "hsl(var(--primary))" },
  { name: "Hired", count: 35, color: "hsl(142, 76%, 36%)" },
  { name: "Offer Rejected", count: 5, color: "hsl(0, 84%, 60%)" },
];

// Sample candidates across all funnel stages (50 representative candidates)
export const MOCK_FUNNEL_CANDIDATES: FunnelCandidate[] = [
  // Hired (10 samples from 35 total)
  { id: 'fc1', name: "Sarah Chen", linkedInUrl: "linkedin.com/in/sarachen", email: "sarah.chen@email.com", currentStage: "Hired", daysInStage: 2, seekOutActivityDate: "2024-08-15", seekOutActivityType: "Exported", diversity: { gender: "Female", ethnicity: "Asian" }, requisition: "Senior Engineer" },
  { id: 'fc2', name: "Michael Rodriguez", linkedInUrl: "linkedin.com/in/mrodriguez", email: "m.rodriguez@email.com", currentStage: "Hired", daysInStage: 5, seekOutActivityDate: "2024-07-20", seekOutActivityType: "Contacted", diversity: { gender: "Male", ethnicity: "Hispanic" }, requisition: "Product Manager" },
  { id: 'fc3', name: "Jennifer Thompson", linkedInUrl: "linkedin.com/in/jthompson", email: "jen.t@email.com", currentStage: "Hired", daysInStage: 1, seekOutActivityDate: "2024-09-01", seekOutActivityType: "Exported", diversity: { gender: "Female", ethnicity: "White" }, requisition: "Data Scientist" },
  { id: 'fc4', name: "David Okonjo", linkedInUrl: "linkedin.com/in/dokonjo", email: "d.okonjo@email.com", currentStage: "Hired", daysInStage: 3, seekOutActivityDate: "2024-08-10", seekOutActivityType: "Exported", diversity: { gender: "Male", ethnicity: "African American" }, requisition: "Backend Engineer" },
  { id: 'fc5', name: "Emily Zhang", linkedInUrl: "linkedin.com/in/ezhang", email: "emily.z@email.com", currentStage: "Hired", daysInStage: 4, seekOutActivityDate: "2024-07-15", seekOutActivityType: "Contacted", diversity: { gender: "Female", ethnicity: "Asian" }, requisition: "Product Designer" },
  { id: 'fc6', name: "James Wilson", linkedInUrl: "linkedin.com/in/jwilson", email: "james.w@email.com", currentStage: "Hired", daysInStage: 6, seekOutActivityDate: "2024-06-28", seekOutActivityType: "Exported", diversity: { gender: "Male", ethnicity: "White" }, requisition: "Sales Director" },
  { id: 'fc7', name: "Maria Garcia", linkedInUrl: "linkedin.com/in/mgarcia", email: "maria.g@email.com", currentStage: "Hired", daysInStage: 2, seekOutActivityDate: "2024-08-05", seekOutActivityType: "Exported", diversity: { gender: "Female", ethnicity: "Hispanic" }, requisition: "HR Business Partner" },
  { id: 'fc8', name: "Robert Johnson", linkedInUrl: "linkedin.com/in/rjohnson", email: "rob.j@email.com", currentStage: "Hired", daysInStage: 7, seekOutActivityDate: "2024-07-12", seekOutActivityType: "Contacted", diversity: { gender: "Male", ethnicity: "African American" }, requisition: "Software Engineer" },
  { id: 'fc9', name: "Lisa Park", linkedInUrl: "linkedin.com/in/lpark", email: "lisa.p@email.com", currentStage: "Hired", daysInStage: 3, seekOutActivityDate: "2024-08-20", seekOutActivityType: "Exported", diversity: { gender: "Female", ethnicity: "Asian" }, requisition: "Marketing Manager" },
  { id: 'fc10', name: "Thomas Anderson", linkedInUrl: "linkedin.com/in/tanderson", email: "t.anderson@email.com", currentStage: "Hired", daysInStage: 5, seekOutActivityDate: "2024-07-25", seekOutActivityType: "Exported", requisition: "Security Engineer" },
  
  // Offer Rejected (5 samples - all 5)
  { id: 'fc11', name: "Rachel Kim", linkedInUrl: "linkedin.com/in/rkim", email: "rachel.k@email.com", currentStage: "Offer Rejected", daysInStage: 2, seekOutActivityDate: "2024-09-15", seekOutActivityType: "Contacted", diversity: { gender: "Female", ethnicity: "Asian" }, requisition: "Frontend Developer" },
  { id: 'fc12', name: "Kevin O'Connor", linkedInUrl: "linkedin.com/in/koconnor", email: "k.oconnor@email.com", currentStage: "Offer Rejected", daysInStage: 3, seekOutActivityDate: "2024-09-10", seekOutActivityType: "Exported", diversity: { gender: "Male", ethnicity: "White" }, requisition: "Account Executive" },
  { id: 'fc13', name: "Priya Patel", linkedInUrl: "linkedin.com/in/ppatel", email: "p.patel@email.com", currentStage: "Offer Rejected", daysInStage: 1, seekOutActivityDate: "2024-09-18", seekOutActivityType: "Exported", diversity: { gender: "Female", ethnicity: "Asian" }, requisition: "Data Analyst" },
  { id: 'fc14', name: "Marcus Jones", linkedInUrl: "linkedin.com/in/mjones", email: "m.jones@email.com", currentStage: "Offer Rejected", daysInStage: 4, seekOutActivityDate: "2024-09-05", seekOutActivityType: "Contacted", diversity: { gender: "Male", ethnicity: "African American" }, requisition: "Engineering Manager" },
  { id: 'fc15', name: "Sophie Martin", linkedInUrl: "linkedin.com/in/smartin", email: "sophie.m@email.com", currentStage: "Offer Rejected", daysInStage: 2, seekOutActivityDate: "2024-09-12", seekOutActivityType: "Exported", diversity: { gender: "Female", ethnicity: "White" }, requisition: "UX Researcher" },
  
  // Offer Extended (but not yet accepted/rejected) - 0 in this snapshot as all resolved
  
  // Final Interview (8 samples from 95 total)
  { id: 'fc16', name: "Daniel Lee", linkedInUrl: "linkedin.com/in/dlee", email: "dan.lee@email.com", currentStage: "Final Interview", daysInStage: 3, seekOutActivityDate: "2024-10-05", seekOutActivityType: "Exported", diversity: { gender: "Male", ethnicity: "Asian" }, requisition: "DevOps Engineer" },
  { id: 'fc17', name: "Amanda White", linkedInUrl: "linkedin.com/in/awhite", email: "amanda.w@email.com", currentStage: "Final Interview", daysInStage: 5, seekOutActivityDate: "2024-09-28", seekOutActivityType: "Contacted", diversity: { gender: "Female", ethnicity: "White" }, requisition: "CMO" },
  { id: 'fc18', name: "Carlos Ruiz", linkedInUrl: "linkedin.com/in/cruiz", email: "carlos.r@email.com", currentStage: "Final Interview", daysInStage: 2, seekOutActivityDate: "2024-10-08", seekOutActivityType: "Exported", diversity: { gender: "Male", ethnicity: "Hispanic" }, requisition: "Sales Director" },
  { id: 'fc19', name: "Michelle Wright", linkedInUrl: "linkedin.com/in/mwright", email: "m.wright@email.com", currentStage: "Final Interview", daysInStage: 4, seekOutActivityDate: "2024-10-01", seekOutActivityType: "Exported", diversity: { gender: "Female", ethnicity: "White" }, requisition: "Customer Success" },
  { id: 'fc20', name: "Alex Turner", linkedInUrl: "linkedin.com/in/aturner", email: "alex.t@email.com", currentStage: "Final Interview", daysInStage: 6, seekOutActivityDate: "2024-09-25", seekOutActivityType: "Contacted", requisition: "Principal Engineer" },
  { id: 'fc21', name: "Grace Liu", linkedInUrl: "linkedin.com/in/gliu", email: "grace.l@email.com", currentStage: "Final Interview", daysInStage: 3, seekOutActivityDate: "2024-10-06", seekOutActivityType: "Exported", diversity: { gender: "Female", ethnicity: "Asian" }, requisition: "Product Manager" },
  { id: 'fc22', name: "Samuel Green", linkedInUrl: "linkedin.com/in/sgreen", email: "sam.green@email.com", currentStage: "Final Interview", daysInStage: 7, seekOutActivityDate: "2024-09-22", seekOutActivityType: "Contacted", diversity: { gender: "Male", ethnicity: "African American" }, requisition: "QA Lead" },
  { id: 'fc23', name: "Natalie Scott", linkedInUrl: "linkedin.com/in/nscott", email: "nat.scott@email.com", currentStage: "Final Interview", daysInStage: 4, seekOutActivityDate: "2024-10-02", seekOutActivityType: "Exported", diversity: { gender: "Female", ethnicity: "White" }, requisition: "Content Strategist" },
  
  // Interview (10 samples from 280 total)
  { id: 'fc24', name: "Benjamin Baker", linkedInUrl: "linkedin.com/in/bbaker", email: "ben.b@email.com", currentStage: "Interview", daysInStage: 5, seekOutActivityDate: "2024-10-15", seekOutActivityType: "Exported", diversity: { gender: "Male", ethnicity: "White" }, requisition: "Head of People" },
  { id: 'fc25', name: "Isabella Martinez", linkedInUrl: "linkedin.com/in/imartinez", email: "bella.m@email.com", currentStage: "Interview", daysInStage: 3, seekOutActivityDate: "2024-10-18", seekOutActivityType: "Contacted", diversity: { gender: "Female", ethnicity: "Hispanic" }, requisition: "Recruiter" },
  { id: 'fc26', name: "Ethan Hall", linkedInUrl: "linkedin.com/in/ehall", email: "ethan.h@email.com", currentStage: "Interview", daysInStage: 6, seekOutActivityDate: "2024-10-12", seekOutActivityType: "Exported", diversity: { gender: "Male", ethnicity: "White" }, requisition: "Finance Director" },
  { id: 'fc27', name: "Victoria Adams", linkedInUrl: "linkedin.com/in/vadams", email: "vic.adams@email.com", currentStage: "Interview", daysInStage: 4, seekOutActivityDate: "2024-10-16", seekOutActivityType: "Exported", diversity: { gender: "Female", ethnicity: "White" }, requisition: "Legal Counsel" },
  { id: 'fc28', name: "Ryan Clark", linkedInUrl: "linkedin.com/in/rclark", email: "ryan.c@email.com", currentStage: "Interview", daysInStage: 2, seekOutActivityDate: "2024-10-20", seekOutActivityType: "Contacted", diversity: { gender: "Male", ethnicity: "White" }, requisition: "Solutions Architect" },
  { id: 'fc29', name: "Olivia King", linkedInUrl: "linkedin.com/in/oking", email: "olivia.k@email.com", currentStage: "Interview", daysInStage: 7, seekOutActivityDate: "2024-10-10", seekOutActivityType: "Exported", diversity: { gender: "Female", ethnicity: "White" }, requisition: "Operations Manager" },
  { id: 'fc30', name: "Justin Wright", linkedInUrl: "linkedin.com/in/jwright", email: "justin.w@email.com", currentStage: "Interview", daysInStage: 5, seekOutActivityDate: "2024-10-14", seekOutActivityType: "Exported", diversity: { gender: "Male", ethnicity: "White" }, requisition: "Full Stack Engineer" },
  { id: 'fc31', name: "Sophia Davis", linkedInUrl: "linkedin.com/in/sdavis", email: "sophia.d@email.com", currentStage: "Interview", daysInStage: 3, seekOutActivityDate: "2024-10-18", seekOutActivityType: "Contacted", diversity: { gender: "Female", ethnicity: "White" }, requisition: "VP of Product" },
  { id: 'fc32', name: "Jordan Taylor", linkedInUrl: "linkedin.com/in/jtaylor", email: "jordan.t@email.com", currentStage: "Interview", daysInStage: 8, seekOutActivityDate: "2024-10-08", seekOutActivityType: "Exported", diversity: { gender: "Male", ethnicity: "African American" }, requisition: "Account Manager" },
  { id: 'fc33', name: "Emma Wilson", linkedInUrl: "linkedin.com/in/ewilson", email: "emma.w@email.com", currentStage: "Interview", daysInStage: 4, seekOutActivityDate: "2024-10-17", seekOutActivityType: "Exported", diversity: { gender: "Female", ethnicity: "White" }, requisition: "Data Engineer" },
  
  // Phone Screen (10 samples from 420 total)
  { id: 'fc34', name: "Lucas Brown", linkedInUrl: "linkedin.com/in/lbrown", email: "lucas.b@email.com", currentStage: "Phone Screen", daysInStage: 2, seekOutActivityDate: "2024-10-22", seekOutActivityType: "Exported", diversity: { gender: "Male", ethnicity: "White" }, requisition: "Head of Sales" },
  { id: 'fc35', name: "Ava Garcia", linkedInUrl: "linkedin.com/in/agarcia", email: "ava.g@email.com", currentStage: "Phone Screen", daysInStage: 3, seekOutActivityDate: "2024-10-21", seekOutActivityType: "Contacted", diversity: { gender: "Female", ethnicity: "Hispanic" }, requisition: "Marketing Specialist" },
  { id: 'fc36', name: "Mason Lee", linkedInUrl: "linkedin.com/in/mlee", email: "mason.l@email.com", currentStage: "Phone Screen", daysInStage: 1, seekOutActivityDate: "2024-10-24", seekOutActivityType: "Exported", diversity: { gender: "Male", ethnicity: "Asian" }, requisition: "Software Engineer" },
  { id: 'fc37', name: "Charlotte Cooper", linkedInUrl: "linkedin.com/in/ccooper", email: "charlotte.c@email.com", currentStage: "Phone Screen", daysInStage: 4, seekOutActivityDate: "2024-10-19", seekOutActivityType: "Exported", diversity: { gender: "Female", ethnicity: "White" }, requisition: "Designer" },
  { id: 'fc38', name: "Elijah Moore", linkedInUrl: "linkedin.com/in/emoore", email: "eli.moore@email.com", currentStage: "Phone Screen", daysInStage: 5, seekOutActivityDate: "2024-10-18", seekOutActivityType: "Contacted", diversity: { gender: "Male", ethnicity: "African American" }, requisition: "Product Manager" },
  { id: 'fc39', name: "Amelia Harris", linkedInUrl: "linkedin.com/in/aharris", email: "amelia.h@email.com", currentStage: "Phone Screen", daysInStage: 2, seekOutActivityDate: "2024-10-23", seekOutActivityType: "Exported", diversity: { gender: "Female", ethnicity: "White" }, requisition: "Analyst" },
  { id: 'fc40', name: "Logan Martinez", linkedInUrl: "linkedin.com/in/lmartinez", email: "logan.m@email.com", currentStage: "Phone Screen", daysInStage: 6, seekOutActivityDate: "2024-10-16", seekOutActivityType: "Exported", diversity: { gender: "Male", ethnicity: "Hispanic" }, requisition: "Engineer" },
  { id: 'fc41', name: "Mia Robinson", linkedInUrl: "linkedin.com/in/mrobinson", email: "mia.r@email.com", currentStage: "Phone Screen", daysInStage: 3, seekOutActivityDate: "2024-10-21", seekOutActivityType: "Contacted", diversity: { gender: "Female", ethnicity: "African American" }, requisition: "Sales Rep" },
  { id: 'fc42', name: "Ethan Walker", linkedInUrl: "linkedin.com/in/ewalker", email: "ethan.walk@email.com", currentStage: "Phone Screen", daysInStage: 1, seekOutActivityDate: "2024-10-25", seekOutActivityType: "Exported", diversity: { gender: "Male", ethnicity: "White" }, requisition: "Developer" },
  { id: 'fc43', name: "Harper Young", linkedInUrl: "linkedin.com/in/hyoung", email: "harper.y@email.com", currentStage: "Phone Screen", daysInStage: 4, seekOutActivityDate: "2024-10-20", seekOutActivityType: "Exported", diversity: { gender: "Female", ethnicity: "Asian" }, requisition: "Recruiter" },
];
