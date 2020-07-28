window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("header").style.fontSize = "30px";
  } else {
    document.getElementById("header").style.fontSize = "80px";
  }
}


document.getElementById("navMenu").innerHTML =
  '<p>'+  
    '<a href="https://sanskritea.github.io/luftmenschladies/index.html">Frontpage</a><br>'+
	  '<a href="https://sanskritea.github.io/luftmenschladies/about/about.html">About Us</a><br>'+
	'</p>'+
  '<p>+
	  '<a href="https://sanskritea.github.io/luftmenschladies/posts/1/1.html">I</a><br>'+
		'<a href="https://sanskritea.github.io/luftmenschladies/posts/2/2.html">II</a><br>'+
		'<a href="https://sanskritea.github.io/luftmenschladies/posts/3/3.html">III</a><br>'+
     '<a href="https://sanskritea.github.io/luftmenschladies/posts/4/4.html">IV</a><br>'+
      '<a href="https://sanskritea.github.io/luftmenschladies/posts/5/5.html">V</a><br>'+
      '<a href="https://sanskritea.github.io/luftmenschladies/posts/6/6.html">VI</a><br>'+
  '</p>';
