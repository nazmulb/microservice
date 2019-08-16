/*
    Need to run app using `npm start` before test.
*/

const rp = require("request-promise");

const BASE_URL = "http://localhost:8082";

const getUrl = (route) => {
    return BASE_URL+route;
};

const USER_OBJECT =  expect.objectContaining({
    id: expect.any(Number),
    first_name: expect.any(String),
    last_name: expect.any(String)
});

let userID = 1;

const getFormData = (params = {}) => {
    return {
        first_name: params.first_name || "Nahiyan",
        last_name: params.last_name || "Bin Nazmul"
    }
};

const getData = (params = {}) => {
    let form = {
        ...getFormData(params)
    };
    
    return {
        ...commonOptions(),
        form
    }
};

const commonOptions = () => {
    return {
        json: true,
        resolveWithFullResponse: true,
    }
};

describe('User Routes', () => {
    test('Add New User', async () => {
        const response = await rp.post(getUrl('/user/add'), getData());

        expect(response.statusCode).toEqual(200);
        expect(typeof response.body).toBe('object');
        expect(response.body).toEqual(getFormData());
    });

    test('List of user', async () => {
        const response = await rp.get(getUrl('/user/'+userID), commonOptions());

        expect(response.statusCode).toEqual(200);
        expect(response.body.length).not.toBe(0);
        expect(typeof response.body).toBe('object');
        expect(response.body).toMatchObject(USER_OBJECT);
    });

    test('Update an User', async () => {
        const response = await rp.put(getUrl('/user/'+userID), getData());

        expect(response.statusCode).toEqual(200);
        expect(typeof response.body).toBe('object');
        expect(response.body).toMatchObject(USER_OBJECT);
    });

    test('Delete an User', async () => {
        const response = await rp.delete(getUrl('/user/'+userID), commonOptions());

        expect(response.statusCode).toEqual(200);
        expect(typeof response.body).toBe('object');
        expect(response.body.msg).toBe('Successfully removed user id: ' +userID);
    });
});