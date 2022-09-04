import supertest from 'supertest';

import { app } from './app';

describe('Express app', () => {
  describe('Routing', () => {
    it('should return `Serverless + Slack` when GET index', async () => {
      const response = await supertest(app).get('/');

      expect(response.statusCode).toEqual(200);
      expect(response.body.msg).toEqual('Serverless + Slack');
    });

    it('should return `ok` when GET health check', async () => {
      const response = await supertest(app).get('/health');

      expect(response.statusCode).toEqual(200);
      expect(response.body.msg).toEqual('ok');
    });

    it('should return `NOT FOUND` when GET a not found route', async () => {
      const response = await supertest(app).get('/random-page');

      expect(response.statusCode).toEqual(404);
      expect(response.body.error).toEqual('NOT FOUND');
    });
  });
});
