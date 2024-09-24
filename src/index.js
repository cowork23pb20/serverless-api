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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
var lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
var client = new client_dynamodb_1.DynamoDBClient({});
var dynamo = lib_dynamodb_1.DynamoDBDocumentClient.from(client);
var tableName = "clientes";
module.exports.handler = function (event, context) { return __awaiter(void 0, void 0, void 0, function () {
    var body, statusCode, headers, _a, pathParameter, pathParameter, requestJSON, err_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                statusCode = 200;
                headers = {
                    "Content-Type": "application/json",
                };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 13, 14, 15]);
                _a = event.httpMethod;
                switch (_a) {
                    case "DELETE": return [3 /*break*/, 2];
                    case "GET": return [3 /*break*/, 5];
                    case "PUT": return [3 /*break*/, 9];
                }
                return [3 /*break*/, 11];
            case 2:
                if (!(event.path === '/')) return [3 /*break*/, 3];
                return [3 /*break*/, 12];
            case 3:
                pathParameter = event.path.split(event.path[0]).join('');
                return [4 /*yield*/, dynamo.send(new lib_dynamodb_1.DeleteCommand({
                        TableName: tableName,
                        Key: {
                            id: pathParameter,
                        },
                    }))];
            case 4:
                _b.sent();
                body = "Deleted item ".concat(pathParameter);
                return [3 /*break*/, 12];
            case 5:
                if (!(event.path === '/')) return [3 /*break*/, 7];
                return [4 /*yield*/, dynamo.send(new lib_dynamodb_1.ScanCommand({ TableName: tableName }))];
            case 6:
                body = _b.sent();
                body = body.Items;
                return [3 /*break*/, 12];
            case 7:
                pathParameter = event.path.split(event.path[0]).join('');
                return [4 /*yield*/, dynamo.send(new lib_dynamodb_1.GetCommand({
                        TableName: tableName,
                        Key: {
                            id: pathParameter,
                        },
                    }))];
            case 8:
                body = _b.sent();
                body = body.Item;
                return [3 /*break*/, 12];
            case 9:
                requestJSON = JSON.parse(event.body);
                return [4 /*yield*/, dynamo.send(new lib_dynamodb_1.PutCommand({
                        TableName: tableName,
                        Item: {
                            id: requestJSON.id,
                            nome: requestJSON.nome,
                            data_nasc: requestJSON.data_nasc,
                            ativo: requestJSON.ativo,
                            address: requestJSON.address,
                            contatos: requestJSON.contatos
                        },
                    }))];
            case 10:
                _b.sent();
                body = "Put item ".concat(requestJSON.id);
                return [3 /*break*/, 12];
            case 11: throw new Error("Unsupported route: \"".concat(event.routeKey, "\""));
            case 12: return [3 /*break*/, 15];
            case 13:
                err_1 = _b.sent();
                statusCode = 400;
                body = err_1.message;
                return [3 /*break*/, 15];
            case 14:
                body = JSON.stringify(body);
                return [7 /*endfinally*/];
            case 15: return [2 /*return*/, {
                    "isBase64Encoded": true,
                    "statusCode": statusCode,
                    "headers": { "headerName": "headerValue", },
                    "multiValueHeaders": { "headerName": ["headerValue", "headerValue2"], },
                    "body": body
                }];
        }
    });
}); };
