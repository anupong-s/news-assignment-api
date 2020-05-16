# Installation
This assumes that you’re using npm package manager and nodejs version 10+ or 12. This project use nodejs and typescript for develop.

### 1. Create Database
- Install MySQL Database on your machine.
- Install MySQL WorkBench on your machine.
- Execute script for create database and table in database folder on this project (news-assignment.sql).

### 2. Configuration
This API use ***.env*** file for configuration of the database and server port.
- Database configuration

```
DB_HOST=<host-name>
DB_DB=<database-name>
DB_USERNAME=<username>
DB_PASSWORD=<password>
```
DB_HOST: default is 'localhost'

### 3. Build and install package
- Install package for this project
```
$ npm install
```
- Compile typescript and build swagger (When you've change the code, You need to always run this script).
```
$ npm run tsoa:gen
```
- Run API
```
npm start
```
- if no error you will see below message.
```
Server is running on host localhost port 7000
```
# API Specification
- In the postman folder, You can import collection and test this API.
- You can access swagger for see the structure of API but cannot execute.
```
http://localhost:7000/api-doc
```
