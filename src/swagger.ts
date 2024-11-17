export const swaggerSpec = {
    openapi: "3.0.0",
    info: {
      title: "Hello API",
      version: "1.0.0",
    },
    paths: {
      "/hello": {
        get: {
          summary: "Greet the user",
          parameters: [
            {
              name: "name",
              in: "query",
              required: false,
              description: "Name to greet",
              schema: { type: "string" },
            },
          ],
          responses: {
            200: {
              description: "Successful response",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: { message: { type: "string" } },
                  },
                },
              },
            },
          },
        },
      },
    },
  };
  