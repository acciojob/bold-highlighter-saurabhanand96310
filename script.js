const words=Array.from(document.getElementsByTagName("strong"))
function highlight() {
    //Write your code here
words.forEach((w)=>{
	w.style.color="green";
})

}


function return_normal() {
    //Write your code here
words.forEach((w)=>{
	w.style.color="black";
})
    
}
