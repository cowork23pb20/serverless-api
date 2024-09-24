"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const client = new client_dynamodb_1.DynamoDBClient({});
const dynamo = lib_dynamodb_1.DynamoDBDocumentClient.from(client);
const tableName = "clientes";
module.exports.handler = (event, context) => __awaiter(void 0, void 0, void 0, function* () {
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
                }
                else {
                    const pathParameter = event.path.split(event.path[0]).join('');
                    yield dynamo.send(new lib_dynamodb_1.DeleteCommand({
                        TableName: tableName,
                        Key: {
                            id: pathParameter,
                        },
                    }));
                    body = `Deleted item ${pathParameter}`;
                    break;
                }
            case "GET":
                if (event.path === '/') {
                    body = yield dynamo.send(new lib_dynamodb_1.ScanCommand({ TableName: tableName }));
                    body = body.Items;
                    break;
                }
                else {
                    const pathParameter = event.path.split(event.path[0]).join('');
                    body = yield dynamo.send(new lib_dynamodb_1.GetCommand({
                        TableName: tableName,
                        Key: {
                            id: pathParameter,
                        },
                    }));
                    body = body.Item;
                    break;
                }
            case "PUT":
                let requestJSON = JSON.parse(event.body);
                yield dynamo.send(new lib_dynamodb_1.PutCommand({
                    TableName: tableName,
                    Item: {
                        id: requestJSON.id,
                        nome: requestJSON.nome,
                        data_nasc: requestJSON.data_nasc,
                        ativo: requestJSON.ativo,
                        address: requestJSON.address,
                        contatos: requestJSON.contatos
                    },
                }));
                body = `Put item ${requestJSON.id}`;
                break;
            default:
                throw new Error(`Unsupported route: "${event.routeKey}"`);
        }
    }
    catch (err) {
        statusCode = 400;
        body = err.message;
    }
    finally {
        body = JSON.stringify(body);
    }
    return {
        statusCode,
        body,
        headers,
    };
});
