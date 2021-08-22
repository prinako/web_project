const mongoose = require('mongoose');
const Schema = mongoose.Schema;

function MongoDB() {
    mongoose.connect(process.env.ULR, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('conneted to mongoDB');
        }
    })
};

const news = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    photos: {
        imageType: {
            type: String,
            required: true
        },
        imageBase: {
            type: String,
            required: true
        }
    }
},
    {
        timestamps: true
    });

const News = mongoose.model('article', news)

module.exports = { MongoDB, News }