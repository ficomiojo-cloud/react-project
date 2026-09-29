import ItemCard from './ItemCard.tsx';
import { ListProps } from '../props/LostFoundProps';

const ItemList = ({ items, onOpenDetail, onToggleStatus }: ListProps) => {
  // Conditional rendering memberi pesan saat filter menghasilkan daftar kosong.
  if (items.length === 0) {
    return <p className="empty-state">Tidak ada laporan yang sesuai dengan pencarian atau filter.</p>;
  }

  return (
    <div className="report-grid">
      {/* map() merender satu ItemCard untuk setiap laporan. */}
      {items.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          onOpenDetail={onOpenDetail}
          onToggleStatus={onToggleStatus}
        />
      ))}
    </div>
  );
};

export default ItemList;