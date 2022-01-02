

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
            <form>
            <div class="row">
                <div class="col-lg-8">
                    <table class="table table-striped cart-list add_bottom_30">
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
                                 if($room->capacity <= ($this->input->get("adults_2") + $this->input->get("children_2") ) ){  ?>
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
                                <td>
                                    <span  id="priceA_<?php echo $room->roomId ?>" 
                                           class="priceRomms" 
                                           data-roomid="<?php echo $room->roomId ?>" >0</span><strong> DT</strong><small>/Per night</small>

                                    <input type="hidden" 
                                            value="<?php echo $room->capacity ?>" 
                                            id="capacity_<?php echo $room->roomId ?>" 
                                            name="capacity_<?php echo $room->roomId ?>" 
                                            data-roomid="capacity_<?php echo $room->roomId ?>"   >

                                    
                                    
                                    <input type="hidden"  
                                           value="<?php echo $room->prices->price * $room->capacity ?>" 
                                           id="price_<?php echo $room->roomId ?>"  
                                           name="price_<?php echo $room->roomId ?>" 
                                           data-roomid="<?php echo $room->roomId ?>" >
                                </td>
                                <td class="options">
                                    
                                </td>
                          
                                
                            </tr>
                            <?php  } } } ?>
                        </tbody>
                        <script type="text/javascript">


                            $( ".qty7" ).bind('keyup mouseup', function() {
                                
                                <?php 
                                $date1 = new DateTime( $this->input->get("checkin") );
                                $date2 = new DateTime($this->input->get("checkout") ) ;
                                $interval = $date1->diff($date2);
                                ?>

                                days = <?php echo $interval->d ; ?> ;


                               roomId = $(this).data("roomid") ;
                               
                               roomPrice =  (parseInt($("#price_"+roomId ).val())) * parseInt($("#quantity_"+roomId ).val()) ; 

                               
                             
                               $("#priceA_"+roomId ).html(roomPrice) ; 

                               var calculated_total_sum = 0 ; 
                               var calculated_taxe_sum = 0 ; 
                               
                               $(".z").each(function () {
                                    calculated_total_sum += parseInt( $(this).html());
                                    calculated_taxe_sum +=parseInt($("#capacity_"+$(this).data('roomid') ).val()) * parseInt($("#quantity_"+$(this).data('roomid') ).val()) ;
                                
                                      }                  
                                    );
                              
                               var calculated_taxe_sum = 2 * calculated_taxe_sum  ;
                               $("#taxe" ).html(calculated_taxe_sum)  ;
                               $("#Cost" ).html((calculated_total_sum * days) + calculated_taxe_sum) ; 


                               

                            });
                        </script>
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

                <aside class="col-lg-4">
                    <div class="box_style_1">
                        <h3 class="inner">- Summary -</h3>
                        <table class="table table_summary">
                            <tbody>
                               
                                <tr>
                                    <td>
                                        Nights
                                    </td>
                                    <td class="text-right">
                                         <?php echo $interval->d ; ?>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Adults
                                    </td>
                                    <td class="text-right">
                                        <?php echo $this->input->get("adults_2") ?>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Children
                                    </td>
                                    <td class="text-right">
                                        <?php echo $this->input->get("children_2") ?>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Taxe
                                    </td>
                                    <td class="text-right">
                                         <span id="taxe">0</span> <sup>DT</sup>
                                    </td>
                                </tr>
                                
                                <tr class="total">
                                    <td>
                                        Total cost
                                    </td>
                                    <td class="text-right" >
                                        <span id="Cost">0</span> <sup>DT</sup>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                       
                        <?php if($uid !=0 ) { ?>
                             <button class="btn_full " type="submit"  >Check out</button>
                            </form>
                        <?php } else { ?>
                            </form>
                            <a  class="btn_1 green btn-block text-center" id="LoginAlertBtn">Check out</a>
                        <?php } ?>

                        <script type="text/javascript">
                             $("#LoginAlert").hide() ; 

                            $("#LoginAlertBtn").click(function() { 
                                
                               $("#LoginAlert").show() ; 
                                  
                            });
                        </script>
                        <br>
                        <div class="alert alert-danger" id="LoginAlert" style="display: none;" >
                          <strong>Info!</strong> you must <a href="#sign-in-dialog" id="access_link">Sign in</a> before launching a search.
                        </div>
                                
                        
                    </div>


                    <div class="box_style_4">
                        <i class="icon_set_1_icon-57"></i>
                        <h4>Need <span>Help?</span></h4>
                        <a href="tel://004542344599" class="phone">+45 423 445 99</a>
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