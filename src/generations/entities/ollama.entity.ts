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
  public async translateEnglishWordToPortuguese(word: string): Promise<any> {
    return await this.ollamaInstance.chat({
      model: this.modelName,
      messages: [
        {
          role: 'user',
          content: `Translate the word ${word} to brazilian portuguese, and give its meaning in brazilian portuguese and generate a example sentence in portuguese and in english`,
        },
      ],
      options: {
        num_thread: 8,
        main_gpu: 1,
      },
    });
  }
  public async translateWord(
    word: string,
    incomeLanguage: string,
    outcomeLanguage: string,
  ) {
    return await this.ollamaInstance.chat({
      model: 'llama3',
      messages: [
        {
          role: 'user',
          content: `Translate the word ${word} from ${incomeLanguage} to ${outcomeLanguage} and give its meaning in ${outcomeLanguage} and generate a example sentence in ${outcomeLanguage} and in ${incomeLanguage}. The output should be in the following JSON format:

          "word":${word}
          "from":${incomeLanguage}
          "to": ${outcomeLanguage}
          "translation": {translated word goes here} 
          "meaning": { dictionary meaning in ${incomeLanguage} goes here}
          "example_sentence_1": {example Sentence in ${outcomeLanguage} goes here}
          "example_sentence_2": {example Sentence in ${incomeLanguage} goes here}`,
        },
      ],
      stream: false,
    });
  }
}
