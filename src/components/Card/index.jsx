import { useState } from 'react';
import './style.css';
import Bookmark from '../Bookmark';
import Button from '../Button';

export default function Card() {
  const [bookmarked, setBookmarked] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <section data-js="card" className="card">
      <Bookmark
        checked={bookmarked}
        onToggle={() => setBookmarked(!bookmarked)}
      />

      <h3>Question:</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing ?</p>
      <Button onClick={() => setShowAnswer(!showAnswer)}>
        {showAnswer ? 'Hide' : 'Show'} answer
      </Button>

      <p style={{ display: showAnswer ? 'block' : 'none' }}>
        The answer is Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptates esse, eum temporibus, ducimus ipsam commodi repudiandae alias
        dolor nisi corrupti accusamus deleniti magni atque delectus quam,
        cupiditate ipsa vero sed!
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
