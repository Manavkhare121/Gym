import React from 'react';
import { blogData } from '../data';
import { BlogCard } from './BlogCard';
import '../styles/blog.css';

export const BlogSection = () => {
  return (
    <section id="blog" className="blog-section">
      <div className="container">
        {/* Section Header */}
        <div className="blog-header-wrap">
          <h2 className="section-title-large">
            {blogData.sectionTitleParts.join(' ')}
          </h2>
          <a href="#blog" className="btn-pill btn-pill-lime">
            <span>{blogData.buttonText}</span>
            <span className="btn-arrow-circle" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </a>
        </div>

        {/* Blog Grid */}
        <div className="blog-grid">
          {blogData.articles.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};
