import { globalStyle, globalKeyframes, style, keyframes } from "@vanilla-extract/css"
import { theme } from "./theme.css"

const bgAnimation = keyframes({ '0%': { backgroundPosition: '0%' }, '100%': { backgroundPosition: '100%' }, });

globalStyle("body", {
  margin: 0,
  fontFamily: theme.fonts.text,
  color: theme.colors.text,
  backgroundImage: "linear-gradient(-255deg, #e8dac0 0%, #e8dac0 56%, #768d70 100%)",
  backgroundSize: "400%",
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  animation: `${bgAnimation} 6s infinite alternate`,
})

globalStyle("*", {
  boxSizing: "border-box",
})

globalKeyframes("zoomInUp", {
  "0%": {
    transform: "scale(0.95) translateY(10px) translateX(-50%)",
    visibility: "hidden",
    opacity: 0,
  },
  "100%": {
    opacity: 1,
    transform: "scale(1), translateY(0) translateX(-50%)",
    visibility: "visible",
  },
})

globalKeyframes("zoomOutDown", {
  "0%": {
    transform: "scale(1) translateY(0) translateX(-50%)",
    opacity: 1,
  },
  "100%": {
    opacity: 0,
    transform: "scale(0.95) translateY(10px) translateX(-50%)",
    visibility: "hidden",
  },
})

globalKeyframes("fadeIn", {
  "0%": {
    visibility: "hidden",
    opacity: 0,
  },
  "100%": {
    opacity: 1,
    visibility: "visible",
  },
})

globalKeyframes("fadeOut", {
  "0%": {
    opacity: 1,
  },
  "100%": {
    opacity: 0,
    visibility: "hidden",
  },
})

export const blogLinkStyles = style({ position: 'relative', width: `100%`, height: `100%`, display: `block`, });
