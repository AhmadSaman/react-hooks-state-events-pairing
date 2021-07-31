import React from "react";

function ThumbReact({ thumbUp, thumbDown, onThumbUp, onThumbDown }) {
	return (
		<div className="thumb-react">
			<button onClick={onThumbUp}>{thumbUp} 👍</button>
			<button onClick={onThumbDown}>{thumbDown} 👎</button>
		</div>
	);
}

export default ThumbReact;
