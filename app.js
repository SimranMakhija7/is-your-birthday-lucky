const bdayInput = document.querySelector("#bday"),
      numInput  = document.querySelector("#luckyNum"),
      checkBtn  = document.querySelector("#btn"),
      outputDiv = document.querySelector("#output");

const populateOutput = (text)=>{
    outputDiv.innerHTML = text;
}    
const checkIfLucky = (dob, num)=>{
    let sum = 0;
    for (let index = 0; index < dob.length; index++) {
        const element = (dob[index]);
        if(element!=="-") sum+=Number(element);
    }
    return sum%num===0;
}
checkBtn.addEventListener("click",()=>{
    let bday = bdayInput.value, num =numInput.value;
    if(bday==="" || num==="") 
        populateOutput("<span id=\"error\">Please provide valid input</span>");
    else if(checkIfLucky(bday,num))
        populateOutput(num+" is lucky for you indeed!");
    else
        populateOutput(num+" is not so lucky after all...");
    
})