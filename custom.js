
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



//Nav JS Start
document.querySelector("#image").addEventListener("click", myFunction);
let count = 0;
function myFunction(event) {
  count++;
  console.log(count);
  if (count % 2 == 1) {
    document.querySelector(".search_box").style.display = "block";
  } else {
    document.querySelector(".search_box").style.display = "none";
  }
  event.preventDefault();
  let val = document.querySelector(".search_box").value;
  //document.querySelector('#searchBar').style.display="block"
}

//Nav Js End

//News Top Slider
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
//News Top Slider End

//Index Js Start
LdData = [
  
  {
    img: "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/13/2289470-shweta-gauri.jpg",
    headline: `Inside photos of Gauri Khan’s Rome vacation with Shweta Bachchan`,
    category: "latestNews",
  },
  {
    img: "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/14/2298677-pritam-final.jpg",
    headline: "Pritam birthday: Brahmastra, Laal Singh Chaddha, Tiger 3, mo...",
    category: "latestNews",
  },
  {
    img: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/13/2284209-crypto-crash-reuters.jpg",
    headline: "Why is the crypto market crashing today? Bitcoin and Ethereu...",
    category: "latestNews",
  },
  {
    img: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/11/2228673-rashtrapati-bhavan2-ians.jpg",
    headline: "DNA Explainer: Why vote value of MPs will decrease in Presid...",
    category: "latestNews",
  },
  {
    img: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/09/2207722-corvette-ani.jpg",
    headline: "DNA Explainer: How next-generation indigenously built Corvet...",
    category: "latestNews",
  },
  {
    img: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/08/2186389-viagra-pixabay.jpg",
    headline: "DNA Explainer: What is Viagra overdose which leads to the co...",
    category: "latestNews",
  },
  {
    img: "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/06/08/2183851-ethanol-blended-petrol-moefcc.jpg",
    headline:
      "DNA Explainer: What is ethanol blended petrol, how useful or...DNA Explainer: What is ethanol blended petrol, how useful or...",
    category: "latestNews",
  },
  {
    img: "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/14/2297977-sushant-final.jpg",
    headline:
      "Sushant Singh Rajput death anniversary: Chaar Kadam, Qaafirana, famous songs of late actor",
    category: "photos",
  },
  {
    img: "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/14/2290758-blood.jpg",
    headline: "World Blood Donor Day 2022: 5 health benefits of donating blood",
    category: "photos",
  },
  {
    img: "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/13/2289915-fotojet-67-1.jpg",
    headline:
      "Viral Photos of the Day: Kiara Advani, Shamita Shetty, Aditya Roy Kapoor pose for paps",
    category: "photos",
  },
  {
    img: "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/13/2289470-shweta-gauri.jpg",
    headline:
      "Inside photos of Gauri Khan’s Rome vacation with Shweta Bachchan",
    category: "photos",
  },
  {
    img: "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/13/2285249-fotojet.jpg",
    headline:
      "With Joe Root scoring his 2nd consecutive Test century, here are the 5 batsman who have scored most Test runs in 2022",
    category: "photos",
  },
  {
    img: "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/13/2285186-shreya-final-thumbnail.jpg",
    headline:
      "The Family Man actress Shreya Dhanwanthary sets the internet ablaze with her bikini photos",
    category: "photos",
  },
  {
    img: "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/13/2284343-shooting-dna-7.png",
    headline:
      "World Blood Donor Day 2022: History, significance, theme to spread awareness on June 14",
    category: "photos",
  },

  {
    img: "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/14/2300677-1655189204-00000003.jpg",
    headline: `Rajkummar Rao, Sanya Malhotra step out to promote Hit-The First Case movie`,
    category: "videos",
  },
  {
    img: "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/14/2300626-1655188933-00000003.jpg",
    headline:
      "National Herald case: Rahul Gandhi’s ED questioning ends after 10 hours",
    category: "videos",
  },
  {
    img: "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/14/2300551-1655188533-00000003.jpg",
    headline:
      "Intern doctors of Tripura Medical College stage protest demanding hike in stipend",
    category: "videos",
  },
  {
    img: "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/06/14/2300166-maxresdefault.jpg",
    headline: "Sports Wrap, June 14",
    category: "videos",
  },

];

