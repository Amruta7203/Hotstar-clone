let movies = [
    {
        name: "Marvel: Loki",
        des: "Forced to work with a mysterious organization known as the Time Variance Authority (TVA), Loki must confront his own past and confront a dangerous new threat that could unravel the fabric of existence itself.",
        image: "images/slider 1.PNG"
    },
    {
        name: "Rudra: The Edge of Darkness",
        des: "Filled with suspense, unexpected twists, and a captivating performance by the lead actor, Rudra: The Edge of Darkness is a gripping cinematic experience that keeps audiences on the edge of their seats until the final revelation.",
        image: "images/rudra-img.jpeg"
    },
    {
        name: "The Night Manager",
        des: "The Night Manager is a gripping and suspenseful television series based on John le Carré's novel. The story follows Jonathan Pine, a former British soldier who becomes a night manager at a luxurious hotel. However, his life takes an unexpected turn when he gets entangled with the dangerous world of international arms dealing and espionage.",
        image: "images/poster 17.webp"
    },
    {
        name: "The Falcon and the winter soldier",
        des: "Falcon and the Winter Soldier, a dynamic duo, unite to confront their pasts and protect a world in need, embodying heroism at its finest.",
        image: "images/slider 2.PNG"
    },
    {
        name: "Wanda Vision",
        des: "Set within the Marvel Cinematic Universe, the show follows Wanda Maximoff, also known as Scarlet Witch, and Vision as they navigate an idyllic suburban life that seems too perfect to be true. As the couple goes through different sitcom-inspired decades, they begin to suspect that something sinister lies beneath the surface of their reality.",
        image: "images/slider 3.PNG"
    },
    {
        name: "Raya and the Last Dragon",
        des: "Raya and the Last Dragon, a heroic quest, follows a warrior's pursuit to find the last dragon and save her world from an ancient evil.",
        image: "images/slider 4.PNG"
    },
    {
        name: "Pixar: Luca",
        des: "Pixar's Luca, a heartwarming friendship, unfolds in an Italian seaside town as two young sea monsters experience a transformative summer adventure on land.",
        image: "images/slider 5.PNG"
    }
];

let carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0;     //track the current slide
const createSlide = () => {
    if (slideIndex>=movies.length)
    {
        slideIndex=0;
    }

    let slide=document.createElement("div");
    var imgElement=document.createElement("img");
    let content=document.createElement("div");
    let h1=document.createElement("h1");
    let p=document.createElement("p");

    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";

    sliders.push(slide);

    if(sliders.length)
    {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }
}

//carousel starts with three initial slides, and then it keeps adding a new slide every 3 seconds
//making the carousel dynamic and continuously updating with new content.
for(let i=0; i<3; i++)
{
    createSlide();
};

setInterval(()=> {
    createSlide();
}, 3000
);

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
        let video = item.children[1];
        video.play();
    });

    item.addEventListener("mouseleave", () => {
        let video = item.children[1];
        video.pause();
    });
});

let cardcontainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardcontainers.forEach((item,i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerwidth = containerDimensions.width;

    nxtBtns[i].addEventListener("click", () => {
        item.scrollLeft += containerwidth - 200;
    });

    preBtns[i].addEventListener("click", () => {
        item.scrollLeft -= containerwidth + 200;
    });
});
