const AWS = require('aws-sdk');
const {v4: uuidv4} = require('uuid');

// aws configuration
AWS.config.update({
    region: "us-east-1",
    accessKeyId: "your_access_key",
    secretAccessKey: "your_secret_key",
    endpoint: "https://dynamodb.us-east-1.amazonaws.com"
});
let docClient = new AWS.DynamoDB.DocumentClient();
var table = "products";

// add products to the products table (body den ilgli json nesnesi verilir)
exports.add = async (params) => {
    console.log(params);
    const item = {
        TableName : table,
        Item: {
            productId: uuidv4(),
            isDiscount: params.isDiscount,
            stock: params.stock,
            productName: params.productName,
            category: {
                categoryId: params.category.categoryId,
                categoryName: params.category.categoryName,
            },
        },
    };
    try {
        const data = await docClient.put(item).promise();
        console.log(data);
        return {
            status : true,
            message : "product eklendi",
        }
    } catch (error) {
        return {
            status : false,
            message: error
        }
    }
}

// get product by id (url den id verilir)
exports.getById = async (params) => {
    console.log(params);
    const item = {
        TableName : table,
        Key: {
            "productId": params.id
        }
    }
    try {
        const data = await docClient.get(item).promise();
        return {
            status : true,
            message : data 
        }
    } catch (error) {
        return error
    }
}

// get product by discount=true
exports.getByDiscount = async (params, params1) => {
    const item = {
        TableName : table,
        Key: {
            "productId" : params1.productId,
            "isDiscount" : params.isDiscount
        },
        KeyConditionExpression: "isDiscount = :isDiscount",
        ExpressionAttributeValues:{
            ":isDiscount":true,
        }
    };
    try {
        const data = await docClient.query(item).promise();
        return {
            status : true,
            message : data.Items 
        }
    } catch (error) {
        return error
    }
}

// /products get ile tüm verileri getirir.
// get all product in products table
exports.getAllProducts = async () => {
    var  params = {
        TableName:table
    };
    try {
        const data = await docClient.scan(params).promise();
        return {
            status : true,
            message : data 
        }
    } catch (error) {
        return error
    }
}

// update product stoct value with productId in products table
// url den id yi body den stock değerini verilerek çalışır
exports.update = async (params,paramsId) => {
    var item = {
        TableName: table,
        Key:{
            "productId": params.id,
        },
        UpdateExpression: "set stock = :stock",
        ExpressionAttributeValues:{
            ":stock":paramsId.stock,
        },
        ReturnValues:"UPDATED_NEW"
    }
    try {
        const data = await docClient.update(item).promise();
        return {
            status : true,
            message : "güncellendi",
            data : data
        }
    } catch (error) {
        return error
    }
}

// delete product with productId and isDiscount is false in products table
// url den id verilecek isDiscount false ise silecek true ise hata verecek
exports.delete = async (params) => {
    var item = {
        TableName: table,
        Key:{
            "productId": params.id
        },
        ConditionExpression: "isDiscount = :isDiscount",
        ExpressionAttributeValues:{
            ":isDiscount":false,
        }
    };
    try {
        await docClient.delete(item).promise();
        return {
            status : true,
            message : "ürün silindi."
        }
    } catch (error) {
        return error
    }
}