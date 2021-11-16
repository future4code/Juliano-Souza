// Styles
import { FooterContainer, Paragraph, SocialMediaBox, FacebookIcon, TwitterIcon, InstagramIcon } from './style'

export function Footer() {
    return (
        <FooterContainer>
            <Paragraph>Developed by JuSfrei</Paragraph>
            <SocialMediaBox>
                <FacebookIcon/>
                <TwitterIcon/>
                <InstagramIcon/>
            </SocialMediaBox>
        </FooterContainer>
    )
}