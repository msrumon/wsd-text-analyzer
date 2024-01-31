import { FastifyStaticSwaggerOptions } from '@fastify/swagger';
import { FastifySwaggerUiOptions } from '@fastify/swagger-ui';

export const swaggerConfig = <FastifyStaticSwaggerOptions>{
  mode: 'static',
  specification: {
    document: {
      openapi: '3.1.0',
      info: {
        title: 'Text Analyzer',
        version: '1.0.0',
        contact: {
          name: 'Rumon',
          email: 'contact@msrumon.com',
          url: 'https://www.msrumon.com',
        },
        license: { name: 'Unlicense' },
      },
      paths: {
        '/characters': {
          get: {
            responses: {
              200: {
                description: 'Returns the number of characters.',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        statusCode: { type: 'integer' },
                        message: { type: 'number' },
                      },
                    },
                    example: { statusCode: 200, message: 58 },
                  },
                },
              },
              500: {
                description: 'Throws error.',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        statusCode: { type: 'integer' },
                        message: { type: 'string' },
                      },
                    },
                    example: { statusCode: 500, message: 'Error' },
                  },
                },
              },
            },
          },
        },
        '/words': {
          get: {
            responses: {
              200: {
                description: 'Returns the number of words.',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        statusCode: { type: 'integer' },
                        message: { type: 'number' },
                      },
                    },
                    example: { statusCode: 200, message: 16 },
                  },
                },
              },
              500: {
                description: 'Throws error.',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        statusCode: { type: 'integer' },
                        message: { type: 'string' },
                      },
                    },
                    example: { statusCode: 500, message: 'Error' },
                  },
                },
              },
            },
          },
        },
        '/sentences': {
          get: {
            responses: {
              200: {
                description: 'Returns the number of sentences.',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        statusCode: { type: 'integer' },
                        message: { type: 'number' },
                      },
                    },
                    example: { statusCode: 200, message: 2 },
                  },
                },
              },
              500: {
                description: 'Throws error.',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        statusCode: { type: 'integer' },
                        message: { type: 'string' },
                      },
                    },
                    example: { statusCode: 500, message: 'Error' },
                  },
                },
              },
            },
          },
        },
        '/paragraphs': {
          get: {
            responses: {
              200: {
                description: 'Returns the number of sentences.',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        statusCode: { type: 'integer' },
                        message: { type: 'number' },
                      },
                    },
                    example: { statusCode: 200, message: 1 },
                  },
                },
              },
              500: {
                description: 'Throws error.',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        statusCode: { type: 'integer' },
                        message: { type: 'string' },
                      },
                    },
                    example: { statusCode: 500, message: 'Error' },
                  },
                },
              },
            },
          },
        },
        '/longest-words': {
          get: {
            responses: {
              200: {
                description: 'Returns the longest words in each paragraph.',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        statusCode: { type: 'integer' },
                        message: {
                          type: 'object',
                          additionalProperties: {
                            type: 'array',
                            items: { type: 'string' },
                          },
                        },
                      },
                    },
                    example: {
                      statusCode: 200,
                      message: { 1: ['quick', 'brown', 'jumps', 'slept'] },
                    },
                  },
                },
              },
              500: {
                description: 'Throws error.',
                content: {
                  'application/json': {
                    schema: {
                      type: 'object',
                      properties: {
                        statusCode: { type: 'integer' },
                        message: { type: 'string' },
                      },
                    },
                    example: { statusCode: 500, message: 'Error' },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};

export const swaggerUiConfig = <FastifySwaggerUiOptions>{
  routePrefix: '/docs',
  theme: { title: 'API Docs | Text Analyzer | WSD' },
  logo: {
    type: 'image/png',
    content: Buffer.from(
      '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',
      'base64'
    ),
  },
};
