import news_feed from './sample_news_stories.json';
import Header from './components/Header';
import Story from './components/Story';

function App() {
  // Get stories from news feed
  const stories = news_feed.results;
  const storyCardList = stories.map((story, id) => <Story key={`${story.title} - ${id}`} storyTitle={story.title} storyURL={story.link} storyAuthor={story.creator} storyImage={story.image_url} storyDesc={story.description}/>);

  return (
    <div className="App">
      <Header />
      <div className="feed__container">{storyCardList}</div>
    </div>
  );
}

export default App;
