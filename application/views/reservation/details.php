

<section id="hero_2" class="background-image" data-background="url(<?php echo base_url() ?>/assets/img/facade/aqua.jpg)" >
        <div class="opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.6)" style="background-color: rgba(0, 0, 0, 0.6);">
    		<div class="intro_title">
    			<h1>Place your order</h1>
    			<div class="bs-wizard row">

    				<div class="col-4 bs-wizard-step complete">
    					<div class="text-center bs-wizard-stepnum">Your cart</div>
    					<div class="progress">
    						<div class="progress-bar"></div>
    					</div>
    					<a  class="bs-wizard-dot"></a>
    				</div>

    				<div class="col-4 bs-wizard-step active">
    					<div class="text-center bs-wizard-stepnum">Your details</div>
    					<div class="progress">
    						<div class="progress-bar"></div>
    					</div>
    					<a class="bs-wizard-dot"></a>
    				</div>

    				<div class="col-4 bs-wizard-step disabled">
    					<div class="text-center bs-wizard-stepnum">Finish!</div>
    					<div class="progress">
    						<div class="progress-bar"></div>
    					</div>
    					<a class="bs-wizard-dot"></a>
    				</div>

    			</div>
    			<!-- End bs-wizard -->
    		</div>
    		<!-- End intro-title -->
        </div>
        <!-- End opacity-mask-->
	</section>

