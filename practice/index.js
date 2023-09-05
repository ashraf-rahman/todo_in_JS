const addUserbtn= document.getElementById('addUser')
const usernameTextFlid= document.getElementById('username')
let userArray=[]

let objstr=localStorage.getItem('user')
if(objstr!=null){
userArray=JSON.parse(objstr)
}

addUserbtn.onclick =()=>{
   var name= usernameTextFlid.value
   userArray.push({'name':name})
   console.log(userArray)
SaveInfo(userArray)
}


function SaveInfo(){
let str=JSON.stringify(userArray)
localStorage.setItem('user',str)
}

function DisplayInfo(){
   

}

function EditInfo(){

}

function DeleteInfo(){

}