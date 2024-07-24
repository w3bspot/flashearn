let full_code = document.location.search
let code = full_code.split("=")[1]
let code_paragraph = document.getElementById("Code")
let code_input = document.getElementById("copyInput")
code_paragraph.innerHTML = atob(code)
code_input.value = atob(code)

document.getElementById("Copy").addEventListener("click", ()=>{
    var copyText = document.getElementById("copyInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    code_paragraph.innerHTML = "Copied"
    setTimeout(()=>{
        code_paragraph.innerHTML = atob(code)
    },2000)
});
