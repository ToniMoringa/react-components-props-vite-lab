// Renders a list of Article components
// Connected to: App component (parent) and Article component (child)
// Props: posts (array of blog post objects)

import Article from './Article';

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;
