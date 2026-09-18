import StudentComponent from "./components/StudentComponent";
import PalindromeCounter from "./components/PalindromeCounter";

function App() {
  return (
    <div>
      {/* Komponen Palindrome Counter */}
      <PalindromeCounter />

      <hr style={{ margin: '40px 0' }} />

      {/* Komponen Student dari tugas sebelumnya tetap aman tersimpan */}
      <h1>Data Student</h1>
      <StudentComponent name="Miojo Fico" nim="453217328" prodi="Sistem Informasi" semester={5} />
    </div>
  );
}

export default App;