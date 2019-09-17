# Microservice

This is a very simple node.js microservice. Here I used `jest` for API testing which is a part of Integration testing. I also used `request-promise` and `supertest` for HTTP request. If you are testing 3rd party API then `request-promise` is preferable to use but if you need to know the test coverage of your code then you should use `supertest`.

### Overview:

We need the following:

- [Express](https://www.npmjs.com/package/express)
- [Jest](https://jestjs.io/en/)
- [supertest](https://www.npmjs.com/package/supertest)
- [request-promise](https://www.npmjs.com/package/request-promise)

### Setup:

Please clone this repo and run the following commands:

```
git clone https://github.com/nazmulb/microservice.git
cd microservice
npm i
```

### Running App:

```cmd
npm start
```

### Running Tests:

```cmd
npm test
```

### Test Coverage Report:

```cmd
npm run test:coverage
```