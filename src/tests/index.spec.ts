import { mockRequest, mockRequestWithBody, mockRequestWithPathParameter } from "./mocks/request.mock"
import { handler } from "../index"

import { mockClient } from "aws-sdk-client-mock";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";


//import { GetItemInput } from 'aws-sdk/clients/dynamodb';

import {
    ScanCommand,
    PutCommand,
    GetCommand,
    DeleteCommand,
} from "@aws-sdk/lib-dynamodb";

const ddbMock = mockClient(DynamoDBDocumentClient);

beforeEach(() => {
    ddbMock.reset();
});

test('it should return the expected array of users', async () => {
    const expected = [
        {
            "contatos": "abc, def, ghi",
            "data_nasc": "10-10-1910",
            "nome": "testing nome",
            "address": "rua a, casa b, bairro c",
            "ativo": false,
            "id": "2"
        },
        {
            "contatos": "abc, def, ghi",
            "data_nasc": "11-11-1911",
            "nome": "testing nome 2",
            "address": "rua a, casa b, bairro c",
            "ativo": false,
            "id": "3"
        }
    ]

    ddbMock.on(ScanCommand).resolves({
        Items: expected
    })

    const result = await handler(mockRequest, {});

    expect(JSON.parse(result.body)).toMatchObject(expected);
})


test('it should return the expected user', async () => {

    const expected = [
        {
            "contatos": "abc, def, ghi",
            "data_nasc": "10-10-1910",
            "nome": "testing nome",
            "address": "rua a, casa b, bairro c",
            "ativo": false,
            "id": "2"
        },

    ]

    ddbMock.on(GetCommand).resolves({
        Item: expected
    })

    const result = await handler(mockRequestWithPathParameter, {});

    expect(JSON.parse(result.body)).toMatchObject(expected);
})

test('it should insert the correct user', async () => {

    const expected = '"Put item 2"'

    ddbMock.on(PutCommand).resolves(
        {
            "$metadata": {
                "httpStatusCode": 200,
                "requestId": "",
                "attempts": 1,
                "totalRetryDelay": 0
            },
            "Attributes": {
                "id": "2",
                "contatos": "abc, def, ghi",
                "data_nasc": "10-10-1910",
                "nome": "testing nome",
                "address": "rua a, casa b, bairro c",
                "ativo": false,

            },
            "ItemCollectionMetrics": undefined
        }
    )

    const result = await handler(mockRequestWithBody, {});
    
    expect(result.body).toEqual(expected);
})






