import AppTheme from "../styles/config.module.scss";

export type FontType =
  | "h1x"
  | "h1"
  | "h2"
  | "h3"
  | "h3x"
  | "regular"
  | "xsx"
  | "xs";

export type IFontFamily = "light" | "regular" | "medium" | "bold" | "ultaLight";

export const FontSize: Record<FontType, number> = {
  h1x: 30,
  h1: 24,
  h2: 20,
  h3x: 18,
  h3: 16,
  regular: 15,
  xsx: 13,
  xs: 11,
};

export const AppFonts = {
  regular: AppTheme.appFontsRegular,
  light: AppTheme.appFontsLight,
  ultaLight: AppTheme.appFontsUltaLight,
  bold: AppTheme.appFontsBold,
  medium: AppTheme.appFontsMedium,
};

export const DefaultFontLight = AppFonts.ultaLight;
export const DefaultFontBold = AppFonts.regular;
export const DefaultFont = AppFonts.light;

export const InputHeight: number = 74;
export const InputFontSize: number = 16;
export const DefaultMargin: number = 25;
export const DefaultThumbnailSize: number = 105;
export const DefaultBorderRadius: number = 6;
export const ICON_SIZE: number = 30;
export const DefaultInputFontSize: number = FontSize.h3;
export const DescriptionLineHeight: number = 25;
export const SubTextLineHeight: number = 19;
export const DoubleMargin: number = DefaultMargin * 2;

export const FontFamily: Record<IFontFamily, string> = {
  light: AppFonts.light,
  regular: AppFonts.regular,
  medium: AppFonts.medium,
  ultaLight: AppFonts.ultaLight,
  bold: AppFonts.bold,
};

export enum IconFamily {
  Ionicon = "ionicon",
  Material = "material",
}

export const DefaultPrimaryColor: string = AppTheme["color-primary"];
export const TrasparentColor: string = "rgba(255, 0, 0, 0)";

export const DefaultOpacity: number = 0.65;

export const SecondaryOpacity: number = 0.63;

export const DefaultIconFamily: IconFamily = IconFamily.Ionicon;
export const DefaultLoaderHeight: number = 100;

export const DefaultLogoHeight: number = 40;
export const DefaultLogoWidth: number = 68;
export const DefaultAvatarSize: number = 35;

export const PageBorderRadius: number = DefaultBorderRadius * 4;

export const Colors = AppTheme;
