import { Ollama } from 'ollama';

export class OllamaEntity {
  private static instance = new OllamaEntity();
  private modelName: string;
  private ollamaInstance = new Ollama({ host: 'http://localhost:11434' });
  private constructor() {}

  public static getInstance(): OllamaEntity {
    return this.instance;
  }

  public setModel(model: string) {
    this.modelName = model;
  }
  public async translateWord(
    word: string,
    fromLanguage: string,
    toLanguage: string,
  ) {
    return await this.ollamaInstance.chat({
      model: 'phi3:medium',
      messages: [
        {
          role: 'user',
          content: `According to the ${toLanguage} Dictionary, translate the word ${word} from ${fromLanguage} to ${toLanguage} and give its meaning in ${fromLanguage} and generate a example sentence in ${toLanguage} and in ${fromLanguage}. The output should be in the following JSON format:

          "word":${word}
          "from":${fromLanguage}
          "to": ${toLanguage}
          "translation": { dictionary translation of ${word} goes here } 
          "meaning": { dictionary meaning in ${fromLanguage} goes here}
          "toLanguageExampleSentence": {example Sentence in ${toLanguage} goes here}
          "fromLanguageExampleSentence": {example Sentence in ${fromLanguage} goes here}
          Give me just the JSON response, nothing more!`,
        },
      ],
    });
  }
}
