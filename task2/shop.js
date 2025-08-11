document.getElementById("addImage").addEventListener("click", function() {
    let url = document.getElementById("imageUrl").value.trim();
    if (url) {
        let img = document.createElement("img");
        img.src = url;
        img.alt = "Dress";
        img.addEventListener("click", function() {
            img.remove();
        });
        document.getElementById("gallery").appendChild(img);
        document.getElementById("imageUrl").value = "";
    }
});
