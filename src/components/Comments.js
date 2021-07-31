import React, { useState } from "react";

function Comments({ comments }) {
	const [hideStatus, sethideStatus] = useState(true);

	function handleHide() {
		sethideStatus((prevStatus) => !prevStatus);
	}
	const displayComments = comments.map((comment) => (
		<div key={comment.id}>
			<h2>{comment.user}</h2>
			<p>{comment.comment}</p>
		</div>
	));

	return (
		<div className="comments">
			<button onClick={handleHide}>
				{hideStatus ? "Hide Comments" : "Show Comments"}
			</button>
			<hr />
			{hideStatus && (
				<div>
					<h1>Comments {comments.length}</h1>
					{displayComments}
				</div>
			)}
		</div>
	);
}

export default Comments;
