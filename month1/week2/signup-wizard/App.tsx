import { useState } from 'react';

type Step = "input" | "confirm" | "done";

function App() {
  const [step, setStep] = useState<Step>("input");
  const [name, setName] = useState<string>("");

  const handleNext = () => {
    if (step === "input") {
      setStep("confirm");
    } else if (step === "confirm") {
      setStep("done");
    }
  };

  const handleBack = () => {
    if (step === "done") {
      setStep("input");
      setName("");
    } else {
      setStep("input");
    }
  };

  return (
    <div style={{ padding: "50px", textAlign: "center", fontFamily: "sans-serif" }}>
      <h1>会員登録ウィザード 🧙‍♂️</h1>
      
      <p>現在のステップ: <strong>{step}</strong></p>

      <div style={{ 
        border: "2px solid #333", 
        padding: "30px", 
        margin: "20px auto", 
        maxWidth: "400px", 
        borderRadius: "8px",
        background: step === "done" ? "#d4edda" : "#fff"
      }}>
        {step === "input" && (
          <div>
            <p>📝 名前を入力してください</p>
            <input 
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ padding: "8px", fontSize: "16px" }}
              placeholder="山田 太郎"
            />
          </div>
        )}

        {step === "confirm" && (
          <div>
            <p>👀 内容を確認してください</p>
            <p><strong>名前: {name}</strong></p>
          </div>
        )}

        {step === "done" && (
          <div>
            <p>🎉 登録ありがとうございます！</p>
            <p>{name} 様</p>
          </div>
        )}
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        
        {step !== "input" && (
          <button onClick={handleBack}>
            {step === "done" ? "最初に戻る" : "戻る"}
          </button>
        )}

        {step !== "done" && (
          <button 
            onClick={handleNext}
            disabled={step === "input" && name === ""}
          >
            次へ ➡
          </button>
        )}

      </div>
    </div>
  );
}

export default App;
