const request = require("supertest");
const formurlencoded = require('form-urlencoded').default;
const app = require('../app');

const USER_OBJECT =  expect.objectContaining({
    id: expect.any(Number),
    first_name: expect.any(String),
    last_name: expect.any(String)
});

let userID = 1;

const getData = (params = {}) => {
    return {
        first_name: params.first_name || "Nahiyan",
        last_name: params.last_name || "Bin Nazmul"
    }
};

describe('User Routes', () => {
    test('Add New User', async () => {
        const response = await request(app).post('/user/add').send(formurlencoded(getData()));

        expect(response.statusCode).toEqual(200);
        expect(typeof response.body).toBe('object');
        expect(response.body).toEqual(getData());
    });

    test('List of user', async () => {
        const response = await request(app).get('/user/'+userID);

        expect(response.statusCode).toEqual(200);
        expect(response.body.length).not.toBe(0);
        expect(typeof response.body).toBe('object');
        expect(response.body).toMatchObject(USER_OBJECT);
    });

    test('Update an User', async () => {
        const response = await request(app).put('/user/'+userID).send(formurlencoded(getData()));

        expect(response.statusCode).toEqual(200);
        expect(typeof response.body).toBe('object');
        expect(response.body).toMatchObject(USER_OBJECT);
    });

    test('Delete an User', async () => {
        const response = await request(app).delete('/user/'+userID);

        expect(response.statusCode).toEqual(200);
        expect(typeof response.body).toBe('object');
        expect(response.body.msg).toBe('Successfully removed user id: ' +userID);
    });
});