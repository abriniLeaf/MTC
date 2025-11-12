declare module 'react-scroll' {
  export interface LinkProps {
    to: string;
    smooth?: boolean;
    duration?: number;
    spy?: boolean;
    offset?: number;
    className?: string;
    activeClass?: string;
    onClick?: () => void;
    children?: React.ReactNode;
  }

  export const Link: React.FC<LinkProps>;
}
