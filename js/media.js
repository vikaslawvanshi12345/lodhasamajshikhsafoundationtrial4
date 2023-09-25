var playerYouTube1;
function onYouTubeIframeAPIReady() {
   playerYouTube1 = new YT.Player('YouTube1', {
      events: {
      }
   });
}
var features = 'toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes,status=no,left=,top=,width=,height=';
function searchPage(features)
{
   var element = document.getElementById('SiteSearch2');
   window.open('sitesearch2-results.html?q='+encodeURIComponent(element.value), '', features);
   return false;
}
$(document).ready(function()
{
   $("#wb_ResponsiveMenu1 ul li a").click(function(event)
   {
      $("#wb_ResponsiveMenu1 input").prop("checked", false);
   });
   $("a[href*='#Bookmark1']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_Bookmark1').offset().top }, 600, 'linear');
   });
   searchParseURL('SiteSearch2');
   searchAutoComplete('SiteSearch2', 0, '_parent');
   $("a[href*='#LayoutGrid14']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGrid14').offset().top }, 600, 'easeInCubic');
   });
   if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {$('#preloader').remove();}
});
$(window).on('load', function()
{
   $('#preloader').remove();
});
