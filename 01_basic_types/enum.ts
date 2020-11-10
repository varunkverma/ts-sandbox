enum Role{
    ADMIN,
    READ_ONLY,
    AUTHOR,
}

const person:{
    name: string;
    age: number;
    hobbies: string[];
    role: Role;
} = {
    name: 'Max',
    age: 30,
    hobbies: ['fishing','cooking'],
    role: Role.AUTHOR
};

console.log(person)