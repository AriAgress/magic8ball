function displayRandomImages() {
  var imageArray = [
    {
      src: 'magic8ball_img/magic8ball_1.png',
    },
    {
      src: 'magic8ball_img/magic8ball_2.png',
    },
    {
      src: 'magic8ball_img/magic8ball_3.png',
    },
    {
      src: 'magic8ball_img/magic8ball_4.png',
    },
    {
      src: 'magic8ball_img/magic8ball_5.png',
    },
    {
      src: 'magic8ball_img/magic8ball_6.png',
    },
    {
      src: 'magic8ball_img/magic8ball_7.png',
    },
    {
      src: 'magic8ball_img/magic8ball_8.png',
    },
    {
      src: 'magic8ball_img/magic8ball_9.png',
    },
    {
      src: 'magic8ball_img/magic8ball_10.png',
    },
  ];

  var arrayLength = imageArray.length;
  var newArray = [];
  for (var i = 0; i < arrayLength; i++) {
    newArray[i] = new Image();
    newArray[i].src = imageArray[i].src;
  }

  function getRandomNum(min, max) {
    imgNo = Math.floor(Math.random() * (max - min + 1)) + min;
    return newArray[imgNo];
  }

  var newImage = getRandomNum(0, newArray.length - 1);

  var images = document.getElementsByTagName('img');
  var l = images.length;
  for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
  }

  newImage.style.height = '60%';
  newImage.style.width = '60%';
  newImage.style.display = 'block';
  newImage.style.margin = 'auto';

  document.body.appendChild(newImage);
}

function clearText() {
  document.getElementById('textbox').value = '';
}

