import fastify from 'fastify';

import { FileOps } from './logic';

const server = fastify({ logger: true });

server.get('/characters', (_req, rep) => {
  rep.code(501).send({ statusCode: 501, message: 'Not Implemented Yet.' });
});

server.get('/words', (_req, rep) => {
  rep.code(501).send({ statusCode: 501, message: 'Not Implemented Yet.' });
});

server.get('/sentences', (_req, rep) => {
  rep.code(501).send({ statusCode: 501, message: 'Not Implemented Yet.' });
});

server.get('/paragraphs', async (_req, rep) => {
  const fileOps = new FileOps(`${__dirname}/../data/sample.txt`);
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
