import styled from "styled-components";

export const BlogPageContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroImage = styled.img`
    padding-right: 0;
    border: 0;
    
    vertical-align: middle;
    display: inline-block;
    width: min(100%, 1400px);
    height: 600px;
    object-fit: cover;

    background-color: black;
`;

export const ContentContainer = styled.div`
    margin-top: -170px;
    padding: min(100px, 4vw);
    width: min(100%, 900px);
    background-color: white;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const BlogHeader = styled.h1`
    font-size: 50px;
    line-height: 56px;
    font-family: Pangea,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    font-weight: initial;
    font-variant-numeric: proportional-nums;

    padding: 0px 20px;
    width: 100%;
    text-align: left;
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