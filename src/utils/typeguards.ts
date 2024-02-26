import { DictionaryWord } from "types";

export const isWord = (data: any): data is DictionaryWord => "word" in data;
