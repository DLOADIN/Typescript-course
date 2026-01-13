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

function getDbId(id:number | string){
    if (typeof id === "string") {
    console.log(`DB id is ${id}`);    
    }
    if (typeof id === "number") {
    console.log(`DB id is ${id}`);    
    }
}

getDbId( 12345);
getDbId(  '12345');