<main style="margin-bottom: 392.094px;">
                <div id="position">
                        <div class="container">
                                <ul>
                                        <li><a href="#">Home</a>
                                        </li>
                                        <li><a href="#">Category</a>
                                        </li>
                                        <li>Page active</li>
                                </ul>
                        </div>
                </div>
                <!-- End position -->

                <div class="container margin_60">
                        <div class="row">
                                <div class="col-lg-8 add_bottom_15">
                                        <div class="form_title">
                                                <h3><strong>1</strong>Your Details</h3>
                                                <p>
                                                        Name of guests 
                                                </p>
                                        </div>
                                        <div class="step">
                                                <style type="text/css">
                                                       fieldset
                                                        {
                                                          background-color:#fbe8aa75 ;
                                                         
                                                          padding:16px; 
                                                        }
                                                        legend
                                                        {
                                                          margin-bottom:0px;
                                                          margin-left:16px;
                                                        }

                                                </style>
                                                
                                        <?php foreach ($reservation->details as $detail) {  ?>
                                                 <legend><small>Room N°<?php echo $detail->detailId ?></small></legend>
                                        <fieldset style="">
                                               
                                                
                                                <div class="row">
                                                        <?php for ($i=0 ; $i <  $detail->adult ; $i++) {  ?>
                                                        <div class="col-sm-6">
                                                                <div class="form-group">
                                                                        <label>Guest <?php echo $i+1 ?>
                                                                        
                                                                        <input type="checkbox" name="child_" class="child" <?php if ($i == 0 ) {  echo 'style="display: none;" '; } ?> > <small>children</small>  
                                                                        
                                                                        </label>
                                                                        <input 
                                                                        type="text" 
                                                                        class="form-control" 
                                                                        id="guest_" 
                                                                        name="guest_<?php echo $detail->detailId ?>_<?php echo $i+1 ?>"
                                                                        >
                                                                </div>
                                                        </div> 

                                                        <?php } ?>
                                                       <input 
                                                        type="hidden" 
                                                        class="roomP" 
                                                        id="roomPrice_<?php echo $detail->detailId ?>" 
                                                        value="<?php echo ($detail->prices->price * $detail->adult) ?>" 
                                                        >
                                                        
                                                </div>
                                                
                                        <table class="table table-striped options_cart">
                                                <thead>
                                                    <tr>
                                                        <th colspan="3">
                                                            Add options / Services
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                        <?php foreach ($detail->options as $option) {?>
                                                               <?php echo $option->option ?>
                                                                 <tr>
                                                                <td style="width:10%">
                                                                     <?php echo $option->icon ?> 
                                                                </td>
                                                                <td style="width:60%">
                                                                    <?php echo $option->option ?> <strong>+<?php echo $option->price ?><sup>DT</sup></strong>
                                                                </td>
                                                                <td style="width:35%">
                                                                    <label class="switch-light switch-ios float-right">
                                                                        <input type="checkbox" class="option_" id="option_1" data-price="<?php echo $option->price ?>" value="<?php echo $option->price ?>" data-detail="<?php echo $detail->detailId ?>">
                                                                        <span>
                                                                        <span>No</span>
                                                                        <span>Yes</span>
                                                                        </span>
                                                                        <a></a>
                                                                    </label>
                                                                </td>
                                                            </tr>
                                                        <?php  } ?>
                                                </tbody>
                                        </table>
                                                
                                        </fieldset>
                                                <?php  } ?>
                                        </div>
                                        <!--End step -->

                                        <div class="form_title">
                                                <h3><strong>2</strong>Payment Information</h3>
                                                <p>
                                                        Mussum ipsum cacilds, vidis litro abertis.
                                                </p>
                                        </div>
                                        <div class="step">
                                                <div class="form-group">
                                                        <label>Name on card</label>
                                                        <input type="text" class="form-control" id="name_card_bookign" name="name_card_bookign">
                                                </div>
                                                <div class="row">
                                                        <div class="col-md-6 col-sm-12">
                                                                <div class="form-group">
                                                                        <label>Card number</label>
                                                                        <input type="text" id="card_number" name="card_number" class="form-control">
                                                                </div>
                                                        </div>
                                                        <div class="col-md-6 col-sm-12">
                                                                <img src="<?php echo base_url() ?>assets/img/cards-1.png" width="207" height="43" alt="Cards" class="cards">
                                                        </div>
                                                </div>
                                                <div class="row">
                                                        <div class="col-md-6">
                                                                <label>Expiration date</label>
                                                                <div class="row">
                                                                        <div class="col-md-6">
                                                                                <div class="form-group">
                                                                                        <input type="text" id="expire_month" name="expire_month" class="form-control"  placeholder="MM">
                                                                                </div>
                                                                        </div>
                                                                        <div class="col-md-6">
                                                                                <div class="form-group">
                                                                                        <input type="text" id="expire_year" name="expire_year" class="form-control" placeholder="Year">
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div class="col-md-6">
                                                                <div class="form-group">
                                                                        <label>Security code</label>
                                                                        <div class="row">
                                                                                <div class="col-4">
                                                                                        <div class="form-group">
                                                                                                <input type="text" id="ccv" name="ccv" class="form-control" placeholder="CCV">
                                                                                        </div>
                                                                                </div>
                                                                                <div class="col-8">
                                                                                        <img src="<?php echo base_url() ?>assets/img/icon_ccv-1.gif" width="50" height="29" alt="ccv"><small>Last 3 digits</small>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <!--End row -->

                                                <hr>

                                                <h4>Or Bank Transfer</h4>
                                                <p>
                                                        Lorem ipsum dolor sit amet, vim id accusata sensibus, id ridens quaeque qui. Ne qui vocent ornatus molestie, reque fierent dissentiunt mel ea.
                                                </p>
                                                <p>
                                                       
                                                </p>
                                        </div>
                                        <!--End step -->

                                    
                                        
                                        <!--End step -->

                                        <div id="policy">
                                                <h4>Cancellation policy</h4>
                                                <div class="form-group">
                            <label class="container_check">
                                I accept terms and conditions and general policy.
                                <input type="checkbox">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                      
                </div>
        </div>

                                <aside class="col-lg-4">
                                        <div class="box_style_1">
                                                <h3 class="inner">- Summary -</h3>
                                                <table class="table table_summary">
                                                        <tbody>
                                                                <tr>
                                                                        <td>
                                                                                Check in
                                                                        </td>
                                                                        <td class="text-right">
                                                                                <?php echo $reservation->checkin ?>
                                                                        </td>
                                                                </tr>
                                                                <tr>
                                                                        <td>
                                                                                Check out
                                                                        </td>
                                                                        <td class="text-right">
                                                                                 <?php echo $reservation->checkout ?>
                                                                        </td>
                                                                </tr>
                                                                <tr>
                                                                        <td>
                                                                                Pension
                                                                        </td>
                                                                        <td class="text-right">
                                                                                 <?php echo $reservation->pension ?>
                                                                        </td>
                                                                </tr>
                                                                <tr>
                                                                        <td>
                                                                                Rooms
                                                                        </td>
                                                                        <td class="text-right">
                                                                                1 double room
                                                                        </td>
                                                                </tr>
                                                                <tr>
                                                                        <td>
                                                                                Nights
                                                                        </td>
                                                                        <td class="text-right">
                                                                                 <?php echo $reservation->nights ?>
                                                                        </td>
                                                                </tr>
                                                                <tr>
                                                                        <td>
                                                                                Adults
                                                                        </td>
                                                                        <td class="text-right" id="nbAdult" >
                                                                                <?php echo $reservation->adult ?>
                                                                        </td>
                                                                        
                                                                </tr>
                                                                <tr>
                                                                        <td>
                                                                                Children (2-12 ago)
                                                                        </td>
                                                                        <td class="text-right" id="nbChild" >
                                                                              0  
                                                                        </td>

                                                                </tr>
                                                                <tr>
                                                                        <td>
                                                                                Options
                                                                        </td>
                                                                        <td class="text-right" >
                                                                               <span id="priceOptions_total" > 0</span><sup>DT</sup>
                                                                        </td>
                                                                </tr>
                                                                <tr class="total">
                                                                        <td>
                                                                                Total cost
                                                                        </td>
                                                                        <td class="text-right">
                                                                               <span id="cost" > 0</span><sup>DT</sup>
                                                                        </td>
                                                                </tr>
                                                        </tbody>
                                                </table>
                                                <button type="submit" class="btn_full" >Book now</a>
                                                
                                        </div>
                                        <div class="box_style_4">
                                                <i class="icon_set_1_icon-57"></i>
                                                <h4>Need <span>Help?</span></h4>
                                                <a href="tel://00216<?php echo $hotel->phone ?>" class="phone">+216<?php echo $hotel->phone ?></a>
                                                <small>Monday to Friday 9.00am - 7.30pm</small>
                                        </div>
                                </aside>

                        </div>
                        <!--End row -->
                </div>
                <!--End container -->
        </main>



        <script type="text/javascript">

                var roomsPrice = 0 ;
                        $(".roomP").each( function(){
                                
                                        roomsPrice += parseInt($(this).val()) ; 
                                         $("#cost").html( parseInt(roomsPrice)  )  ;
                        });
                        
                                                                                      
                var child = 0 ;
                $(".child").each( function(){
                        if( $(this).is(":checked")  ){ child += 1 ; 
                     }
                     $("#nbChild").html(child) ;
                });

                var adult = 0 ;
                $(".child").each( function(){
                        if( !($(this).is(":checked"))  )
                                { adult += 1 ; 
                                                                                                                             }
                     $("#nbAdult").html(adult) ;
                });

                /*Prices*/

                $(".child").click( function() {
                var child = 0 ;
                $(".child").each( function(){
                        if( $(this).is(":checked")  ){ 
                                child += 1 ; 
                                
                     }
                     $("#nbChild").html(child) ;
                });

                var adult = 0 ;
                $(".child").each( function(){
                        if( !($(this).is(":checked"))  )
                                { adult += 1 ; 
                                 
                     }
                      $("#nbAdult").html(adult) ;
                        });   
                });


                $(".option_").click( function() {

                        var roomsPrice = 0 ;
                        $(".roomP").each( function(){
                                
                                        roomsPrice += parseInt($(this).val()) ; 
                        });
                         

                        var optionsPrice = 0 ;
                        $(".option_").each( function(){
                                if( $(this).is(":checked")  ){ 
                                        optionsPrice += parseInt($(this).val()) ; 
                             }
                             $("#priceOptions_total").html(optionsPrice) ;
                             $("#cost").html( ( parseInt(roomsPrice) + parseInt(optionsPrice) ) *<?php echo $reservation->nights ?> )  ;
                        });

                });

        </script>