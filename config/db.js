const config = require('config');
const mongoose = require('mongoose');

const MONGO_URI = config.get('mongoURI');

const connectDB = async () => {
	try {
		await mongoose.connect(MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		});
		console.log('MongoDB Connected')
	} catch (error) {
		console.error(error);
		process.exit(1)
	}

}

module.exports = connectDB;