exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const users = [
    {
      username: "lead",
      password: "salesman",
      department: "sales",
    },
    {
      username: "head",
      password: "accountant",
      department: "accounting",
    },
  ];

  return knex("users")
    .insert(users)
    .then(() => console.log("\n== Seed data for users table added. ==\n"));
};
