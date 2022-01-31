
    
   <div id="search_container_2">
        <div id="search_2">
            <ul class="nav nav-tabs">
                <li><a href="#hotelsTavb" data-toggle="tab" class="active show" id="tab_bt_1"><span>Hotels</span></a></li>
               
               
            </ul>

            <div class="tab-content">
                <div class="tab-pane fade active show" id="hotelsTavb">
                   <form action="<?php echo base_url() ?>Hotel/search" method="get">
                        <div class="row no-gutters custom-search-input-2">
                            <div class="col-lg-4">
                                <div class="form-group">
                                    <input class="form-control required" type="text" placeholder="Where..." id="hotelsname" name="hotelsname"  list="browsers" required>

                                    <datalist id="browsers">
                                     <?php foreach ($hotels as $hotel ) { ?> 
                                            <option class="hots" data-hotel="<?php echo $hotel->hotelId ?>" <?php if($hotel->statut == 1 ) { ?> disabled <?php } ?> >Palmyra <?php echo $hotel->name ?> <?php echo $hotel->location ?></option>
                                    <?php } ?>
                                    </datalist>
                                    <i class="icon_pin_alt"></i>
                                    <input class="form-control required" type="hidden" placeholder="hotelId" name="hotelId" id="hotelId"  required>
                                    <script type="text/javascript">
                                        $("input[name=hotelsname]").focusout(function(){

                                         
                                            $( ".hots" ).each(function() {                                                    
                                                       // alert($(this).data("hotel"));
                                                    
                                                    if( $(this).html()  ==   $("#hotelsname").val()  )
                                                    {
                                                            alert("Done");
                                                          $("input[name=hotelId]").val( $(this).data("hotel")) ;
                                                          
                                                    } 
                                                });
                                            
                                            
                                        });
                                    </script>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="form-group">
                                    <input class="form-control date-pick required" type="text" name="dates" placeholder="When.." autocomplete="off" required>
                                     <input class="form-control date-pick" type="hidden" name="checkin" placeholder="When.." required>
                                <input class="form-control date-pick" type="hidden" name="checkout" placeholder="When.." required>
                                    <i class="icon_calendar"></i>
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="panel-dropdown">
                                    <a href="#">Guests <span class="qtyTotal tours">1</span></a>
                                    <div class="panel-dropdown-content">
                                        <!-- Quantity Buttons -->
                                        <div class="qtyButtons tours">
                                            <label>Adults</label>
                                            <input type="text" name="adult" value="1">
                                        </div>
                                        <div class="qtyButtons tours">
                                            <label>Childrens</label>
                                            <input type="text" name="children" value="0">
                                        </div>
                                        <div class="qtyButtons tours">
                                            <label>Rooms</label>
                                            <input type="text" name="room" value="1">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-2">
                                <input type="submit" class="btn_search submit" value="Search">
                            </div>
                        </div>
                        <!-- /row -->
                    </form>
                </div>
                <!-- End tab -->
                <div class="tab-pane fade" id="hotels">
                    
                </div>
                <!-- End tab -->
                <div class="tab-pane" id="restaurants">
                   
                </div>
                <!-- End tab -->
            </div>
        </div>
        <!-- End search_container_2 -->
    </div>
    <!-- End search_container -->
    <script type="text/javascript" charset="utf-8">
                        $(document).ready(function() {
                            $('.error').hide();
                            $('.submit').click(function(event) {
                                $('.required').each(function (i, el) {
                                    var data = $(el).val();
                                    // console.log(i + ': ' + data);
                                    var len = data.length;
                                    if (len<1) {
                                        $('.error').html("Please fill in all field and submit the form again");
                                        $('.error').show();
                                        $('html, body').animate({scrollTop:0}, 'slow');
                                        event.preventDefault();
                                        return;
                                    }
                                });
                            });
                        });
                    </script>


  

    <main>
    <div class="container margin_60">
    
        <div class="main_title">
            <h2>Palmyra <span>Top</span> Hotels</h2>
            <p></p>
        </div>
        
        <div class="row">
        <?php foreach ($hotels as $hotel ) { ?> 
            <div class="col-lg-6 col-md-6 wow zoomIn" data-wow-delay="0.1s">
                <div class="tour_container">
                    <?php if($hotel->statut == 1 ) { ?>  
                     <div class="ribbon_3 popular"><span>Closed</span></div>
                    <?php } ?>
                    <div class="img_container">
                        <a href="<?php echo base_url() ?>Hotel/<?php echo $hotel->acro ?>">
                        <img src="<?php echo base_url() ?>assets/img/facade/hotel/<?php echo $hotel->facade?>"  class="img-fluid" alt="Image">
                        <div class="short_info">
                            <i class="icon_set_1_icon-44"></i><?php echo $hotel->location ?><span class="price"> <small><small>From</small></small> <?php if(!empty($hotel->prices->price)){ echo $hotel->prices->price + $hotel->prices->supS  ; } else{ echo "0" ; } ?><sup>DT</sup></span>
                        </div>
                        </a>
                    </div>
                    <div class="tour_title">
                        <h3>Palmyra <strong><?php echo $hotel->name ?></strong></h3>
                        <div class="rating">
                            <?php for ($i=0; $i < round($hotel->avisHotel->moyenne) ; $i++) { echo '<i class="icon-smile voted"></i>' ;   } ?>
                            <?php for ($i=0; $i < 5-round($hotel->avisHotel->moyenne) ; $i++) { echo '<i class="icon-smile"></i>' ;   } ?>
                            <small>(<?php echo count($hotel->avis) ?>)</small>
                        </div><!-- end rating -->
                        <div class="wishlist">
                            <a class="tooltip_flip tooltip-effect-1" href="javascript:void(0);">+<span class="tooltip-content-flip"><span class="tooltip-back">Add to wishlist</span></span></a>
                        </div><!-- End wish list-->
                    </div>
                </div><!-- End box tour -->
            </div><!-- End col -->
            
        <?php } ?>
            
        </div><!-- End row -->
        <!--
        <p class="text-center nopadding">
            <a href="#" class="btn_1 medium"><i class="icon-eye-7"></i>View all tours (144) </a>
        </p>
        -->
    </div><!-- End container -->
    
    <div class="white_bg">
          
               <div class="container margin_60">
            <div class="main_title">
                <h2>OUR <span>EVENTS</span> BLOG </h2>
                <p></p>
            </div>

            <div class="row">
                <?php foreach ($events as $event ){  ?>
                    <div class="col-lg-6">
                        <a class="box_news" href="#">
                            <figure><img src="<?php echo base_url() ?>assets/img/events/<?php echo $event->affiche?>" alt="">
                                <figcaption>
                                    <strong>
                                        <?php  
                                        $date = date_create($event->dateDebut);
                                        echo date_format($date, 'd'); ?>
                                        </strong>
                                     <?php  
                                      
                                        echo date_format($date, 'M'); ?>
                                </figcaption>
                            </figure>
                            <ul>
                                <li><?php echo $event->location->name ?></li>
                                <li><?php echo date_format($date, 'd M Y H:m');?></li>
                            </ul>
                            <h4><?php echo $event->titre ?></h4>
                            <div style="">
                                <p style="width: auto;
                                          height: 100px;
                                          white-space: nowrap;
                                          overflow: hidden;
                                          text-overflow: ellipsis;
                                          
                                          
                                         
                                          resize: vertical;" ><?php echo $event->description ?> </p>

                            </div>
                            
                        </a>
                    </div>
                <?php }  ?>
                </div>
                <!-- /row -->
                <p class="btn_home_align"><a href="#" class="btn_1 rounded">View all news</a></p>
        </div>   
           
        </div>
        <!-- End white_bg -->

        <section class="promo_full">
            <div class="promo_full_wp magnific">
                <div>
                    <h3>BELONG ANYWHERE</h3>
                    <p>
                     <!--   Lorem ipsum dolor sit amet, vix erat audiam ei. Cum doctus civibus efficiantur in. Nec id tempor imperdiet deterruisset, doctus volumus explicari qui ex.-->
                    </p>
                    <a href="https://www.youtube.com/watch?v=b0x42ldwzww" class="video"><i class="icon-play-circled2-1"></i></a>
                </div>
            </div>
        </section>
        <!-- End section -->

      


        <div class="container margin_60">

            <div class="main_title">
                <h2>Some <span>good</span> reasons</h2>
                <p>
                  <!--  Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur consequat. -->
                </p>
            </div>

            <div class="row">

                <div class="col-lg-4 wow zoomIn" data-wow-delay="0.2s">
                    <div class="feature_home">
                        <i class="icon_set_1_icon-41"></i>
                        <h3><span>4</span> Premium Hotel</h3>
                        <p>
                            
                        </p>
                        <a href="<?php echo base_url() ?>About" class="btn_1 outline">Read more</a>
                    </div>
                </div>

                <div class="col-lg-4 wow zoomIn" data-wow-delay="0.4s">
                    <div class="feature_home">
                        <i class="icon_set_1_icon-30"></i>
                        <h3><span>+100k</span> Customers</h3>
                        <p>
                            
                        </p>
                        <a href="<?php echo base_url() ?>About" class="btn_1 outline">Read more</a>
                    </div>
                </div>

                <div class="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
                    <div class="feature_home">
                        <i class="icon_set_1_icon-57"></i>
                        <h3><span>H24 </span> Support</h3>
                        <p>
                            
                        </p>
                        <a href="<?php echo base_url() ?>About" class="btn_1 outline">Read more</a>
                    </div>
                </div>

            </div>
            <!--End row -->

            <hr>

            <div class="row">
                <div class="col-md-6" style="text-align: center;"> 
                    <img src="<?php echo base_url() ?>assets/img/logopage.png" alt="Laptop" width='300px'  class="img-fluid laptop">
                </div>
                <div class="col-md-6">
                    <h3><span>Get started</span> with PalmyratHotels.tn</h3>
                    <p>
                        
                    </p>
                    <ul class="list_order">
                        <li><span>1</span>Select your preferred Hotel</li>
                        <li><span>2</span>Book Now</li>
                        <li><span>3</span>Print your invoic</li>
                    </ul>
                    <a href="<?php echo base_url() ?>" class="btn_1">Start now</a>
                </div>
            </div>
            <!-- End row -->
        
        </div>
        <!-- End container -->
    </main>
    <!-- End main -->


