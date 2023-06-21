/**
 * IMPORTS
 */

// props do styles WrapperHeader
interface WrapperHeaderProps {
  type?: string;
}

// props do componente ImageCustom
interface ImageProps {
  type: "aprovado" | "pedente" | "reprovado";
  onClickDisapproved: () => void;
  onClickApproved: () => void;
}

/**
 * EXPORTS
 */
export type { WrapperHeaderProps, ImageProps };
