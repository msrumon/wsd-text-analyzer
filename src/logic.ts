import { createReadStream } from 'node:fs';

export class FileOps {
  constructor(private readonly _path: string) {}

  /**
   * Counts the number of paragraphs in a file
   * @returns The number of paragraphs
   */
  async countParagraphs() {
    const stream = createReadStream(this._path);
    return new Promise<number>((resolve, reject) => {
      let count = 0;
      stream.on('error', reject);
      stream.on('data', (buffer) => {
        let i = -1;
        do {
          i = buffer.indexOf('10', i + 1);
          count += 1;
        } while (i !== -1);
      });
      stream.on('end', () => {
        resolve(count);
      });
    });
  }
}
