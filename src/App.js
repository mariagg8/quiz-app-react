import './App.css';
import Card from './components/Card';
import { QUESTIONS } from './db';

function App() {
  return (
    <div>
      <header>
        <h1>Quizz App</h1>
      </header>
      <main className="main-content">
        {QUESTIONS.map(question => {
          return <Card question={question} />;
        })}
      </main>
      <footer>
        <nav className="main-nav"></nav>
      </footer>
    </div>
  );
}

export default App;
