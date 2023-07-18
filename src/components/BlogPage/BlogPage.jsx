import React from 'react';
import {
    BlogPageContainer,
    HeroImage,
    ContentContainer,
    BlogHeader,
    BlogText,
} from "./BlogPage.styles"
import BlogPageContent from "./BlogPageContent/BlogPageContent"
import { Navbar, Footer } from "../../components";

const lightBg = true;

function BlogPage({
    heroImgUrl,
    heroImgAlt,
    header,
    writtenByText,
    content,
}) {
  return (
    <>
    <Navbar lightBg={lightBg}/>
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
    <Footer lightBg={lightBg}/>
    </>
  );
}

export default BlogPage;