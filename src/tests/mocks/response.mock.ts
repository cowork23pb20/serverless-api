import { APIGatewayProxyResult } from "aws-lambda";

export const mockResponse: APIGatewayProxyResult = {
    "isBase64Encoded": false,
    "statusCode": 200,
    "headers": { "headerName": "headerValue", },
    "multiValueHeaders": { "headerName": ["headerValue", "headerValue2",], },
    "body": "..."
}