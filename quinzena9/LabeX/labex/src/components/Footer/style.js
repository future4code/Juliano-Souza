import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export const FooterContainer = styled.div`
    grid-area: Footer;
    width: 100%;
    border-top: 1.25px solid #464646;
    display: flex;
    justify-content: space-between;
    padding: 0 80px;
    align-items: center;
`
export const Paragraph = styled.p`
    font-size: 12px;
    color: #B5B5B5;
    transition: 300ms ease-in-out;
    &:hover {
        color: #FFFFFF;
        cursor: pointer;
    }
`
export const SocialMediaBox = styled.div`
    height: inherit;
    width: 150px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

// Icons

export const FacebookIcon = styled(FaFacebookF)`
    color: #B5B5B5;
    transition: 300ms ease-in-out;
    &:hover {
        color: #FFFFFF;
        cursor: pointer;
    }
`
export const TwitterIcon = styled(FaTwitter)`
    color: #B5B5B5;
    transition: 300ms ease-in-out;
    &:hover {
        color: #FFFFFF;
        cursor: pointer;
    }
`
export const InstagramIcon = styled(FaInstagram)`
    color: #B5B5B5;
    transition: 300ms ease-in-out;
    &:hover {
        color: #FFFFFF;
        cursor: pointer;
    }
`