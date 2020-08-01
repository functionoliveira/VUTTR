'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Tools', [{
      "title": "Notion",
      "link": "https://notion.so",
      "description": "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
      "createdAt" : new Date(),
      "updatedAt" : new Date()
    },
    {
      "title": "json-server",
      "link": "https://github.com/typicode/json-server",
      "description": "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
      "createdAt" : new Date(),
      "updatedAt" : new Date()
    },
    {
      "title": "fastify",
      "link": "https://www.fastify.io/",
      "description": "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
      "createdAt" : new Date(),
      "updatedAt" : new Date()
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
