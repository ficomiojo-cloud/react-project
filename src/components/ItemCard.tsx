import { ItemCardProps } from '../props/LostFoundProps';

const ItemCard = ({ item, onOpenDetail, onToggleStatus }: ItemCardProps) => {
  const isLost = item.type === 'Lost';
  const isClaimed = item.status === 'Claimed';

  return (
    <article className={`report-card ${isLost ? 'report-card-lost' : 'report-card-found'}${isClaimed ? ' report-card-claimed' : ''}`}>
      <div className="report-card-badges">
        <span className={`badge ${isLost ? 'badge-lost' : 'badge-found'}`}>
          {isLost ? 'Hilang' : 'Ditemukan'}
        </span>
        <span className={`badge ${isClaimed ? 'badge-claimed' : 'badge-active'}`}>
          {isClaimed ? 'Sudah kembali' : 'Belum kembali'}
        </span>
      </div>

      <h2>{item.title}</h2>
      <p className="report-card-location">{item.category} di {item.location}</p>
      <time className="report-card-date">{item.date}</time>

      <div className="report-card-actions">
        {/* onClick mengirim aksi detail atau perubahan status ke parent. */}
        <button type="button" className="button-secondary" onClick={() => onOpenDetail(item.id)}>
          Detail
        </button>
        <button type="button" className="button-secondary" onClick={() => onToggleStatus(item.id)}>
          {isClaimed ? 'Buka kembali' : 'Tandai kembali'}
        </button>
      </div>
    </article>
  );
};

export default ItemCard;
