import {
  FooterInfoWrapper,
  FooterInfoDescr,
  FooterInfoQuantity,
} from './FooterInfo.styled';

export const FooterInfo = ({ numbers, descr }) => {
  return (
    <FooterInfoWrapper>
      <FooterInfoQuantity>{numbers}</FooterInfoQuantity>
      <FooterInfoDescr>{descr}</FooterInfoDescr>
    </FooterInfoWrapper>
  );
};
