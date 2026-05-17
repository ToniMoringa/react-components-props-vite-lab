import Header from './components/Header';
import About from './components/About';
import ArticleList from './components/ArticleList';
import blogData from './data/blog';

function App() {
  return (
    <div className="App">
      {/* Header  - blog name as prop */}
      <Header name={blogData.name} />

      {/* About  - image URL and about text as props */}
      <About image={blogData.image} about={blogData.about} />

      {/* ArticleList  - array of posts as prop */}
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
