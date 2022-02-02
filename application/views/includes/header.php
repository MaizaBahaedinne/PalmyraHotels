<!DOCTYPE html>
<html lang="en"  prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#"  >

<head>

         <style type="text/css">
       .mobileShow { display: none;}
       /* Smartphone Portrait and Landscape */
       @media only screen
       and (min-device-width : 320px)
       and (max-device-width : 480px){ .mobileShow { display: inline;}}
    </style>
   
    <?php if(!empty($type) )
    { 
    if ($type=="hotel" && !(empty($hotelDetails)) ) 
    { 
    ?>
    <meta property="og:url"                content="<?php echo base_url() ?>Hotel/view/<?php echo $hotelDetails->hotelId ?>" />
    <meta property="og:type"               content="website" />
    <meta property="og:title"              content="Palmyra <?php echo $pageTitle ?> | Palmyra Hotels" />
    <meta property="og:description"        content="<?php echo $hotelDetails->description ?>" />
    <meta property="og:image"              content="<?php echo base_url() ?>assets/img/facade/hotel/<?php echo $hotelDetails->facade ?>" />
    <?php       } 

    if ($type=="bar" && !(empty($barDetails)) ) 
    { 
    ?>
    <meta property="og:url"                content="<?php echo base_url() ?>Bars/view/<?php echo $barDetails->hotelId ?>" />
    <meta property="og:type"               content="website" />
    <meta property="og:title"              content="<?php echo $pageTitle ?> | Palmyra Hotels" />
    <meta property="og:description"        content="<?php echo $barDetails->description ?>" />
    <meta property="og:image"              content="<?php echo base_url() ?>assets/img/facade/bar/<?php echo $barDetails->repo ?>" />
    <?php 
    }

    }else{ ?>
    <meta property="og:url"                content="<?php echo base_url() ?>" />
    <meta property="og:type"               content="website" />
    <meta property="og:title"              content="<?php echo $pageTitle ?> | Palmyra Hotels" />
    <meta property="og:description"        content="Palmyra Hotels is one of the world’s most reputable upscale hotel management companies. Since it was established in 2019, manages 2000-plus rooms in more than 4 hotels across Sousse , Nabeul ; Monastir." />
    <meta property="og:image"              content="<?php echo base_url() ?>assets/img/sitewal.jpg" />   
    <?php  } ?>  


    <meta property="fb:app_id"             content="673400070509276" />


    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Palmyra Hotels ">
    <meta name="author" content="Maiza Bahaedinne">
    <meta name="facebook-domain-verification" content="em8tnon11p3aq8s3e72jtulif3mr5k" />

        <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-KP7L2TPBWD"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-KP7L2TPBWD');
    </script>


    <title>Palmyra Hotels | <?php echo $pageTitle ?></title>

    <!-- Favicons-->
    <link rel="shortcut icon" href="<?php echo base_url() ?>assets/img/favicon-1.ico" type="image/x-icon">


    <!-- GOOGLE WEB FONT -->
    <link type="text/css" rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Google+Sans_old:400,500,700|Google+Sans+Text:400">

    <link type="text/css" rel="stylesheet" href="http://fonts.googleapis.com/css?family=Google+Sans+Text:400&amp;text=%E2%86%90%E2%86%92%E2%86%91%E2%86%93">

    <style>.gm-ui-hover-effect{opacity:.6}.gm-ui-hover-effect:hover{opacity:1}
    </style>
    <style>.gm-style .gm-style-cc a,.gm-style .gm-style-cc button,.gm-style .gm-style-cc span,.gm-style .gm-style-mtc div{font-size:10px;box-sizing:border-box}.gm-style .gm-style-cc a,.gm-style .gm-style-cc button,.gm-style .gm-style-cc span{outline-offset:3px}
    </style>
    <style>@media print {  .gm-style .gmnoprint, .gmnoprint {    display:none  }}@media screen {  .gm-style .gmnoscreen, .gmnoscreen {    display:none  }}</style>
    <style>.gm-style-moc{background-color:rgba(0,0,0,0.45);pointer-events:none;text-align:center;transition:opacity ease-in-out}.gm-style-mot{color:white;font-family:Roboto,Arial,sans-serif;font-size:22px;margin:0;position:relative;top:50%;transform:translateY(-50%);-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%)}
    </style>
    <style>.gm-style img{max-width: none;}.gm-style {font: 400 11px Roboto, Arial, sans-serif; text-decoration: none;}</style>


    <!-- COMMON CSS -->
    <link href="<?php echo base_url() ?>assets/css/bootstrap.min-1.css" rel="stylesheet">
    <link href="<?php echo base_url() ?>assets/css/style-1.css" rel="stylesheet">
    <link href="<?php echo base_url() ?>assets/css/vendors-1.css" rel="stylesheet">
    
    <!-- ALTERNATIVE COLORS CSS -->
    <link href="#" id="colors" rel="stylesheet">

    <!-- CUSTOM CSS -->
    <link href="<?php echo base_url() ?>assets/css/custom-1.css" rel="stylesheet">


          <script src="<?php echo base_url() ?>assets/js/jquery-3.6.0.min-1.js"></script>

          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.3.10/sweetalert2.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.3.10/sweetalert2.min.js"></script>
  

        
  
