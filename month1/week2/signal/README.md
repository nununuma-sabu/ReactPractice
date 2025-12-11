# 🚦 信号機アプリ (Traffic Light App)

ReactとTypeScriptを使用した、シンプルな信号機シミュレーションアプリです。
ボタンをクリックすることで、信号の色を「青 → 黄 → 赤」の順序で循環させることができます。

## ✨ 特徴

* **状態管理**: `useState` フックを使用して信号の現在の色を管理しています。
* **型の安全性**: TypeScriptの `Union Type` を使用し、意図しない色（文字列）が入らないように設計されています。
* **動的なスタイル**: 現在の状態（State）に応じて、文字色や表示テキストが動的に変化します。

## 🛠 使用技術

* React
* TypeScript
* CSS (インラインスタイル)

## 🚀 実行方法

このコードは一般的な React プロジェクト（Vite や Create React App など）で動作します。

1.  **プロジェクトの作成** (Viteを使用する場合)
    ```bash
    npm create vite@latest traffic-light-app -- --template react-ts
    cd traffic-light-app
    npm install
    ```

2.  **コードの反映**
    `src/App.tsx` の内容を、このリポジトリのコードに書き換えてください。

3.  **開発サーバーの起動**
    ```bash
    npm run dev
    ```

## 📝 ロジックの概要

信号の切り替えロジックは `switch` 文で実装されており、以下の順序で色が変化します。

1.  🔵 **Blue** (青)
2.  🟡 **Yellow** (黄)
3.  🔴 **Red** (赤)
4.  (最初に戻る)

---
