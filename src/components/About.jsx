// Renders blog information including logo and description
// Connected to: App component (parent)
// Props: image (URL for blog logo), about [blog description text]

function About({ image = 'https://via.placeholder.com/215', about }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
