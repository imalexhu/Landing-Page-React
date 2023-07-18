import React from 'react';
import BlogPage from '../../../components/BlogPage/BlogPage';
import { ReasonBlogData } from "./Data";

function ReasonBlogPage() {
  return <BlogPage 
        {...ReasonBlogData}
    />;
}

export default ReasonBlogPage;