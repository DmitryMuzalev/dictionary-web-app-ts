type LicenseType = {
  name: string;
  url: string;
};

type PhoneticType = {
  audio: string;
  text: string;
  sourceUrl?: string;
  license?: LicenseType;
};

export type DefinitionType = {
  definition: string;
  example?: string;
  synonyms: string[];
  antonyms: string[];
};

export type MeaningType = {
  partOfSpeech: string;
  definitions: DefinitionType[];
  synonyms: string[];
  antonyms: string[];
};

export type DictionaryWord = {
  word: string;
  phonetics: PhoneticType[];
  meanings: MeaningType[];
  phonetic?: string;
  sourceUrls?: string[];
  license?: LicenseType;
};

export type DictionaryNotFoundWord = {
  title: string;
  message: string;
  resolution: string;
};
