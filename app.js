const yargs = require('yargs');
const students = require('./students')
const yargsParser = require('yargs-parser');
//add
yargs.command({
    command:'add',
    describe:'add student',
    builder:{
        id:{
            describe:'this is id in add command',
            demandOption:true,
            type:'number'
        },
        name:{
            describe:'this is name in add command',
            demandOption:true,
            type:'string'
        },
        degrees:{
            describe:'this is degrees in add command',
            type: 'array'
        },
    },
    handler:(x)=>{
        // console.log('add student')
        students.addStudent(x.id,x.name,x.degrees)
    }
})

//delete 
yargs.command({
    command:'delete',
    describe:'delete student',
    builder:{
        id:{
            describe:'this is id in delete command',
            demandOption:true,
            type:'number'
        }
    },
    handler:(x)=>{
        // console.log('delete stuents')
        students.deleteStudent(x.id)
    }
})


//list 
yargs.command({
    command:'list',
    describe:'list student',
    handler:()=>{
        // console.log('list students')
        students.listStudents()
    }
})

//read 
yargs.command({
    command:'read',
    describe:'read student',
    handler:(x)=>{
        // console.log('read students')
        students.readStudents(x.id)
    }
})

yargs.parse()