const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../src/server.js');
const User = require('../src/models/User.js');
const Client = require('../src/models/Client.js');
const bcrypt = require('bcryptjs');
require('dotenv').config();

jest.setTimeout(30000);

const validUser = {
  username: 'user',
  password: '1234'
};

const validClient = {
  "Name": "Bonnie�",
  "Lastname": "Olsen",
  "Age": 21,
  "Latitude": 57,
  "Longitude": -78
};

const postClients = async (body) => {
  let agent = request(app);

  await agent.post('/api/auth').send(validUser);
  const userResponse = await agent.post('/api/auth/login').send({ username: validUser.username, password: validUser.password });
  const token = userResponse.body.token;

  agent = request(app).post('/api/client');

  if (token) {
    agent.set('x-auth-token', token);
  }

  return agent.send(body);
};

const getClients = async () => {

  let agent = request(app);

  const userResponse = await agent.post('/api/auth/login').send({ username: validUser.username, password: validUser.password });
  const token = userResponse.body.token;

  agent = request(app).get('/api/client');

  if (token) {
    agent.set('x-auth-token', token);
  }

  return agent.send();
}

const getOneClient = async (id) => {

  let agent = request(app);

  const userResponse = await agent.post('/api/auth/login').send({ username: validUser.username, password: validUser.password });
  const token = userResponse.body.token;


  agent = request(app).get(`/api/client/${id}`);

  if (token) {
    agent.set('x-auth-token', token);
  }

  return agent.send()
}

const putClient = async (id, body) => {

  let agent = request(app);

  const userResponse = await agent.post('/api/auth/login').send({ username: validUser.username, password: validUser.password });
  const token = userResponse.body.token;

  agent = request(app).put(`/api/client/${id}`);
  if (token) {
    agent.set('x-auth-token', token);
  }

  return agent.send(body)
}

const removeClient = async (id) => {

  let agent = request(app);

  const userResponse = await agent.post('/api/auth/login').send({ username: validUser.username, password: validUser.password });
  const token = userResponse.body.token;


  agent = request(app).delete(`/api/client/${id}`);

  if (token) {
    agent.set('x-auth-token', token);
  }

  return agent.send();
}

beforeAll(async () => {
  return await mongoose.connect(process.env.DB_MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
});

afterAll(async () => {
  return await mongoose.disconnect();
});

describe('Clients routes', () => {

  it('returns added message', async () => {
    const response = await postClients(validClient);
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Successfully added!');
  });

  it('returns array of clients', async () => {
    const response = await getClients();
    expect(Array.isArray(response.body.clients));
    expect(response.body.clients.length).toBeGreaterThan(0);
  });

  it('returns updated client', async () => {
    const response = await getClients();
    const id = response.body.clients[0]._id;
    const updatedClient = await putClient(id, validClient);
    expect(updatedClient.body.client);
  });

  it('returns selected client', async () => {
    const response = await getClients();
    const id = response.body.clients[0]._id;
    const selected = await getOneClient(id);
    expect(selected.body.client);
  });

  it('return removed message', async () => {
    const response = await getClients();
    const id = response.body.clients[0]._id;
    const removed = await removeClient(id);
    expect(response.status).toBe(200);
    expect(removed.body.message).toBe('Element removed');
  })
})
