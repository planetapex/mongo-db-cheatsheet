<p align="center">
  <a href="" rel="noopener">
<img src='https://dummyimage.com/200x200/000000/FFFFFF.png?text=planetapex' width=200px height=200px  alt=''style="border-radius:50%" /></a>
</p>



<h2 align="center">
Mongo DB Getting started in 3 easy Steps <!-- omit in toc --> </h2>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/planetapex/mongo-db-cheatsheet.svg)](https://github.com/planetapex/mongo-db-cheatsheet/issues)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/planetapex/mongo-db-cheatsheet.svg)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> 

## 🧐 About <a name = "about"></a> <!-- omit in toc --> 


This is quick start for developers who want to be up and running in no time.

The 3 steps:
- Setting up the environment, MongoDB Server, ***installing locally[recommended]***
- Seeding Sample dataset using this ***repository[recommended]***
- MongoDB shell cheat sheet, to Start Practicing the commands.
    <br> 
</p>

## 📝 Table of Contents <!-- omit in toc --> 

- [🏁 Getting Started <a name = "getting_started"></a>](#%f0%9f%8f%81-getting-started)
- [1. 🔧 Setting up the environment](#1-%f0%9f%94%a7-setting-up-the-environment)
  - [Installing Mongo DB locally on the system  [Recommended]](#installing-mongo-db-locally-on-the-system-recommended)
    - [Windows, install using chocolatey](#windows-install-using-chocolatey)
    - [Windows, install using scoop](#windows-install-using-scoop)
  - [Using the on-line database-as-a-service(daas) of Mongo DB](#using-the-on-line-database-as-a-servicedaas-of-mongo-db)
  - [Other Hosting mongo DB instance on-line e.g. AWS etc.](#other-hosting-mongo-db-instance-on-line-eg-aws-etc)
  - [MongoDB on-line REPL](#mongodb-on-line-repl)
- [2. 🚀 Sample Seed Data-set](#2-%f0%9f%9a%80-sample-seed-data-set)
  - [Using this repository to seed dynamic dataset [Recommended]](#using-this-repository-to-seed-dynamic-dataset-recommended)
    - [summary of all the commands](#summary-of-all-the-commands)
  - [Other datasets available to seed data](#other-datasets-available-to-seed-data)
    - [Sample JSON files](#sample-json-files)
    - [Sample Northwind Database](#sample-northwind-database)
    - [MongoDb Documentation datasets](#mongodb-documentation-datasets)
    - [dbkoda](#dbkoda)
- [3. 🎈MongoDB shell cheat sheet, to Start Practicing the commands.](#3-%f0%9f%8e%88mongodb-shell-cheat-sheet-to-start-practicing-the-commands)
- [⛏️ Built Using <a name = "built_using"></a>](#%e2%9b%8f%ef%b8%8f-built-using)
- [✍️ Authors <a name = "authors"></a>](#%e2%9c%8d%ef%b8%8f-authors)



## 🏁 Getting Started <a name = "getting_started"></a>

While following along the guide, I recommend to install MongoDB locally on the system and use this repository to seed data. So that the we can follow the examples using the cheat sheet provided.



## 1. 🔧 Setting up the environment

In order to work with mongo db we need to setup an environment.

We need access to a Mongo DB server.
 - Installing Mongo DB locally on the system **[Recommended]**
  - Using the on-line database-as-a-service(daas) Mongo DB 
 - Other Hosting mongo DB instance on-line e.g. AWS etc.
 - MongoDB on-line REPL
  


### Installing Mongo DB locally on the system  [Recommended]
There is a community edition that we can install for free.
The original documentation shows how to install on each system, macOS, Windows and Linux systems. 
[MonoDB installation](https://docs.mongodb.com/manual/administration/install-community/)

Here are a few points worth mentioning:
- In Windows we can install the MongoDB server as a service, so it can automatically run on Windows load.
- In Windows, we can also use chocolatey or scoop to install it.
#### Windows, install using chocolatey 

https://medium.com/@zibon/installing-mongodb-in-Windows-like-ubuntu-5d6d2285dac6

#### Windows, install using scoop
Here is the one for scoop:

https://gist.github.com/basir/a812d6870c12d8bd2d53981bbeeefa7c



### Using the on-line database-as-a-service(daas) of Mongo DB
MongoDB provides on-line database service as Atlas. We can sign-up for free to get a dabatase instance.

 [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) OR
 [MongoDB Atlas from mlab, 512-Mb free space.](https://www.mongodb.com/atlas-signup-from-mlab) 

###  Other Hosting mongo DB instance on-line e.g. AWS etc.

We can refer to this article to see what options we got to host your own mongo DB server.
[cheap-free-mongodb-hosting](https://studio3t.com/knowledge-base/articles/cheap-free-mongodb-hosting/)


### MongoDB on-line REPL

Here are a few worth mentioning:

https://www.jdoodle.com/online-mongodb-terminal/
https://www.mplay.run/mongodb-online-terminal
https://mongoplayground.net/


## 2. 🚀 Sample Seed Data-set


If we need some comprehensive, dynamic dataset we can use either of the following:

### Using this repository to seed dynamic dataset [Recommended]

Here is a summary of all the commands, However, read all to complete the configuration before using these commands.
 #### summary of all the commands

```javascript
clone https://github.com/planetapex/mongo-db-cheat sheet.git
npm install
node seed1.js
```

We can create our own datasets in a matter of minutes, just read about faker.js and make changes in seed1.js.

However, to get along the examples set out, please use the dataset as it is:


Clone the repository using:
```javascript
clone https://github.com/planetapex/mongo-db-cheat sheet.git
```

Goto the repository directory on your system and run the following command:

```javascript
npm install
```
This will install all the necessary npm packages.

Now, we need to configure our db string in order to connect to the database and seed the data.


Edit the file in config.db.js and put the relevant configuration:

Lastly, there is a variable **noOfRecords** defined for the number of documents to generate. Initially its value is set to 10,000. You can change it to your liking. However, A very high number in the millions would take some time to process, so please be patient.


The repository contains 3 files for seeding the data. All the 3 files seed the same data. So, We can use any one of them.
Run any one of the following commands to seed the data.
```javascript
node seed1.js
node seed2.js
node seed3.js
```


### Other datasets available to seed data

There are plenty of data available for use as a sample dataset:

checkout the following for an idea:
[Question for MongoDB datasets](https://stackoverflow.com/questions/5723896/is-there-a-sample-mongodb-database-along-the-lines-of-world-for-mysql)

#### Sample JSON files

Clone or Get the JSON file from the following repository,
[MongoDB sample JSON files](https://github.com/ozlerhakan/mongodb-json-files) and run the following command:
```javascript
mongoimport --db test --collection zips --file d:\sample\zips.json
```
#### Sample Northwind Database

Clone this repository [Northwind CSV db](https://github.com/tmcnab/northwind-mongo)

In Windows Powershell, Go to the repository directory and run the following commands:
```powershell
Get-ChildItem "E:\temp\nw" -Filter *.csv | `
Foreach-Object {
    C:\Program_Files\MongoDB\Server\4.2\bin\mongoimport.exe -h localhost:55000 -d northwind -c $_.BaseName --type csv --file $_.FullName --headerline 
}
```
NB: The options -h localhost:55000 -d northwind, is the db string pieces.


#### MongoDb Documentation datasets

Ususally, when you follow the examples on mongo DB documentation website, they provide you with some dataset to work with.


The original documentation even gives sample dataset to work with:

[Bios collection ](https://docs.mongodb.com/manual/reference/bios-example-collection/)

[Find() using bios collection]([URL/URI](https://docs.mongodb.com/manual/reference/method/db.collection.find/index.html#definition))


#### dbkoda 

https://medium.com/dbkoda/mongodb-sample-collections-52d6a7745908


## 3. 🎈MongoDB shell cheat sheet, to Start Practicing the commands.

Go to the mongo db bin folder and , 
- If mongo db server is installed on local system, just type monogo and we will be connected.
- If using a [database-as-a-service(daas)instance wanting to connect using mongo shell](https://dba.stackexchange.com/questions/234715/how-to-connect-to-mongodb-atlas-from-command-line)


Here is the cheat sheet to get started in no time.

[MongoDB Shell cheat sheet](https://gist.github.com/planetapex/4e7560f2f01ea9cb62784ccee58c310c)





## ⛏️ Built Using <a name = "built_using"></a>
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [MongoDB](https://www.mongodb.com/) - Database
- Moongoose 
- Faker.js
- lodash
- perfy
  



## ✍️ Authors <a name = "authors"></a>

- M.Yasir Ali Shah[@planetapex](https://github.com/planetapex) - Idea & Initial work














