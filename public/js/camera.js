$(document).ready(function(){
    var vid = document.getElementById("camera-stream"),
        canvas = document.getElementById("canvas-pic"),
        context = canvas.getContext("2d");

  // Normalize the various vendor prefixed versions of getUserMedia.
  navigator.getUserMedia = (navigator.getUserMedia ||
                            navigator.webkitGetUserMedia ||
                            navigator.mozGetUserMedia ||
                            navigator.msGetUserMedia);
    $(".btn-open-pic").on("click",function(){
        if (navigator.getUserMedia) {
        // Request the camera.
          navigator.getUserMedia(
              // Constraints
              {
                  video: true
              },

              // Success Callback
              function(localMediaStream) {
                  vid.src = window.URL.createObjectURL(localMediaStream);
                  vid.play();
              },

              // Error Callback
              function(err) {
                  // Log the error to the console.
                  alert('The following error occurred when trying to use getUserMedia: ' + err);
              }
          );
     } else {
         alert('对不起，您的浏览器不支持我们的测试哦，建议更换浏览器呢！');
     }
    });
    $(".btn-take-pic").on("click", function () {
        context.drawImage(vid, 0, 0,250,130);
    });

});
