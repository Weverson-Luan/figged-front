/**
 * IMPORTS
 */
type ITextProps = {
  id?: string | undefined;
  color?: string;
  size?: number;
  width?: number;
  text: string;
  align?: 'center' | 'left' | 'right';
  marginBottom?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  margin?: number;
  textDecoration?: 'line-through' | 'underline' | 'none';
  weight?: '400' | '500' | '600' | '700';
  ellipsis?: boolean;
  fontFamily?: 'Inter';
  letterSpacing?: number;
  letterHeight?: number;
  zIndex?: number;
}

/**
 * EXPORT
 */
export type { ITextProps };