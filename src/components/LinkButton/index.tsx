import LinkButton from './LinkButton';

export interface LinkButtonProps {
  to: string;
  children: React.ReactNode;
  variant?: 'default' | 'text' | 'circle' | 'transparent';
}

export default LinkButton;
