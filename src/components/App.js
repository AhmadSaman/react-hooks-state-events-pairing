import { useState } from "react";
import video from "../data/video.js";
import Comments from "./Comments.js";
import ThumbReact from "./ThumbReact.js";
import VideoInfo from "./VideoInfo.js";

function App() {
	const [videoObj, setVideoObj] = useState(video);

	function handleThumbUp() {
		setVideoObj((prevVote) => ({
			...prevVote,
			upvotes: prevVote.upvotes + 1,
		}));
	}
	function handleThumpDown() {
		setVideoObj((prevVote) => ({
			...prevVote,
			downvotes: prevVote.downvotes - 1,
		}));
	}

	return (
		<div className="App">
			<VideoInfo
				url={videoObj.embedUrl}
				title={videoObj.title}
				views={videoObj.views}
				date={videoObj.createdAt}
			/>
			<ThumbReact
				thumbUp={videoObj.upvotes}
				thumbDown={videoObj.downvotes}
				onThumbUp={handleThumbUp}
				onThumbDown={handleThumpDown}
			/>
			<Comments comments={videoObj.comments} />
		</div>
	);
}

export default App;
