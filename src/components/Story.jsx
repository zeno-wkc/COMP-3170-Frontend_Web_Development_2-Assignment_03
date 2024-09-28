export default function story(props){
  const { storyTitle, storyURL, storyAuthor, storyImage, storyDesc } = props;

  function ellipsisStoryDesc(desc) {
   return desc ? desc.split(" ").slice(0, 50).join(" ") + (desc.split(" ").length > 50 ? "..." : "") : "";
  }

  function handleDelete(e){
    if (!e.target.classList.contains("story-delete__btn")) { return; }
    e.currentTarget.remove();
  }

  return(
    <div className="story__container" onClick={handleDelete}>
      <span className="story-delete__btn">x</span>
      <div className="story-header__container">
        <div className="story-img__container">
          <img className="story-img" src={storyImage || "https://placehold.co/600x400?text=News+Story"} alt={storyTitle} />
        </div>
        <div className="story-headline__container">
          <a className="story-link" href={storyURL} target="_Blank" rel="noopener noreferrer"><h1 className="story-title">{storyTitle}</h1></a>
          <span className="story-author">By: {storyAuthor || "Anonymous" }</span>
        </div>
      </div>
      <p className="story-description">{ellipsisStoryDesc(storyDesc)}</p>
    </div>
  );
}