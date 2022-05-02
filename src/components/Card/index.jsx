import './style.css';

export default function Card() {
  return (
    <section data-js="card" className="card">
      <div data-js="bookmark-toggle" className="bookmark-icon"></div>
      <h3>Question</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing ?</p>

      <button className="btn__answer">Show Answer</button>
      <p className="hide">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        esse, eum temporibus, ducimus ipsam commodi repudiandae alias dolor nisi
        corrupti accusamus deleniti magni atque delectus quam, cupiditate ipsa
        vero sed!
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
