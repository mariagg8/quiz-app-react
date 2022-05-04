import { useState } from 'react';
import './style.css';
import Bookmark from '../Bookmark';
import Button from '../Button';

export default function Card({ question }) {
  const [bookmarked, setBookmarked] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <section className="card">
      <Bookmark
        checked={bookmarked}
        onToggle={() => setBookmarked(!bookmarked)}
      />
      <h3>Question:</h3>
      <p>{question.question}</p>
      <Button onClick={() => setShowAnswer(!showAnswer)}>
        {showAnswer ? 'Hide' : 'Show'} answer
      </Button>

      <p style={{ display: showAnswer ? 'block' : 'none' }}>
        {question.answer}
      </p>

      <ul className="tags">
        <li className="tag1">tag</li>
        <li className="tag2">tag</li>
        <li className="tag3">tag</li>
        <li className="tag4">tag</li>
      </ul>
    </section>
  );
}
