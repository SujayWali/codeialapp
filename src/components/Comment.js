import React from 'react';

function Comment({ comment }) {
  return (
    <div className="post-comment-item">
      <div className="post-comment-header">
        <span className="post-comment-author">{comment.user.name}</span>
        <span className="post-comment-time">a minute ago</span>
        <span className="post-comment-likes">{comment.likes.length} likes</span>
        <div className="post-actions">
          <div className="post-like">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
              alt="likes-icon"
            />
          </div>
        </div>
      </div>

      <div className="post-comment-content">{comment.content}</div>
    </div>
  );
}

export default Comment;
