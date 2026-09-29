// Props menyediakan angka ringkasan yang dihitung dari state di App.
import { StatProps } from '../props/LostFoundProps';

const StatCard = ({ totalItems, searchingCount, waitingCount, returnedCount }: StatProps) => {
  return (
    <div className="stats-grid">
      <div className="stat-card stat-total">
        <strong>{totalItems}</strong>
        <span>Total laporan</span>
      </div>
      <div className="stat-card stat-searching">
        <strong>{searchingCount}</strong>
        <span>Masih dicari</span>
      </div>
      <div className="stat-card stat-waiting">
        <strong>{waitingCount}</strong>
        <span>Menunggu pemilik</span>
      </div>
      <div className="stat-card stat-returned">
        <strong>{returnedCount}</strong>
        <span>Sudah kembali</span>
      </div>
    </div>
  );
};

export default StatCard;