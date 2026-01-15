function detectType(val: number | string): string | number {
  return typeof val === "string" ? val.toLowerCase() : val + 3;
}


function provideId(id: string | null) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    id.toLowerCase();
}



//Narrowing with in operator
function printAll(strs: string | string[] | null) {
  // !!!!!!!!!!!!!!!!
  //  DON'T DO THIS!
  //   KEEP READING
  // !!!!!!!!!!!!!!!!
  if (strs) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    }
  }
}
























































































































































































