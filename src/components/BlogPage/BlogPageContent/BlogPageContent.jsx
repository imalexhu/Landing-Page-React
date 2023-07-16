import React from 'react';
import {
    BlogPageContentContainer,
    BlogText,
    ImageSection,
} from "./BlogPageContent.styles"

function BlogPageContent({
    content,
}) {
  return (
    <BlogPageContentContainer>
        {content.map((section) => {
            if (section.type === "TEXT") {
                return <BlogText>
                    {section.text}
                </BlogText>
            }
            else if (section.type === "IMAGE") {
                return <ImageSection src={section.imgUrl} alt={section.imgAlt} />
            } else {
                return (
                    <h1>Error section type not supported {section.type}</h1>
                )
            }
        })}
    </BlogPageContentContainer>
  );
}

export default BlogPageContent;