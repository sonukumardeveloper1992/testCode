import { handler } from "./index";
import { APIGatewayProxyEvent } from "aws-lambda";

describe("Lambda Function", () => {
  it("should return 'Hello, John' when name is provided", async () => {
    const event: APIGatewayProxyEvent = { queryStringParameters: { name: "John" } } as any;
    const result = await handler(event);
    expect(result.body).toBe(JSON.stringify({ message: "Hello, John" }));
  });

  it("should return 'Hello, World' when no name is provided", async () => {
    const event: APIGatewayProxyEvent = { queryStringParameters: null } as any;
    const result = await handler(event);
    expect(result.body).toBe(JSON.stringify({ message: "Hello, World" }));
  });
});
