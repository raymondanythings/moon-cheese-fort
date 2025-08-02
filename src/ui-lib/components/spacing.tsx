import { styled } from 'styled-system/jsx';

const Spacing = ({ size }: { size: number }) => {
  return <styled.div flex="none" h={size} />;
};

export default Spacing;
