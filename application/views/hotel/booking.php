<!-- ================================
    START BREADCRUMB AREA
================================= -->
<section class="breadcrumb-area bread-bg-7">
    <div class="breadcrumb-wrap">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="breadcrumb-content">
                        <div class="section-heading">
                            <h2 class="sec__title text-white">Hotel Booking</h2>
                        </div>
                    </div><!-- end breadcrumb-content -->
                </div><!-- end col-lg-6 -->
                <div class="col-lg-6">
                    <div class="breadcrumb-list text-right">
                        <ul class="list-items">
                            <li><a href="index.html">Home</a></li>
                            <li>Hotel Booking</li>
                        </ul>
                    </div><!-- end breadcrumb-list -->
                </div><!-- end col-lg-6 -->
            </div><!-- end row -->
        </div><!-- end container -->
    </div><!-- end breadcrumb-wrap -->
    <div class="bread-svg-box">
        <svg class="bread-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none"><polygon points="100 0 50 10 0 0 0 10 100 10"></polygon></svg>
    </div><!-- end bread-svg -->
</section><!-- end breadcrumb-area -->
<!-- ================================
    END BREADCRUMB AREA
================================= -->

<!-- ================================
    START BOOKING AREA
================================= -->
<section class="booking-area padding-top-100px padding-bottom-70px">
    <div class="container">
        <div class="row">
            <div class="col-lg-4">
                <div class="form-box booking-detail-form">
                    <div class="form-title-wrap">
                        <h3 class="title">Booking Details</h3>
                    </div><!-- end form-title-wrap -->
                    <div class="form-content">
                        <div class="card-item shadow-none radius-none mb-0">
                            <div class="card-img pb-4">
                                <a href="hotel-single.html" class="d-block">
                                    <img src="<?php echo base_url() ?>assets/images/facade/<?php echo $hotel->facade ?>" alt="tour-img">
                                </a>
                            </div>
                            <div class="card-body p-0">
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <h3 class="card-title"><?php echo $hotel->name ?></h3>
                                        <p class="card-meta"><?php echo $hotel->location ?></p>
                                    </div>
                                    <div>
                                        <a href="hotel-single.html" class="btn ml-1"><i class="la la-edit" data-toggle="tooltip" data-placement="top" title="Edit"></i></a>
                                    </div>
                                </div>
                                <div class="card-rating">
                                    <span class="badge text-white">4.4/5</span>
                                    <span class="review__text">Average</span>
                                    <span class="rating__text">(30 Reviews)</span>
                                </div>
                                <div class="section-block"></div>
                                <ul class="list-items list-items-2 py-2">
                                    <li><span>Check in:</span><?php echo  substr( $this->input->get('daterange') ,0, 10 ) ?> at 14:00 pm</li>
                                    <li><span>Check out:</span><?php echo  substr( $this->input->get('daterange') , 13, 23 ) ?> at 12:00 pm</li>
                                </ul>
                                <div class="section-block"></div>
                                <h3 class="card-title pt-3 pb-2 font-size-15"><a href="hotel-single.html">Order Details</a></h3>
                                <div class="section-block"></div>
                                <ul class="list-items list-items-2 py-3">
                                    <li><span>Room Type:</span><?php echo $price->titre ?></li>
                                    <li><span>Room:</span><?php echo $this->input->get('nroom') ?> Rooms</li>
                                    <li><span>Per Room Price:</span>
                                        <?php 

                                                $b = $price->price ;

                                                 
                                                   if ($this->input->GET('pension') =='PD' ) {
                                                    $bp =   $b + $price->PD;
                                                    }

                                                   if ($this->input->GET('pension') == 'DP' ) {
                                                    $bp =   $b + $price->DP;
                                                    }
                                                    if ($this->input->GET('pension') == 'PC' ) {
                                                    $bp =   $b + $price->PC;
                                                    }
                                                    if ($this->input->GET('pension') == 'ALLS' ) {
                                                    $bp =   $b + $price->ALLS;
                                                    }
                                                    if ($this->input->GET('pension') == 'ALLH' ) {
                                                    $bp =   $b + $price->ALLH;
                                                    }
                                                    if ($this->input->GET('pension') == '' ) {
                                                        $bp =   $b ;
                                                    }
                                                    $bpc = ($bp * $price->capacity)  ; 
                                                    echo  $bpc. ' TND' ;                                                   
                                                 ?></li>
                                    <li><span>Adults:</span>4</li>
                                    <li><span>Stay:</span><?php

                                    $d = $this->input->get('daterange') ; 
                                    //str_replace("/","-",  $d );
                                    $d1 = substr($d ,0, 10) ;
                                    $d2 = substr($d ,13, 23) ;
                                    $date1 = strtotime(substr($d1 ,6, 4)."-".substr($d1 ,3, 2)."-".substr($d1 ,0, 2)) ;
                                     
                                    $date2 = strtotime(substr($d2 ,6, 4)."-".substr($d2 ,3, 2)."-".substr($d2 ,0, 2)) ;

                                    

                                    // this calculates the diff between two dates, which is the number of nights
                                    $diff = abs($date2 - $date1) ;
                                    $years = floor($diff / (365*60*60*24)); 
                                    $months = floor(($diff - $years * 365*60*60*24)/(30*60*60*24)); 
                                    $numberOfNights= floor(($diff-$years*365*60*60*24-$months*30*60*60*24)/ (60*60*24)) ; 

                                    echo $numberOfNights.' Night<br>';

                                     ?></li>
                                </ul>
                                <div class="section-block"></div>
                                <ul class="list-items list-items-2 pt-3">
                                    <li><span>Sub Total:</span> <?php  $bpcr =   $bpc * $this->input->get('nroom')*$numberOfNights  ;  echo  $bpcr .' TND' ; ?></li>
                                    <li><span>Taxes And Fees:</span><?php $T = 3 * $price->capacity * $this->input->get('nroom') ; echo  $T  .' TND'   ; ?>  </li>
                                    <li><span>Total Price:</span><?php echo  $T +   $bpcr .' TND'   ; ?> </li>
                                </ul>
                            </div>
                        </div><!-- end card-item -->
                    </div><!-- end form-content -->
                </div><!-- end form-box -->
            </div><!-- end col-lg-4 -->
            <div class="col-lg-8">
                <div class="form-box">
                    <div class="form-title-wrap">
                        <h3 class="title">Your rooms Informations</h3>
                    </div><!-- form-title-wrap -->
                    <div class="form-content ">
                     <div class="contact-form-action">
                        <form action="" method="post" >
                            <?php for ($j= 0 ; $j <  $this->input->get('nroom') ; $j++)   {?>

                             <div class="row">
                              <div class="col-md-12">   
                                <h5>Room <?php echo $j+1 ?></h5>
                                <br>
                             </div>
                             <?php for ($i= 0 ; $i <  $price->capacity ; $i++)   {?>
                                 <div class="col-md-<?php echo 12/$price->capacity ?>">
                                     <div class="input-box">
                                        <label class="label-text">Guest <?php echo $i+1 ?></label>
                                        <div class="form-group">
                                            <span class="la la-user form-icon"></span>
                                            <input class="form-control" type="text" name="guest_<?php echo $i+1 ?>_<?php echo $j+1 ?>_<?php echo '' ?>" placeholder=" name" required>
                                        </div>
                                    </div>
                                 </div>
                            <?php } ?>
                              
                                  <div class="col-md-12">
                                    <label>Extras</label>
                                   </div>
                                   
                                    <?php if(!empty($opts)){  foreach ($opts as $opt ) {
                                    ?> 
                                    <div class="col-md-4">
                                            
                                                 <input type="checkbox" data-valeur="<?php  echo $opt->price  ?>"  name="options_room_<?php echo $j+1 ?>[]"  > 
                                                <label ><?php  echo $opt->option  ?> <small>(+<?php  echo $opt->price  ?> TND)</small></label>
                                            
                                     </div>  
                                    <?php
                                    } }else { echo "No Extrat" ; }  ?>
                                    
                              
                            </div> 
                              
                            <div style="text-align: right;" >
                                <span ><b>Price :</b>
                                    <span id="PriceRoom<?php echo $j+1 ?>" >
                                        <?php   echo  $bpc    ; ?>
                                    </span> 
                                TND</span> 
                                <br>
                                <span ><b>Extrat :</b>
                                    <span id="ExtratRoom<?php echo $j+1 ?>" >
                                        0
                                    </span>  
                                TND</span> 
                            </div>
                            <?php } ?>
                            
                              <hr>

                        </div>
                        <input type="submit" class="btn btn-block btn-primary" value="Confirme">
                        <!-- end contact-form-action -->
                    </div><!-- end form-content -->
                </div><!-- end form-box -->
                
            </div><!-- end col-lg-8 -->
            
        </div><!-- end row -->
    </div><!-- end container -->
