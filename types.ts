export enum ImageStyle {
  REALISTIC = "Realistic",
  TWO_D = "2D Animation",
  ANIME = "Anime",
  CYBERPUNK = "Cyberpunk",
  CARTOON = "Cartoon",
  DIGITAL_ART = "Digital Art",
  FANTASY = "Fantasy Art",
  PHOTOGRAPHY = "Photography",
}

export interface AspectRatio {
  label: string;
  value: "1:1" | "16:9" | "9:16" | "4:3" | "3:4";
}
