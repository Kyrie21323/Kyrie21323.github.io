<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title></title>
</head>
 <body id="body">

    <button onclick="picture_me()">
    A picture of me!
    </button>

    <h2 id="result" style="color:green;"></h2>

    <script>
    let res = document.getElementById('result');

    function picture_me() {
    let img = document.createElement('img');
    img.src = "me.jpg";
    document.getElementById('body').appendChild(img);
    }
    </script>

  </body>
</html>