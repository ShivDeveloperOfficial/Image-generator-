import { ImageStyle, AspectRatio } from './types';

export const STYLE_OPTIONS: ImageStyle[] = Object.values(ImageStyle);

export const ASPECT_RATIO_OPTIONS: AspectRatio[] = [
  { label: "Square (1024x1024)", value: "1:1" },
  { label: "Widescreen (1920x1080)", value: "16:9" },
  { label: "Portrait (1080x1920)", value: "9:16" },
  { label: "Landscape (1024x768)", value: "4:3" },
  { label: "Tall (768x1024)", value: "3:4" },
];
