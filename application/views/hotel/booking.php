

<section id="hero_2" class="background-image" data-background="url(<?php echo base_url() ?>assets/img/facade/<?php echo $hotel->facade ?>)">
        <div class="opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.6)">
            <div class="intro_title">
                <h1>Place your order</h1>
                <div class="bs-wizard row">

                    <div class="col-4 bs-wizard-step active">
                        <div class="text-center bs-wizard-stepnum">Your cart</div>
                        <div class="progress">
                            <div class="progress-bar"></div>
                        </div>
                        <a href="cart-1.html" class="bs-wizard-dot"></a>
                    </div>

                    <div class="col-4 bs-wizard-step disabled">
                        <div class="text-center bs-wizard-stepnum">Your details</div>
                        <div class="progress">
                            <div class="progress-bar"></div>
                        </div>
                        <a href="payment-1.html" class="bs-wizard-dot"></a>
                    </div>

                    <div class="col-4 bs-wizard-step disabled">
                        <div class="text-center bs-wizard-stepnum">Finish!</div>
                        <div class="progress">
                            <div class="progress-bar"></div>
                        </div>
                        <a href="confirmation-1.html" class="bs-wizard-dot"></a>
                    </div>

                </div>
                <!-- End bs-wizard -->
            </div>
            <!-- End intro-title -->
        </div>
        <!-- End opacity-mask-->
    </section>
    <!-- End Section hero_2 -->

    <main>
        <div id="position">
            <div class="container">
                <ul>
                    <li><a href="#">Home</a>
                    </li>
                    <li><a href="#">Cart</a>
                    </li>
                   
                </ul>
            </div>
        </div>
        <!-- End position -->

        <div class="container margin_60">
            <form method="post"  action="<?php echo base_url() ?>Reservation/addNewReservation/<?php echo $search->searchId ?>">
            <div class="row">
                <div class="col-lg-8">
                   
                    <input type="hidden" value="<?php echo $search->checkin ?>" name="checkin" >
                    <input type="hidden" value="<?php echo $search->checkout ?>" name="checkout" >
                    <input type="hidden" value="<?php echo $search->hotelId ?>" name="hotelId" >
                    <input type="hidden" value="<?php echo $search->room ?>" name="room" >
                    <input type="hidden" value="<?php echo $search->adult ?>" name="adult" >
                    <input type="hidden" value="<?php echo $search->children ?>" name="children" >
                    <input type="hidden" value="<?php echo $search->pension  ?>" name="pension">
                    
                                               
                    <table class="table table-striped cart-list add_bottom_30" >
                        <thead>
                            <tr>
                                <th>
                                    Room
                                </th>
                                <th width="10%">
                                    Quantity
                                </th>
                                <th>
                                    Discount
                                </th>
                                <th>
                                    Total
                                </th>
                                <th>
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($rooms as $room ) { 
                                if(!empty($room->prices->price)) {
                                 if($room->capacity <= ($search->adult + $search->children ) ){  ?>
                            <tr>
                                <td>
                                    <div class="thumb_cart">
                                       <!-- <img src="<?php echo base_url() ?>assets/img/thumb_cart_1-1.jpg" alt="Image">-->
                                    </div>
                                    <span class="item_cart"><?php echo $room->titre ?> <?php for ($i=0; $i<$room->capacity  ; $i++) { echo '<i class="icon-guest"></i>' ; } ?></span>
                                        
                                </td>
                                <td>
                                    <div class="">
                                        <input type="number" 
                                        value="0" 
                                        id="quantity_<?php echo $room->roomId ?>" 
                                        class="qty7 form-control" 
                                        name="quantity_<?php echo $room->roomId ?>" 
                                        min="0" 
                                        data-roomid="<?php echo $room->roomId ?>" >
                                        
                                    </div>
                                </td>
                                <td>
                                    0%
                                </td>
                                <td id="pricess" >
                                    <span  id="priceA_<?php echo $room->roomId ?>" 
                                           class="priceRomms" 
                                           data-roomid="<?php echo $room->roomId ?>" >
                                           <?php if($room->capacity > 1) { echo $room->prices->pensionPrice * $room->capacity ; } else { echo $room->prices->pensionPrice + $room->prices->supS ; }  ?></span><strong> DT</strong><small>/Per night</small>
                                           

                                    <input type="hidden" 
                                            value="<?php echo $room->capacity ?>" 
                                            id="capacity_<?php echo $room->roomId ?>" 
                                            name="capacity_<?php echo $room->roomId ?>" 
                                            data-roomid="capacity_<?php echo $room->roomId ?>"   >
                                 
                                    
                                    <input type="hidden"  
                                           value="<?php echo $room->prices->pensionPrice * $room->capacity ?>" 
                                           id="price_<?php echo $room->roomId ?>"  
                                           name="price_<?php echo $room->roomId ?>" 
                                           data-roomid="<?php echo $room->roomId ?>" >
                                </td>
                                <td class="options">
                                    
                                </td>
                          
                                
                            </tr>
                            <?php  } } } ?>
                            <tr id="details_<?php echo $room->roomId ?>" >


                            </tr>
                           
                        </tbody>
                        <script type="text/javascript">
                            $( ".qty7" ).bind('keyup mouseup', function() {
                                <?php

                                    $date1 = new DateTime( $search->checkin  );
                                    $date2 = new DateTime( $search->checkout ) ;
                                    $interval = $date1->diff($date2);

                                ?>

                                days = <?php echo $interval->d ; ?> ;


                               roomId = $(this).data("roomid") ;
                               
                               roomPrice =  (parseInt($("#price_"+roomId ).val())  ) ; 

                               
                             
                               $("#priceA_"+roomId ).html(roomPrice) ; 

                               var calculated_total_sum = 0 ; 
                               var calculated_taxe_sum = 0 ; 
                               
                               $(".priceRomms").each(function () {
                                    calculated_total_sum += parseInt( $(this).html());
                                    calculated_taxe_sum += $(this).data('roomid')  ;
                                
                                      }                  
                                    );
                              
                               var calculated_taxe_sum = 2 * calculated_taxe_sum  ;
                               $("#taxe" ).html(calculated_taxe_sum)  ;
                               $("#Cost" ).html((calculated_total_sum * days) + calculated_taxe_sum) ; 

                                if( parseInt($("#Cost").html()) > 0){

                                    $("#btnsub").show() ;
                                }
                                else
                                {
                                    $("#btnsub").hide() ;
                                }

                            });
                        </script>
                        <input type="hidden" name="nights" value="<?php echo $interval->d ; ?> ">
                    </table>

              
                <!--
                    <table class="table table-striped options_cart">
                        <thead>
                            <tr>
                                <th colspan="3">
                                    Add options / Services
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                          
                            <tr>
                                <td style="width:10%">
                                    <i class="icon_set_1_icon-16"></i>
                                </td>
                                <td style="width:60%">
                                    Dedicated Tour guide <strong>+$34</strong>
                                </td>
                                <td style="width:35%">
                                    <label class="switch-light switch-ios float-right">
                                        <input type="checkbox" name="option_1" id="option_1"  value="">
                                        <span>
                                        <span>No</span>
                                        <span>Yes</span>
                                        </span>
                                        <a></a>
                                    </label>
                                </td>
                            </tr>
                          
                           
                        </tbody>
                    </table>
                -->
                    <div class="add_bottom_15"><small>* Prices for person.</small>
                    </div>
                </div>
                <!-- End col -->

                <aside class="col-lg-4" >
                    <div class="box_style_1" >
                        <h3 class="inner">- Summary -</h3>
                        <b style="text-align: center;">Hotel Palmyra <?php echo $hotel->name ?></b>
                        <table class="table table_summary" >
                            <tbody>
                                                           <tr >
                                    <td>
                                        check in
                                    </td>
                                    <td class="text-right">
                                        <?php echo $search->checkin ?>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        check out
                                    </td>
                                    <td class="text-right">
                                        <?php echo $search->checkout ?>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Nights
                                    </td>
                                    <td class="text-right">
                                         <?php echo $interval->d ; ?>
                                    </td>
                                </tr>
                                <tr style="display: none;">
                                    <td>
                                        Adults
                                    </td>
                                    <td class="text-right">
                                        <?php echo $search->adult ?>
                                    </td>
                                </tr>
                                <tr style="display: none;" >
                                    <td>
                                        Children
                                    </td>
                                    <td class="text-right">
                                        <?php echo $search->children ?>
                                    </td>
                                </tr>
                                <tr style="display: none;" >
                                    <td>
                                        Taxe
                                    </td>
                                    <td class="text-right">
                                         <span id="taxe">0</span> <sup>DT</sup>
                                    </td>
                                </tr>
                                 <tr class="">
                                    <td>
                                       Pension
                                    </td>
                                    <td class="text-right" >
                                        <span ><?php echo $search->pension ?></span> 
                                    </td>
                                </tr>
                                <tr class="">
                                    <td>
                                       PAX/night
                                    </td>
                                    <td class="text-right" >
                                        <span ><?php echo $room->prices->pensionPrice ?><sup>DT</sup></span> 
                                    </td>
                                </tr>
                                <tr class="total"  style="display: none;" >
                                    <td>
                                        Total cost
                                    </td>
                                    <td class="text-right"  >
                                        <span id="Cost">0</span> <sup>DT</sup>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                       
                        <?php if($uid !=0 ) { ?>
                            <div style="display:none" id="btnsub" >
                                <button class="btn_full " type="submit"  >Check out</button>
                            </div>
                            </form>
                        <?php } else { ?>
                            </form>
                            <a  class="btn_1 green btn-block text-center" id="LoginAlertBtn">Check out</a>
                        <?php } ?>

                        <script type="text/javascript">
                             $("#LoginAlert").hide() ; 

                            $("#LoginAlertBtn").click(function() { 
                                
                               $("#LoginAlert").show() ; 

                               $
                                  
                            });
                        </script>
                        <br>
                        <div class="alert alert-danger" id="LoginAlert" style="display: none;" >
                          <strong>Info!</strong> you must <button type="button" data-toggle="modal" data-target="#signinForm" >Sign in</button> before launching a search.
                        </div>
                                
                        
                    </div>


                    <div class="box_style_4">
                        <i class="icon_set_1_icon-57"></i>
                        <h4>Need <span>Help?</span></h4>
                        <a href="tel://00<?php echo $hotel->phone ?>" class="phone">+216<?php echo $hotel->phone ?></a>
                        <small>Monday to Friday 9.00am - 7.30pm</small>
                    </div>
                </aside>
                <!-- End aside -->

            </div>
            <!--End row -->
        </div>
        <!--End container -->
    </main>
    <!-- End main -->