</section><!-- end booking-area -->
<!-- ================================
    END BOOKING AREA
================================= -->

<div class="section-block"></div>

<!-- ================================
    START INFO AREA
================================= -->
<section class="info-area info-bg padding-top-90px padding-bottom-70px">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 responsive-column">
                <a href="#" class="icon-box icon-layout-2 d-flex">
                    <div class="info-icon flex-shrink-0 bg-rgb text-color-2">
                        <i class="la la-phone"></i>
                    </div><!-- end info-icon-->
                    <div class="info-content">
                        <h4 class="info__title">Need Help? Contact us</h4>
                        <p class="info__desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                        </p>
                    </div><!-- end info-content -->
                </a><!-- end icon-box -->
            </div><!-- end col-lg-4 -->
            <div class="col-lg-4 responsive-column">
                <a href="#" class="icon-box icon-layout-2 d-flex">
                    <div class="info-icon flex-shrink-0 bg-rgb-2 text-color-3">
                        <i class="la la-money"></i>
                    </div><!-- end info-icon-->
                    <div class="info-content">
                        <h4 class="info__title">Payments</h4>
                        <p class="info__desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                        </p>
                    </div><!-- end info-content -->
                </a><!-- end icon-box -->
            </div><!-- end col-lg-4 -->
            <div class="col-lg-4 responsive-column">
                <a href="#" class="icon-box icon-layout-2 d-flex">
                    <div class="info-icon flex-shrink-0 bg-rgb-3 text-color-4">
                        <i class="la la-times"></i>
                    </div><!-- end info-icon-->
                    <div class="info-content">
                        <h4 class="info__title">Cancel Policy</h4>
                        <p class="info__desc">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                        </p>
                    </div><!-- end info-content -->
                </a><!-- end icon-box -->
            </div><!-- end col-lg-4 -->
        </div><!-- end row -->
    </div><!-- end container -->
