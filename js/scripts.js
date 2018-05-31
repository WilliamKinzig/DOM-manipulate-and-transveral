$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Hello human!</li>");
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Peace-out!!</li>");
    $("ul#webpage").prepend("<li>Peace out human!");
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>You stop copying me human!");
  });
});
