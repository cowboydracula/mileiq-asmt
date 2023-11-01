describe('Login API', () => {
    it('login with valid creds', () => {
      cy.request('POST', '/api/login', {
        username: 'vUser',
        password: 'vPword'
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('token');
      });
    });
  
    it('no login with invalid creds', () => {
      cy.request({
        method: 'POST',
        url: '/api/login',
        body: {
          username: 'invUser',
          password: 'invPassword'
        },
        failOnStatusCode: false
      }).then((response) => {
        expect(response.status).to.eq(401);
      });
    });
  });