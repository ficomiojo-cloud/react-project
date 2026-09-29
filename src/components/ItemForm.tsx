import { useState, FormEvent } from 'react';
import { ItemData } from '../types';
import { FormProps } from '../props/LostFoundProps';

const ItemForm = ({ onAddItem, onCancel }: FormProps) => {
  // State lokal mengontrol nilai field dan pilihan jenis laporan pada form.
  const [title, setTitle] = useState('');
  const [reporterName, setReporterName] = useState('');
  const [contact, setContact] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Dompet');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [type, setType] = useState<'Lost' | 'Found'>('Lost');

  // Event handler onSubmit memvalidasi input lalu mengirim data ke parent lewat props.
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !reporterName.trim() || !contact.trim() || !location.trim()) {
      alert('Harap isi semua kolom formulir!');
      return;
    }

    const newItem: ItemData = {
      id: Date.now(),
      title: title.trim(),
      reporterName: reporterName.trim(),
      contact: contact.trim(),
      description: description.trim(),
      category,
      location: location.trim(),
      type,
      status: 'Active',
      date
    };

    onAddItem(newItem);
  };

  return (
    <form className="report-form" onSubmit={handleSubmit}>
      <div className="report-form-heading">
        <h2>Buat laporan baru</h2>
        <p>Lengkapi informasi barang yang hilang atau ditemukan.</p>
      </div>

      <div className="report-type-switch" role="group" aria-label="Jenis laporan">
        <button
          type="button"
          className={type === 'Lost' ? 'report-type-button report-type-lost selected' : 'report-type-button'}
          aria-pressed={type === 'Lost'}
          onClick={() => setType('Lost')}
        >
          Saya kehilangan barang
        </button>
        <button
          type="button"
          className={type === 'Found' ? 'report-type-button report-type-found selected' : 'report-type-button'}
          aria-pressed={type === 'Found'}
          onClick={() => setType('Found')}
        >
          Saya menemukan barang
        </button>
      </div>

      <div className="report-form-fields">
        <label className="form-field">
          <span>Nama barang</span>
          <input
            type="text"
            placeholder="Contoh: Dompet hitam"
            value={title}
            onChange={event => setTitle(event.target.value)}
            maxLength={80}
            required
          />
        </label>

        <label className="form-field">
          <span>Kategori</span>
          <select value={category} onChange={event => setCategory(event.target.value)} required>
            <option value="Dompet">Dompet</option>
            <option value="Elektronik">Elektronik</option>
            <option value="Dokumen / KTM">Dokumen / KTM</option>
            <option value="Aksesori / Kunci">Aksesori / Kunci</option>
            <option value="Tas">Tas</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </label>

        <label className="form-field">
          <span>Lokasi</span>
          <input
            type="text"
            placeholder="Contoh: Kantin Gedung B"
            value={location}
            onChange={event => setLocation(event.target.value)}
            maxLength={120}
            required
          />
        </label>

        <label className="form-field">
          <span>Tanggal</span>
          <input type="date" value={date} onChange={event => setDate(event.target.value)} required />
        </label>

        <label className="form-field form-field-wide">
          <span>Deskripsi</span>
          <textarea
            placeholder="Ciri khas barang atau informasi lain yang membantu identifikasi"
            value={description}
            onChange={event => setDescription(event.target.value)}
            rows={4}
            maxLength={500}
          />
        </label>

        <label className="form-field">
          <span>Nama pelapor</span>
          <input
            type="text"
            placeholder="Nama lengkap"
            value={reporterName}
            onChange={event => setReporterName(event.target.value)}
            maxLength={80}
            required
          />
        </label>

        <label className="form-field">
          <span>Kontak</span>
          <input
            type="tel"
            placeholder="Nomor yang bisa dihubungi"
            value={contact}
            onChange={event => setContact(event.target.value)}
            maxLength={30}
            required
          />
        </label>
      </div>

      <div className="report-form-actions">
        <button type="button" className="button-secondary" onClick={onCancel}>Batal</button>
        <button type="submit" className="button-primary">Kirim laporan</button>
      </div>
    </form>
  );
};

export default ItemForm;