interface Database{
    connection: string;
    username: string;
    password: string;
}

function createDatabase<T, U extends Database>(ValueOne: T, ValueTwo: U): object{
    return {
        ValueOne, 
        ValueTwo};

}


interface Course{
    name: string;
    author: string;
    subject: string;
}

interface Quiz{
    name: string;
    type: string;
    level: string;
}

class Sellable<T>{
    public cart: T[] = [];

    addtoCart(product: T){
        this.cart.push(product);
    }
}


