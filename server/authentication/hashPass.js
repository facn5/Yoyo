const bcrypt = require('bcrypt');

const saltRounds = 10;

exports.hashMe = async (myPlaintextPassword) => {
  try {
    return await bcrypt.hash(myPlaintextPassword, saltRounds);
  } catch (err) {
    throw new Error('Hashing error');
  }
};
