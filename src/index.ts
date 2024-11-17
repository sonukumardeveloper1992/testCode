import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { swaggerSpec } from "./swagger"; // Import the Swagger/OpenAPI spec

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  // Check if the request is for the Swagger/OpenAPI specification
  if (event.path === "/swagger.json") {
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(swaggerSpec), // Return the Swagger spec
    };
  }

  // Default behavior for other requests
  const name = event.queryStringParameters?.name || "World";
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Hello, ${name}` }),
  };
};
