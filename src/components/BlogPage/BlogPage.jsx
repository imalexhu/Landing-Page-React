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
import ChromeWebStoreImgLink from "../ChromeWebStore/ChromeWebStoreImgLink"

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
                <h2>
                    Download Today
                </h2>
            <ChromeWebStoreImgLink lightBg={true}/>
        </BlogPageContainer>
    <Footer lightBg={lightBg}/>
    </>
  );
}

export default BlogPage;