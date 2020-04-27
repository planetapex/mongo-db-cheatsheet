var perfy = require('perfy');
var tickGenRecs, tickDbInsert;
const config = require('./config.db');
const dbString = config.mongodb.dbURL();
var faker = require('faker');
var _ = require('lodash');
var mongoose = require('mongoose');
var Schema = mongoose.Schema();
var noOfRecs = 10000;








console.log('Process started...');
generateRecords(noOfRecs).then(arr => {
    // console.log(data);
    runMongoDB(arr);
    
 
});


async function generateRecords(numberOfRecords) {
   

    return await new Promise((res, rej) => {
        try {
            perfy.start('generateRecords');
            var arr = _.times(numberOfRecords, function (n) {
                return {
                    firstName: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    email: faker.internet.email(),
                    age: faker.random.number({
                        min: 25,
                        max: 50,
                        precision: 2
                    }),
                    active: faker.random.boolean(),
                    tags:  _.times(faker.random.number({
                            min: 2,
                            max: 6
                        }), function (n) {
                            return  faker.random.word()
                            
                        }),
                    post: faker.lorem.paragraphs(3),
                    comments:
                        _.times(faker.random.number({
                            min: 2,
                            max: 3
                        }), function (n) {
                            return {
                                user: faker.internet.userName(),
                                comment: faker.lorem.paragraph(),
                                date: faker.date.past()
                            }
                        })
                };
            });
            
            tickGenRecs  = perfy.end('generateRecords');
            console.log('generateRecords took ',tickGenRecs.time); // —> 1.459 (sec.)
            res(arr);
        } catch (err) {
            rej(err);
        }

    })

    // console.log(arr);
}


function runMongoDB(arr) {



    console.log('connectiong to database...');
    mongoose.connect(dbString, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('database connected successfully...');

    try {
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));

      
        console.log('cleaning db...');
        db.dropCollection('posts');
        console.log('cleaning db done.');



        var Schema = mongoose.Schema({

            _id: {
                type: mongoose.Schema.Types.ObjectId, //Schema.ObjectId
                auto: true
            },

            firstName: {
                type: String
            },
            lastName: {
                type: String
            },
            email: {
                type: String
            },
            age: {
                type: Number
            },
            active:   {
                type: Boolean
            },
            tags : {
                type: Array
            },
            post: {
                type: String
            },
            comments: [{
                user: {
                    type: String
                },
                comment: {
                    type: String
                },
                date: {
                    type: Date
                }
            }
            ]
        }

        );
        //bind an Constructor Person to personSchema
        var Model = mongoose.model('Post', Schema);




        // var a1 =
        db.once('open', function () {
              perfy.start('DBInserts');
            Model.insertMany(arr).then((docs) => {
               tickDbInsert =   perfy.end('DBInserts');
                console.log(`DBInsert took ${tickDbInsert.time}`);
                mongoose.connection.close();
                console.log('successfully inserted');
            }).catch((err) => {
                console.log(err);
            });
        });

    } catch (error) {
        console.log(error.stack);
    }

}





















