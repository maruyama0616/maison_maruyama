import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 tracking-tight">
            MARUYAMA
          </h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-4 font-light">
            Cool Life, Better Work.
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            成長は、日々の最適化から。<br />
            クールで洗練されたライフスタイル、自己成長、効率的な生き方の最適化を発信します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog">
              <Button size="lg">ブログを読む</Button>
            </Link>
            <Link href="/about">
              <Button variant="outline" size="lg">プロフィール</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                About Me
              </h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  Amazon Logisticsで物流管理に従事する傍ら、クリエイティブ活動とブログ執筆を通じて、
                  効率的で洗練されたライフスタイルの追求と情報発信を行っています。
                </p>
                <p>
                  TOEIC 900点、HSK資格保持者として、グローバルな視点を持ちながら、
                  One Ops Dashboardの開発やConnections改善施策など、実践的なプロジェクト経験を積んでいます。
                </p>
                <p>
                  Coffee Penguinプロジェクトをはじめとするクリエイティブ活動を通じて、
                  仕事とライフスタイルの最適化を追求し続けています。
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden bg-gray-100">
              {/* プロフィール画像またはプレースホルダー */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gray-300 flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            Achievements & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">物流管理 & プロジェクト</h3>
              <p className="text-gray-600">
                Amazon Logisticsでの豊富な経験。One Ops Dashboard開発、
                Connections改善施策など実践的プロジェクト実績。
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">グローバルスキル</h3>
              <p className="text-gray-600">
                TOEIC 900点以上、HSK資格保持。
                国際的な視点を持ったコミュニケーションと業務遂行能力。
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">クリエイティブ活動</h3>
              <p className="text-gray-600">
                Coffee Penguinプロジェクトをはじめとするクリエイティブな制作活動。
                デザインと機能性を両立したアウトプット。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest Blog Posts
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              ライフハック、キャリア、クリエイティブ活動など、
              日々の学びと気づきを共有しています。
            </p>
          </div>
          <div className="text-center">
            <Link href="/blog">
              <Button size="lg">すべての記事を見る</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            プロジェクトのご相談、コラボレーション、
            または単純にお話ししたい方、お気軽にご連絡ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg">お問い合わせ</Button>
            </Link>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">X (Twitter)</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
