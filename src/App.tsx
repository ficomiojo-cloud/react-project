import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

// 1. KOMPONEN BIODATA (STUDENTCARD)
interface StudentProps {
  nama: string
  nim: string
  fakultas: string
  programStudi: string
  semester: number
}

function StudentCard(props: StudentProps) {
  return (
    <>
      <svg className="icon" role="presentation" aria-hidden="true">
        <use href="/icons.svg#social-icon"></use>
      </svg>
      <h2>Biodata Saya</h2>
      <p>Informasi Biodata Saya</p>
      
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        fontSize: '14px',
        color: '#e2e2e3',
        marginTop: '16px'
      }}>
        <tbody>
          <tr style={{ borderBottom: '1px solid #2e2e32' }}>
            <td style={{ padding: '8px 12px 8px 0', fontWeight: 'bold', width: '130px', color: '#a1a1a6' }}>Nama</td>
            <td style={{ padding: '8px 0' }}>: {props.nama}</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #2e2e32' }}>
            <td style={{ padding: '8px 12px 8px 0', fontWeight: 'bold', color: '#a1a1a6' }}>NIM</td>
            <td style={{ padding: '8px 0' }}>: {props.nim}</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #2e2e32' }}>
            <td style={{ padding: '8px 12px 8px 0', fontWeight: 'bold', color: '#a1a1a6' }}>Fakultas</td>
            <td style={{ padding: '8px 0' }}>: {props.fakultas}</td>
          </tr>
          <tr style={{ borderBottom: '1px solid #2e2e32' }}>
            <td style={{ padding: '8px 12px 8px 0', fontWeight: 'bold', color: '#a1a1a6' }}>Program Studi</td>
            <td style={{ padding: '8px 0' }}>: {props.programStudi}</td>
          </tr>
          <tr>
            <td style={{ padding: '8px 12px 8px 0', fontWeight: 'bold', color: '#a1a1a6' }}>Semester</td>
            <td style={{ padding: '8px 0' }}>: {props.semester}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Mulai Project</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        {/* KOTAK 1: DOKUMEN SAYA */}
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Dokumen Saya</h2>
          <p>Dokumen saya dibawah ini</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>

        {/* KOTAK 2: INI Sosmed SAYA */}
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Sosial Media</h2>
          <p>Ini Sosmed Saya</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://discord.gg/pUQWcA5nM/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#instagram-icon"></use>
                </svg>
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* KOTAK 3: BIODATA STUDENT */}
        <div id="student" style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.12)', paddingLeft: '24px' }}>
          <StudentCard
            nama="Miojo Fico"
            nim="105012410110"
            fakultas="Ilmu Komputer"
            programStudi="Sistem Informasi"
            semester={5}
          />
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App