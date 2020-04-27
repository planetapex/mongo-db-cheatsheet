var faker = require('faker');
var _ = require('lodash');
var mongoose = require('mongoose');
var Schema = mongoose.Schema();
const config = require('./config.db');
const dbString = config.mongodb.dbURL();
var noOfRecords = 10000;
var db, postSchema, PostModel, Post, collection;
var ModelName = 'Post';
const perfy = require('perfy');
var tickGenRecs, tickDbInsert, tickTotal;


perfy.start('totalTime');
populateDB();


async function populateDB  ()  {
    try {
        db = mongoose.connection;
        console.log('connectiong to database...');
        await mongoose.connect(dbString, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('database connected successfully...');
        await init(noOfRecords);
        tickTotal = await   perfy.end('totalTime');
        console.log(`Total time taken ${tickTotal.time}`);
        
          
        
       
        

    } catch(err) {
        console.log(err);
    }


};





//Create a Model first

async function createModel() {
     postSchema = mongoose.Schema({
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
    Post = mongoose.model(ModelName, postSchema);
   

}







function generateRecords(numberOfRecords) {
    //generate array of Objects = documents fot the collection
    // without lodash

    perfy.start('generateRecords');
   

    var docs = _.times(numberOfRecords, function (n) {
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


    tickGenRecs =   perfy.end('generateRecords');
    console.log(`generateRecords took ${tickGenRecs.time}`);
    perfy.start('DBInserts');
    //if many collections => Promise.all(Post.insertMany(postDocs), User.insertMany(userDocs));
    return Promise.all([Post.insertMany(docs), {}]);

    // console.log(arr);
}


async function init(noOfRecords) {

    console.log('cleaning db...');
    await createModel();
    // await Promise.all(Post.deleteMany({}), {});
    // await db.dropCollection(`${ModelName.toLowerCase()}s`);
    console.log('cleaning db done.');

    console.log(`Populating database with ${noOfRecords}...`);
    perfy.start('DBInserts');
    await generateRecords(noOfRecords).then((docs) => {
        tickDbInsert =   perfy.end('DBInserts');
        console.log(`DBInsert took ${tickDbInsert.time}`);
        mongoose.connection.close();
        console.log('successfully inserted');
    });
    console.log(`Populated database with ${noOfRecords}  finished.`);


}



























