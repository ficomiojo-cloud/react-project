export interface ItemData {
  id: number;
  title: string;
  category: string;
  location: string;
  reporterName: string;
  contact?: string;
  description?: string;
  type: 'Lost' | 'Found';
  status: 'Active' | 'Claimed';
  date: string;
}

export type ItemFilterValue = 'All' | 'Lost' | 'Found' | 'Claimed';
export type ItemTypeFilter = 'All' | 'Lost' | 'Found';
export type ItemStatusFilter = 'All' | 'Active' | 'Claimed';
export type AppView = 'list' | 'form';