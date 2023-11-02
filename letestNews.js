
  // nav bar js start

  document.querySelector("#image").addEventListener("click", myFunction);
  let count = 0;
  function myFunction(event) {
    count++;
    event.preventDefault();
    let val = document.querySelector(".search_box").value;
    // document.querySelector('#searchBar').style.display="block"
    if (count % 2 == 1) {
      document.querySelector(".search_box").style.display = "block";
      console.log("hell");
    } else {
      document.querySelector(".search_box").style.display = "none";
      console.log("oooo");
    }
  }

  // nav bar js end

  // panel below nav bar
  let text = document.querySelector('#sliderText');
let prevBtn= document.querySelector('.prev_carousel');
let nextBtn = document.querySelector('.next_carousel');
let textNum=0;
//let play=true;
let textArray=
[
    'most important anouncement 1',
    'most important anouncement 2',
    'most important anouncement 3',
    'most important anouncement 4'
];
prevBtn.addEventListener('click',function()
{
if(textNum===0)
{
textNum=textArray.length-1;
}else{
    textNum--;
}
text.innerText=textArray[textNum];
});
nextBtn.addEventListener('click',function()
{
if(textNum===textArray.length-1)
{
textNum=0;
}else{
    textNum++;
}
text.innerText=textArray[textNum];
});
var playing = true;
var pauseButton = document.querySelector('#toggleCarousel');
//Auto slide code
let i=0;
let myInterval;
function testInterval() {
        myInterval = setInterval(animateText, 2000);
}
function animateText(){
    let text = document.querySelector('#sliderText');
    if(textArray.length - 1 == i)
    {
        i=0;
    }
    text.innerText=textArray[i];
    text.removeAttribute('class');
    text.setAttribute('class','animate__animated animate__fadeInRight')
    i++;
}
testInterval();
function pauseSlideshow(){
    btn=document.querySelector('#sBtn');
    btn.setAttribute('class','carousel-play');
    playing = false;
    clearInterval(myInterval);
}
function playSlideshow(){
    btn=document.querySelector('#sBtn');
    btn.setAttribute('class','carousel-pause');
    playing = true;
    testInterval();
}
pauseButton.addEventListener('click',function(){
    if(playing){ pauseSlideshow(); }
    else{ playSlideshow(); }
});
  // panel below nav bar end js

  // left side panel start
  window.onscroll = function () {
    scrolli();
  };

  // Get the sidepanel
  let sidepaneleffect = document.getElementById("leftSidePanel");

  // Get the offset position of the sidepanel
  let sticky = sidepaneleffect.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function scrolli() {
    if (window.pageYOffset >= sticky) {
      sidepaneleffect.classList.add("sticky");
      document.getElementById("rightMainNews").style.marginLeft = "25%";
    } else {
      sidepaneleffect.classList.remove("sticky");
      document.getElementById("rightMainNews").style.marginLeft = "0%";
    }
  }
  // left side panel js end

  // mainrightcontent js start here
  homePageData = [
    
    {
      img: "https://phcet.ac.in/wp-content/uploads/2019/12/euforia14-300x199.jpg",
      headline:
        "Eforia date anounced!",
      category: "latestNews",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dCkADCBf2fsSppQ1ZpGi46KnuunUdN0eNw&usqp=CAU",
      headline: "News Wrap, oct 20",
      category: "latestNews",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dCkADCBf2fsSppQ1ZpGi46KnuunUdN0eNw&usqp=CAU",
      headline:
        "Viral news of pillai",
      category: "latestNews",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbnheadl:ANd9GcR4dCkADCBf2fsSppQ1ZpGi46KnuunUdN0eNw&usqp=CAU",
      headline: `csi conducting a Codehunt`,
      category: "latestNews",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dCkADCBf2fsSppQ1ZpGi46KnuunUdN0eNw&usqp=CAU",
      headline:
        "don't forget to show your skill!",
      category: "latestNews",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dCkADCBf2fsSppQ1ZpGi46KnuunUdN0eNw&usqp=CAU",
      headline:
        "headings...",
      category: "latestNews",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dCkADCBf2fsSppQ1ZpGi46KnuunUdN0eNw&usqp=CAU",
      headline:
        "headings...",
      category: "latestNews",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dCkADCBf2fsSppQ1ZpGi46KnuunUdN0eNw&usqp=CAU",
      headline:
        "headings...",
      category: "latestNews",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dCkADCBf2fsSppQ1ZpGi46KnuunUdN0eNw&usqp=CAU",
      headline:
        "headings...",
      category: "latestNews",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dCkADCBf2fsSppQ1ZpGi46KnuunUdN0eNw&usqp=CAU",
      headline:
        "headings...",
      category: "latestNews",
    },

    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dCkADCBf2fsSppQ1ZpGi46KnuunUdN0eNw&usqp=CAU",
      headline:
        "headings...",
      category: "photos",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dCkADCBf2fsSppQ1ZpGi46KnuunUdN0eNw&usqp=CAU",
      headline:
        "Heading...",
      category: "photos",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dCkADCBf2fsSppQ1ZpGi46KnuunUdN0eNw&usqp=CAU",
      headline:
        "headings...",
      category: "photos",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dCkADCBf2fsSppQ1ZpGi46KnuunUdN0eNw&usqp=CAU",
      headline:
        "headings...",
      category: "photos",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dCkADCBf2fsSppQ1ZpGi46KnuunUdN0eNw&usqp=CAU",
      headline:
        "headings...",
      category: "photos",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dCkADCBf2fsSppQ1ZpGi46KnuunUdN0eNw&usqp=CAU",
      headline:
        "headings...",
      category: "photos",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dCkADCBf2fsSppQ1ZpGi46KnuunUdN0eNw&usqp=CAU",
      headline:
        "headings",
      category: "photos",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dCkADCBf2fsSppQ1ZpGi46KnuunUdN0eNw&usqp=CAU",
      headline:
        "headings",
      category: "videos",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dCkADCBf2fsSppQ1ZpGi46KnuunUdN0eNw&usqp=CAU",
      headline:
        "headings...",
      category: "videos",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dCkADCBf2fsSppQ1ZpGi46KnuunUdN0eNw&usqp=CAU",
      headline: "headings...",
      category: "videos",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4dCkADCBf2fsSppQ1ZpGi46KnuunUdN0eNw&usqp=CAU",
      headline: 'headings...',
      category: "videos",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzOcuuQxN_3PHvCnDmlh8RxH5wT6pZqktGqttvdSJ8acW5RPNMrw8QqFhJ_cEwoZS-Tn0&usqp=CAU",
      headline:
        "headings...",
      category: "videos",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzOcuuQxN_3PHvCnDmlh8RxH5wT6pZqktGqttvdSJ8acW5RPNMrw8QqFhJ_cEwoZS-Tn0&usqp=CAU",
      headline:
        "headings...",
      category: "videos",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzOcuuQxN_3PHvCnDmlh8RxH5wT6pZqktGqttvdSJ8acW5RPNMrw8QqFhJ_cEwoZS-Tn0&usqp=CAU",
      headline: "headings...",
      category: "videos",
    },
    
    
  ];
  let arrByID = homePageData.filter(filterByID);

  function filterByID(item) {
    if (item.category == "latestNews") {
      return true;
    } else {
      return false;
    }
  }
  console.log(arrByID);

  arrByID.forEach(function (elem) {
    let box = document.createElement("div");
    let Image = document.createElement("img");
    Image.setAttribute("src", elem.img);
    box.append(Image);
    let desc = document.createElement("h3");
    desc.innerText = elem.headline;
    box.append(desc);
    document.querySelector("#container").append(box);
  });

  // mainrightcontent js end here
  //Sidebar Redirect Js
document.querySelector('#latestNews').addEventListener('click',function()
{
  window.location.href='letestNews.html';
})

document.querySelector('#photos').addEventListener('click',function()
{
  window.location.href='photo.html';
})

document.querySelector('#video').addEventListener('click',function()
{
  window.location.href='video.html';
})

