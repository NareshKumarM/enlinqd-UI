export interface Survey {
  id: string;
  name: string;
  expiry: Date | string;
  points: number;
  status: 'New' | 'In Progress' | 'Completed' | 'Expired';
  createdAt: Date | string;
  lastAccessed?: Date | string;
}
