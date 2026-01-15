interface Users{
    name: string;
    email: string;
    isActive: boolean;
}


interface Admin{
    name: string;
    email: string;
    isActive: boolean;
}


function isAdminAccount(account: Users | Admin) {
    if ('isActive' in account) {
        return account.isActive;
    }
    return false;
}