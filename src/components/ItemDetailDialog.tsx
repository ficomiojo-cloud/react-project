import { useEffect } from 'react';
import { ItemDetailDialogProps } from '../props/LostFoundProps';

const ItemDetailDialog = ({ item, onClose, onToggleStatus, onDeleteItem }: ItemDetailDialogProps) => {
  const isLost = item.type === 'Lost';
  const isClaimed = item.status === 'Claimed';

  // Event keyboard Escape menutup dialog; effect juga membersihkan listener.
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleDelete = () => {
    if (onDeleteItem(item.id)) onClose();
  };

  return (
    <div
      className="dialog-backdrop"
      onMouseDown={event => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section className="detail-dialog" role="dialog" aria-modal="true" aria-labelledby="detail-title">
        <div className="detail-dialog-heading">
          <span className={`badge ${isLost ? 'badge-lost' : 'badge-found'}`}>
            {isLost ? 'Hilang' : 'Ditemukan'}
          </span>
          <button type="button" className="dialog-close" onClick={onClose} aria-label="Tutup detail">
            Tutup
          </button>
        </div>

        <h2 id="detail-title">{item.title}</h2>

        <dl className="detail-list">
          <div><dt>Kategori</dt><dd>{item.category}</dd></div>
          <div><dt>Lokasi</dt><dd>{item.location}</dd></div>
          <div><dt>Tanggal</dt><dd>{item.date}</dd></div>
          <div><dt>Deskripsi</dt><dd>{item.description || 'Tidak ada deskripsi.'}</dd></div>
          <div><dt>Pelapor</dt><dd>{item.reporterName}</dd></div>
          <div><dt>Kontak</dt><dd>{item.contact || 'Belum dicantumkan'}</dd></div>
          <div><dt>Status</dt><dd>{isClaimed ? 'Sudah kembali / selesai' : 'Belum kembali'}</dd></div>
        </dl>

        {/* Tombol menjalankan event handler status dan hapus dari props. */}
        <div className="detail-dialog-actions">
          <button type="button" className={isClaimed ? 'button-secondary' : 'button-primary'} onClick={() => onToggleStatus(item.id)}>
            {isClaimed ? 'Buka status kembali' : 'Tandai sudah kembali'}
          </button>
          <button type="button" className="button-danger" onClick={handleDelete}>Hapus</button>
        </div>
      </section>
    </div>
  );
};

export default ItemDetailDialog;
