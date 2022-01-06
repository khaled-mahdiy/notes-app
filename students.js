const fs = require('fs')
//add student
const addStudent = (id,name,degrees)=>{
    const students = loadStudents();
    const duplicaetID = students.filter((std)=>{
        return std.id === id
    })
    // console.log(duplicaetID) 
    var sum =0;
    degrees.forEach((deg)=>{
        sum+=deg;
    })
    // console.log(sum)
    if(duplicaetID.length ==0){
        // console.log(duplicaetID)
            students.push({
                id,
                name,
                degrees,
                total:sum
            })

        saveStudents(students);
    }else{console.log('Error id is duplicaet')}

}

const loadStudents = ()=>{
   try{
    const readData = fs.readFileSync('students.json').toString();
    return JSON.parse(readData);
   }
   catch(e){
       return [];
   }
}

const saveStudents = (students)=>{
    const save = JSON.stringify(students);
    // console.log(save)
     fs.writeFileSync('students.json',save);
}


// //delete student
const deleteStudent = (id)=>{
   const students = loadStudents()
   const duplicaetID = students.filter((std)=>{
       return std.id !==id
   })
   if(students.length !== duplicaetID.length)
   {
    saveStudents(duplicaetID)
   }else{
       console.log('Error id not found please try again...')
   }
}
// list
const listStudents = ()=>{
    const students = loadStudents()
    students.forEach(std => {
        console.log(std)
    });
} 
// read
const readStudents = (id)=>{
    const students = loadStudents()
    const duplicaetID = students.find((std)=>{
        return std.id === id
    })
    if(duplicaetID){
        console.log(duplicaetID.name,duplicaetID.total)
    }else{
        console.log('Erorr id please try again...')
    }
}
module.exports={
    addStudent,
    deleteStudent,
    listStudents,
    readStudents
};

