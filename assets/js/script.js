var btnHamburger = document.getElementById("btnHamburger");
var overlay = document.getElementById("overlay");
var modal = document.getElementById("modal");
var openvid = document.getElementById("openvid");
var ytVideo = document.getElementById("ytVideo");

var modalOpen = false;
var sawModal = false;

if (btnHamburger) {
  btnHamburger.addEventListener("click", function () {
    if (btnHamburger.classList.contains("open")) {
      btnHamburger.classList.remove("open");
      overlay.classList.remove("overlay__open");
      overlay.classList.add("overlay__close");
    } else {
      btnHamburger.classList.add("open");
      overlay.classList.add("overlay__open");
      overlay.classList.remove("overlay__close");
    }
  });
}

if (modal) {
  openvid.addEventListener("click", function () {
    modalOpen = true;
    console.log("click");
    if (modalOpen == true) {
      console.log("istrue");
      // playVideo();
      modal.style.visibility = "visible";
    } else {
      modal.style.visibility = "hidden";
      pauseVideo();
    }
  });
}

if (modal) {
  modal.addEventListener("click", function () {
    modalOpen = false;
    console.log("click");
    if (modalOpen == true) {
      console.log("istrue");
      // playVideo();
      modal.style.visibility = "visible";
    } else {
      modal.style.visibility = "hidden";
      pauseVideo();
    }
  });
}

function pauseVideo() {
  commandVideo("pauseVideo");
}
function playVideo() {
  // commandVideo("playVideo");
}

function commandVideo(command) {
  var iframe = document.getElementById("ytVideo");
  if (iframe && iframe.tagName.toUpperCase() != "IFRAME") {
    iframe = iframe.getElementsByTagName("iframe")[0];
  }
  if (iframe) {
    // Frame exists,
    iframe.contentWindow.postMessage(
      JSON.stringify({
        event: "command",
        func: command, // pauseVideo, stopVideo, playVideo
        id: "ytVideo",
      }),
      "*"
    );
  }
}

//potential modal
// if (sessionStorage["PopupShown"] != "yes") {
//   document.getElementById("modal").style.visibility = "visible";
// }

// modal.addEventListener("click", function () {
//   document.getElementById("modal").style.visibility = "hidden";
//   sessionStorage["PopupShown"] = "yes";
// });

/// Fancystuff - mouse behind headline//
/*
$(document).mousemove(function (e) {
  if (
    //e.pageY > 310
    e.pageY > $("#fancy-headline").offset().top + 200 &&
    e.pageY < $("#fancy-subheadline").offset().bottom
  ) {
    //$("body").css("cursor", "none");
    $(".ft_follow_mouse").css({
      transform: "translate3d(" + e.pageX + "px, " + e.pageY + "px, 0px)",
    });
  }
});

$(document).on("scroll", function () {
  $(".ft_follow_mouse").css({
    visibility: "hidden",
  });
});
*/