﻿# CRUD Operations with Node.js and Amazon DynamoDb

In this study, the products table was created in Amazon Dynamodb and the contents of the table were added in the format specified below.

With the getAllProducts method, all the data in the table was pulled from the http://localhost:5000/products (GET) url.

With the getById method, the product with the id written to the http://localhost:5000/products/product/id (GET) url is brought.

With the getByDiscount method, products with the isDiscount value of true are brought with the http://localhost:5000/products/isDiscount (GET) url.

With the createProduct method, the product is added to the table by sending the http://localhost:5000/products (POST) url and the json format below in the body.

With the updateProduct method, http://localhost:5000/products/id (PUT) The stock value of the product, whose url and id value is given as params, is given in the body in json format and the product stock value is updated.

If the isDiscount value is false, the product whose id value is given with the http://localhost:5000/products/id (DELETE) url with the deleteProduct method is not deleted.

The node.js packages used are listed below. You can find the documentation links of the relevant packages at the end of the article.


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

## Author and Acknowledgment

- [@gafur-demirci](https://github.com/gafur-demirci)

## Feedback

If you have any feedback, please contact us at [mailto:gafur-demirci](gafur.gs.68@gmail.com).
