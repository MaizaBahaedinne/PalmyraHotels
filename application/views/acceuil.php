    <section id="search_container">
        <div id="search">
            <ul class="nav nav-tabs">
                <li><a href="#hotels" data-toggle="tab">Hotels</a></li>

            </ul>

            <div class="tab-content">
                <!-- End rab -->
                <div class="tab-pane active show" id="hotels">
                    <form method="GET" action="<?php echo base_url() ?>Hotel/search">
                    <h3>Search Hotels in PalmyraHotels.tn</h3>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Preferred Hotel</label>
                                <div class="styled-select-common">
                                    <select name="hotelId">
                                        
                                        <?php foreach ($hotels as $hotel ) { ?> 
                                            <option value="<?php echo $hotel->hotelId ?>" >Palmyra <?php echo $hotel->name ?> <?php echo $hotel->location ?></option>
                                        <?php } ?>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label><i class="icon-calendar-7"></i> Check in</label>
                                <input class="date-pick form-control" type="text" name="checkin">
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="form-group">
                                <label><i class="icon-calendar-7"></i> Check out</label>
                                <input class="date-pick-out form-control" type="text" name="checkout">
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                                <label>Adults</label>
                                <div class="numbers-row">
                                    <input type="text" value="1" min="1" id="adults" class="qty2 form-control" name="adult">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                                <label>Children (2-12 ago)</label>
                                <div class="numbers-row">
                                    <input type="text" value="0" id="children" class="qty2 form-control" name="children">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                                <label>Rooms</label>
                                <div class="numbers-row">
                                    <input type="text" value="1" min="1" id="room" class="qty2 form-control" name="room">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Pension</label>
                                <div class="styled-select-common">
                                    <select name="pension">
                                            <option value="PD" >LP</option>
                                            <option value="DP" >DP</option>
                                            <option value="PC" >PC</option>
                                            <option value="ALLS" >All inclusive</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <!-- End row -->
                   
                    <!-- End row -->
                    <hr>

                        <button class="btn_1 green btn-block" type="submit" ><i class="icon-search"></i>Search now</button>
                    </form>

                
                </div>

            </div>
        </div>
    </section>
    <!-- End hero -->

    <main>
    <div class="container margin_60">
    
        <div class="main_title">
            <h2>Palmyra <span>Top</span> Hotels</h2>
            <p>Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur consequat.</p>
        </div>
        
        <div class="row">
        <?php foreach ($hotels as $hotel ) { ?> 
            <div class="col-lg-6 col-md-6 wow zoomIn" data-wow-delay="0.1s">
                <div class="tour_container">
                    <div class="ribbon_3 popular"><span>Popular</span></div>
                    <div class="img_container">
                        <a href="<?php echo base_url() ?>Hotel/view/<?php echo $hotel->hotelId?>">
                        <img src="<?php echo base_url() ?>assets/img/facade/<?php echo $hotel->facade?>" width="800" height="533" class="img-fluid" alt="Image">
                        <div class="short_info">
                            <i class="icon_set_1_icon-44"></i><?php echo $hotel->location ?><span class="price"> <small><small>From</small></small> <?php if(!empty($hotel->prices->price)){ echo $hotel->prices->price ; } else{ echo "0" ; } ?><sup>DT</sup></span>
                        </div>
                        </a>
                    </div>
                    <div class="tour_title">
                        <h3>Palmyra <strong><?php echo $hotel->name ?></strong></h3>
                        <div class="rating">
                            <i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile"></i><small>(75)</small>
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
                <p>Quisque at tortor a libero posuere laoreet vitae sed arcu. Curabitur consequat.</p>
            </div>

            <div class="row">
                <?php foreach ($events as $event ){  ?>
                    <div class="col-lg-6">
                        <a class="box_news" href="#">
                            <figure><img src="<?php echo base_url() ?>assets/img/events/<?php echo $event->acro ?>/<?php echo $event->affiche?>" alt="">
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
                                <li><?php echo $event->name ?></li>
                                <li><?php echo date_format($date, 'd M Y H:m');?></li>
                            </ul>
                            <h4><?php echo $event->titre ?></h4>
                            <div style="">
                                <p ><?php echo $event->description ?></p>
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
                <div class="col-md-6">
                    <img src="<?php echo base_url() ?>assets/img/laptop-1.png" alt="Laptop" class="img-fluid laptop">
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