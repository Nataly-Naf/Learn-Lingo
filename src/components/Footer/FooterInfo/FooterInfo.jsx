import PropTypes from 'prop-types';
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

FooterInfo.propTypes = {
  numbers: PropTypes.number.isRequired,
  descr: PropTypes.string.isRequired,
};
