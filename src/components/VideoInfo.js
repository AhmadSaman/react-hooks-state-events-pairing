import React from "react";

function VideoInfo(props) {
	return (
		<div className="video-info">
			<iframe
				width="919"
				height="525"
				src={props.url}
				frameBorder="0"
				allowFullScreen
				title="Thinking in React"
			/>
			<h1>{props.title}</h1>
			<p>
				{props.views} Views | Uploaded {props.date}
			</p>
		</div>
	);
}

export default VideoInfo;
