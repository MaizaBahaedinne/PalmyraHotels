<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
.fa {
  padding: 10px;
  font-size: 20px;
  width: 40px;
  text-align: center;
  text-decoration: none;
  margin: 4px;
}

.fa:hover {
    opacity: 0.7;
}

.fa-facebook {
  background: #3B5998;
  color: white;
}

.fa-twitter {
  background: #55ACEE;
  color: white;
}

.fa-google {
  background: #dd4b39;
  color: white;
}

.fa-linkedin {
  background: #007bb5;
  color: white;
}

.fa-youtube {
  background: #bb0000;
  color: white;
}

.fa-instagram {
  background: #125688;
  color: white;
}

.fa-pinterest {
  background: #cb2027;
  color: white;
}

.fa-snapchat-ghost {
  background: #fffc00;
  color: white;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
}

.fa-skype {
  background: #00aff0;
  color: white;
}

.fa-android {
  background: #a4c639;
  color: white;
}

.fa-dribbble {
  background: #ea4c89;
  color: white;
}

.fa-vimeo {
  background: #45bbff;
  color: white;
}

.fa-tumblr {
  background: #2c4762;
  color: white;
}

.fa-vine {
  background: #00b489;
  color: white;
}

.fa-foursquare {
  background: #45bbff;
  color: white;
}

.fa-stumbleupon {
  background: #eb4924;
  color: white;
}

.fa-flickr {
  background: #f40083;
  color: white;
}

.fa-yahoo {
  background: #430297;
  color: white;
}

.fa-soundcloud {
  background: #ff5500;
  color: white;
}

.fa-reddit {
  background: #ff5700;
  color: white;
}

