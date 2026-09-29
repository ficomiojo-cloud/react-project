import { ItemStatusFilter, ItemTypeFilter } from '../types';
import { FilterProps } from '../props/LostFoundProps';

const ItemFilter = ({ searchQuery, onSearchChange, selectedType, onTypeChange, selectedStatus, onStatusChange }: FilterProps) => {
  return (
    <div className="filter-bar">
      {/* onChange memperbarui state pencarian yang diterima melalui props. */}
      <input
        type="search"
        aria-label="Cari laporan berdasarkan barang, kategori, atau lokasi"
        placeholder="Cari nama barang, kategori, atau lokasi"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <select
        aria-label="Filter jenis laporan"
        value={selectedType}
        onChange={(e) => onTypeChange(e.target.value as ItemTypeFilter)}
      >
        <option value="All">Semua jenis</option>
        <option value="Lost">Hilang</option>
        <option value="Found">Ditemukan</option>
      </select>

      <select
        aria-label="Filter status laporan"
        value={selectedStatus}
        onChange={(e) => onStatusChange(e.target.value as ItemStatusFilter)}
      >
        <option value="All">Semua status</option>
        <option value="Active">Belum kembali</option>
        <option value="Claimed">Sudah kembali</option>
      </select>
    </div>
  );
};

export default ItemFilter;