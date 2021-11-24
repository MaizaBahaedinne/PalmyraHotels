<!DOCTYPE html>
<html lang="en">

<!-- Mirrored from techydevs.com/demos/themes/html/trizen-demo/trizen/index2.html by HTTrack Website Copier/3.x [XR&CO'2014], Sat, 24 Jul 2021 10:49:16 GMT -->
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8">
    <meta name="author" content="TechyDevs">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Palmyra Hotels - <?php echo $pageTitle ?></title>
    <!-- Favicon -->
    <link rel="icon" href="images/favicon.png">

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&amp;display=swap" rel="stylesheet">

    <!-- Template CSS Files -->
    <link rel="stylesheet" href="<?php echo base_url() ?>assets/css/bootstrap.min.css">
    <link rel="stylesheet" href="<?php echo base_url() ?>assets/css/bootstrap-select.min.css">
    <link rel="stylesheet" href="<?php echo base_url() ?>assets/css/line-awesome.css">
    <link rel="stylesheet" href="<?php echo base_url() ?>assets/css/owl.carousel.min.css">
    <link rel="stylesheet" href="<?php echo base_url() ?>assets/css/owl.theme.default.min.css">
    <link rel="stylesheet" href="<?php echo base_url() ?>assets/css/jquery.fancybox.min.css">
    <link rel="stylesheet" href="<?php echo base_url() ?>assets/css/daterangepicker.css">
    <link rel="stylesheet" href="<?php echo base_url() ?>assets/css/animated-headline.css">
    <link rel="stylesheet" href="<?php echo base_url() ?>assets/css/jquery-ui.css">
    <link rel="stylesheet" href="<?php echo base_url() ?>assets/css/flag-icon.min.css">
    <link rel="stylesheet" href="<?php echo base_url() ?>assets/css/style.css">
</head>
<body>
<!-- start cssload-loader -->
<div class="preloader" id="preloader">
    <div class="loader">
        <svg class="spinner" viewBox="0 0 50 50">
            <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
        </svg>
    </div>
</div>
<!-- end cssload-loader -->



<!-- ================================
            START HEADER AREA
================================= -->
<header class="header-area">
    <div class="header-top-bar padding-right-100px padding-left-100px">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="header-top-content">
                        <div class="header-left">
                            <ul class="list-items">
                                <li><a href="#"><i class="la la-phone mr-1"></i>(123) 123-456</a></li>
                                <li><a href="#"><i class="la la-envelope mr-1"></i>info@palmyra.com.tn</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="header-top-content">
                        <div class="header-right d-flex align-items-center justify-content-end">
                            
                            
                            <div class="header-right-action">
                                <a href="#" class="theme-btn theme-btn-small theme-btn-transparent mr-1" data-toggle="modal" data-target="#signupPopupForm">Sign Up</a>
                                 <a href="#" class="theme-btn theme-btn-small" data-toggle="modal" data-target="#loginPopupForm">Login</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="header-menu-wrapper padding-right-100px padding-left-100px">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <div class="menu-wrapper justify-content-between">
                        <a href="<?php echo base_url() ?>" class="down-button"><i class="la la-angle-down"></i></a>
                        <div class="logo">
                            <a href="<?php echo base_url() ?>"><img src="<?php echo base_url() ?>assets/images/logo.png" alt="logo"></a>
                            <div class="menu-toggler">
                                <i class="la la-bars"></i>
                                <i class="la la-times"></i>
                            </div><!-- end menu-toggler -->
                        </div><!-- end logo -->
                        <div class="main-menu-content pr-0 ml-0">
                            <nav>
                                <ul>
                                    <li>
                                        <a href="<?php echo base_url() ?>">Home </a>
                                        
                                    </li>
                                    <li>
                                        <a href="<?php echo base_url() ?>About">About </a>
                                        
                                    </li>
                                    
                                    <li>
                                        <a href="#">Hotels <i class="la la-angle-down"></i></a>
                                        <ul class="dropdown-menu-item">
                                            <?php foreach ($hotels as $hotel) {
                                            ?>
                                                <li><a  href="<?php echo base_url() ?>Hotel/view/<?php echo $hotel->hotelId  ?>"><?php echo $hotel->name ?></a></li>
                                            <?php
                                            }
                                            ?> 

                                        </ul>
                                    </li>
                                     <li>
                                        <a href="<?php echo base_url() ?>Contact">Contact </a>
                                        
                                    </li>
                                </ul>
                            </nav>
                        </div><!-- end main-menu-content -->
                        <div class="nav-btn">
                          <!--  <a href="become-local-expert.html" class="theme-btn">Become Local Expert</a>-->
                        </div><!-- end nav-btn -->
                    </div><!-- end menu-wrapper -->
                </div><!-- end col-lg-12 -->
            </div><!-- end row -->
        </div><!-- end container-fluid -->
    </div><!-- end header-menu-wrapper -->
</header>
<!-- ================================
         END HEADER AREA
================================= -->