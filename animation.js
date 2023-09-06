const headImg = document.getElementById('pg-1-img');
const imgUrl = [
    `https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80`,
    `https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80`,
    `https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80`,
    `https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2xvdGhlcyUyMHNob3B8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=400&q=60`,
    `https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2xvdGhlcyUyMHNob3B8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=400&q=60`,
    `https://images.unsplash.com/photo-1558769132-cb1aea458c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80`
]   

function changeImg(imgArr, img) {  
   setTimeout(() => {
     const random = Math.floor(Math.random() * imgArr.length);
     img.src = imgArr[random];
     img.style.opacity=1;
   }, 10);
}

  let currentIndex = 0;
  const radioButtons = document.querySelectorAll('input[type=radio][name="slider"]');

  function autoScroll() {
    radioButtons[currentIndex].checked = true;
    currentIndex = (currentIndex + 1) % radioButtons.length;
  }

  // Change the slide every 5 seconds (5000 milliseconds)
  setInterval(autoScroll, 3000);


setInterval(()=>{
    changeImg(imgUrl, headImg);
}, 2000);