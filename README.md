# CRUD Operations with Node.js and Amazon DynamoDb

In this study, the products table was created in Amazon Dynamodb and the contents of the table were added in the format specified below.

With the getAllProducts method, all the data in the table was pulled from the http://localhost:5000/products (GET) url.

With the getById method, the product with the id written to the http://localhost:5000/products/product/id (GET) url is brought.

With the getByDiscount method, products with the isDiscount value of true are brought with the http://localhost:5000/products/isDiscount (GET) url.

With the createProduct method, the product is added to the table by sending the http://localhost:5000/products (POST) url and the json format below in the body.

With the updateProduct method, http://localhost:5000/products/id (PUT) The stock value of the product, whose url and id value is given as params, is given in the body in json format and the product stock value is updated.

If the isDiscount value is false, the product whose id value is given with the http://localhost:5000/products/id (DELETE) url with the deleteProduct method is not deleted.

The node.js packages used are listed below. You can find the documentation links of the relevant packages at the end of the article.

### Product Schema :
```json
{
    productId: string’,
    stock: number,
    productName: string,
    isDiscount: boolean,
    category: {
    categoryId: number,
    categoryName: string,
    }
}
```

## Used Technologies

**Client:** Postman

**Server:** Node, Express

**Packages:** aws-sdk, Express, uuid, Nodemon    


## Getting Started
The easiest way to get started is to clone the repository:

#### Get The Latest Snapshot

```bash
  git clone https://github.com/A101-Node-js-TypeScript-Bootcamp/a101-bootcamp-odev3-gafur-demirci.git
```

#### Change directory

```bash
  cd myproject
```

#### Install NPM dependencies

```bash
  npm install
```

#### Then simply start your app

```bash
  node app.js
```

### Directory Structure

```txt
    +---controllers
    |   |   productController.js
    +---routes
    |   |   productRoute.js
    +---services
    |   |   Product.js
    |   app.js
    |   package.json
    |   package-lock.json
    |   .gitignore
    
```

# SQL vs NoSQL

| Characteristic | Relational Database Management System (RDBMS) | Amazon DynamoDB |
| ------ | ------ | ----- |
| Optimal Workloads |Ad hoc queries; data warehousing; OLAP (online analytical processing). | Web-scale applications, including social networks, gaming, media sharing, and Internet of Things (IoT). |
| Data Model | The relational model requires a well-defined schema, where data is normalized into tables, rows, and columns. In addition, all of the relationships are defined among tables, columns, indexes, and other database elements. | DynamoDB is schemaless. Every table must have a primary key to uniquely identify each data item, but there are no similar constraints on other non-key attributes. DynamoDB can manage structured or semistructured data, including JSON documents. |
| Data Access | SQL is the standard for storing and retrieving data. Relational databases offer a rich set of tools for simplifying the development of database-driven applications, but all of these tools use SQL. | You can use the AWS Management Console or the AWS CLI to work with DynamoDB and perform ad hoc tasks. Applications can use the AWS software development kits (SDKs) to work with DynamoDB using object-based, document-centric, or low-level interfaces. |
| Performance | Relational databases are optimized for storage, so performance generally depends on the disk subsystem. Developers and database administrators must optimize queries, indexes, and table structures in order to achieve peak performance. | DynamoDB is optimized for compute, so performance is mainly a function of the underlying hardware and network latency. As a managed service, DynamoDB insulates you and your applications from these implementation details, so that you can focus on designing and building robust, high-performance applications. |
| Scaling | It is easiest to scale up with faster hardware. It is also possible for database tables to span across multiple hosts in a distributed system, but this requires additional investment. Relational databases have maximum sizes for the number and size of files, which imposes upper limits on scalability. | DynamoDB is designed to scale out using distributed clusters of hardware. This design allows increased throughput without increased latency. Customers specify their throughput requirements, and DynamoDB allocates sufficient resources to meet those requirements. There are no upper limits on the number of items per table, nor the total size of that table. |


## Differences between SQL and NoSQL

| | SQL Databases | NoSQL Databases |
| ------ | ------ | ----- |
| Data Storage Model | Tables with fixed rows and columns | Document: JSON documents, Key-value: key-value pairs, Wide-column: tables with rows and dynamic columns, Graph: nodes and edges |
| Development History | Developed in the 1970s with a focus on reducing data duplication | Developed in the late 2000s with a focus on scaling and allowing for rapid application change driven by agile and DevOps practices. |
| Examples | Oracle, MySQL, Microsoft SQL Server, and PostgreSQL | Document: MongoDB and CouchDB, Key-value: Redis and DynamoDB, Wide-column: Cassandra and HBase, Graph: Neo4j and Amazon Neptune |
| Primary Purpose | General purpose | Document: general purpose, Key-value: large amounts of data with simple lookup queries, Wide-column: large amounts of data with predictable query patterns, Graph: analyzing and traversing relationships between connected data |
| Schemas | Rigid | Flexible |
| Scaling | Vertical (scale-up with a larger server)| Horizontal (scale-out across commodity servers) |
| Multi-Record ACID Transactions | Supported | Most do not support multi-record ACID transactions. However, some—like MongoDB—do. |
| Joins | Typically required | Typically not required |
| Data to Object Mapping | Requires ORM (object-relational mapping) | Many do not require ORMs. MongoDB documents map directly to data structures in most popular programming languages. |

## Author and Acknowledgment

- [@gafur-demirci](https://github.com/gafur-demirci)

## Feedback

If you have any feedback, please contact us at [mailto:gafur-demirci](gafur.gs.68@gmail.com).

##### Useful Links

- [Condition Expressions - Amazon DynamoDB][awsDoc2]
- [Step 4: Query and Scan Data with AWS SDK for JavaScript in DynamoDB][awsDoc1]
- [AWS DynamoDB Query - Part #3 (Lab2: aws-sdk with NodeJS)][youtube1]
- [Crud-with-Dynamodb-Using-Serverless-and-Nodejs][devswisdom]
- [Relational (SQL) or NoSQL?][awsDoc3]
- [NoSQL vs SQL Databases][mongo]

[devswisdom]: <https://devswisdom.com/crud-with-dynamodb-using-serverless-and-nodejs/>
[youtube1]: <https://www.youtube.com/watch?v=88mKHBFZbwM&t=868s>
[awsDoc1]: <https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/GettingStarted.NodeJs.04.html>
[awsDoc2]: <https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ConditionExpressions.html>
[awsDoc3]: <https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/SQLtoNoSQL.WhyDynamoDB.html>
[mongo]: <https://www.mongodb.com/nosql-explained/nosql-vs-sql>
