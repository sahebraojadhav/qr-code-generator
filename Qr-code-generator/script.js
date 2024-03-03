const qrContainer=document.querySelector('.qr-container');

const qrTextInput=document.querySelector('.qr-text')

const generateQrCodebtn=document.querySelector('.generate-qr-code-btn');

console.log(qrContainer,qrTextInput,generateQrCodebtn);

generateQrCodebtn.addEventListener("click",()=>{

    validateInputField();
})

function validateInputField(){
    
    if(qrTextInput.value .trim().length>0){
        generateQrCode();
    }
    else{
        errorMessageText.textContent="Enter text and use some Url to ge4nerate code";
    }
}

const content=document.querySelector(".content");

console.log(content);


//this is function required new QRCode(container postion ,{all property here}) 
function generateQrCode(){
    qrContainer.innerHTML="";
    new QRCode (qrContainer,{
        text:qrTextInput.value,
        height:400,
        width:400,
        colorLight:'#fff',
        colorDark:'#000'
    });
    qrTextInput.value="";
    errorMessageText.textContentl="";
}