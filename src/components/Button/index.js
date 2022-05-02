import './style.css';

export default function Button({ children, onClick }) {
  return (
    <button className="btn__answer" onClick={onClick}>
      {children}
    </button>
  );
}
