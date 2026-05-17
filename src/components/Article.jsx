// Renders individual article with title, date, and preview text
// Connected to: ArticleList component (parent)

function Article({ title, date = 'January 1, 2023', preview }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
