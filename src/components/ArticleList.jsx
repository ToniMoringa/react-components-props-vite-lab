// Renders a list of Article components
// Connected to: App component (parent) and Article component (child)
// Props: posts (array of blog post objects)

import Article from './Article';

function ArticleList({ posts }) {
  // Map through posts array -> make an Article component for each
  const articleComponents = posts.map((post) => (
    <Article
      key={post.id} // Unique key for React's reconciliation
      title={post.title}
      date={post.date}
      preview={post.preview}
    />
  ));

  return <main>{articleComponents}</main>;
}

export default ArticleList;
