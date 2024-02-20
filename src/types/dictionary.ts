type License = {
  name: string;
  url: string;
};

type Phonetics = {
  audio: string;
  text: string;
  sourceUrl?: string;
  license?: License;
};

type Definitions = {
  definition: string;
  example?: string;
  synonyms: string[];
  antonyms: string[];
};

type Meaning = {
  partOfSpeech: string;
  definitions: Definitions[];
  synonyms: string[];
  antonyms: string[];
};

export type DictionaryWord = {
  word: string;
  phonetics: Phonetics[];
  meanings: Meaning[];
  phonetic?: string;
  sourceUrls?: string[];
  license?: License;
};
