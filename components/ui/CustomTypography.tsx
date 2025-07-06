import type React from "react";
import { Typography, type TypographyProps } from "@mui/material";
import { styled } from "@mui/material/styles";

// Define custom variant types
export type CustomVariant =
  | "title"
  | "summary"
  | "mediumTitle"
  | "smallTitle"
  | "subTitle";

// Define color variants
export type ColorVariant =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "warning"
  | "info"
  | "textPrimary"
  | "textSecondary";

// Define weight variants
export type WeightVariant =
  | "light"
  | "regular"
  | "medium"
  | "semibold"
  | "bold";

// Styled Typography component with custom variants
const StyledTypography = styled(Typography)<{
  customvariant?: CustomVariant;
  colorvariant?: ColorVariant;
  weight?: WeightVariant;
}>(({ theme, customvariant, colorvariant, weight }) => {
  // Custom variant styles
  const getVariantStyles = () => {
    switch (customvariant) {
      case "title":
        return {
          fontSize: "1.2rem",
          fontWeight: 700,
          lineHeight: 1.3,
        };
      case "mediumTitle":
        return {
          fontSize: "1rem",
          fontWeight: 600,
          lineHeight: 1.3,
        };
      case "smallTitle":
        return {
          fontSize: "0.9rem",
          fontWeight: 600,
          lineHeight: 1.4,
        };
      case "subTitle":
        return {
          fontSize: "0.8rem",
          fontWeight: 600,
          lineHeight: 1.3,
        };
      case "summary":
        return {
          fontSize: "1rem",
          fontWeight: 400,
          lineHeight: 1.5,
        };
      default:
        return {};
    }
  };

  // Color styles
  const getColorStyles = () => {
    switch (colorvariant) {
      case "primary":
        return { color: theme.palette.primary.main };
      case "secondary":
        return { color: "#666" };
      case "success":
        return { color: theme.palette.success.main };
      case "error":
        return { color: theme.palette.error.main };
      case "warning":
        return { color: theme.palette.warning.main };
      case "info":
        return { color: theme.palette.info.main };
      case "textPrimary":
        return { color: "#333" };
      case "textSecondary":
        return { color: theme.palette.text.secondary };
      default:
        return {};
    }
  };

  // Weight styles
  const getWeightStyles = () => {
    switch (weight) {
      case "light":
        return { fontWeight: 300 };
      case "regular":
        return { fontWeight: 400 };
      case "medium":
        return { fontWeight: 500 };
      case "semibold":
        return { fontWeight: 600 };
      case "bold":
        return { fontWeight: 700 };
      default:
        return {};
    }
  };

  return {
    ...getVariantStyles(),
    ...getColorStyles(),
    ...getWeightStyles(),
  };
});

export interface CustomTypographyProps
  extends Omit<TypographyProps, "variant" | "color"> {
  customvariant?: CustomVariant;
  colorvariant?: ColorVariant;
  weight?: WeightVariant;
  gradient?: boolean;
  truncate?: boolean;
  maxLines?: number | any;
}

const CustomTypography: React.FC<CustomTypographyProps> = ({
  children,
  customvariant,
  colorvariant,
  weight,
  gradient = false,
  truncate = false,
  maxLines,
  sx,
  ...props
}) => {
  // Additional styles for special features
  const additionalStyles = {
    ...(gradient && {
      background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    }),
    ...(truncate && {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap" as const,
    }),
    ...(maxLines && {
      display: "-webkit-box",
      WebkitLineClamp: maxLines,
      WebkitBoxOrient: "vertical" as const,
      overflow: "hidden",
    }),
    ...sx,
  };

  return (
    <StyledTypography
      customvariant={customvariant}
      colorvariant={colorvariant}
      weight={weight}
      sx={additionalStyles}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};

export default CustomTypography;
