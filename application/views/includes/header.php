<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Palmyra Hotels ">
    <meta name="author" content="Maiza Bahaedinne">

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
    <link rel="apple-touch-icon" type="image/x-icon" href="<?php echo base_url() ?>assets/img/apple-touch-icon-57x57-precomposed-1.png">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="72x72" href="<?php echo base_url() ?>assets/img/apple-touch-icon-72x72-precomposed-1.png">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="114x114" href="<?php echo base_url() ?>assets/img/apple-touch-icon-114x114-precomposed-1.png">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="144x144" href="<?php echo base_url() ?>assets/img/apple-touch-icon-144x144-precomposed-1.png">

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

    <script type="text/javascript" charset="UTF-8" src="http://maps.googleapis.com/maps-api-v3/api/js/47/3/intl/fr_ALL/common.js"></script>
    <script type="text/javascript" charset="UTF-8" src="http://maps.googleapis.com/maps-api-v3/api/js/47/3/intl/fr_ALL/util.js"></script>
    <script type="text/javascript" charset="UTF-8" src="http://maps.googleapis.com/maps-api-v3/api/js/47/3/intl/fr_ALL/map.js"></script>
    <script type="text/javascript" charset="UTF-8" src="http://maps.googleapis.com/maps-api-v3/api/js/47/3/intl/fr_ALL/marker.js"></script>
    <script type="text/javascript" charset="UTF-8" src="http://maps.googleapis.com/maps-api-v3/api/js/47/3/intl/fr_ALL/stats.js"></script>
    <script type="text/javascript" charset="UTF-8" src="http://maps.googleapis.com/maps-api-v3/api/js/47/3/intl/fr_ALL/onion.js"></script>
    <script type="text/javascript" charset="UTF-8" src="http://maps.googleapis.com/maps-api-v3/api/js/47/3/intl/fr_ALL/controls.js"></script>
        
</head>
<body>

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
                    <div class="col-6"><i class="icon-phone"></i><strong>0045 043204434</strong></div>
                    <div class="col-6">
                        <ul id="top_links">
                            <?php if ($uid == 0 ) { ?>
                                <li><a href="#sign-in-dialog" id="access_link">Sign in</a></li>
                            <?php } else {?>
                                <li><?php echo $name ?>  
                                    <a style="color: red;" href="<?php echo base_url() ?>logout" >
                                        Sign out
                                    </a>
                                </li>
                            <?php } ?>
                                <li><a href="wishlist-1.html" id="wishlist_link">Wishlist</a></li>
                           
                        </ul>
                    </div>
                </div><!-- End row -->
            </div><!-- End container-->
        </div><!-- End top line-->
        
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <div >
                        <h3><a href="<?php echo base_url() ?>" title="Home"><b>Palmyra</b><small>Hotels.tn</small></a></h3>
                    </div>
                </div>
                <nav class="col-8">
                    <a class="cmn-toggle-switch cmn-toggle-switch__htx open_close" href="<?php echo base_url() ?>"><span>Menu mobile</span></a>
                    <div class="main-menu">
                        <div id="header_menu">
                           <!-- <img src="<?php echo base_url() ?>assets/img/logo_sticky-1.png" width="160" height="34" alt="Palmyra Hotels"> -->
                           <h2>Palmyra <small>Hotels</small></h2> 
                        </div>
                        <a href="#" class="open_close" id="close_in"><i class="icon_set_1_icon-77"></i></a>
                         <ul>
                            <li><a href="<?php echo base_url() ?>" class="show-submenu">Home</a></li>                            
                            <li><a href="<?php echo base_url() ?>About">About</a></li>
                             <li class="submenu">
                                <a href="javascript:void(0);" class="show-submenu">Hotels <i class="icon-down-open-mini"></i></a>
                                <ul>
                                    <?php foreach ($hotels as $hotel ) { ?> 
                                            <li> 
                                                <a href="<?php echo base_url() ?>Hotel/view/<?php echo $hotel->hotelId ?>" >
                                                    Palmyra <?php echo $hotel->name ?>
                                                        
                                                </a>
                                            </li>
                                        <?php } ?>
                                </ul>
                            </li>
                            <li><a href="<?php echo base_url() ?>About">Services</a></li>
                            <li><a href="<?php echo base_url() ?>Contact">Contact</a></li>
                            
                             
                           
                        </ul>
                    </div><!-- End main-menu -->
                    <!--
                    <ul id="top_tools">
                        <li>
                            <a href="javascript:void(0);" class="search-overlay-menu-btn"><i class="icon_search"></i></a>
                        </li>
                        <li>
                            <div class="dropdown dropdown-cart">
                                <a href="#" data-toggle="dropdown" class="cart_bt"><i class="icon_bag_alt"></i><strong>3</strong></a>
                                <ul class="dropdown-menu" id="cart_items">
                                    <li>
                                        <div class="image"><img src="<?php echo base_url() ?>assets/img/thumb_cart_1-1.jpg" alt="image"></div>
                                        <strong><a href="#">Louvre museum</a>1x $36.00 </strong>
                                        <a href="#" class="action"><i class="icon-trash"></i></a>
                                    </li>
                                    <li>
                                        <div class="image"><img src="<?php echo base_url() ?>assets/img/thumb_cart_2-1.jpg" alt="image"></div>
                                        <strong><a href="#">Versailles tour</a>2x $36.00 </strong>
                                        <a href="#" class="action"><i class="icon-trash"></i></a>
                                    </li>
                                    <li>
                                        <div class="image"><img src="<?php echo base_url() ?>assets/img/thumb_cart_3-1.jpg" alt="image"></div>
                                        <strong><a href="#">Versailles tour</a>1x $36.00 </strong>
                                        <a href="#" class="action"><i class="icon-trash"></i></a>
                                    </li>
                                    <li>
                                        <div>Total: <span>$120.00</span></div>
                                        <a href="cart-1.html" class="button_drop">Go to cart</a>
                                        <a href="payment-1.html" class="button_drop outline">Check out</a>
                                    </li>
                                </ul>
                            </div><!-- End dropdown-cart-->
                        </li>
                    </ul>
                </nav>
            </div>
        </div><!-- container -->
    </header><!-- End Header -->