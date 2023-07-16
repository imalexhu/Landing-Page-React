import React from 'react';
import {
    BlogPageContainer,
    HeroImage,
    ContentContainer,
    BlogHeader,
    BlogText,
} from "./BlogPage.styles"
import BlogPageContent from "./BlogPageContent/BlogPageContent"

function BlogPage({
    heroImgUrl,
    heroImgAlt,
    header,
    writtenByText,
    content,
}) {
  return (
    <BlogPageContainer>
        <HeroImage src={heroImgUrl} alt={heroImgAlt} />
        <ContentContainer>
            <BlogHeader>
                {header}
            </BlogHeader>
            <BlogText>
                {writtenByText}
            </BlogText>
            <BlogPageContent content={content} />
        </ContentContainer>
    </BlogPageContainer>
  );
}

export default BlogPage;