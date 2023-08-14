export default function Anchor({ children, link }) {
  return (
    <a type="button" className="button" href={link}>
      <span>{children}</span>
    </a>
  );
}
