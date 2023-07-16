import React from 'react';
import BlogPage from '../../../components/BlogPage/BlogPage';
import { testBlogPageData } from "./Data";

function TestBlogPage() {
  return <BlogPage 
        {...testBlogPageData}
    />;
}

export default TestBlogPage;