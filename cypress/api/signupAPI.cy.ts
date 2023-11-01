describe('Signup API', () => {
    it('creates new user', () => {
      cy.request('POST', '/api/signup', {
        username: 'newuser',
        password: 'password123',
        email: 'newuser@example.com'
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('userId');
      });
    });
  
    it('no new user with existing username', () => {
      cy.request({
        method: 'POST',
        url: '/api/signup',
        body: {
          username: 'existinguser',
          password: 'password123',
          email: 'existinguser@example.com'
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(400);
      });
    });
  });