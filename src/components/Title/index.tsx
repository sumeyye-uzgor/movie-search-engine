import Title from './Title';

export interface TitleProps {
  text: string;
  variant?: 'pageTitle' | 'subTitle';
  className?: string;
}

export default Title;
