import React from 'react';

function RedditCard({ data }) {
  const { title, selftext_html, url_overridden_by_dest, score } = data;

  return (
    <div className="card h-100 d-flex flex-column shadow-sm" style={{ height: '400px' }}>
      <div
        className="card-body overflow-auto"
        style={{ flex: 1, minHeight: 0 }}
      >
        <h5 className="card-title">{title}</h5>
        {selftext_html ? (
          <div
            className="card-text"
            style={{ maxHeight: '200px', overflowY: 'auto' }}
            dangerouslySetInnerHTML={{ __html: selftext_html }}
          />
        ) : (
          <p className="text-muted">No description available.</p>
        )}
      </div>

      <div className="card-footer bg-white border-0 d-flex flex-column align-items-center">
        <a
          href={url_overridden_by_dest}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mt-2"
        >
          Visit Link
        </a>
        <small className="text-muted mt-2">Score: {score}</small>
      </div>
    </div>
  );
}

export default RedditCard;
