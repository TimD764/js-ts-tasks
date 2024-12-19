class User {
  #firstName;
  #secondName;
  #age;
  constructor(firstName, secondName, age) {
    if (typeof firstName != 'string') {
      throw new Error('Username must be a string' + typeof firstName);
    }
    if (typeof secondName != 'string') {
      throw new Error('secondname must be a string' + typeof secondName);
    }
    if (typeof age != 'number') {
      throw new Error('Age must be a number))))');
    }
    this.#firstName = firstName;
    this.#secondName = secondName;
    this.#age = age;
  }
  get age() {
    return this.#age;
  }
  set age(newAge) {
    if (typeof newAge != 'number') {
      throw new Error('Age must be a number');
    }
    this.#age = newAge;
  }
  set firstName(newName) {
    if (typeof newName != 'string') {
      throw new Error('Name must be a string');
    }
    this.#firstName = newName;
  }
  set secondName(newName) {
    if (typeof newName != 'string') {
      throw new Error('Name must be a string');
    }
    this.#secondName = newName;
  }
  get name() {
    return this.#firstName + ' ' + this.#secondName;
  }
  introduce() {
    return `My name is ${this.#firstName} ${this.#secondName}, I'm ${this.#age}`;
  }
  celebrateBirthday() {
    this.#age++;
  }
}

/**
 * Create a class named User
 * @type {User}
 */
module.exports.User = User;

/**
 * Create new User object and return it
 * @param {string} firstName
 * @param {string} secondName
 * @param {number} age
 * @returns {User}
 */
module.exports.createUser = function (firstName, secondName, age) {
  return new User(firstName, secondName, age);
};

/**
 * Create Array of Users by provided Array with user data (firstName, secondName, age)
 * @param {Array<{ firstName, secondName, age }>} data
 * @returns {Array<User>}
 */
module.exports.createUsers = function (userArray) {
  return userArray.map(row => {
    return new User(row.firstName, row.secondName, row.age);
  });
};

/**
 * Find Users in Array of Users who's age equals the provided age
 * @param {Array<Users>} users
 * @param {number} age
 * @returns {Array<Users>}
 */
module.exports.findUsersByAge = function (users, age) {
  
  return users.filter(user => {
    let a = user.age == age;
    //console.log(a)
    return a
  });
};

/**
 * Return a function that sort provided Array of Users using a comparator function from TestUtils
 * @param TestUtils
 * @returns {function(*): *[]}
 */
module.exports.createUsersSortFn = function (TestUtils) {
  return array => {
    return array.sort(TestUtils.sortComparatorByAge);
  };
};

/**
 * In Array of Users every User under odd index in Array should celebrate his birthday
 * @param {Array<User>} users
 * @return {Array<User>}
 */
module.exports.celebrate = function (users) {
  users.map((user, i) => {
    if (i % 2 == 0) {
      user.celebrateBirthday();
    }
    return user;
  });
  //console.log(users)
  return users;
};