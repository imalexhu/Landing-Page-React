import React from "react";
import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./Footer.elements";

const Footer = ({ lightBg }) => {
  const date = new Date();

  return (
    <FooterContainer lightBg={lightBg}>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems lightBg={lightBg}>
            <FooterLinkTitle>Blogs</FooterLinkTitle>
            <FooterLink lightBg={lightBg} to="/blog/reasons">
              Why Coupons Are Overated
            </FooterLink>
            <FooterLink lightBg={lightBg} to="/blog/instructions">
              How to use Discountly
            </FooterLink>
          </FooterLinkItems>
          <FooterLinkItems lightBg={lightBg}>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink
              lightBg={lightBg}
              to={{
                pathname: "https://www.m.me/100094050942047",
              }}
              target="_blank"
            >
              Contact
            </FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems lightBg={lightBg}>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink
              lightBg={lightBg}
              to={{
                pathname: "https://www.instagram.com/discountly_/",
              }}
              target="_blank"
            >
              Instagram
            </FooterLink>
            <FooterLink
              lightBg={lightBg}
              to={{
                pathname:
                  "https://www.facebook.com/profile.php?id=100094050942047",
              }}
              target="_blank"
            >
              Facebook
            </FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia lightBg={lightBg}>
        <SocialMediaWrap lightBg={lightBg}>
          <WebsiteRights lightBg={lightBg}>
            Discountly © {date.getFullYear()}{" "}
          </WebsiteRights>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
