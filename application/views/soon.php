
<!DOCTYPE html>
<html lang="en">
  <head>
  	<meta charset="utf-8">
    <title>Site Launch Coming soon</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   
    <!-- Favicons-->
    <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon"/>
    <link rel="apple-touch-icon" type="image/x-icon" href="img/apple-touch-icon-57x57-precomposed.png">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="72x72" href="img/apple-touch-icon-72x72-precomposed.png">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="114x114" href="img/apple-touch-icon-114x114-precomposed.png">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="144x144" href="img/apple-touch-icon-144x144-precomposed.png">

    <!-- GOOGLE WEB FONT -->
    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">
    
    <!-- CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
    <link href="fontello/css/fontello.css" rel="stylesheet" > 
    <link href="fontello/css/animation.css" rel="stylesheet" > 
    

  </head>
  <body>
  
<div id="wrapper">
	<div id="main">
		<div class="container">
			
			<div class="row countdown">
            	<div class="col-md-12">
                	<div id="logo"><img src="img/logo.png" width="160" height="34" alt="City tours"></div>
                    <h1>We will be back soon!</h1>
                    <h2>Meanwhile, you can make leave your email. We will advice when we will be online!</h2>
                </div>
				<div id="countdown_wp">
                    <div class="container_count"><div id="days">00</div>days</div>
                    <div class="container_count"><div id="hours">00</div>hours</div>
                    <div class="container_count"><div id="minutes">00</div>minutes</div>
                    <div class="container_count last"><div id="seconds">00</div>seconds</div>
                </div>
			</div>
            <div class="row">
						<div class="col-md-6 col-md-offset-3">
			<div id="newsletter_wp" >
				<form method="post" action="assets/newsletter.php" id="newsletter" name="newsletter"  autocomplete="off">
							<div class="row">
                            	<div class="col-md-9 first-nogutter">
                                	<input name="email_newsletter" id="email_newsletter" type="email" placeholder="Your Email" class="form-control">
                                </div>
                                <div class="col-md-3 nogutter">
                                	    <button type="submit" class="btn-check" id="submit-newsletter">Subscribe</button>
                                </div>
                            </div>                            	
					</form>
                     <div id="message-newsletter"></div>
                         
						</div><!-- End newsletter_wp -->	
					</div><!-- End row -->			
			</div><!-- End container -->
            
     
                    <div id="social_footer">
                        <ul>
                            <li><a href="#"><i class="icon-facebook"></i></a></li>
                            <li><a href="#"><i class="icon-twitter"></i></a></li>
                            <li><a href="#"><i class="icon-google"></i></a></li>
                            <li><a href="#"><i class="icon-instagram"></i></a></li>
                            <li><a href="#"><i class="icon-pinterest"></i></a></li>
                            <li><a href="#"><i class="icon-vimeo"></i></a></li>
                            <li><a href="#"><i class="icon-youtube-play"></i></a></li>
                            <li><a href="#"><i class="icon-linkedin"></i></a></li>
                        </ul>
                        <p>© Citytours 2021</p>
                    </div>

            
		</div><!-- End container -->
        
        
	</div><!-- End main -->
    
</div><!-- End wrapper -->
	

<div id="slides">
	<ul class="slides-container">
		<li><img src="img/slide_1.jpg" alt="Image"></li>
		<li><img src="img/slide_2.jpg" alt="Image"></li>
		<li><img src="img/slide_3.jpg" alt="Image"></li>
	</ul>
</div><!-- End background slider -->

<!-- JQUERY -->
<script src="js/jquery-2.2.4.min.js"></script>
<script src="js/jquery.animate-enhanced.min.js"></script>
<script src="js/jquery.superslides.min.js"></script>
<script  type="text/javascript">
  $('#slides').superslides({
	  play: 6000,
	  pagination:false,
	  animation_speed: 800,
      animation: 'fade'
    });
</script>
<!-- OTHER JS --> 
<script  src="js/functions.js"></script>
<script src="assets/validate.js"></script>
  </body>
</html>