const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database-connected');
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 300; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      //YOUR USER ID
      author: '6044d78d94ad8722048edeb4',
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cumque deserunt in qui voluptates expedita delectus impedit fugiat, quis perspiciatis.',
      price,
      geometry: {
        type: 'Point',
        coordinates: [
          cities[random1000].longitude,
          cities[random1000].latitude,
        ],
      },
      images: [
        {
          url:
            'https://res.cloudinary.com/dverrr7jb/image/upload/v1615405277/YelpCamp/tpe6uvrbt4ekjc9clzyi.jpg',
          filename: 'YelpCamp/tpe6uvrbt4ekjc9clzyi',
        },
        {
          url:
            'https://res.cloudinary.com/dverrr7jb/image/upload/v1615405270/YelpCamp/rgbdvmvdtayziermir0d.jpg',
          filename: 'YelpCamp/rgbdvmvdtayziermir0d',
        },
      ],
    });
    await camp.save();
  }
};

seedDB().then(() => {
  db.close();
});
