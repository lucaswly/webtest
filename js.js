// text change on hover homepage

$('.p1img').mouseover(function() {
  $('.p1txt').css("visibility","visible");
});

$('.p1img').mouseout(function() {
  $('.p1txt').css("visibility","hidden");
});

$('.p2img').mouseover(function() {
  $('.p2txt').css("visibility","visible");
});

$('.p2img').mouseout(function() {
  $('.p2txt').css("visibility","hidden");
});

$('.p3img').mouseover(function() {
  $('.p3txt').css("visibility","visible");
});

$('.p3img').mouseout(function() {
  $('.p3txt').css("visibility","hidden");
});

$('.p4img').mouseover(function() {
  $('.p4txt').css("visibility","visible");
});

$('.p4img').mouseout(function() {
  $('.p4txt').css("visibility","hidden");
});

$('.p5img').mouseover(function() {
  $('.p5txt').css("visibility","visible");
});

$('.p5img').mouseout(function() {
  $('.p5txt').css("visibility","hidden");
});

$('.p6img').mouseover(function() {
  $('.p6txt').css("visibility","visible");
});

$('.p6img').mouseout(function() {
  $('.p6txt').css("visibility","hidden");
});

$('.otherimg').mouseover(function() {
  $('.othertxt').css("visibility","visible");
});

$('.otherimg').mouseout(function() {
  $('.othertxt').css("visibility","hidden");
});

$('.aboutimg').mouseover(function() {
  $('.abouttxt').css("visibility","visible");
});

$('.aboutimg').mouseout(function() {
  $('.abouttxt').css("visibility","hidden");
});


// Image on cursor movement

const images = document.getElementsByClassName("image");

let globalIndex = 0,
    last = { x: 0, y: 0 };

const activate = (image, x, y) => {
  image.style.left = `${x}px`;
  image.style.top = `${y}px`;
  image.style.zIndex = globalIndex;

  image.dataset.status = "active";

  last = { x, y };
}

const distanceFromLast = (x, y) => {
  return Math.hypot(x - last.x, y - last.y);
}

const handleOnMove = e => {
  if(distanceFromLast(e.clientX, e.clientY) > (window.innerWidth / 20)) {
    const lead = images[globalIndex % images.length],
          tail = images[(globalIndex - 5) % images.length];

    activate(lead, e.clientX, e.clientY);

    if(tail) tail.dataset.status = "inactive";
    
    globalIndex++;
  }
}

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);

