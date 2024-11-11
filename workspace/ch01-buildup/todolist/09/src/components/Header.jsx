function Header() {
  const filepath = `ch${document.URL.split("/ch")[1]}index.html`;
  return (
    <header>
      <h1>Todo List - React로 UI 구성 :()</h1>
      <p>
        파일 경로: <span id="filepath">{filepath}</span>
      </p>
    </header>
  );
}

export default Header;
