interface Mainuser{
    readonly databaseid: number;
    email: string;
    UserId: string,
    googleId?: string;
    startTrial(): string;// This is an example of a method inside an interface and showing what it will return.
}

const Dav: Mainuser = 
{
 databaseid: 1234,
 email: 'dav12@gmail.com', 
 UserId: 'dav123',
 startTrial: () => {
     return 'Trial started';
 }
};