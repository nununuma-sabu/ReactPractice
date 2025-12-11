import { useState } from 'react';

// 信号の色を制限するための型定義です
// "blue", "yellow", "red" 以外の文字列が入らないようにします
type SignalColor = "blue" | "yellow" | "red";

function App() {
  // 信号の状態を管理するStateです
  // <SignalColor>で型を指定し、初期値を"blue"に設定しています
  const [color, setColor] = useState<SignalColor>("blue");

  // ボタンが押された時に実行される関数です
  // 現在の色(color)を見て、次の色をセットします
  const handleNextColor = () => {
    switch(color) {
      case "blue":
        setColor("yellow"); // 青なら黄色へ
        break;
      case "yellow":
        setColor("red");    // 黄色なら赤へ
        break;
      default:
        setColor("blue");   // それ以外（赤）なら青へ戻る
        break;
    }
  };

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>信号機アプリ 🚦</h1>
      
      {/* 信号の色を表示するエリア */}
      <div style={{ 
        fontSize: "4rem", 
        fontWeight: "bold",
        margin: "20px",
        // 条件演算子（三項演算子）を使って、Stateに応じた文字色を適用します
        color: color === "blue" ? "blue" : (color === "yellow" ? "#DAA520" : "red")
      }}>
        {/* 論理積演算子(&&)を使って、条件に一致する場合のみテキストを表示します */}
        {color === "blue" && "青"}
        {color === "yellow" && "黄"}
        {color === "red" && "赤"}
      </div>

      {/* 切り替えボタン */}
      <button 
        onClick={handleNextColor} // クリック時に上で定義した関数を呼び出します
        style={{ padding: "10px 20px", fontSize: "1.2rem" }}
      >
        信号を切り替え
      </button>
      
      {/* 現在のStateの値をデバッグ用に表示 */}
      <p>現在のState: {color}</p>
    </div>
  );
}

export default App;
