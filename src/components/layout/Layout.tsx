import NewHeader from './NewHeader';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--page-background)' }}>
      <NewHeader />
      <main className="w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;