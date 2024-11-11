import Renos from "../Renos.js";

function Header() {
  return Renos.createElement(
    "header",
    null,
    Renos.createElement("h1", null, "Counter - HTML + JS"),
    Renos.createElement(
      "p",
      null,
      "파일 경로: ",
      Renos.createElement(
        "span",
        { id: "filepath" },
        `ch${document.URL.split("/ch")[1]}index.html`
      )
    )
  );
}

export default Header;
