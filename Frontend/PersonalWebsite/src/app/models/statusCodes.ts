//Info Codes (100-199)
export enum InfoCodes {
    info_1 = -1,
    info_2 = -1,
    info_3 = -1,
}

//Successful Codes (200-299)
export enum SuccessCodes {
    success_1 = 200, //OK
    success_2 = 201, //CREATED
    success_3 = 202, //ACCEPTED
}

//Redirect Codes (300-399)
export enum RedirectCodes {
    redirect_1 = -1,
    redirect_2 = -1,
    redirect_3 = -1,
}

//Error Codes (400-499)
export enum ErrorCodes {
    error_1 = 0,   //My code for no response
    error_2 = 400, //BAD REQUEST
    error_3 = 401, //UNAUTHORIZED
    error_4 = 403, //FORBIDDEN
    error_5 = 404, //NOT FOUND
    error_6 = 405, //METHOD NOT ALLOWED
    error_7 = 406, //NOT ACCEPTABLE
    error_8 = 407, //PROXY AUTHENTICATION REQUIRED
    error_9 = 408, //REQUEST TIMEOUT
}

//ServerError Codes (500-599)
export enum ServerErrorCodes {
    serverError_1 = -1, //My code for no response
    serverError_2 = -1,
    serverError_3 = -1,
}