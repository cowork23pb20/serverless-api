import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
    DynamoDBDocumentClient,
    ScanCommand,
    PutCommand,
    GetCommand,
    DeleteCommand,
} from "@aws-sdk/lib-dynamodb";

import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { Cliente } from "./model/Cliente";

const client = new DynamoDBClient({});
const dynamo = DynamoDBDocumentClient.from(client);

const tableName = "clientes";
//module.exports.handler = async (event: APIGatewayProxyEvent, context: any): Promise<APIGatewayProxyResult> => {
export const handler = async (event: APIGatewayProxyEvent, context: any): Promise<APIGatewayProxyResult> => {
    let body;
    let statusCode = 200;
    const headers = {
        "Content-Type": "application/json",
    };

    try {

        switch (event.httpMethod) {

            case "DELETE":
                if (event.path === '/') {
                    break;
                } else {
                    const pathParameter = event.path.split(event.path[0]).join('');
                    await dynamo.send(
                        new DeleteCommand({
                            TableName: tableName,
                            Key: {
                                id: pathParameter,
                            },
                        })
                    );
                    body = `Deleted item ${pathParameter}`;
                    break;
                }

            case "GET":
                if (event.path === '/') {
                    body = await dynamo.send(
                        new ScanCommand({ TableName: tableName })
                    );
                    body = body.Items;
                    break;
                }
                else {
                    const pathParameter = event.path.split(event.path[0]).join('');

                    body = await dynamo.send(
                        new GetCommand({
                            TableName: tableName,
                            Key: {
                                id: pathParameter,
                            },
                        })
                    );
                    body = body.Item;
                    break;

                }

            case "PUT":
                let requestJSON = JSON.parse(event.body);

                let cliente;

                if (requestJSON.contatos && requestJSON.contatos.length > 0) {
                    cliente = new Cliente(
                        requestJSON.id,
                        requestJSON.nome,
                        requestJSON.data_nasc,
                        requestJSON.ativo,
                        requestJSON.address,
                        requestJSON.contatos);
                } else {
                    throw new Error(`Required at least 1 contact`);
                }


                await dynamo.send(
                    new PutCommand({
                        TableName: tableName,
                        Item: {
                            id: requestJSON.id,
                            nome: requestJSON.nome,
                            data_nasc: requestJSON.data_nasc,
                            ativo: requestJSON.ativo,
                            address: requestJSON.address,
                            contatos: requestJSON.contatos
                        },
                    })
                );
                body = `Put item ${requestJSON.id}`;
                break;
            default:
                throw new Error(`Unsupported route: "${event.routeKey}"`);
        }
    } catch (err: any) {
        statusCode = 400;
        body = err.message;
    } finally {
        body = JSON.stringify(body);
    }

    return {
        "isBase64Encoded": true,
        "statusCode": statusCode,
        "headers": { "headerName": "headerValue", },
        "multiValueHeaders": { "headerName": ["headerValue", "headerValue2"], },
        "body": body
    }
};
