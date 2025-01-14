# agile-content-technical-test
Technical test for Agile-Content Company (only for this purpose)
=======
This project is build over [React.js](https://react.dev/)


## Install dependencies, build the project and run it

Install dependencies

```bash
npm install
```

Then, build an optimized version:

```bash
npm run build
```

Finally, run the server:

```bash
npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing the UI

### Unit testing with Jest

We are using [Testing-library](https://testing-library.com/) to test the UI

You can now run tests

```bash
#run unit tests
npm run test
```

## Deployed version

The app has been deployed in my personal account

[Deployed version](https://agile-content-technical-test.vercel.app/)

## Technical test coverage
All the test objectives have been done:
* The application is a production grade (deployed in Vercel)
* Views have been replicated as specified (and responsives)
* 3 tests haven been done, including two testing full user case (searching for a valid input, searching for an invalid input)
* With more time, I would optimize performance, to ensuire that views and components must be renderer only when specific props or states are updated. I would use Cypress to add integration tests for specific user cases.

## Authors

- [@xthevenot](https://github.com/xthevenot)

> [!IMPORTANT]  
> All the **Google** branding elements are trade marked. Use only for the purpose of technical testing.