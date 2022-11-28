// testing express get route
const request = require("supertest");

const app1 = require("../src/server/server");



describe('Test get', () => {
  test('Get should work', () => {
    console.log(app1);
    return request(app1.app)
      .get('/test')
      .then(res => {
        expect(res.statusCode).toBe(200);
      })
  })
  app1.server.close();
})

