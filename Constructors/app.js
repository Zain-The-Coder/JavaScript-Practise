let deleteBtn = document.getElementById("deleteBtn");

let imageUploader = document.getElementById("imageUploader");
let preview = document.getElementById("preview");

function restater () {
    let imageStored = localStorage.getItem("myImage");
    if(imageStored) {
        preview.style.display = "block" ;
        preview.src = imageStored ;
    } else {
        console.log("Image Not Founded (404)");
    }
}
restater();

imageUploader.addEventListener("change" , () => {
    let userImage = imageUploader.files[0];

    const myFileReader = new FileReader();

    myFileReader.onload = (() => {
        preview.src = myFileReader.result ;
        localStorage.setItem("myImage" , preview.src);
        preview.style.display = "block" ;
    })
    myFileReader.readAsDataURL(userImage); // Convert image to Base64 format

});