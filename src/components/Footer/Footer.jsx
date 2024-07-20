import { FooterWrapper } from './Footer.styled';
import { FooterInfo } from './FooterInfo/FooterInfo';

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterInfo numbers="32,000+" descr="Experienced tutors" />
      <FooterInfo numbers="300,000+" descr="5-star tutor reviews" />
      <FooterInfo numbers="120+" descr="Subjects taught" />
      <FooterInfo numbers="200+" descr="Tutor nationalities" />
    </FooterWrapper>
  );
};