</section><!-- end info-area -->
<!-- ================================
    END INFO AREA
================================= -->

<!-- ================================
    START CTA AREA
================================= -->
<section class="cta-area subscriber-area section-bg-2 padding-top-60px padding-bottom-60px">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-7">
                <div class="section-heading">
                    <h2 class="sec__title font-size-30 text-white">Subscribe to see Secret Deals</h2>
                </div><!-- end section-heading -->
            </div><!-- end col-lg-7 -->
            <div class="col-lg-5">
                <div class="subscriber-box">
                    <div class="contact-form-action">
                        <form action="#">
                            <div class="input-box">
                                <label class="label-text text-white">Enter email address</label>
                                <div class="form-group mb-0">
                                    <span class="la la-envelope form-icon"></span>
                                    <input class="form-control" type="email" name="email" placeholder="Email address">
                                    <button class="theme-btn theme-btn-small submit-btn" type="submit">Subscribe</button>
                                    <span class="font-size-14 pt-1 text-white-50"><i class="la la-lock mr-1"></i>Don't worry your information is safe with us.</span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div><!-- end section-heading -->
            </div><!-- end col-lg-5 -->
        </div><!-- end row -->
    </div><!-- end container -->
</section><!-- end cta-area -->
<!-- ================================
    END CTA AREA
================================= -->