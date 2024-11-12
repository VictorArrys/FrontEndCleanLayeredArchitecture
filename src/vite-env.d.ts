/// <reference types="vite/client" />

declare global {
  interface ImportMetaEnv {
      VITE_REACT_APP_BACKEND_URL: string;
      VITE_HOST: string;
      VITE_NODE_ENV: "development" | "production" | "pre-production";
  }
  
  interface ImportMeta {
      readonly env: ImportMetaEnv;
    }
}

export {};