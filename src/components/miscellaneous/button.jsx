export default function Button({ children, onClick }) {
  return (
    <button className="button button-border-bottom" onClick={onClick}>
      {children}
    </button>
  );
}
