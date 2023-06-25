import axios from "axios";
import { BaseApi, ClientRequest } from "../../src/api/api";
import { Client } from "../../src/types/client";

jest.mock('axios')
const mockedAxios = jest.mocked(axios)

describe('BaseApi', () => {
    let baseApi: BaseApi;
    const client = {
        getConfig: () => ({
            accessToken: 'testToken'
        })
    } as Client;

    beforeEach(() => {
        baseApi = new BaseApi(client);
    });

    describe('request', () => {
        it('should return data on successful request', async () => {
            const req: ClientRequest = {
                url: '/movie',
                method: 'GET'
            };
            const data = { message: 'test' };
            mockedAxios.mockResolvedValueOnce({ data })
            const responsePromise = baseApi['request'](req)
            const response = await responsePromise.then(x => x)
            await expect(response).toEqual(data)
        });

        it('should throw an ApiError on failed request', async () => {
            const req: ClientRequest = {
                url: '/test',
                method: 'GET'
            };
            mockedAxios.mockRejectedValue({ status: 401 })
            const responsePromise = baseApi['request'](req);
            expect(responsePromise).rejects.toThrowError();
        });
    });
});
