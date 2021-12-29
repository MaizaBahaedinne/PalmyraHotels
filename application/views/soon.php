<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Palmyra Hotels Coming soon</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   
   <meta property="og:url"                 content="<?php echo base_url() ?>" />
    <meta property="og:type"               content="article" />
    <meta property="og:title"              content="Palmyra Hotels Coming soon" />
    <meta property="og:description"        content="Meanwhile, you can make leave your email. We will advice when we will be online!" />
    <meta property="og:image"              content="<?php echo base_url() ?>assets/img/facade/golden.jpg" />


    <!-- Favicons-->
    <link rel="shortcut icon" href="<?php echo base_url() ?>assets/site_launch/img/favicon-1.ico" type="image/x-icon">
    <link rel="apple-touch-icon" type="image/x-icon" href="<?php echo base_url() ?>assets/site_launch/img/apple-touch-icon-57x57-precomposed-1.png">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="72x72" href="<?php echo base_url() ?>assets/site_launch/img/apple-touch-icon-72x72-precomposed-1.png">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="114x114" href="<?php echo base_url() ?>assets/site_launch/img/apple-touch-icon-114x114-precomposed-1.png">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="144x144" href="<?php echo base_url() ?>assets/site_launch/img/apple-touch-icon-144x144-precomposed-1.png">

    <!-- GOOGLE WEB FONT -->
    <link href="https://fonts.googleapis.com/css-3.css?family=Montserrat:400,700" rel="stylesheet">
    
    <!-- CSS -->
    <link href="<?php echo base_url() ?>assets/site_launch/css/bootstrap.min-1.css" rel="stylesheet">
    <link href="<?php echo base_url() ?>assets/site_launch/css/style-1.css" rel="stylesheet">
    <link href="<?php echo base_url() ?>assets/site_launch/fontello/css/fontello-1.css" rel="stylesheet"> 
    <link href="<?php echo base_url() ?>assets/site_launch/fontello/css/animation-1.css" rel="stylesheet"> 
    

  </head>
  <body>
  
<div id="wrapper">
  <div id="main">
    <div class="container">
      
      <div class="row countdown">
              <div class="col-md-12">
                  <div id="logo"><!--<img src="<?php echo base_url() ?>assets/site_launch/img/logo-1.png" width="160" height="34" alt="City tours">-->
                    <h2><b>Palmyra</b>Hotels.tn</h2>
                  </div>
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
      <div id="newsletter_wp">
        <form method="post" action="<?php echo base_url() ?>Contact/newsletter"  autocomplete="off">
              <div class="row">
                              <div class="col-md-9 first-nogutter">
                                  <input name="email" id="email_newsletter" type="email" placeholder="Your Email" class="form-control">
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
                            <li><a  target="_blank" href="https://www.facebook.com/palmyrahotels.tn"><i class="icon-facebook"></i></a></li>
                            <li><a  target="_blank" href="#"><i class="icon-google"></i></a></li>
                            <li><a  target="_blank" href="https://www.instagram.com/palmyrahotels.tn"><i class="icon-instagram"></i></a></li>
                            <li><a  target="_blank" href="#"><i class="icon-youtube-play"></i></a></li>
                            <li><a  target="_blank" href="https://www.linkedin.com/company/palmyra-hotels"><i class="icon-linkedin"></i></a></li>
                        </ul>
                        <p>Palmyra Hotels © 2022 Made by Bahaedinne Maiza</p>
                    </div>

            
    </div><!-- End container -->
        
        
  </div><!-- End main -->
    
</div><!-- End wrapper -->
  

<div id="slides">
  <ul class="slides-container">
    <li><img src="<?php echo base_url() ?>assets/img/facade/aqua.jpg" alt="Image"></li>
    <li><img src="<?php echo base_url() ?>assets/img/facade/golden.jpg" alt="Image"></li>
    <li><img src="<?php echo base_url() ?>assets/img/facade/holiday.jpg" alt="Image"></li>
    <li><img src="<?php echo base_url() ?>assets/img/facade/club.jpg" alt="Image"></li>
  </ul>
</div><!-- End background slider -->

<!-- JQUERY -->
<script src="<?php echo base_url() ?>assets/site_launch/js/jquery-2.2.4.min-1.js"></script>
<script src="<?php echo base_url() ?>assets/site_launch/js/jquery.animate-enhanced.min-1.js"></script>
<script src="<?php echo base_url() ?>assets/site_launch/js/jquery.superslides.min-1.js"></script>
<script type="text/javascript">
  $('#slides').superslides({
    play: 6000,
    pagination:false,
    animation_speed: 800,
      animation: 'fade'
    });
</script>
<!-- OTHER JS --> 
<script src="<?php echo base_url() ?>assets/site_launch/js/functions-1.js"></script>
<script src="<?php echo base_url() ?>assets/site_launch/assets/validate-1.js"></script>
  </body>
</html>