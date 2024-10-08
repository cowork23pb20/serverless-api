import { APIGatewayProxyEvent } from "aws-lambda";


export const mockGetRequest: APIGatewayProxyEvent = {
    "resource": "/",
    "path": "/",
    "httpMethod": "GET",
    "headers": {
        "header1": "value1",
        "header2": "value1,value2"
    },
    "multiValueHeaders": {
        "header1": [
            "value1"
        ],
        "header2": [
            "value1",
            "value2"
        ]
    },
    "queryStringParameters": {
        "parameter1": "value1,value2",
        "parameter2": "value"
    },
    "multiValueQueryStringParameters": {
        "parameter1": [
            "value1",
            "value2"
        ],
        "parameter2": [
            "value"
        ]
    },
    "requestContext": {
        "accountId": "123456789012",
        "apiId": "id",
        "authorizer": {
            "claims": null,
            "scopes": null
        },
        "domainName": "id.execute-api.us-east-1.amazonaws.com",
        "domainPrefix": "id",
        "extendedRequestId": "request-id",
        "httpMethod": "GET",
        "identity": {
            "apiKey": null,
            "apiKeyId": null,
            "accessKey": null,
            "accountId": null,
            "caller": null,
            "cognitoAuthenticationProvider": null,
            "cognitoAuthenticationType": null,
            "cognitoIdentityId": null,
            "cognitoIdentityPoolId": null,
            "principalOrgId": null,
            "sourceIp": "IP",
            "user": null,
            "userAgent": "user-agent",
            "userArn": null,
            "clientCert": {
                "clientCertPem": "CERT_CONTENT",
                "subjectDN": "www.example.com",
                "issuerDN": "Example issuer",
                "serialNumber": "a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1",
                "validity": {
                    "notBefore": "May 28 12:30:02 2019 GMT",
                    "notAfter": "Aug  5 09:36:04 2021 GMT"
                }
            }
        },
        "path": "/",
        "protocol": "HTTP/1.1",
        "requestId": "id=",
        "requestTime": "04/Mar/2020:19:15:17 +0000",
        "requestTimeEpoch": 1583349317135,
        "resourceId": "",
        "resourcePath": "/",
        "stage": "$default"
    },
    "pathParameters": null,
    "stageVariables": null,
    "body": "Hello from Lambda!",
    "isBase64Encoded": false
}

export const mockGetRequestWithPathParameter: APIGatewayProxyEvent = {
    "resource": "/{proxy+}",
    "path": "/2",
    "httpMethod": "GET",
    "headers": {
        "header1": "value1",
        "header2": "value1,value2"
    },
    "multiValueHeaders": {
        "header1": [
            "value1"
        ],
        "header2": [
            "value1",
            "value2"
        ]
    },
    "queryStringParameters": {
        "parameter1": "value1,value2",
        "parameter2": "value"
    },
    "multiValueQueryStringParameters": {
        "parameter1": [
            "value1",
            "value2"
        ],
        "parameter2": [
            "value"
        ]
    },
    "requestContext": {
        "accountId": "123456789012",
        "apiId": "id",
        "authorizer": {
            "claims": null,
            "scopes": null
        },
        "domainName": "id.execute-api.us-east-1.amazonaws.com",
        "domainPrefix": "id",
        "extendedRequestId": "request-id",
        "httpMethod": "GET",
        "identity": {
            "apiKey": null,
            "apiKeyId": null,
            "accessKey": null,
            "accountId": null,
            "caller": null,
            "cognitoAuthenticationProvider": null,
            "cognitoAuthenticationType": null,
            "cognitoIdentityId": null,
            "cognitoIdentityPoolId": null,
            "principalOrgId": null,
            "sourceIp": "IP",
            "user": null,
            "userAgent": "user-agent",
            "userArn": null,
            "clientCert": {
                "clientCertPem": "CERT_CONTENT",
                "subjectDN": "www.example.com",
                "issuerDN": "Example issuer",
                "serialNumber": "a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1",
                "validity": {
                    "notBefore": "May 28 12:30:02 2019 GMT",
                    "notAfter": "Aug  5 09:36:04 2021 GMT"
                }
            }
        },
        "path": "/{proxy+}",
        "protocol": "HTTP/1.1",
        "requestId": "id=",
        "requestTime": "04/Mar/2020:19:15:17 +0000",
        "requestTimeEpoch": 1583349317135,
        "resourceId": "",
        "resourcePath": "/{proxy+}",
        "stage": "$default"
    },
    "pathParameters": { 'proxy': '2' },
    "stageVariables": null,
    "body": "Hello from Lambda!",
    "isBase64Encoded": false
}

