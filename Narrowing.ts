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



function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
               
  }
}