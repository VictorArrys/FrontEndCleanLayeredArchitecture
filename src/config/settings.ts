// src/config/settings.ts

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const env = import.meta.env.VITE_ENV || 'dev'; // Valor por defecto: 'dev'

const config = require(`./env/${env}.ts`).default;

export default config;

  