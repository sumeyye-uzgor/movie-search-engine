import Button from './Button';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'default' | 'circle' | 'text' | 'transparent';
  className?: string;
}

export default Button;
