// JavaScript Document
$( document ).ready(function() {
    $( "body" ).mousemove(function( event ) {
      $("#test").html(event.pageX);
});