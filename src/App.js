import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Moon's Dictionary 📚</header>
        <Dictionary />
        <footer>
          This project is coded by Munia Sircar🌹 ~{" "}
          <a
            href="https://github.com/Munia-Sircar/dictionary-app"
            className="netlify-link"
            target="_blank"
            rel="noreferrer">
            GitHub
          </a>{" "}
          & {""}
          <a
            href="https://moon-dictionary-app.netlify.app/"
            className="netlify-link"
            target="_blank"
            rel="noreferrer">
            Netlify
          </a>{" "}
          ~
        </footer>
      </div>
    </div>
  );
}
