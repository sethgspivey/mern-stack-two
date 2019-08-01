require('dotenv').config();

module.exports = {
  mongoURI: "mongodb+srv://process.env.MONOGDB_USER:process.env.MONGODB_PASS@scriptco-data-8499i.mongodb.net/Scriptco_Dataset?retryWrites=true&w=majority", secretOrKey: "secret"
};