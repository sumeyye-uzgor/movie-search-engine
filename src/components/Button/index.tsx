import Button from './Button';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'circle' | 'text' | 'transparent';
}

export default Button;
