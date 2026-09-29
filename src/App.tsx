import { useState } from 'react';
import ItemDetailDialog from './components/ItemDetailDialog';
import Header from './components/Header';
import StatCard from './components/StatCard';
import ItemForm from './components/ItemForm';
import ItemFilter from './components/ItemFilter';
import ItemList from './components/ItemList';
import { AppView, ItemData, ItemStatusFilter, ItemTypeFilter } from './types';

// Functional component utama yang menyusun seluruh tampilan aplikasi.
function App() {
  // State utama menyimpan data laporan dan mengatur tampilan yang sedang aktif.
  const [items, setItems] = useState<ItemData[]>([
    { id: 1, title: 'Dompet kulit cokelat', reporterName: 'Andi', contact: '0812-0000-0001', category: 'Dompet', location: 'Kantin Fakultas Teknik', description: 'Berisi KTM dan beberapa kartu ATM.', type: 'Lost', status: 'Active', date: '2026-09-22' },
    { id: 2, title: 'Kunci motor Honda', reporterName: 'Siti', contact: '0812-0000-0002', category: 'Aksesori / Kunci', location: 'Parkiran Gedung A', description: 'Kunci dengan gantungan berwarna hitam.', type: 'Found', status: 'Active', date: '2026-09-23' },
    { id: 3, title: 'Laptop ASUS 14 inci', reporterName: 'Budi', contact: '0812-0000-0003', category: 'Elektronik', location: 'Perpustakaan Lantai 2', description: 'Laptop dengan stiker kecil di bagian penutup.', type: 'Lost', status: 'Active', date: '2026-09-24' },
    { id: 4, title: 'Botol minum stainless', reporterName: 'Rina', contact: '0812-0000-0004', category: 'Lainnya', location: 'Lapangan Basket', description: 'Botol minum warna perak.', type: 'Lost', status: 'Active', date: '2026-09-25' }
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<ItemTypeFilter>('All');
  const [selectedStatus, setSelectedStatus] = useState<ItemStatusFilter>('All');
  const [activeView, setActiveView] = useState<AppView>('list');
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  // Event handler memperbarui state saat laporan ditambah, diubah, atau dihapus.
  const handleAddItem = (newItem: ItemData) => {
    setItems(currentItems => [newItem, ...currentItems]);
    setActiveView('list');
  };

  const handleToggleStatus = (id: number) => {
    setItems(currentItems => currentItems.map(item =>
      item.id === id
        ? { ...item, status: item.status === 'Active' ? 'Claimed' : 'Active' }
        : item
    ));
  };

  const handleDeleteItem = (id: number) => {
    if (!confirm('Apakah Anda yakin ingin menghapus laporan ini?')) return false;
    setItems(currentItems => currentItems.filter(item => item.id !== id));
    return true;
  };

  // Data difilter dari state sebelum dikirim sebagai props ke daftar laporan.
  const normalizedSearchQuery = searchQuery.trim().toLowerCase();
  const filteredItems = items.filter(item => {
    const matchesSearch = [item.title, item.location, item.reporterName, item.category]
      .some(value => value.toLowerCase().includes(normalizedSearchQuery));

    const matchesType = selectedType === 'All' || item.type === selectedType;
    const matchesStatus = selectedStatus === 'All' || item.status === selectedStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  const totalItems = items.length;
  const searchingCount = items.filter(item => item.type === 'Lost' && item.status === 'Active').length;
  const waitingCount = items.filter(item => item.type === 'Found' && item.status === 'Active').length;
  const returnedCount = items.filter(item => item.status === 'Claimed').length;
  const selectedItem = items.find(item => item.id === selectedItemId);

  return (
    <div className="app-shell">
      {/* Props mengirim state navigasi dan event handler ke Header. */}
      <Header activeView={activeView} onNavigate={setActiveView} />
      {/* Conditional rendering memilih halaman form atau daftar laporan. */}
      {activeView === 'form' ? (
        <main className="form-page">
          <ItemForm onAddItem={handleAddItem} onCancel={() => setActiveView('list')} />
        </main>
      ) : (
        <main className="list-page">
          {/* Props mengirim hasil state dan handler ke component anak. */}
          <StatCard
            totalItems={totalItems}
            searchingCount={searchingCount}
            waitingCount={waitingCount}
            returnedCount={returnedCount}
          />
          <ItemFilter
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedType={selectedType}
            onTypeChange={setSelectedType}
            selectedStatus={selectedStatus}
            onStatusChange={setSelectedStatus}
          />
          <ItemList
            items={filteredItems}
            onOpenDetail={setSelectedItemId}
            onToggleStatus={handleToggleStatus}
          />
        </main>
      )}
      {selectedItem && (
        <ItemDetailDialog
          item={selectedItem}
          onClose={() => setSelectedItemId(null)}
          onToggleStatus={handleToggleStatus}
          onDeleteItem={handleDeleteItem}
        />
      )}
    </div>
  );
}

export default App;