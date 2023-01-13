import Post from "../post/Post";
import "./feed.css";
import Share from "../share/Share";
export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {/* {dummyData.map((p) => (
          <Post key={p.id} post={p} />
        ))} */}
      </div>
    </div>
  );
}
