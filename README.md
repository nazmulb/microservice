# Microservice

This is a very simple node.js microservice. Here I used `jest` for API testing which is a part of Integration testing. I also used `request-promise` and `supertest` for HTTP request. If you are testing 3rd party API then `request-promise` is preferable to use but if you need to know the test coverage of your code then you should use `supertest`.

## Jest:

Jest is an open JavaScript testing library from Facebook. Its slogan is "Delightful JavaScript Testing". While Jest can be used to test any JavaScript library, it shines when it comes to React and React Native.

## Getting Started:

Install Jest using `npm`

```sh
npm install --save-dev jest
```

### Writting our first test:

We have api right? So we are gonna test these by importing the express `app` instance.

```js
const request = require('supertest');
const app = require('./app');


describe('Test the root path', () => {
    test('It should response the GET method', () => {
        return request(app).get('/').expect(200);
    });
})
```

In our test file we used `describe` and `test`, Jest puts each of these methods and objects into the global environment. You don't have to require or import anything to use them.

- `describe(name, fn)`: describe(name, fn) creates a block that groups together several related tests.
- `test(name, fn, timeout)`: All you need in a test file is the test method which runs a test. It also under the alias: it(name, fn, timeout). 
- there have lot more methods. Here is the [link](https://jestjs.io/docs/en/api)

### Run our test:

That's simple, just hit the command

```sh
npm test
```

`coverage`:
```sh
npm run test-coverage
```