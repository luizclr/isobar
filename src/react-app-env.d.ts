declare module "*.png";
declare module "*.gif";

declare namespace NodeJS {
  export interface ProcessEnv {
    BASE_URL: string;
    BAND_API_URL: string;
  }
}
