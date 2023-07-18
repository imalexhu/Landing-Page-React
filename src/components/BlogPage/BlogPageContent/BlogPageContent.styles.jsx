import styled from "styled-components";

export const BlogPageContentContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 13px;
`;

export const BlogText = styled.p`
    font-size: 17px;
    line-height: 25px;
    font-family: SuisseIntl,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-weight: initial;
    font-variant-numeric: proportional-nums;

    width: 100%;
    text-align: left;
`;

export const ImageSection = styled.img`    
    width: 95%;
    height:auto;
    margin: 10px;
    border: 5px solid black;
    background-color: black;
`;