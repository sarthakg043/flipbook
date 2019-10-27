var page = document.querySelectorAll(".details");
var btn = document.querySelectorAll("button");
var book = document.querySelector(".card");
var images = [
            "url('http://getwallpapers.com/wallpaper/full/d/e/9/888659-library-background-images-1920x1202-mobile.jpg')",
            "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=853&q=80')",
            "url('http://getwallpapers.com/wallpaper/full/f/8/4/888661-beautiful-library-background-images-1920x1080-iphone.jpg')",
            "url('http://getwallpapers.com/wallpaper/full/b/b/c/888667-widescreen-library-background-images-1920x1080-screen.jpg')",
            "url('http://getwallpapers.com/wallpaper/full/5/8/e/888673-library-background-images-1920x1080-for-mac.jpg')",
            "url('http://getwallpapers.com/wallpaper/full/3/5/f/888676-library-background-images-1920x1080-cell-phone.jpg')",
            "url('http://getwallpapers.com/wallpaper/full/9/5/5/888684-library-background-images-1920x1080-for-pc.jpg')"
];

for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", function(){
        page[i].style.transform = "rotateY(-130deg)";
        page[i].style.transition ="5s cubic-bezier(.15,1.7,.84,.58)";
        page[i].style.backgroundColor = "rgba(55,55,55.9)";
        page[i].style.color = "#fff";
        document.body.style.backgroundColor = generateColor();
    });
}

book.addEventListener("mouseleave", function(){
    for(var i = 0; i < page.length; i++){
        page[i].style.transform = "";
        page[i].style.transition = "1s";
        page[i].style.backgroundColor = "#fff";
        page[i].style.color = "";
    }
});

function gradientMaker (){
    return "linear-gradient(90deg, " + generateColor() + " 0%, " + generateColor() + " 35%, " + generateColor() + " 100%)"
}

function generateColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ",1)";
}