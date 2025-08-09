# MARUYAMA - Official Blog & Website

まるやま公式サイト兼ブログ。「Cool Life, Better Work」をコンセプトに、クールで洗練されたライフスタイル、自己成長、効率的な生き方の最適化を発信するWebサイトです。

## 技術スタック

- **Frontend**: Next.js 15 (App Router) + TypeScript
- **Styling**: Tailwind CSS v4
- **CMS**: Sanity (Headless CMS)
- **Hosting**: Vercel
- **Analytics**: Google Analytics 4

## 主な機能

- ミニマル & モダンなデザイン
- レスポンシブ対応
- ブログ機能（カテゴリー・タグ対応）
- SEO最適化
- 高速な静的サイト生成
- Sanity CMSによるコンテンツ管理

## 開発環境のセットアップ

### 1. リポジトリのクローン

```bash
git clone [repository-url]
cd maruyama-blog
```

### 2. 依存関係のインストール

```bash
npm install
```

### 3. 環境変数の設定

`.env.local` ファイルを作成し、以下の環境変数を設定してください：

```bash
# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here

# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id_here
```

### 4. 開発サーバーの起動

```bash
npm run dev
```

http://localhost:3000 でサイトが表示されます。

## ビルド & デプロイ

### ローカルビルド

```bash
npm run build
npm run start
```

### Vercelでのデプロイ

1. GitHubリポジトリをVercelに接続
2. 環境変数を設定
3. 自動デプロイが開始されます

## プロジェクト構成

```
src/
├── app/                    # Next.js App Router
├── components/
│   ├── layout/            # レイアウトコンポーネント
│   ├── ui/               # UIコンポーネント
│   └── blog/             # ブログ関連コンポーネント
├── lib/                  # ユーティリティ関数
├── types/                # TypeScript型定義
└── styles/               # スタイル関連
```

## 開発フェーズ

- [x] 基本環境セットアップ
- [x] レイアウト & UIコンポーネント作成
- [x] Sanity CMS設定
- [ ] ブログ機能実装
- [ ] SEO最適化
- [ ] パフォーマンス最適化
- [ ] 本番デプロイ

## ライセンス

© 2024 Maruyama. All rights reserved.
