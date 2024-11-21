function Header() {
  const filepath = `ch${document.URL.split("/ch")[1]}index.html`;
  return (
    <header>
      <div></div>
      <h1>Todo List - TodoItem 메모이제이션</h1>
      <p>
        파일 경로: <span id="filepath">{filepath}</span>
      </p>
    </header>
  );
}

export default Header;
