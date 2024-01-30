import { createReadStream } from 'node:fs';

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

  private _format(string: string) {
    return string
      .trim()
      .toLowerCase()
      .replace(/^\s*\n/gm, '');
  }
}
