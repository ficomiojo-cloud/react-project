# Campus Lost & Found

## Identitas Kelompok

- Nama kelompok: Campus Lost & Found System
- Anggota:
  - Miojo Fico - NIM 105012410110
  - Kolanus Agatha - NIM 105012410028

Lengkapi identitas kelompok sebelum project dikumpulkan.

## Deskripsi dan Tujuan

Campus Lost & Found adalah aplikasi frontend untuk mencatat dan mengelola laporan barang hilang atau ditemukan di lingkungan kampus. Pengguna dapat melihat daftar laporan, mencari dan menyaring laporan, membuka detail barang, serta membuat laporan baru.

Project ini menerapkan konsep React yang dipelajari: functional component, props, state, event handling, dan rendering data secara dinamis.

## Fitur Utama

- Menampilkan ringkasan total laporan, barang hilang yang masih dicari, barang ditemukan yang menunggu pemilik, dan barang yang sudah kembali.
- Menampilkan kartu laporan dengan jenis dan status barang.
- Membuka detail berisi kategori, lokasi, tanggal, deskripsi, pelapor, kontak, dan status.
- Membuat laporan barang hilang atau ditemukan.
- Mencari berdasarkan nama barang, kategori, atau lokasi.
- Memfilter laporan berdasarkan jenis dan status.
- Mengubah status laporan menjadi sudah kembali atau membukanya kembali.
- Menghapus laporan setelah konfirmasi.

Data menggunakan dummy data dan React state lokal. Tidak ada backend atau database; perubahan akan kembali ke data awal setelah halaman dimuat ulang, sesuai batasan project Mid.

## Struktur Component

```text
src/
├── App.tsx
├── main.tsx
├── components/
│   ├── Header.tsx
│   ├── StatCard.tsx
│   ├── ItemForm.tsx
│   ├── ItemFilter.tsx
│   ├── ItemList.tsx
│   ├── ItemCard.tsx
│   └── ItemDetailDialog.tsx
├── props/
│   └── LostFoundProps.ts
└── types/
    └── index.ts
```

`App` menyimpan state utama dan menentukan tampilan daftar atau form. `props/LostFoundProps.ts` berisi kontrak props untuk component Lost & Found, sedangkan `types/index.ts` berisi tipe data dan filter aplikasi. `ItemList` merender kartu laporan dengan `map()` dan menampilkan pesan ketika tidak ada hasil. `ItemDetailDialog` hanya ditampilkan saat pengguna memilih detail laporan.

## Props, State, dan Event Handling

- **Props:** `App` mengirim pilihan tampilan ke `Header`; data ringkasan ke `StatCard`; callback penambahan dan pembatalan ke `ItemForm`; nilai filter dan callback perubahan ke `ItemFilter`; data serta callback buka-detail dan ubah status ke `ItemList`. `ItemList` meneruskan data laporan dan callback ke `ItemCard`. `ItemDetailDialog` menerima laporan terpilih serta callback tutup, ubah status, dan hapus.
- **State:** `App` mengelola laporan, pencarian, filter jenis, filter status, tampilan aktif, dan laporan terpilih. `ItemForm` mengelola nilai field laporan.
- **Event handling:** tombol navigasi dan aksi laporan menggunakan `onClick`; field form dan filter menggunakan `onChange`; pengiriman laporan menggunakan `onSubmit`.
- **Rendering kondisional:** `App` berganti antara tampilan daftar dan form. Daftar menampilkan pesan jika kosong. Badge dan label aksi menyesuaikan jenis serta status laporan. Dialog detail ditampilkan hanya untuk laporan yang dipilih.

## Screenshot Aplikasi

Sebelum pengumpulan, simpan screenshot tampilan daftar, detail, dan form di folder `docs/screenshots/`, lalu tambahkan gambarnya pada bagian ini.

## Menjalankan Aplikasi

Persyaratan: Node.js dan npm.

```bash
npm install
npm run dev
```

Verifikasi build produksi:

```bash
npm run build
npm run lint
```