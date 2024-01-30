import fastify from 'fastify';

const server = fastify({ logger: true });

server.get('/ping', async (req, rep) => {
  return rep.code(200).send({ status: 200, message: 'PONG' });
});

server.listen({ port: 8080, host: '0.0.0.0' });
