import {afterEach, expect} from 'vitest';
import {cleanup} from '@testing-library/react';
import matchers from '@testing-library/jest-dom/matchers';
import {setupServer} from "msw/node";
import {rest} from "msw";


// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);


//create mocked server
const server = setupServer(
  rest.get('https://global.atdtravel.com/api/products', (req, res, ctx) => {

    if (req.url.searchParams.get("geo") !== 'en') {
      return res(ctx.status(400));
    }

    if (req.url.searchParams.get("title") == null) {
      return res(ctx.status(400));
    }

    if (req.url.searchParams.get("title") === 'Disney') {
      return res(ctx.json({
        data: [
          {
            id: 1234,
            title: "Disneyland",
            dest: "Florida",
            img_sml: "http://www.example-image/1234.jpg",
          },
          {
            id: 1235,
            title: "Paris Disney",
            dest: "France",
            img_sml: "http://www.example-image/1235.jpg",
          }
        ]
      }))
    }

    return res(ctx.status(404));

  }),
)

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
afterAll(() => server.close());