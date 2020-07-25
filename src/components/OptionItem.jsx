import styled from '@emotion/styled';

import { pastelPink, skyBlue, darkBlue } from '../assets/styles/colors';

const OptionItem = styled.li(({ active }) => ({
  '& button': {
    backgroundColor: active ? pastelPink : 'transparent',
    borderColor: active ? skyBlue : darkBlue,
  },
}));

export default OptionItem;
