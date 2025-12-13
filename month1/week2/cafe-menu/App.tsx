import { useState } from 'react';

// 1. 型定義
type Category = "coffee" | "tea" | "food";

function App() {
  // 2. State定義：初期値はコーヒー
  const [category, setCategory] = useState<Category>("coffee");

  return (
    <div style={{ padding: "50px", textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>☕ カフェメニュー</h1>
      
      {/* タブボタンエリア */}
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
        
        {/* Coffeeボタン */}
        <button 
          onClick={() => setCategory("coffee")}
          style={{ 
            padding: "10px 20px",
            border: "1px solid #333",
            cursor: "pointer",
            // ★条件付きスタイル： category が "coffee" なら黒背景、違えば白背景
            backgroundColor: category === "coffee" ? "#333" : "#fff",
            color: category === "coffee" ? "#fff" : "#333",
          }}
        >
          コーヒー
        </button>

        {/* Teaボタン */}
        <button 
          onClick={() => setCategory("tea")}
          style={{ 
            padding: "10px 20px",
            border: "1px solid #333",
            cursor: "pointer",
            // ★Teaが選ばれている時だけ黒くなる
            backgroundColor: category === "tea" ? "#333" : "#fff",
            color: category === "tea" ? "#fff" : "#333",
          }}
        >
          紅茶
        </button>

        {/* Foodボタン */}
        <button 
          onClick={() => setCategory("food")}
          style={{ 
            padding: "10px 20px",
            border: "1px solid #333",
            cursor: "pointer",
            // ★Foodが選ばれている時だけ黒くなる
            backgroundColor: category === "food" ? "#333" : "#fff",
            color: category === "food" ? "#fff" : "#333",
          }}
        >
          フード
        </button>
      </div>

      {/* コンテンツ表示エリア */}
      <div style={{ border: "1px solid #ccc", padding: "30px", borderRadius: "8px" }}>
        
        {category === "coffee" && (
          <div>
            <h3>☕ COFFEE MENU</h3>
            <p>・ブレンドコーヒー 400円</p>
            <p>・カフェラテ 450円</p>
          </div>
        )}

        {category === "tea" && (
          <div>
            <h3>🫖 TEA MENU</h3>
            <p>・アールグレイ 400円</p>
            <p>・ロイヤルミルクティー 500円</p>
          </div>
        )}

        {category === "food" && (
          <div>
            <h3>🍰 FOOD MENU</h3>
            <p>・チーズケーキ 450円</p>
            <p>・ホットサンド 500円</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
