var t=document.querySelector('#push')
t.onclick=function() 
    

{
    if(document.querySelector('#newtask input').value.length==0)
    {
        alert("Please add some tasks")
    }
    else
    {
        document.querySelector('#tasks').innerHTML+=`
        <div class="task">
        <span id="taskname">
        ${document.querySelector('#newtask input').value}
        </span>

        <button class="delete">
        <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
        </div>`
        var current_tasks=document.querySelectorAll(".delete")
        for(var i=0;i<current_tasks.length;i++)
        {
current_tasks[i].onclick=function(){
    this.parentNode.remove()
}
        }

    }
}
function dark()
{
    document.body.style.backgroundColor="black";
    document.querySelector('#dark').style.backgroundColor="#A020F0";
    document.querySelector('#dark').innerHTML="Dark Mode Fired 🔥";
     document.querySelector('#dark').style.fontSize="25px";
    document.querySelector('#newtask').style.backgroundColor="#808080";
    document.querySelector('.container').style.backgroundColor="#D3D3D3";
    document.querySelector('#tasks').style.backgroundColor="#D3D3D3";

}