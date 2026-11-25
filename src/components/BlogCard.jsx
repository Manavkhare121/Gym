import React from 'react';

export const BlogCard = ({ article }) => {
  return (
    <article className="blog-card">
      <div className="blog-img-wrapper">
        <img
          src={article.image}
          alt={article.title}
          className="blog-img"
          loading="lazy"
        />
      </div>
      <div className="blog-content">
        <h3 className="blog-title">{article.title}</h3>
        <p className="blog-desc">{article.description}</p>
        <a href={article.link || '#blog'} className="blog-link">
          <span>Learn More</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </article>
  );
};
