// src/lib/useTranslations.ts
import messagesMap from './translations';
import { useLanguage } from './LanguageContext';

export function useTranslations(namespace: string) {
  const { locale } = useLanguage();

  return (key: string, params?: Record<string, string | number>) => {
    const keys = `${namespace}.${key}`.split('.');
    let value: unknown = messagesMap[locale];

    for (const k of keys) {
      value = (value as Record<string, unknown>)?.[k];
      if (value === undefined) break;
    }

    if (typeof value === 'string' && params) {
      return value.replace(/\{(\w+)\}/g, (match, paramKey) => {
        return String(params[paramKey]) || match;
      });
    }

    return typeof value === 'string' ? value : key;
  };
}
