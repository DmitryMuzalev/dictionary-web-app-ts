import { DictionaryWord, DictionaryNotFoundWord } from "types";

export const defaultWord: DictionaryWord = {
  word: "hello",
  phonetics: [
    {
      text: "/həˈləʊ/",
      audio:
        "https://api.dictionaryapi.dev/media/pronunciations/en/hello-uk.mp3",
      sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=9021983",
      license: {
        name: "BY 3.0 US",
        url: "https://creativecommons.org/licenses/by/3.0/us",
      },
    },
    { text: "/həˈloʊ/", audio: "" },
  ],
  meanings: [
    {
      partOfSpeech: "noun",
      definitions: [
        {
          definition: '"Hello!" or an equivalent greeting.',
          synonyms: ["link_1", "link_2"],
          antonyms: ["link_3", "link_4"],
        },
      ],
      synonyms: ["greeting"],
      antonyms: [],
    },
    {
      partOfSpeech: "verb",
      definitions: [
        { definition: 'To greet with "hello".', synonyms: [], antonyms: [] },
      ],
      synonyms: [],
      antonyms: [],
    },
    {
      partOfSpeech: "interjection",
      definitions: [
        {
          definition:
            "A greeting (salutation) said when meeting someone or acknowledging someone’s arrival or presence.",
          synonyms: [
            "link_1",
            "link_2",
            "link_1",
            "link_2",
            "link_1",
            "link_2",
            "link_1",
            "link_2",
            "link_1",
            "link_2",
            "link_1",
            "link_2",
            "link_1",
            "link_2",
            "link_1",
            "link_2",
          ],
          antonyms: ["link_3", "link_4"],
          example: "Hello, everyone.",
        },
        {
          definition: "A greeting used when answering the telephone.",
          synonyms: [],
          antonyms: [],
          example: "Hello? How may I help you?",
        },
        {
          definition:
            "A call for response if it is not clear if anyone is present or listening, or if a telephone conversation may have been disconnected.",
          synonyms: [],
          antonyms: [],
          example: "Hello? Is anyone there?",
        },
        {
          definition:
            "Used sarcastically to imply that the person addressed or referred to has done something the speaker or writer considers to be foolish.",
          synonyms: [],
          antonyms: [],
          example:
            "You just tried to start your car with your cell phone. Hello?",
        },
        {
          definition: "An expression of puzzlement or discovery.",
          synonyms: [],
          antonyms: [],
          example: "Hello! What’s going on here?",
        },
      ],
      synonyms: [],
      antonyms: ["bye", "goodbye"],
    },
  ],
  license: {
    name: "CC BY-SA 3.0",
    url: "https://creativecommons.org/licenses/by-sa/3.0",
  },
  sourceUrls: ["https://en.wiktionary.org/wiki/hello"],
};

export const defaultNotFoundWord: DictionaryNotFoundWord = {
  title: "No Definitions Found",
  message:
    "Sorry pal, we couldn't find definitions for the word you were looking for.",
  resolution:
    "You can try the search again at later time or head to the web instead.",
};
