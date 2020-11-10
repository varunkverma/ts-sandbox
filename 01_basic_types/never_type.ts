// never is another type function can return, in case a funtction should never return anything. It's just for code-quality or to make code more meaningful

function generateError(message: string, code: number): never {
    throw {
        message,
        errorCode: code
    };
}
generateError('An error occured', 500);