import React from 'react';
import {
    BlogPageContentContainer,
    BlogText,
    BlogHeader,
    ImageSection,
} from "./BlogPageContent.styles"

function BlogPageContent({
    content,
}) {
  return (
    <BlogPageContentContainer>
        {content.map((section) => {
            if (section.type === "TEXT") {
                return (
                    <>
                        {section.header && <BlogHeader> {section.header}</BlogHeader>}
                        <BlogText>
                            {section.text}
                        </BlogText>
                    </>
                )
            }
            else if (section.type === "IMAGE") {
                return <ImageSection src={section.imgUrl} alt={section.imgAlt} width={section.width}  />
            }
            else {
                return (
                    <h1>Error section type not supported {section.type}</h1>
                )
            }
        })}
    </BlogPageContentContainer>
  );
}

export default BlogPageContent;