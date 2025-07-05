"use client";

import type React from "react";
import { forwardRef } from "react";
import { Box, type BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { shouldForwardProp as _shouldForwardProp } from "@mui/system";

// Define aspect ratio
export type AspectRatio =
  | "square"
  | "video"
  | "portrait"
  | "landscape"
  | "ultrawide"
  | "golden"
  | number; // Custom (width/height)

// Define object fit options
export type ObjectFit = "cover" | "contain" | "fill" | "none" | "scale-down";

// Define border radius
export type BorderRadius =
  | "none"
  | "small"
  | "medium"
  | "large"
  | "full"
  | number;

// Props interface extending BoxProps
export interface ImageBoxProps extends Omit<BoxProps, "component"> {
  // Component type
  component?: React.ElementType;

  // Image-specific props
  src?: string;
  alt?: string;
  loading?: "lazy" | "eager";
  aspectRatio?: AspectRatio;
  objectFit?: ObjectFit;
  borderRadius?: BorderRadius;

  clickable?: boolean;
  disabled?: boolean;
  onLoad?: () => void;
  onError?: () => void;
  onClick?: (event: React.MouseEvent) => void;

  // Responsive props
  responsive?: boolean;
  sizes?: string;
}

// Helper function to get aspect ratio value
const getAspectRatioValue = (ratio: AspectRatio): number => {
  switch (ratio) {
    case "square":
      return 1;
    case "video":
      return 16 / 9;
    case "portrait":
      return 3 / 4;
    case "landscape":
      return 4 / 3;
    case "ultrawide":
      return 21 / 9;
    case "golden":
      return 1.618;
    default:
      return typeof ratio === "number" ? ratio : 1;
  }
};

// Helper function to get border radius value
const getBorderRadiusValue = (
  radius: BorderRadius,
  theme: any
): string | number => {
  switch (radius) {
    case "none":
      return 0;
    case "small":
      return theme.shape.borderRadius * 0.5;
    case "medium":
      return theme.shape.borderRadius;
    case "large":
      return theme.shape.borderRadius * 2;
    case "full":
      return "50%";
    default:
      return typeof radius === "number" ? radius : theme.shape.borderRadius;
  }
};

// Utility so we can re-use the same filter set
const customProps = new Set([
  "aspectRatio",
  "objectFit",
  "borderRadius",
  "clickable",
  "disabled",
]);

const shouldForwardProp = (prop: PropertyKey) =>
  _shouldForwardProp(prop) && !customProps.has(prop as string);

const StyledBox = styled(Box, { shouldForwardProp })<{
  aspectRatio?: AspectRatio;
  objectFit?: ObjectFit;
  borderRadius?: BorderRadius;
  clickable?: boolean;
  disabled?: boolean;
}>(
  ({
    theme,
    aspectRatio,
    objectFit = "cover",
    borderRadius = "medium",
    clickable,
    disabled,
  }) => {
    return {
      position: "relative",
      overflow: "hidden",
      borderRadius: getBorderRadiusValue(borderRadius, theme),

      // Aspect ratio handling
      ...(aspectRatio && {
        aspectRatio: getAspectRatioValue(aspectRatio),
      }),

      // Image styling
      "& img, & video": {
        width: "100%",
        height: "100%",
        objectFit,
        display: "block",
      },

      // Clickable styling
      ...(clickable && {
        cursor: disabled ? "not-allowed" : "pointer",
        transition: theme.transitions.create(["transform", "box-shadow"], {
          duration: theme.transitions.duration.short,
        }),
        "&:hover": !disabled && {
          transform: "scale(1.02)",
          boxShadow: theme.shadows[4],
        },
      }),

      // Disabled styling
      ...(disabled && {
        opacity: 0.6,
        pointerEvents: "none",
      }),
    };
  }
);

const ImageBox = forwardRef<HTMLElement, ImageBoxProps>(
  (
    {
      component = "img",
      src,
      alt,
      loading = "lazy",
      aspectRatio,
      objectFit = "cover",
      borderRadius = "medium",
      clickable = false,
      disabled = false,
      onLoad,
      onError,
      onClick,
      responsive = true,
      sizes,
      sx,
      ...props
    },
    ref
  ) => {
    const handleClick = (event: React.MouseEvent) => {
      if (!disabled && onClick) {
        onClick(event);
      }
    };

    // Component-specific props
    const componentProps = {
      ...(component === "img" && {
        src,
        alt,
        loading,
        ...(responsive && sizes && { sizes }),
      }),
      ...(component === "video" && {
        src,
      }),
    };

    return (
      <StyledBox
        ref={ref}
        aspectRatio={aspectRatio}
        objectFit={objectFit}
        borderRadius={borderRadius}
        clickable={clickable}
        disabled={disabled}
        onClick={handleClick}
        sx={{
          ...(responsive && {
            width: "100%",
            maxWidth: "100%",
          }),
          ...sx,
        }}
        {...props}
      >
        {/* Actual image/video content */}
        {(component === "img" || component === "video") && src && (
          <Box
            component={component}
            {...componentProps}
            sx={{
              transition: "opacity 0.3s ease-in-out",
            }}
          />
        )}
      </StyledBox>
    );
  }
);

ImageBox.displayName = "ImageBox";

export default ImageBox;
