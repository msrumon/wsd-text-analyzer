import { resolve } from 'node:path';

import { fastifyView } from '@fastify/view';

import fastify from 'fastify';
import handlebars from 'handlebars';

import { FileOps } from './logic';

const path = resolve(__dirname, '..', 'data', 'sample.txt');

const server = fastify({ logger: true });

server.register(fastifyView, {
  engine: { handlebars },
  root: resolve(__dirname, 'views'),
  includeViewExtension: true,
});

server.get('/', (_req, rep) => rep.view('index'));

server.get('/characters', async (_req, rep) => {
  const fileOps = new FileOps(path);
  try {
    const message = await fileOps.countCharacters();
    return rep.code(200).send({ statusCode: 200, message });
  } catch (error) {
    server.log.error(error);
    return rep.code(500).send({ statusCode: 500, message: error.name });
  }
});

server.get('/words', async (_req, rep) => {
  const fileOps = new FileOps(path);
  try {
    const message = await fileOps.countWords();
    return rep.code(200).send({ statusCode: 200, message });
  } catch (error) {
    server.log.error(error);
    return rep.code(500).send({ statusCode: 500, message: error.name });
  }
});

server.get('/sentences', async (_req, rep) => {
  const fileOps = new FileOps(path);
  try {
    const message = await fileOps.countSentences();
    return rep.code(200).send({ statusCode: 200, message });
  } catch (error) {
    server.log.error(error);
    return rep.code(500).send({ statusCode: 500, message: error.name });
  }
});

server.get('/paragraphs', async (_req, rep) => {
  const fileOps = new FileOps(path);
  try {
    const message = await fileOps.countParagraphs();
    return rep.code(200).send({ statusCode: 200, message });
  } catch (error) {
    server.log.error(error);
    return rep.code(500).send({ statusCode: 500, message: error.name });
  }
});

server.get('/longest-words', (_req, rep) => {
  rep.code(501).send({ statusCode: 501, message: 'Not Implemented Yet.' });
});

server.listen({ port: 8080, host: '0.0.0.0' });
