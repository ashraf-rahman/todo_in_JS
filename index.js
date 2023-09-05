const addUserbtn= document.getElementById('addUser')
const btnText=addUserbtn.innerText
const usernameTextFlid= document.getElementById('username')
const recordsDisplay=document.getElementById('records')
let userArray=[]
let edit_id=null

let objstr=localStorage.getItem('user')

if(objstr!=null){

userArray= JSON.parse(objstr)

}
DisplayInfo()
addUserbtn.onclick =()=>{
    var name= usernameTextFlid.value
    if(edit_id!=null){
        //edit
     userArray.splice(edit_id,1,{'name':name})
    }else{
        //insert
    
        userArray.push({'name':name})
        edit_id=null
    }

   console.log(userArray)
SaveInfo(userArray)
usernameTextFlid.value=''
DisplayInfo()
addUserbtn.innerText=btnText
}


function SaveInfo(){
let str=JSON.stringify(userArray)
localStorage.setItem('user',str)
}

function DisplayInfo(){
   let statement =''
   userArray.forEach((user,i) =>{
    statement += `<tr>
    <th scope="row">${i+1}</th>
    <td>${user.name}</td>
    <td>  <i class="btn text-white fa fa-edit btn-info mx-2" onclick='EditInfo( ${i})'></i>  <i class="btn btn-danger text-white fa fa-trash" onclick='DeleteInfo( ${i})'></i> </td>
    
    </tr>`
   })
recordsDisplay.innerHTML = statement 
}

function EditInfo(id){
edit_id = id
usernameTextFlid.value = userArray[id].name
addUserbtn.innerText='Save Changes'

}

function DeleteInfo(id){
userArray.splice(id,1)
SaveInfo(userArray)
DisplayInfo()
}