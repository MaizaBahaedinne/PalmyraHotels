<!-- ================================
    START HERO-WRAPPER AREA
================================= -->
<section class="hero-wrapper hero-wrapper2">
    <div class="hero-box pb-0">
        <div id="fullscreen-slide-contain">
            <ul class="slides-container">
                <li><img src="<?php echo base_url() ?>assets/images/slideAcceuil/1.jpg" alt=""></li>
                <li><img src="<?php echo base_url() ?>assets/images/slideAcceuil/2.jpg" alt=""></li>
                <li><img src="<?php echo base_url() ?>assets/images/slideAcceuil/3.jpg" alt=""></li>
                <li><img src="<?php echo base_url() ?>assets/images/slideAcceuil/4.jpg" alt=""></li>
                <li><img src="<?php echo base_url() ?>assets/images/slideAcceuil/5.jpg" alt=""></li>
                <li><img src="<?php echo base_url() ?>assets/images/slideAcceuil/6.jpg" alt=""></li>
                <li><img src="<?php echo base_url() ?>assets/images/slideAcceuil/7.jpg" alt=""></li>
            </ul>
        </div><!-- End background slider -->
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="hero-content pb-5">
                        <div class="section-heading">
                            <p class="sec__desc pb-2">Hotel stays, Dream getaways</p>
                            <h2 class="sec__title">Find the Perfect Place to Stay <br> for Your Next Trip</h2>
                        </div>
                    </div><!-- end hero-content -->
                    <div class="search-fields-container">
                        <div class="contact-form-action">
                            <form action="<?php echo base_url() ?>Room/search" class="row">
                                <div class="col-lg-4 pr-0">
                                    <div class="input-box">
                                        <label class="label-text">Hotel name</label>
                                        <div class="form-group">
                                            <span class="la la-map-marker form-icon"></span>
                                            <select class="form-control" >
                                           
                                             
                                                <?php foreach ($hotels as $hotel) {
                                                ?>
                                                <option value="<?php echo $hotel->hotelId ?>"><?php echo $hotel->name ?></option>
                                                <?php
                                                    }
                                                ?> 
                                           
                                                </select>

                                        </div>
                                    </div>
                                </div><!-- end col-lg-3 -->
                                <div class="col-lg-4 pr-0">
                                    <div class="input-box">
                                        <label class="label-text">Check in - Check out</label>
                                        <div class="form-group">
                                            <span class="la la-calendar form-icon"></span>
                                            <input class="date-range form-control" type="text" name="daterange" readonly>
                                        </div>
                                    </div>
                                </div><!-- end col-lg-3 -->

                                <div class="col-lg-4">
                                    <div class="input-box">
                                        <label class="label-text">Guests</label>
                                        <div class="form-group">
                                            <div class="dropdown dropdown-contain gty-container">
                                                <a class="dropdown-toggle dropdown-btn" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                                    <span class="adult" data-text="Adult" data-text-multi="Adults">0 Adult</span>
                                                    -
                                                    <span class="children" data-text="Child" data-text-multi="Children">0 Children</span>
                                                </a>
                                                <div class="dropdown-menu dropdown-menu-wrap">
                                                    <div class="dropdown-item">
                                                        <div class="qty-box d-flex align-items-center justify-content-between">
                                                            <label>Rooms</label>
                                                            <div class="qtyBtn d-flex align-items-center">
                                                                <div class="qtyDec"><i class="la la-minus"></i></div>
                                                                <input type="text" name="room_number" value="0" class="qty-input">
                                                                <div class="qtyInc"><i class="la la-plus"></i></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="dropdown-item">
                                                        <div class="qty-box d-flex align-items-center justify-content-between">
                                                            <label>Adults</label>
                                                            <div class="qtyBtn d-flex align-items-center">
                                                                <div class="qtyDec"><i class="la la-minus"></i></div>
                                                                <input type="text" name="adult_number" value="0">
                                                                <div class="qtyInc"><i class="la la-plus"></i></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="dropdown-item">
                                                        <div class="qty-box d-flex align-items-center justify-content-between">
                                                            <label>Children</label>
                                                            <div class="qtyBtn d-flex align-items-center">
                                                                <div class="qtyDec"><i class="la la-minus"></i></div>
                                                                <input type="text" name="child_number" value="0">
                                                                <div class="qtyInc"><i class="la la-plus"></i></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div><!-- end dropdown -->
                                        </div>
                                    </div>
                                </div><!-- end col-lg-3 -->
                            
                            
                                <input type="submit"   class="btn btn-block btn-primary" value="Search Now"> 
                           
                            </form>
                        </div>
                    </div>
                </div><!-- end col-lg-12 -->
            </div><!-- end row -->
        </div><!-- end container -->
    </div>
