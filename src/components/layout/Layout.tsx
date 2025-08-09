import Header from './Header';
import Footer from './Footer';
import NotificationBar from '../ui/NotificationBar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--page-background)' }}>
      <NotificationBar 
        message="新コレクション「Silent Poetry」プレビュー開始 – 限定アクセス申込受付中"
        isVisible={true}
      />
      <Header />
      <main className="w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;