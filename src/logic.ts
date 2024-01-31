import { createReadStream } from 'node:fs';

interface LongestWords {
  [key: number]: Array<string>;
}

export class FileOps {
  constructor(private readonly _path: string) {}

  /**
   * Counts the number of characters in a file
   * @returns The number of characters
   */
  async countCharacters() {
    const stream = createReadStream(this._path, 'ascii');
    return new Promise<number>((resolve, reject) => {
      let count = NaN;
      stream.on('error', reject);
      stream.on('data', (buffer: string) => {
        const parts = this._format(buffer)
          .replace(/[^a-z]/g, '')
          .split('');
        count = parts.length;
      });
      stream.on('end', () => {
        resolve(count);
      });
    });
  }

  /**
   * Counts the number of paragraphs in a file
   * @returns The number of paragraphs
   */
  async countParagraphs() {
    const stream = createReadStream(this._path, 'ascii');
    return new Promise<number>((resolve, reject) => {
      let count = NaN;
      stream.on('error', reject);
      stream.on('data', (buffer: string) => {
        const parts = this._format(buffer).split(/\n/g);
        count = parts.length;
      });
      stream.on('end', () => {
        resolve(count);
      });
    });
  }

  /**
   * Counts the number of sentences in a file
   * @returns The number of sentences
   */
  async countSentences() {
    const stream = createReadStream(this._path, 'ascii');
    return new Promise<number>((resolve, reject) => {
      let count = NaN;
      stream.on('error', reject);
      stream.on('data', (buffer: string) => {
        const parts = this._format(buffer).split(/\.[\s\n]/g);
        count = parts.length;
      });
      stream.on('end', () => {
        resolve(count);
      });
    });
  }

  /**
   * Counts the number of words in a file
   * @returns The number of words
   */
  async countWords() {
    const stream = createReadStream(this._path, 'ascii');
    return new Promise<number>((resolve, reject) => {
      let count = NaN;
      stream.on('error', reject);
      stream.on('data', (buffer: string) => {
        const parts = this._format(buffer).split(/[\s\n]/g);
        count = parts.length;
      });
      stream.on('end', () => {
        resolve(count);
      });
    });
  }

  /**
   * Counts the longest words in all paragraphs in a file
   * @returns The list of numbers of words
   */
  async countLongWords() {
    const stream = createReadStream(this._path, 'ascii');
    return new Promise<LongestWords>((resolve, reject) => {
      const mapping: LongestWords = {};
      stream.on('error', reject);
      stream.on('data', (buffer: string) => {
        const paragraphs = this._format(buffer).split(/\n/g);
        paragraphs.forEach((elm, idx) => {
          const words = elm.replace(/[^a-z\s]/g, '').split(/[\s]/g);
          words.sort((a, b) => b.length - a.length);
          mapping[idx + 1] = words.filter(
            (elm, _idx, arr) => elm.length === arr[0].length
          );
        });
      });
      stream.on('end', () => {
        resolve(mapping);
      });
    });
  }

  private _format(string: string) {
    return string
      .trim()
      .toLowerCase()
      .replace(/^\s*\n/gm, '');
  }
}
