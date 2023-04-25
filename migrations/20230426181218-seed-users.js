const exampleUser = {
  name: "Example User",
  email: "user@example.com",
};

module.exports = {
  async up(db) {
    await db.collection("users").insertOne(exampleUser);
  },

  async down(db, client) {
    await db.collection("users").deleteOne({ email: exampleUser.email });
  },
};
