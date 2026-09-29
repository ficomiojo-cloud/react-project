import { AppView, ItemData, ItemStatusFilter, ItemTypeFilter } from '../types';

// Props navigasi untuk Header.
export interface HeaderProps {
  activeView: AppView;
  onNavigate: (view: AppView) => void;
}

// Props angka ringkasan untuk StatCard.
export interface StatProps {
  totalItems: number;
  searchingCount: number;
  waitingCount: number;
  returnedCount: number;
}

// Props callback penyimpanan dan pembatalan untuk ItemForm.
export interface FormProps {
  onAddItem: (item: ItemData) => void;
  onCancel: () => void;
}

// Props nilai filter dan event perubahan untuk ItemFilter.
export interface FilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedType: ItemTypeFilter;
  onTypeChange: (type: ItemTypeFilter) => void;
  selectedStatus: ItemStatusFilter;
  onStatusChange: (status: ItemStatusFilter) => void;
}

// Props data laporan dan aksi untuk ItemList.
export interface ListProps {
  items: ItemData[];
  onOpenDetail: (id: number) => void;
  onToggleStatus: (id: number) => void;
}

// Props satu laporan dan event kartu untuk ItemCard.
export interface ItemCardProps {
  item: ItemData;
  onOpenDetail: (id: number) => void;
  onToggleStatus: (id: number) => void;
}

// Props data terpilih dan aksi untuk dialog detail.
export interface ItemDetailDialogProps {
  item: ItemData;
  onClose: () => void;
  onToggleStatus: (id: number) => void;
  onDeleteItem: (id: number) => boolean;
}