export const mockDeleteRequestWithPathParameter: APIGatewayProxyEvent = {
    "resource": "/{proxy+}",
    "path": "/2",
    "httpMethod": "DELETE",
    "headers": {
        "header1": "value1",
        "header2": "value1,value2"
    },
    "multiValueHeaders": {
        "header1": [
            "value1"
        ],
        "header2": [
            "value1",
            "value2"
        ]
    },
    "queryStringParameters": {
        "parameter1": "value1,value2",
        "parameter2": "value"
    },
    "multiValueQueryStringParameters": {
        "parameter1": [
            "value1",
            "value2"
        ],
        "parameter2": [
            "value"
        ]
    },
    "requestContext": {
        "accountId": "123456789012",
        "apiId": "id",
        "authorizer": {
            "claims": null,
            "scopes": null
        },
        "domainName": "id.execute-api.us-east-1.amazonaws.com",
        "domainPrefix": "id",
        "extendedRequestId": "request-id",
        "httpMethod": "DELETE",
        "identity": {
            "apiKey": null,
            "apiKeyId": null,
            "accessKey": null,
            "accountId": null,
            "caller": null,
            "cognitoAuthenticationProvider": null,
            "cognitoAuthenticationType": null,
            "cognitoIdentityId": null,
            "cognitoIdentityPoolId": null,
            "principalOrgId": null,
            "sourceIp": "IP",
            "user": null,
            "userAgent": "user-agent",
            "userArn": null,
            "clientCert": {
                "clientCertPem": "CERT_CONTENT",
                "subjectDN": "www.example.com",
                "issuerDN": "Example issuer",
                "serialNumber": "a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1",
                "validity": {
                    "notBefore": "May 28 12:30:02 2019 GMT",
                    "notAfter": "Aug  5 09:36:04 2021 GMT"
                }
            }
        },
        "path": "/{proxy+}",
        "protocol": "HTTP/1.1",
        "requestId": "id=",
        "requestTime": "04/Mar/2020:19:15:17 +0000",
        "requestTimeEpoch": 1583349317135,
        "resourceId": "",
        "resourcePath": "/{proxy+}",
        "stage": "$default"
    },
    "pathParameters": { 'proxy': '2' },
    "stageVariables": null,
    "body": "Hello from Lambda!",
    "isBase64Encoded": false
}

export const mockRequestWithBody: APIGatewayProxyEvent = {
    "resource": "/",
    "path": "/",
    "httpMethod": "PUT",
    "headers": {
        "header1": "value1",
        "header2": "value1,value2"
    },
    "multiValueHeaders": {
        "header1": [
            "value1"
        ],
        "header2": [
            "value1",
            "value2"
        ]
    },
    "queryStringParameters": {
        "parameter1": "value1,value2",
        "parameter2": "value"
    },
    "multiValueQueryStringParameters": {
        "parameter1": [
            "value1",
            "value2"
        ],
        "parameter2": [
            "value"
        ]
    },
    "requestContext": {
        "accountId": "123456789012",
        "apiId": "id",
        "authorizer": {
            "claims": null,
            "scopes": null
        },
        "domainName": "id.execute-api.us-east-1.amazonaws.com",
        "domainPrefix": "id",
        "extendedRequestId": "request-id",
        "httpMethod": "PUT",
        "identity": {
            "apiKey": null,
            "apiKeyId": null,
            "accessKey": null,
            "accountId": null,
            "caller": null,
            "cognitoAuthenticationProvider": null,
            "cognitoAuthenticationType": null,
            "cognitoIdentityId": null,
            "cognitoIdentityPoolId": null,
            "principalOrgId": null,
            "sourceIp": "IP",
            "user": null,
            "userAgent": "user-agent",
            "userArn": null,
            "clientCert": {
                "clientCertPem": "CERT_CONTENT",
                "subjectDN": "www.example.com",
                "issuerDN": "Example issuer",
                "serialNumber": "a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1:a1",
                "validity": {
                    "notBefore": "May 28 12:30:02 2019 GMT",
                    "notAfter": "Aug  5 09:36:04 2021 GMT"
                }
            }
        },
        "path": "/",
        "protocol": "HTTP/1.1",
        "requestId": "id=",
        "requestTime": "04/Mar/2020:19:15:17 +0000",
        "requestTimeEpoch": 1583349317135,
        "resourceId": "",
        "resourcePath": "/",
        "stage": "$default"
    },
    "pathParameters": null,
    "stageVariables": null,
    "body": "{\"id\":\"2\",\"nome\":\"testing nome 1\",\"data_nasc\":\"10-10-1910\",\"ativo\":true,\"address\":\"rua a, casa b, bairro c\",\"contatos\":\"abc, def, ghi\"}",
    "isBase64Encoded": false
}


