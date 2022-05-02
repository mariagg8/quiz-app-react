import './style.css';

export default function Bookmark({ checked, onToggle }) {
  return (
    <div
      data-js="bookmark-toggle"
      className={checked ? 'bookmark-icon-active' : 'bookmark-icon'}
      onClick={onToggle}
    ></div>
  );
}
