import trMessages from './tr';
import enMessages from './en';
import esMessages from './es';
import itMessages from './it';
import srMessages from './sr';
import roMessages from './ro';
import bsMessages from './bs';
import ruMessages from './ru';

const messagesMap = {
  tr: trMessages,
  en: enMessages,
  es: esMessages,
  it: itMessages,
  sr: srMessages,
  ro: roMessages,
  bs: bsMessages,
  ru: ruMessages
};

export type Locale = keyof typeof messagesMap; 

export default messagesMap;
