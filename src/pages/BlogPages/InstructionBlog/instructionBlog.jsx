import React from 'react';
import BlogPage from '../../../components/BlogPage/BlogPage';
import { instructionBlogPageData } from "./Data";

function InstructionBlogPage() {
  return <BlogPage 
        {...instructionBlogPageData}
    />;
}

export default InstructionBlogPage;