let homePageData = [
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

let landByID = LdData.filter(filterByID);

function filterByID(item) {
  if (item.category == "photos") {
    return true;
  } else {
    return false;
  }
}

let displayMainNewsData = function (mainNewsData) {
  mainNewsData.forEach(function (elem, index) {
    let h2 = document.createElement("h2");
    if (index === 0) {
      if (elem.category === "latestNews") {
        let hr = document.createElement("hr");
        cont = document.createElement("div");
        let Image = document.createElement("img");
        Image.setAttribute("src", elem.img);
        let dis = document.createElement("h3");
        dis.innerText = elem.headline;
        cont.append(h2, hr, Image, dis);
        document.querySelector("#lnd").append(cont);
      } else {
        h2.innerText = elem.category.toUpperCase();
        let hr = document.createElement("hr");
        hr.style.marginBottom = "20px";
        cont = document.createElement("div");
        let Image = document.createElement("img");
        Image.setAttribute("src", elem.img);
        let dis = document.createElement("h3");
        dis.innerText = elem.headline;
        cont.append(h2, hr, Image, dis);
        document.querySelector("#lnd").append(cont);
      }
    } else {
      let cont = document.createElement("div");
      let Image = document.createElement("img");
      cont.style.display = "flex";
      cont.style.padding = "10px";
      cont.style.boxSizing = "border-box";
      cont.style.borderRadius = "5px";
      Image.setAttribute("src", elem.img);
      Image.style.height = "100px";
      Image.style.width = "25%";
      let dis = document.createElement("h3");
      dis.innerText = elem.headline;
      dis.style.display = "inline";
      dis.style.fontSize = "15px";
      dis.style.fontWeight = "400";
      dis.style.lineHeight = "18px";
      dis.style.color = "#4c4c4c";
      // dis.style = "hover:backGround:#8b9fc3";
      let button = document.createElement("button");
      button.innerText = `MORE ${elem.category.toUpperCase()} NEWS`;
      cont.append(Image, dis);
      document.querySelector("#lnd").append(cont);
    }
  });
};

let displayButtomNewsData = function (bottomNewsData) {
  let h2 = document.createElement("h2");
  h2.setAttribute("id", "indHead");
  let takeText;
  bottomNewsData.forEach(function (elem, index) {
    if (index === 0) {
      h2.innerText = elem.category.toUpperCase();
      let hr = document.createElement("hr");
      // hr.style.marginBottom = "20px";
      // hr.style.backgroundColor = "red";
      cont = document.createElement("div");
      let Image = document.createElement("img");
      // Image.style.width = "100%";
      Image.setAttribute("src", elem.img);
      let dis = document.createElement("h3");
      dis.innerText = elem.headline;
      cont.append(h2, hr, Image, dis);
      document.querySelector("#main-bottom-news").append(cont);
    } else {
      let cont = document.createElement("div");
      let Image = document.createElement("img");
      cont.style.display = "flex";
      cont.style.padding = "10px";
      cont.style.boxSizing = "border-box";
      cont.style.borderRadius = "5px";
      Image.setAttribute("src", elem.img);
      Image.style.height = "100px";
      Image.style.width = "25%";
      let dis = document.createElement("h3");
      dis.innerText = elem.headline;
      dis.style.display = "inline";
      dis.style.fontSize = "15px";
      dis.style.fontWeight = "400";
      dis.style.lineHeight = "18px";
      dis.style.color = "#4c4c4c";

      let button = document.createElement("button");
      takeText = elem.category.toUpperCase();
      cont.append(Image, dis);
      document.querySelector("#main-bottom-news").append(cont);
    }
  });
  let button = document.createElement("button");
  button.innerText = `MORE ${takeText} NEWS`;
  document.querySelector("#main-bottom-news").append(button);
};

// displayPage(landByID);

// Main

let mainSort = homePageData.filter(function (item) {
  if (item.category == "latestNews") {
    return true;
  } else {
    return false;
  }
});

let mainArr = [];
for (let i = 0; i <= 6; i++) {
  mainArr.push(mainSort[i]);
}

console.log(mainArr);
displayMainNewsData(mainArr);

//India

let indiaSort = homePageData.filter(function (item) {
  if (item.category == "india") {
    return true;
  } else {
    return false;
  }
});

let indiaArr = [];
for (let i = 0; i < 3; i++) {
  indiaArr.push(indiaSort[i]);
}

displayButtomNewsData(indiaArr);

// Sliding img


// left side bar js start
window.onscroll = function () {
  scrolli();
};

// Get the sidepanel
let sidepaneleffect = document.getElementById("sidebar");

// Get the offset position of the sidepanel
let sticky = sidepaneleffect.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrolli() {
  if (window.pageYOffset >= sticky) {
    sidepaneleffect.classList.add("sticky");
    document.getElementById("main-data").style.marginLeft = "25%";
  } else {
    sidepaneleffect.classList.remove("sticky");
    document.getElementById("main-data").style.marginLeft = "0%";
  }
}
// left side bar js end