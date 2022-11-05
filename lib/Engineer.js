const Employee=require("./Employee.js")

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email)
        this.github=github
    }
    getGithub(){
        return this.github;
    }
    getRole(){
        return "Engineer"
    }
}

module.exports=Engineer


//var Amanda = new Engineer("Amanda", 1, amanda@mail.com, "amanda")
// Engineer{
//     name: "Amanda",
//     id: 1,
//     email: "amanda@mail.com",
//     github: "amanda"
// }