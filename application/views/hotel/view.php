<head>
    
     <meta property="og:url"                content="<?php echo base_url() ?>" />
    <meta property="og:type"          content="website" />
    <meta property="og:title"              content="Palmyra <?php echo $hotel->name ?>" />
    <meta property="og:description"        content="<?php echo $hotel->description ?>" />
    <meta property="og:image"              content="<?php echo base_url() ?>assets/img/facade/hotel/<?php echo $hotel->facade ?>" />

</head>


<section class="parallax-window" data-parallax="scroll" data-image-src="<?php echo base_url() ?>assets/img/facade/hotel/<?php echo $hotel->facade ?>" >
        <div class="parallax-content-2">
            <div class="container">
                <div class="row">
                    <div class="col-md-8">
                        <span class="rating">
                            <i class="icon-star voted"></i>
                            <i class="icon-star voted"></i>
                            <i class="icon-star voted"></i>
                            <i class="icon-star-empty"></i>
                            <i class="icon-star-empty"></i>
                        </span>
                        <h1>Palmyra <?php echo $hotel->name ?></h1>
                        <span><?php echo $hotel->location ?></span>
                    </div>
                    <div class="col-md-4">
                        <div id="price_single_main" class="hotel">
                            from/per night <span><?php if(!empty($rooms[0]->prices->price)){ echo $rooms[0]->prices->price ; } else{ echo "0"; } ?><sup>DT</sup></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End section -->

    <main>
        <div id="position">
            <div class="container">
                <ul>
                    <li><a href="#">Home</a>
                    </li>
                    <li><a href="#">Hotel</a>
                    </li>
                    <li><?php echo $hotel->name ?></li>
                </ul>
            </div>
        </div>
        <!-- End Position -->

        <div class="collapse" id="collapseMap">
         
           
            <iframe id="map" class="map" src="<?php echo $hotel->longitude ?>" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
        <!-- End Map -->

        <div class="container margin_60">
            <div class="row">
                <div class="col-lg-8" id="single_tour_desc">
                    <div id="single_tour_feat">
                        <ul>
                            <li><i class="icon_set_2_icon-116"></i>Plasma TV</li>
                            <li><i class="icon_set_1_icon-86"></i>Free Wifi</li>
                            <li><i class="icon_set_2_icon-110"></i>Poll</li>
                            <li><i class="icon_set_1_icon-59"></i>Breakfast</li>
                            <li><i class="icon_set_1_icon-22"></i>Pet allowed</li>
                            <li><i class="icon_set_1_icon-13"></i>Accessibiliy</li>
                            <li><i class="icon_set_1_icon-27"></i>Parking</li>
                        </ul>
                    </div>
                    <p class="d-none d-md-block d-block d-lg-none"><a class="btn_map" data-toggle="collapse" href="#collapseMap" aria-expanded="false" aria-controls="collapseMap" data-text-swap="Hide map" data-text-original="View on map">View on map</a>
                    </p>
                    <!-- Map button for tablets/mobiles -->
                    <div id="Img_carousel" class="slider-pro">
                        <div class="sp-slides">

                             <?php
                                $dir = "./assets/img/hotels/".$hotel->acro."/";
                                $dir1 = base_url()."/assets/img/hotels/".$hotel->acro."/";
                                $dir2 = "./assets/img/hotels/".$hotel->acro."-room/";
                                $dir3 = base_url()."/assets/img/hotels/".$hotel->acro."-room/";

                                chdir($dir);
                                array_multisort(array_map('filemtime', ($files = glob("*.{jpg,png,gif}", GLOB_BRACE))), SORT_DESC, $files);
                                foreach($files as $filename)
                                {?>
                                <div class="sp-slide">
                                    <img alt="Image" class="sp-image" 
                                    src="<?php echo $dir1.$filename ?>" 
                                    data-src="<?php echo $dir1.$filename ?>" 
                                    data-small="<?php echo $dir1.$filename ?>"
                                    data-medium="<?php echo $dir1.$filename ?>" 
                                    data-large="<?php echo $dir1.$filename ?>" 
                                    data-retina="<?php echo $dir1.$filename ?>" >

                                </div>   
                                <?php } 
                            ?>

                            
                            

                          
                        </div>
                        
                        <div class="sp-thumbnails">
                            <?php
                                array_multisort(array_map('filemtime', ($files = glob("*.{jpg,png,gif}", GLOB_BRACE))), SORT_DESC, $files);
                                foreach($files as $filename)
                                {?>
                                <img alt="Image" class="sp-thumbnail" src="<?php echo $dir1.$filename ?>" width="40px">   
                                <?php } 
                            ?>
                        </div>
                        
                    </div>

                    <hr>

                    <div class="row">
                        <div class="col-lg-3">
                            <h3>Description</h3>
                        </div>
                        <div class="col-lg-9">
                            <p>
                                <?php  echo $hotel->description ;?>
                            </p>
                            <h4>Hotel facilities</h4>
                            <p>
                                Lorem ipsum dolor sit amet, at omnes deseruisse pri. Quo aeterno legimus insolens ad. Sit cu detraxit constituam, an mel iudico constituto efficiendi.
                            </p>
                            <div class="row">
                                <div class="col-md-6">
                                    <ul class="list_ok">
                                        <li>Secured parking</li>
                                        <li>Pool</li>
                                        <li>Wifi</li>
                                        <li>Children's playground</li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <ul class="list_ok">
                                        <li>Nightclub / DJ</li>
                                        <li>Bar / lounge</li>
                                        <li>Pool / beach towels</li>
                                        <li>Outdoor dining area</li>
                                    </ul>
                                </div>
                            </div>
                            <!-- End row  -->
                        </div>
                        <!-- End col-md-9  -->
                    </div>
                    <!-- End row  -->

                    <hr>

                    <div class="row">
                        <div class="col-lg-3">
                            <h3>Rooms Types</h3>
                        </div>
                        <div class="col-lg-9">
                            <?php foreach ($rooms as $room ) { ?> 
                            <h4><?php echo $room->titre ?> <?php for ($i=0; $i<$room->capacity  ; $i++) { echo '<i class="icon-guest"></i>' ; } ?> </h4>
                            <p>
                                Lorem ipsum dolor sit amet, at omnes deseruisse pri. Quo aeterno legimus insolens ad. Sit cu detraxit constituam, an mel iudico constituto efficiendi.
                            </p>

                            <div class="row">
                                <div class="col-md-6">
                                    <ul class="list_icons">
                                        <li><i class="icon_set_1_icon-86"></i> Free wifi</li>
                                        <li><i class="icon_set_2_icon-116"></i> Cable / satellite TV</li>
                                        <li><i class="icon_set_2_icon-106"></i> Air conditioning</li>
                                        <li><i class="icon_set_2_icon-106"></i> Refrigerator</li>
                                        <li><i class="icon_set_2_icon-106"></i> Refrigerator</li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <ul class="list_ok">
                                        <li>Interconnected rooms available</li>
                                        <li>Complimentary toiletries</li>
                                        <li>Quidam percipitur instructior an eum</li>
                                    </ul>
                                </div>
                            </div>
                            <!-- End row  -->
                            <div class="owl-carousel owl-theme carousel-thumbs-2 magnific-gallery">
<!--
                            <?php
                            

                            
                    
                             
                          
                            array_multisort(array_map('filemtime', ($filess = glob("*.{jpg,}", GLOB_BRACE))), SORT_DESC, $filess);
                                foreach($filess as $filenames)
                                {?>
                                 <div class="item">
                                    <a href="<?php echo $dir3.$filenames ?>" data-effect="mfp-zoom-in">
                                         <img alt="Image" class="sp-thumbnail" src="<?php echo $dir3.$filenames ?>" > 
                                    </a>
                                </div>  
                                <?php } ?>
                                
            
-->                    
                            </div>


                            <!-- End photo carousel  -->

                            <hr>
                        <?php } ?>
                          
                        </div>
                        <!-- End col-md-9  -->
                    </div>
                    <!-- End row  -->

                    <hr>

                    <div class="row">
                        <div class="col-lg-3">
                            <h3>Reviews</h3>
                            <a href="#" class="btn_1 add_bottom_30" data-toggle="modal" data-target="#myReview">Leave a review</a>
                        </div>
                        <div class="col-lg-9">
                        <!--    
                            <div id="score_detail"><span>7.5</span>Good <small>(Based on 34 reviews)</small>
                            </div>
                        -->
                            <!-- End general_rating -->
                        <!--
                            <div class="row" id="rating_summary">
                                <div class="col-md-6">
                                    <ul>
                                        <li>Position
                                            <div class="rating">
                                                <i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile"></i><i class="icon-smile"></i>
                                            </div>
                                        </li>
                                        <li>Comfort
                                            <div class="rating">
                                                <i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile"></i>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <ul>
                                        <li>Price
                                            <div class="rating">
                                                <i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile"></i><i class="icon-smile"></i>
                                            </div>
                                        </li>
                                        <li>Quality
                                            <div class="rating">
                                                <i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        -->
                            <!-- End row -->
                            <hr>
                        <!--
                            <div class="review_strip_single">
                                <img src="<?php echo base_url() ?>assets/img/avatar1.jpg" alt="Image" class="rounded-circle">
                                <small> - 10 March 2015 -</small>
                                <h4>Jhon Doe</h4>
                                <p>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus."
                                </p>
                                <div class="rating">
                                    <i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile"></i><i class="icon-smile"></i>
                                </div>
                            </div>
                        -->
                            <!-- End review strip -->

              
                     
                        </div>
                    </div>


                </div>
                <!--End  single_tour_desc-->

                <aside class="col-lg-4">
                    <p class="d-none d-xl-block d-lg-block d-xl-none">
                        <a class="btn_map" data-toggle="collapse" href="#collapseMap" aria-expanded="false" aria-controls="collapseMap" data-text-swap="Hide map" data-text-original="View on map">View on map</a>
                    </p>
                    <div class="box_style_1 expose">
                        <form method="GET" action="<?php echo base_url() ?>Hotel/search" >
                        <h3 class="inner">Check Availability</h3>
                        <div class="row">
                        <div class="col-md-12" style="display: none;">
                            <div class="form-group">
                                <label>Preferred Hotel</label>
                                <div class="styled-select-common"> 
                                    <select name="hotelId" required class="form-control" >
                                        <option value="">Chose your hotel</option>
                                        <?php foreach ($hotels as $hotelC ) { ?> 
                                            <option value="<?php echo $hotel->hotelId ?>" <?php if($hotel->hotelId == $hotelC->hotelId ) { ?> selected <?php } ?> >Palmyra <?php echo $hotel->name ?> <?php echo $hotel->location ?></option>
                                        <?php } ?>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label><i class="icon-calendar-7"></i> Check in</label>
                                <input class="form-control date-pick" type="text" name="dates" placeholder="When.." readonly>
                                <input class="form-control date-pick" type="hidden" name="checkin" placeholder="When..">
                                <input class="form-control date-pick" type="hidden" name="checkout" placeholder="When..">
                            </div>
                        </div>
                        
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Adults</label>
                                <div class="numbers-row">
                                    <input type="text" value="1" min="1" id="adults" class="qty2 form-control" name="adult" required>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Children (2-12 ago)</label>
                                <div class="numbers-row">
                                    <input type="text" value="0" id="children" class="qty2 form-control" name="children">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Rooms</label>
                                <div class="numbers-row">
                                    <input type="text" value="1" min="1" id="room" class="qty2 form-control" name="room" required>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label>Pension</label>
                                <div class="styled-select-common" class="form-control" required >
                                    <select name="pension">
                                            
                                            <option value="PD" >Continental breakfast included</option>
                                            <option value="DP" >Breakfast & dinner included</option>
                                            <option value="PC" >Breakfast, lunch & dinner included</option>
                                            <option value="ALLS" >All inclusive Soft</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                        <br>

                        <button class="btn_full" type="submit" >Check now</button>
                     <!--   <a class="btn_full_outline" href="#"><i class=" icon-heart"></i> Add to whislist</a> -->
                 </form>
                    </div>
                    <!--/box_style_1 -->

                    <div class="box_style_4">
                        <i class="icon_set_1_icon-90"></i>
                        <h4><span>Book</span> by phone or by email</h4>
                        <a href="tel://<?php echo $hotel->phone ?>" class="phone">+216 <?php echo $hotel->phone ?></a>
                        <small>Monday to Friday 9.00am - 7.30pm</small>
                        <hr>
                       
                        <h4><span>Contact us</span> by email</h4>
                        <a href="mailto://<?php echo $hotel->mail ?>" ><?php echo $hotel->mail ?></a>
                        

                    </div>

                </aside>
            </div>
            <!--End row -->
        </div>
        <!--End container -->
        
        <div id="overlay"></div>
        <!-- Mask on input focus -->
    
    </main>
    <!-- End main -->