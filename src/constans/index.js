import path from 'node:path';
export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc',
};

export const FIFTEEN_MINUTES = 15 * 60 * 1000;
export const ONE_DAY = 24 * 60 * 60 * 1000;

export const SMTP = {
  SMTP_HOST: 'smtp-relay.brevo.com',
  SMTP_PORT: '587',
  SMTP_USER: '77d068001@smtp-brevo.com',
  SMTP_PASSWORD: 'qk0n7fJKjUGHFYPM',
  SMTP_FROM: 'dima.volkkom@gmail.com',
};
export const TEMPLATES_DIR = path.join(process.cwd(), 'src', 'templates');
export const TEMP_UPLOAD_DIR = path.join(process.cwd(), 'temp');
export const UPLOAD_DIR = path.join(process.cwd(), 'uploads');
export const CLOUDINARY = {
  CLOUD_NAME: 'dg1tdfcni',
  API_KEY: '364355297345378',
  API_SECRET: 'SnvgA1drQvcB-HVwq0jGP3BbYpI',
};
