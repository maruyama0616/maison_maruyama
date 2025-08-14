import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--page-background)' }}>
      <Header />
      <main className="w-full mx-auto" style={{ maxWidth: '100vw', margin: '0 auto' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;