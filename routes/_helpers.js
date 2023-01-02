function generateRandomString() {
  let result = "";
  const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwyxz1234567890";
  const length = char.length;
  for (i = 0; i < 6; i++) {
    result += char.charAt(Math.floor(Math.random() * length));
  }
  return result;
}

const userKey = (email, users) => {
  for (let key in users) {
    if (users[key].email === email) {
      return users[key].id;
    }
  }
};

const emailFind = (email, users) => {
  for (let key in users) {
    if (users[key].email === email) {
      return users[key].email;
    }
  }
};

module.exports = { generateRandomString, userKey, emailFind };
