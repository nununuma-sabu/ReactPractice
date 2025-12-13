# React Practice: Cafe Menu (Tabs UI)

Reactの `useState` を利用した、**タブ切り替えUI（Tabs Interface）** の練習用アプリケーションです。
ボタンをクリックすることで、カテゴリ（State）が切り替わり、それに連動して「メニュー内容」と「ボタンのスタイル」が動的に変化します。

## 🚀 学んだこと (Key Concepts)

このプロジェクトでは、以下のReact/TypeScriptの重要概念を実装しました。

1.  **Stateによる状態管理**
    * 現在のカテゴリ（`coffee`, `tea`, `food`）をStateで保持し、UI全体を制御。
2.  **条件付きレンダリング (Conditional Rendering)**
    * `&&` 演算子を使用し、選択されたカテゴリに対応するコンテンツのみを表示。
3.  **動的なスタイル変更 (Dynamic Styling)**
    * 「現在選択されているボタン」を視覚的に分かりやすくするため、Stateの値に応じてCSS（背景色・文字色）を動的に切り替え。
4.  **TypeScriptの型安全性 (Union Types)**
    * `type Category = "coffee" | "tea" | "food";` と定義することで、無効な文字列の混入を防ぐ堅牢な設計。

## 🛠️ 技術スタック (Tech Stack)

* **Framework:** React
* **Language:** TypeScript
* **Build Tool:** Vite

## 📂 コードのポイント (Code Highlights)

### 1. 型定義による安全性の確保
文字列を直接扱うのではなく、Union Typeを定義して入力ミス（Typos）を防いでいます。

```tsx
type Category = "coffee" | "tea" | "food";
const [category, setCategory] = useState<Category>("coffee");
