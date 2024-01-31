import { resolve } from 'node:path';

import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';

import fastify from 'fastify';

import { FileOps } from './logic';
import { swaggerConfig, swaggerUiConfig } from './swagger';

const path = resolve(__dirname, '..', 'data', 'sample.txt');

const server = fastify({ logger: true });

server.register(fastifySwagger, swaggerConfig);
server.register(fastifySwaggerUi, swaggerUiConfig);

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

server.get('/longest-words', async (_req, rep) => {
  const fileOps = new FileOps(path);
  try {
    const message = await fileOps.countLongWords();
    return rep.code(200).send({ statusCode: 200, message });
  } catch (error) {
    server.log.error(error);
    return rep.code(500).send({ statusCode: 500, message: error.name });
  }
});

server.listen({ port: 8080, host: '0.0.0.0' });
