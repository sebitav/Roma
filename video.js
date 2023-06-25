var videos = document.getElementsByClassName("videos");

for (var i = 0; i < videos.length; i++) {
  videos[i].addEventListener("click", function() {
    if (this.classList.contains("enlarged")) {
      this.classList.remove("enlarged");
    } else {
      this.classList.add("enlarged");
    }
  });
}
