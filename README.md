# Text Analyzer

This application reads from a text file and calculates the following parameters:

- Number of characters
- Number of words
- Number of sentences
- Number of paragraphs
- Longest words in paragraphs

## How To Setup

### Option 1: Using Docker (RECOMMENDED)

This project is built using [Docker](https://www.docker.com). So all you need to have is [Docker](https://www.docker.com) installed on your PC. From there, just build the included [`Dockerfile`](./Dockerfile) using the following command:

```bash
docker build -t wsd/text-analyzer .
```

After that, just spin up a container off of the built image:

```bash
docker run -p 8080:8080 wsd/text-analyzer
```

If everything goes well, you should have the API server up and running on port `8080`. You can simply use <http://localhost:8080> to consume the APIs by the clients.

### Option 2: Using Local Node.js Runtime

If you have [Node.js](https://nodejs.org) installed on your PC, you can start the server by executing the following commands in order:

```bash
npm install
```

```bash
npm run build
```

```bash
npm start
```

This should bring up the API server on port `8080` on your PC. Use <http://localhost:8080> to consume the APIs.

## Exposed APIs

The application exposes 5 endpoints, which are documented at <http://localhost:8080/docs>.
