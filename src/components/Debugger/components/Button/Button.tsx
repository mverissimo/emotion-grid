import styled from '@emotion/styled';

import * as styles from './Button.styles';
export interface ButtonProps {
  isActive: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

const Button = styled('div')<ButtonProps>(styles.base);

export default Button;
