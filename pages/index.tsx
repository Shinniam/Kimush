import React from "react";

export default function Home() {
  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Prox: 高速検索プロキシ</h1>
      <form method="GET" action="/api/search">
        <input
          type="text"
          name="q"
          placeholder="検索ワードを入力..."
          style={{ width: "70%", padding: "0.6rem", fontSize: "1rem" }}
        />
        <button type="submit" style={{ padding: "0.6rem" }}>検索</button>
      </form>
    </div>
  );
}
