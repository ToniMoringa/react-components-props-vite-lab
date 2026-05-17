// Renders the blog header with the blog name
// Connected to: App component (parent)

function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;
