import './App.css'

// 1. INTERFACE PROPS
interface StudentProps {
  nama: string
  nim: string
  fakultas: string
  programStudi: string
  semester: number
}

// 2. KOMPONEN STUDENTCARD
function StudentCard(props: StudentProps) {
  return (
    <div style={{
      maxWidth: '500px',
      margin: '40px auto',
      padding: '24px',
      border: '1px solid #2e2e32',
      borderRadius: '12px',
      backgroundColor: '#161618',
      color: '#ffffff',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
      textAlign: 'left'
    }}>
      <h2 style={{ marginTop: 0, marginBottom: '8px', color: '#646cff' }}>
        Data Student
      </h2>
      <p style={{ color: '#a1a1a6', marginTop: 0, marginBottom: '20px', fontSize: '14px' }}>
        Informasi Biodata Mahasiswa
      </p>

      {/* TABEL BIODATA */}
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: '15px',
        color: '#e2e2e3'
      }}>
        <tbody>
          <tr style={{ borderBottom: '1px solid #2e2e32' }}>
            <td style={{ padding: '10px 12px 10px 0', fontWeight: 'bold', width: '130px', color: '#a1a1a6' }}>Nama</td>
            <td style={{ padding: '10px 0' }}>: {props.nama}</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #2e2e32' }}>
            <td style={{ padding: '10px 12px 10px 0', fontWeight: 'bold', color: '#a1a1a6' }}>NIM</td>
            <td style={{ padding: '10px 0' }}>: {props.nim}</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #2e2e32' }}>
            <td style={{ padding: '10px 12px 10px 0', fontWeight: 'bold', color: '#a1a1a6' }}>Fakultas</td>
            <td style={{ padding: '10px 0' }}>: {props.fakultas}</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #2e2e32' }}>
            <td style={{ padding: '10px 12px 10px 0', fontWeight: 'bold', color: '#a1a1a6' }}>Program Studi</td>
            <td style={{ padding: '10px 0' }}>: {props.programStudi}</td>
          </tr>
          <tr>
            <td style={{ padding: '10px 12px 10px 0', fontWeight: 'bold', color: '#a1a1a6' }}>Semester</td>
            <td style={{ padding: '10px 0' }}>: {props.semester}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

// 3. KOMPONEN UTAMA (APP)
function App() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* MEMANGGIL KOMPONEN DENGAN PROPS */}
      <StudentCard
        nama="Miojo Fico"
        nim="10501410110"
        fakultas="Ilmu Komputer"
        programStudi="Sistem Informasi"
        semester={5}
      />
    </main>
  )
}

export default App