<main class="white_bg">
    <div class="container margin_60 ">
    
        <div class="main_title">
            <h2>Our <span>loyal</span> client</h2>
            <p></p>
        </div>
        
        <div class="row">
            <div class="owl-carousel owl-theme carousel-thumbs-2 magnific-gallery">
                                <div class="item">
                                    <a href="<?php echo base_url() ?>assets/img/client/tunivisions.png" data-effect="mfp-zoom-in"><img src="<?php echo base_url() ?>assets/img/client/tunivisions.png" alt="Image">
                                    </a>
                                </div>
                                <div class="item">
                                    <a href="<?php echo base_url() ?>assets/img/client/aiesec.jpg" data-effect="mfp-zoom-in"><img src="<?php echo base_url() ?>assets/img/client/aiesec.jpg" alt="Image">
                                    </a>
                                </div>
                                <div class="item">
                                    <a href="<?php echo base_url() ?>assets/img/client/rotaract.png" data-effect="mfp-zoom-in"><img src="<?php echo base_url() ?>assets/img/client/rotaract.png" alt="Image">
                                    </a>
                                </div>
                                <div class="item">
                                    <a href="<?php echo base_url() ?>assets/img/client/junior.png" data-effect="mfp-zoom-in"><img src="<?php echo base_url() ?>assets/img/client/junior.png" alt="Image">
                                    </a>
                                </div>
                                <div class="item">
                                    <a href="<?php echo base_url() ?>assets/img/client/AFALF.jpg" data-effect="mfp-zoom-in"><img src="<?php echo base_url() ?>assets/img/client/AFALF.jpg" alt="Image">
                                    </a>
                                </div>

                                
      
                            </div>
            
        </div><!-- End row -->
        <!--
        <p class="text-center nopadding">
            <a href="#" class="btn_1 medium"><i class="icon-eye-7"></i>View all tours (144) </a>
        </p>
        -->
    </div><!-- End container -->
</main>


    <!-- Input quantity  -->
    <script src="<?php echo base_url() ?>assets/js/input_qty-1.js"></script>