.fa-rss {
  background: #ff6600;
  color: white;
}
</style>



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
                        <h2 style="color:white">Palmyra <?php echo $hotel->name ?> 
                        </h2>

                        
                            
    
                            
                            

                        <span><?php echo $hotel->location ?></span>
                    </div>
                    <div class="col-md-4">
                        <div id="price_single_main" class="hotel">
                            <a target="_blank" href="<?php echo $hotel->facebook ?>" class="fa fa-facebook"></a>
                         <a target="_blank" href="<?php echo $hotel->instagram ?>" class="fa fa-instagram"></a>
                      <!--      from <span><?php if(!empty($rooms[0]->prices->price)){ echo $rooms[0]->prices->price ; } else{ echo "0"; } ?><sup>DT</sup></span> /per night  -->
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
                    <li><a >Home</a>
                    </li>
                    <li><a >Hotel</a>
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
                            <li><i class="icon_set_2_icon-116"></i>TV</li>
                            <li><i class="icon_set_1_icon-86"></i>Free Wifi</li>
                            <li><i class="icon_set_2_icon-110"></i>Poll</li>
                            <li><i class="icon_set_1_icon-59"></i>Breakfast</li>
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
                            <strong>social links : </strong>
                         <a target="_blank" href="<?php echo $hotel->facebook ?>" class="fa fa-facebook"></a>
                         <a target="_blank" href="<?php echo $hotel->instagram ?>" class="fa fa-instagram"></a>
                            <p>
                                <?php  echo $hotel->description ;?>
                            </p>
                            <h4>Hotel facilities</h4>
                            <p>
                                
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
                                
                            </p>

                            <div class="row">
                                <div class="col-md-6">
                                    <ul class="list_icons">
                                        <li><i class="icon_set_1_icon-86"></i> Free wifi</li>
                                        <li><i class="icon_set_2_icon-116"></i> Cable / satellite TV</li>
                                        <li><i class="icon_set_2_icon-106"></i> Air conditioning</li>
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
                           
                            <div id="score_detail"><span><?php echo  round($avisHotel->moyenne, 1) ?></span>Good <small>(Based on <?php echo count($avis) ; ?> reviews)</small>
                            </div>
                        
                            <!-- End general_rating -->
                        
                            <div class="row" id="rating_summary">
                                <div class="col-md-6">
                                    <ul>
                                        <li>Location
                                            <div class="rating">
                                                <?php $i=0 ; for ($i=0; $i < round($avisHotel->location) ; $i++) { echo '<i class="icon-smile voted"></i>' ;   } ?>
                                                <?php $i=0 ; for ($i=0; $i < 5-round($avisHotel->location) ; $i++) { echo '<i class="icon-smile"></i>' ;   } ?>
                                                <?php echo round($avisHotel->location) ?>
                                            </div>
                                        </li>
                                        <li>Service
                                            <div class="rating">
                                                <?php $i=0 ; for ($i=0; $i < round($avisHotel->service) ; $i++) { echo '<i class="icon-smile voted"></i>' ;   } ?>
                                                <?php $i=0 ; for ($i=0; $i < 5-round($avisHotel->service) ; $i++) { echo '<i class="icon-smile"></i>' ;   } ?>
                                                <?php echo round($avisHotel->service) ?>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <ul>
                                        <li>Price
                                            <div class="rating">
                                               <?php $i=0 ; for ($i=0; $i < round($avisHotel->price) ; $i++) { echo '<i class="icon-smile voted"></i>' ;   } ?>
                                                <?php $i=0 ; for ($i=0; $i < 5-round($avisHotel->price) ; $i++) { echo '<i class="icon-smile"></i>' ;   } ?>
                                                <?php  echo round($avisHotel->price) ?>
                                            </div>
                                        </li>
                                        <li>Cleanliness
                                            <div class="rating">
                                                <?php  $i=0 ; for ($i=0; $i < round($avisHotel->cleanliness) ; $i++) { echo '<i class="icon-smile voted"></i>' ;   } ?>
                                                <?php $i=0 ; for ($i=0; $i < 5-round($avisHotel->cleanliness) ; $i++) { echo '<i class="icon-smile"></i>' ;   } ?>
                                                <?php echo round($avisHotel->cleanliness) ?>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                       
                            <!-- End row -->
                            <hr>
                            <?php foreach ($avis as $avi) {  ?>
                          
                            <div class="review_strip_single">
                                <img src="<?php echo base_url() ?>assets/img/avatar1.jpg" alt="Image" class="rounded-circle">
                                <small> - <?php echo $avi->createdDTM ?> -</small>
                                <h4><?php echo $avi->user->name ; ?></h4>
                                <p>
                                    "<?php echo $avi->review ; ?>"
                                </p>
                                <div class="rating">
                                    <?php for ($i=0; $i < round($avi->moyenne) ; $i++) { echo '<i class="icon-smile voted"></i>' ;   } ?>
                                    <?php for ($i=0; $i < 5-round($avi->moyenne) ; $i++) { echo '<i class="icon-smile"></i>' ;   } ?>
                                    <?php echo round($avi->moyenne) ?>
                                </div>
                            </div>
                         <?php } ?>
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
                                <input class="form-control date-pick" type="text" name="dates" placeholder="When.." readonly required>
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
                                    <input type="text" value="0" id="children" class="qty2 form-control" name="children" >
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
                                            <option value="" ></option>
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


        <!-- Modal Review -->
    <div class="modal fade" id="myReview" tabindex="-1" role="dialog" aria-labelledby="myReviewLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title" id="myReviewLabel">Write your review</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                </div>
                <div class="modal-body">
                    <div id="message-review">
                    </div>
                    <form method="post" action="<?php echo base_url() ?>Avis/addNewAvisHotel" name="review_restaurant" id="review_restaurant">
                        <input name="hotelId"  type="hidden" value="<?php echo $hotel->hotelId ?>">
                        
                        <!-- End row -->
                        <hr>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Location</label>
                                    <select class="form-control" name="location"  required>
                                        <option value="">Please review</option>
                                        <option value="1">Low</option>
                                        <option value="2">Sufficient</option>
                                        <option value="3">Good</option>
                                        <option value="4">Excellent</option>
                                        <option value="5">Super</option>
                                        
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Service</label>
                                    <select class="form-control" name="service" id="service_review" required>
                                        <option value="">Please review</option>
                                        <option value="1">Low</option>
                                        <option value="2">Sufficient</option>
                                        <option value="3">Good</option>
                                        <option value="4">Excellent</option>
                                        <option value="5">Super</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <!-- End row -->
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Price</label>
                                    <select class="form-control" name="price" id="price_review" required >
                                        <option value="">Please review</option>
                                        <option value="1">Low</option>
                                        <option value="2">Sufficient</option>
                                        <option value="3">Good</option>
                                        <option value="4">Excellent</option>
                                        <option value="5">Super</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label>Cleanliness</label>
                                    <select class="form-control" name="cleanliness" id="quality_review" required>
                                        <option value="">Please review</option>
                                        <option value="1">Low</option>
                                        <option value="2">Sufficient</option>
                                        <option value="3">Good</option>
                                        <option value="4">Excellent</option>
                                        <option value="5">Super</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <!-- End row -->
                        <div class="form-group">
                            <textarea required name="review" id="review_text" class="form-control" style="height:100px" placeholder="Write your review"></textarea>
                        </div>
                        
                        <input type="submit" value="Submit" class="btn_1" id="submit-review">
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- End modal review -->