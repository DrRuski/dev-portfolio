export default function Anchor({ children, link }) {
  return (
    <a className="button button-border-bottom" href={link}>
      {children}
    </a>
  );
}
