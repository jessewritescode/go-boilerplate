
import axios from 'axios';
import { handleRequests } from '@redux-requests/core';
import { createDriver } from '@redux-requests/axios';

export const { requestsReducer, requestsMiddleware } = handleRequests({
	driver: createDriver(axios),
});

