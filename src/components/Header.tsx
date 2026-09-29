import { HeaderProps } from '../props/LostFoundProps';

const Header = ({ activeView, onNavigate }: HeaderProps) => {
  return (
    <header>
      <div className="header-content">
        <h1>Campus Lost &amp; Found</h1>
        <nav className="header-nav" aria-label="Navigasi utama">
          {/* onClick berpindah tampilan melalui callback props. */}
          <button
            type="button"
            className={activeView === 'list' ? 'nav-button nav-button-active' : 'nav-button'}
            aria-current={activeView === 'list' ? 'page' : undefined}
            onClick={() => onNavigate('list')}
          >
            Daftar barang
          </button>
          <button
            type="button"
            className={activeView === 'form' ? 'nav-button nav-button-active' : 'nav-button'}
            aria-current={activeView === 'form' ? 'page' : undefined}
            onClick={() => onNavigate('form')}
          >
            Buat laporan
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;