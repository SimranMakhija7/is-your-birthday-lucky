const bdayInput = document.querySelector("#bday"),
      numInput  = document.querySelector("#luckyNum"),
      checkBtn  = document.querySelector("#btn"),
      outputDiv = document.querySelector("#output");

const populateOutput = (text)=>{
    outputDiv.innerText = text;
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
    if(checkIfLucky(bdayInput.value,numInput.value)){
        populateOutput(numInput.value+" is lucky for you indeed!");
    }else{
        populateOutput(numInput.value+" is not so lucky after all...");
    }
})