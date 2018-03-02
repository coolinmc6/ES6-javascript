function User(id) {
  this.id = id;
};

function generateId() {
  return Math.floor(Math.random() * 9999999999);
};

function createAdminUser(user = new User(generateId())) {
  user.admin = true;
  return user;
};

// Instead of doing:
createAdminUser(new User(generateId()))

// I can just do this:
createAdminUser()