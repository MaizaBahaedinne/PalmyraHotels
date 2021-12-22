<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Palmyra Hotels ">
    <meta name="author" content="Maiza Bahaedinne">
    <title>Palmyra Hotels | <?php echo $pageTitle ?></title>

    <!-- Favicons-->
    <link rel="shortcut icon" href="<?php echo base_url() ?>assets/img/favicon-1.ico" type="image/x-icon">
    <link rel="apple-touch-icon" type="image/x-icon" href="<?php echo base_url() ?>assets/img/apple-touch-icon-57x57-precomposed-1.png">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="72x72" href="<?php echo base_url() ?>assets/img/apple-touch-icon-72x72-precomposed-1.png">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="114x114" href="<?php echo base_url() ?>assets/img/apple-touch-icon-114x114-precomposed-1.png">
    <link rel="apple-touch-icon" type="image/x-icon" sizes="144x144" href="<?php echo base_url() ?>assets/img/apple-touch-icon-144x144-precomposed-1.png">

    <!-- GOOGLE WEB FONT -->
    <link href="https://fonts.googleapis.com/css2-2.css?family=Gochi+Hand&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <!-- COMMON CSS -->
    <link href="<?php echo base_url() ?>assets/css/bootstrap.min-1.css" rel="stylesheet">
    <link href="<?php echo base_url() ?>assets/css/style-1.css" rel="stylesheet">
    <link href="<?php echo base_url() ?>assets/css/vendors-1.css" rel="stylesheet">
    
    <!-- ALTERNATIVE COLORS CSS -->
    <link href="#" id="colors" rel="stylesheet">

    <!-- CUSTOM CSS -->
    <link href="<?php echo base_url() ?>assets/css/custom-1.css" rel="stylesheet">
        
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
                            <li><a href="#sign-in-dialog" id="access_link">Sign in</a></li>
                            <li><a href="wishlist-1.html" id="wishlist_link">Wishlist</a></li>
                           
                        </ul>
                    </div>
                </div><!-- End row -->
            </div><!-- End container-->
        </div><!-- End top line-->
        
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <div id="logo_home">
                        <h1><a href="<?php echo base_url() ?>" title="Home">Palmyra Hotels</a></h1>
                    </div>
                </div>
                <nav class="col-9">
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
                            <li><a href="<?php echo base_url() ?>Contact">Contact</a></li>
                            
                             
                           
                        </ul>
                    </div><!-- End main-menu -->
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