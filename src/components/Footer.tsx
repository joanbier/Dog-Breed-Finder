export default function Footer() {
  const date: number = new Date().getFullYear();
  return (
    <footer>
      <p>Coded with &#128154; to &#128054; by Joanna Biernat &copy; {date}</p>
    </footer>
  );
}