</head>
<body>

        <!-- Messenger Plugin de discussion Code -->
    <div id="fb-root"></div>

    <!-- Your Plugin de discussion code -->
    <div id="fb-customer-chat" class="fb-customerchat">
    </div>

    <script>
      var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "103054498919121");
      chatbox.setAttribute("attribution", "biz_inbox");
    </script>

    <!-- Your SDK code -->
    <script>
      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v12.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    </script>

    <script>
      window.fbAsyncInit = function() {
        FB.init({
          appId      : '673400070509276',
          xfbml      : true,
          version    : 'v12.0'
        });
        FB.AppEvents.logPageView();
      };

      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "https://connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));
    </script>


    <div id="preloader">
        <div class="sk-spinner sk-spinner-wave">
            <div class="sk-rect1"></div>
            <div class="sk-rect2"></div>
            <div class="sk-rect3"></div>
            <div class="sk-rect4"></div>
            <div class="sk-rect5"></div>
        </div>
    </div>
    <!-- End Preload -->



    <div class="layer"></div>
    <!-- Mobile menu overlay mask -->

     <!-- Header================================================== -->
    <header>
        <div id="top_line">
            <div class="container">
                <div class="row">
                    <div class="col-6"><i class="icon-phone"></i><strong>+216 58 465 249</strong></div>
                    <div class="col-6">
                        <ul id="top_links">
                            
                               

                                <li id="social_top">
                                <a target="_blank" href="https://www.facebook.com/palmyrahotels.tn" ><i class="icon-facebook"></i></a>
                                <a target="_blank" href="https://www.instagram.com/palmyrahotels.tn" ><i class="icon-instagramm"></i></a>
                                <a target="_blank" href="https://www.youtube.com/channel/UCw27RP8ckwy9ym4_vIW7YFQ" ><i class="icon-youtube"></i></a>
                                

                            </li>

                           
                           
                        </ul>
                    </div>
                </div><!-- End row -->
            </div><!-- End container-->
        </div><!-- End top line-->
        
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <div id="logo" >
                      <!--  <h3><a href="<?php echo base_url() ?>" title="Home"><b>Palmyra</b><small>Hotels.tn</small></a></h3>-->
                      <a href="<?php echo base_url() ?>">
                        <img src="<?php echo base_url()?>assets/img/logo-1.png" width="250"  alt="Palmyra Hotels" class="logo_normal"></a>
                      <a href="<?php echo base_url() ?>">
                        <img src="<?php echo base_url()?>assets/img/logo_sticky-1.png"  width="200"  alt="Palmyra Hotels" class="logo_sticky"></a>
                    </div>
                </div>
                <nav class="col-8" style="padding-top:2px ">
                    <a class="cmn-toggle-switch cmn-toggle-switch__htx open_close"  ><span>Menu mobile</span></a>
                    <div class="main-menu">
                        <div id="header_menu">
                            <img src="<?php echo base_url() ?>assets/img/logo_sticky-1.png" width="200" alt="Palmyra Hotels"> 
                             
                               
                          
                        </div>

                        <a href="#" class="open_close" id="close_in"><i class="icon_set_1_icon-77"></i></a>
                         <ul style="padding-top: 10px;" >
                            <li><a href="<?php echo base_url() ?>" class="show-submenu">Home</a></li>                            
                            <li><a href="<?php echo base_url() ?>About">About</a></li>
                            
                             <li class="submenu">
                                <a  class="show-submenu">Hotels <i class="icon-down-open-mini"></i></a>
                                <ul>
                                    <?php foreach ($hotels as $hotel ) { ?> 
                                            <li> 
                                                <a href="<?php echo base_url() ?>Hotel/<?php echo $hotel->acro ?>" >
                                                    Palmyra <?php echo $hotel->name ?>
                                                        
                                                </a>
                                            </li>
                                        <?php } ?>
                                </ul>
                            </li>
                           
                             <li class="submenu">
                                <a href="javascript:void(0);" class="show-submenu">Services <i class="icon-down-open-mini"></i></a>
                                <ul>
                                    <?php foreach ($bars as $bar ) { ?> 
                                            <li> 
                                                <a href="<?php echo base_url() ?>Bars/view/<?php echo $bar->barId ?>" >
                                                    <?php echo $bar->name ?>
                                                        
                                                </a>
                                            </li>
                                        <?php } ?>
                                </ul>
                            </li>

                            

                            <li><a href="<?php echo base_url() ?>Blog">Blog</a></li>
                            
                            <li><a href="<?php echo base_url() ?>Contact">Contact</a></li>
                           
                        </ul>


                         <div id="header_menu" style="clear: both;
                                                        position: relative;
                                                        height: 25px;
                                                        margin-top: -10px; text-align: left;" >
                            
                             
                                    <ul>
                                    
                                        <li><a style="color: black" class="dropdown-item"  href="<?php echo base_url() ?>Reservation/mybookings"  >My bookings</a></li>
                                        
                                        <li><a  style="color: black" class="dropdown-item" href="<?php echo base_url() ?>logout">logout</a></li>
                                      </ul>
                                  
                          
                        </div>
                    </div><!-- End main-menu -->


                   
                                <ul id="top_tools" style="padding-top: 5px;"   >

                                   <?php if ($uid == 0 ) { ?>
                                <li><a href="#" data-toggle="modal" data-target="#signinForm" ><i class="icon-login-2"></i> Sign in</a></li>
                            <?php } else {?>
                                <li  id="userMenu">
                               
                                <div class="dropdown" >
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style="background-color: transparent;border-color : transparent;" ><i class="icon-user"></i> <?php echo $name ?></button>  
                                   
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" >
                                        <li><a style="color: black" class="dropdown-item"  href="<?php echo base_url() ?>Reservation/mybookings" >My bookings</a></li>
                                        
                                        <li><a  style="color: black" class="dropdown-item" href="<?php echo base_url() ?>logout">logout</a></li>
                                      </ul>
                                 </div>
                        
                                </li>
                                    
                                
                            <?php } ?>
                                    
                                </ul>

<script type="text/javascript">
$(function() {
   if( screen.width < 720 ) 
   {
   $('#userMenu').hide() ;
   } 
}); 
</script>
                               
                   
                    
                   
                </nav>
            </div>
        </div><!-- container -->
    </header><!-- End Header -->