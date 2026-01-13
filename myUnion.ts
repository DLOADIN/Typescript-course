const myscore = 100;

type Individual ={
    username: string;
    student_id: Number;
}


type Admin ={
    username: string;
    Admin_id: Number;
}

let Realhuman: Admin | Individual = {username: 'Jean', student_id: 12345, Admin_id: 123456  };