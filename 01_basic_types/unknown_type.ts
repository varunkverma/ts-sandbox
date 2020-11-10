let userUnkownInput: unknown;
let userAnyInput;
let userName: string;

userUnkownInput = 5;
userUnkownInput = 'Max';
// userName = userUnkownInput; // error as an unknown type cannot be sure to be of correct type
userAnyInput = 5;
userAnyInput = 'Max';
userName = userAnyInput; // works fine

// Note: any is the most flexible type which disables any type-checking. unknown is restrictive in that context. User need to do explicit type-checking
if (typeof (userUnkownInput) === 'string') {
    userName = userUnkownInput;
}