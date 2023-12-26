/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SignInDto } from '../models/SignInDto';
import type { SignUpDto } from '../models/SignUpDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthenticationService {

    /**
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public static authenticationControllerSingUp(
requestBody: SignUpDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/authentication/sign-up',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * @param requestBody 
     * @returns any 
     * @throws ApiError
     */
    public static authenticationControllerSingIn(
requestBody: SignInDto,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/authentication/sign-in',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