</section><!-- end hero-wrapper -->
<!-- ================================
    END HERO-WRAPPER AREA
================================= -->

<!-- ================================
    START INFO AREA
================================= -->
<section class="info-area info-bg info-area2 padding-top-80px padding-bottom-45px">
    <div class="container">
        <div class="row">
            <div class="col-lg-3 responsive-column">
                <div class="icon-box icon-layout-2 d-flex">
                    <div class="info-icon flex-shrink-0 bg-rgb text-color-2">
                        <i class="las la-radiation"></i>
                    </div><!-- end info-icon-->
                    <div class="info-content">
                        <h4 class="info__title">Unique Atmosphere</h4>
                        <p class="info__desc">
                            Varius quam quisque id diam vel quam
                        </p>
                    </div><!-- end info-content -->
                </div><!-- end icon-box -->
            </div><!-- end col-lg-3 -->
             <div class="col-lg-3 responsive-column">
                <div class="icon-box icon-layout-2 d-flex">
                    <div class="info-icon flex-shrink-0 bg-rgb-2 text-color-3">
                        <i class="la la-tree"></i>
                    </div><!-- end info-icon-->
                    <div class="info-content">
                        <h4 class="info__title">Environment</h4>
                        <p class="info__desc">
                            Varius quam quisque id diam vel quam
                        </p>
                    </div><!-- end info-content -->
                </div><!-- end icon-box -->
            </div><!-- end col-lg-3 -->
            <div class="col-lg-3 responsive-column">
                <div class="icon-box icon-layout-2 d-flex">
                    <div class="info-icon flex-shrink-0 bg-rgb-3 text-color-4">
                        <i class="las la-map-marked-alt"></i>
                    </div><!-- end info-icon-->
                    <div class="info-content">
                        <h4 class="info__title">Great Location</h4>
                        <p class="info__desc">
                            Varius quam quisque id diam vel quam
                        </p>
                    </div><!-- end info-content -->
                </div><!-- end icon-box -->
            </div><!-- end col-lg-3 -->
            <div class="col-lg-3 responsive-column">
                <div class="icon-box icon-layout-2 d-flex">
                    <div class="info-icon flex-shrink-0 bg-rgb-4 text-color-5">
                        <i class="las la-bed"></i>
                    </div><!-- end info-icon-->
                    <div class="info-content">
                        <h4 class="info__title">Homey Comfort</h4>
                        <p class="info__desc">
                            Varius quam quisque id diam vel quam
                        </p>
                    </div><!-- end info-content -->
                </div><!-- end icon-box -->
            </div><!-- end col-lg-3 -->
        </div><!-- end row -->
    </div><!-- end container -->
</section><!-- end info-area -->
<!-- ================================
    END INFO AREA
================================= -->

<!-- ================================
    START ABOUT AREA
================================= -->
<section class="about-area section--padding overflow-hidden">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <div class="about-content pr-5">
                    <div class="section-heading">
                        <h4 class="font-size-16 pb-2">Our Story</h4>
                        <h2 class="sec__title">Atmosphere and Design</h2>
                        <p class="sec__desc pt-4 pb-2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</p>
                        
                    </div><!-- end section-heading -->
                    <div class="btn-box pt-4">
                        <a href="about.html" class="theme-btn">Read More <i class="la la-arrow-right ml-1"></i></a>
                    </div>
                </div>
            </div><!-- end col-lg-6 -->
            <div class="col-lg-6">
                <div class="image-box about-img-box">
                    <img src="<?php echo base_url() ?>assets/images/slideAcceuil/4.jpg" alt="about-img" class="img__item img__item-1">
                    <img src="<?php echo base_url() ?>assets/images/tripadvisor.png" alt="about-img" class="img__item img__item-2">
                </div>
            </div><!-- end col-lg-6 -->
        </div><!-- end row -->
    </div><!-- end container -->
</section>
<!-- ================================
    END ABOUT AREA
================================= -->

<div class="section-block"></div>

<!-- ================================
    START ROOM TYPE AREA
