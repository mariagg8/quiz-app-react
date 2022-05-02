import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div>
      <header>
        <h1>Quizz App</h1>
      </header>
      <main className="main-content">
        <Card />
        <Card />
        <Card />
      </main>
      <footer>
        <nav className="main-nav"></nav>
      </footer>
    </div>
  );
}

export default App;
