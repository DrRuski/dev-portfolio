export default function Anchor({ children, link }) {
  return (
    <a className="button" href={link}>
      <span>{children}</span>
    </a>
  );
}
