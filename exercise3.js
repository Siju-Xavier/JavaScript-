
//Exercise A
let classRoster = ["Alice", "Tom", "Charlie", "Diana", "Evan"]
let classRostertoString = classRoster.toString()
console.log(classRostertoString)
console.log(classRoster)
classRoster.push("Fiona","Nancy")
console.log(classRoster)
classRoster.shift()
console.log(classRoster)
console.log(classRoster.length)

//Exercise B
let classInfo = {
    className :  'ENSF381: Full-Stack Web Development',
    instructor:  'Dr. Smith',
    students : ["Alice", "Tom", "Charlie", "Diana", "Evan"],
    details : {
        semester:'Winter',
        year: 2025
    },
    schedule : ["Monday","Wednesday","Friday"]
}
classInfo.instructor = "Dr.Abdellatif"
console.log(classInfo.className)
console.log(classInfo.instructor)
console.log(classInfo.students)
console.log(classInfo.details.semester)

let name_ = classInfo.className
let students = classInfo.students
console.log(name_)
console.log(students)
let 