================================= -->
<section class="room-type-area section--padding">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="section-heading text-center">
                    <h2 class="sec__title">Find a Room Type</h2>
                </div><!-- end section-heading -->
            </div><!-- end col-lg-12 -->
        </div><!-- end row -->
        <div class="row padding-top-50px">
            <div class="col-lg-6">
                <div class="room-type-content">
                    <div class="image-box">
                        <a href="room-list.html" class="d-block">
                            <img src="<?php echo base_url() ?>assets/images/img27.jpg" alt="room type img" class="img__item">
                            <div class="room-type-link">
                                Dorm Beds <i class="la la-arrow-right ml-2"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div><!-- end col-lg-6 -->
            <div class="col-lg-6">
                <div class="room-type-content">
                    <div class="image-box">
                        <a href="room-list.html" class="d-block">
                            <img src="<?php echo base_url() ?>assets/images/img28.jpg" alt="room type img" class="img__item">
                            <div class="room-type-link">
                                Private Room <i class="la la-arrow-right ml-2"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div><!-- end col-lg-6 -->
        </div><!-- end row -->
    </div><!-- end container -->
</section>
<!-- ================================
    END ROOM TYPE AREA
================================= -->

<!-- ================================
    START HOTEL AREA
================================= -->
<section class="hotel-area section-bg padding-top-100px padding-bottom-200px overflow-hidden">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="section-heading text-center">
                    <h2 class="sec__title line-height-55">Popular Hotel Destinations <br> You Might Like</h2>
                </div><!-- end section-heading -->
            </div><!-- end col-lg-12 -->
        </div><!-- end row -->
        <div class="row padding-top-50px">
            <div class="col-lg-12">
                <div class="hotel-card-wrap">
                    <div class="hotel-card-carousel-2 carousel-action">
                         <?php foreach ($hotels as $hotel) {   ?>
                           
                          
                        
                        <div class="card-item">
                            <div class="card-img">
                                <a href="hotel-single.html" class="d-block">
                                    <img src="<?php echo base_url() ?>assets/images/facade/<?php echo $hotel->facade ?>" alt="<?php echo $hotel->name ?>">
                                </a>
                                <!-- <span class="badge">Featured</span>
                                <span class="badge badge-ribbon">20% off</span> -->
                            </div>
                            <div class="card-body">
                                <h3 class="card-title"><a href="hotel-single.html"><?php echo $hotel->name ?></a></h3>
                                <p class="card-meta"><?php echo $hotel->location ?></p>
                                <div class="card-rating">
                                    <span class="badge text-white">4.4/5</span>
                                    <span class="review__text">Average</span>
                                    <span class="rating__text">(30 Reviews)</span>
                                </div>
                                <div class="card-price d-flex align-items-center justify-content-between">
                                    <p>
                                        <span class="price__num">$80.00</span>
                                        <span class="price__num before-price color-text-3">$100.00</span>
                                        <span class="price__text">Per night</span>
                                    </p>
                                    <a href="hotel-single.html" class="btn-text">See details<i class="la la-angle-right"></i></a>
                                </div>
                            </div>
                        </div><!-- end card-item -->
                       
                         <?php
                                }
                            ?> 
                      
                    </div><!-- end hotel-card-carousel -->
                </div>
            </div><!-- end col-lg-12 -->
        </div><!-- end row -->
    </div><!-- end container-fluid -->
</section><!-- end hotel-area -->
<!-- ================================
    END HOTEL AREA
================================= -->

<!-- ================================
    START DISCOUNT AREA
================================= -->
<section class="discount-area">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="discount-box">
                    <div class="discount-img">
                        <img src="<?php echo base_url() ?>assets/images/discount-hotel-img.jpg" alt="discount img">
                    </div><!-- end discount-img -->
                    <div class="discount-content">
                        <div class="section-heading">
                            <p class="sec__desc text-white">Hot deal, save 50%</p>
                            <h2 class="sec__title mb-0 line-height-50 text-white">Discount 50% for the <br> First Booking</h2>
                        </div><!-- end section-heading -->
                        <div class="btn-box pt-4">
                            <a href="#" class="theme-btn border-0">Learn More <i class="la la-arrow-right ml-1"></i></a>
                        </div>
                    </div><!-- end discount-content -->
                    <div class="company-logo">
                        <img src="<?php echo base_url() ?>assets/images/logo2.png" alt="">
                        <p class="text-white font-size-14 text-right">*Terms applied</p>
                    </div><!-- end company-logo -->
                </div>
            </div><!-- end col-lg-12 -->
        </div><!-- end row -->
    </div><!-- end container -->
</section><!-- end discount-area -->
<!-- ================================
    END DISCOUNT AREA
================================= -->