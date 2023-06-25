# Lord Of the Rings Node.js SDK

[![node version](https://badgen.net/badge/node/>=16?icon=node)]() [![typescript](https://badges.aleen42.com/src/typescript.svg)]()

Use this NodeJS library to access Lord of the Rings API provided by https://the-one-api.dev/.

### List of Contents

- [Requirements](##requirements)
- [Installation](#installation)
- [Quickstart](#quickstart)
- [Usage](#usage)
- [Tests](#tests)
- [SDK Reference](#sdk-reference)

## Requirements

Use of the Lord of the Rings Node.js SDK requires:

- Node.js 16 or higher

This SDK is for use with Node.js only. It does not support other usages, such as for web browsers or frontend applications.

## Installation

Using npm

```
npm install d1f41b78a4cf49f9888a71b5fe729cdb
```

Using yarn

```
yarn add d1f41b78a4cf49f9888a71b5fe729cdb
```

Using pnpm

```
pnpm install d1f41b78a4cf49f9888a71b5fe729cdb
```

## Quickstart

Before using any of the services, please obtain a access token from https://the-one-api.dev/.

Using commonjs:

```
const { LOTR } = require('d1f41b78a4cf49f9888a71b5fe729cdb')
const lotr = new LOTR({
    accessToken: 'your-access-token'
})
```

or using ES modules

```
import { LOTR } from 'd1f41b78a4cf49f9888a71b5fe729cdb'
const lotr = new LOTR({
    accessToken: 'your-access-token'
})
```

Example Usage with async/await

```
try {
    const movies = await lotr.movies.list()
} catch(err) {
    // handle the error.
}

```

### API Reference

Available methods to use.

### Movies

- **List**

  List of Movies

  ```
  const movies = await lotr.movies.list(options)
  ```

  More detailed information about options and response [here](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/dev/docs/classes/api_movies.Movies.md#list)

- **Get**

  Get a Movie by Id

  ```
  const movie = await lotr.movies.get(movieId)
  ```

  More detailed information about response [here](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/dev/docs/classes/api_movies.Movies.md#get)

- Quotes

  Get list of quotes of a movie

  ```
  const quotes = await lotr.movies.quotes(movieId)
  ```

  More detailed information about response [here](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/dev/docs/classes/api_movies.Movies.md#quotes)

### Quotes

- **List**

  Get List of Quotes

  ```
  const quotes = await lotr.quotes.list(options)
  ```

  More detailed information about options and response [here](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/dev/docs/classes/api_quotes.Quotes.md#list)

- **Get**

  Get a quote by Id

  ```
  const quotes = await lotr.quotes.get(id)
  ```

  More detailed information about response [here](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/dev/docs/classes/api_quotes.Quotes.md#get)

## Tests

To run the testcases follow the below steps.

Clone the repository

```
git clone https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb.git
cd d1f41b78a4cf49f9888a71b5fe729cdb
```

Install the dependencies

```
npm install
```

*[Note] Create a file `.env.test` and a variable SANDBOX_TOKEN=*your access token* for the intergration tests. Also keep in mind that only 100 requests allowed for 10mins. So if you try too many times tests might result in error.*

Now run the tests

```
npm run test
```

## SDK Reference

Go through below docs for more detailed information about classes and types
[sdk reference](https://github.com/hatchways-community/d1f41b78a4cf49f9888a71b5fe729cdb/blob/dev/docs/classes/index.LOTR.md)
