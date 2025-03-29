import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ru'],
  localePrefix: 'as-needed',
  defaultLocale: 'ru',
});
