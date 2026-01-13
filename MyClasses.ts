class Userclass {
  email: string;
  name: string;

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

const Jean = new Userclass('dav12@gmail.com', 'Jean'); 
// You do not need to specify the type again here because it is already specified in the class.