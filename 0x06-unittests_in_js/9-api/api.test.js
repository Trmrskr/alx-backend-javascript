const request = require('request');
const { expect } = require('chai');
const API_URL = 'http://localhost:7865';

describe('API integration test for /', () => {

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Integration test for Cart page', () => {
  it('Correct status code when id is a number', (done) => {
    request.get(`${API_URL}/cart/12`, (_err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it('Correct content for correct id', (done) => {
    request.get(`${API_URL}/cart/12`, (_err, res, body) => {
      expect(body).to.contain("Payment methods for cart 12");
      done();
    });
  });
  it('Correct status code for incorrect url', (done) => {
    request.get(`${API_URL}/cart/Tam`, (_err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
