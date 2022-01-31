

<section id="hero_2" class="background-image" data-background="url(<?php echo base_url() ?>/assets/img/facade/hotel/<?php echo $hotel->facade ?>" >
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
<form action="<?php echo base_url() ?>Reservation/BookNow/<?php echo $reservation->reservationId ?>" method="post">
<main style="margin-bottom: 392.094px;">
                <div id="position">
                        <div class="container">
                                <ul>
                                        <li><a href="#">Home</a>
                                        </li>
                                        <li><a href="#">Booking</a>
                                        </li>
                                        <li><?php echo $hotel->name ?></li>
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
                                                                        
                                                                        <input type="checkbox" 
                                                                        class="child child_<?php echo $detail->detailId ?>" 
                                                                        <?php if ($i == 0 ) {  echo 'style="display: none;" '; } ?> 
                                                                        onclick="childPerRoom(<?php echo $detail->detailId ?>);child() ;"
                                                                        data-detail="<?php echo $detail->detailId ?>" >

                                                                        <small <?php if ($i == 0 ) {  echo 'style="display: none;" '; } ?>>children</small>  
                                                                        
                                                                        </label>
                                                                        <input 
                                                                        type="text" 
                                                                        class="form-control" 
                                                                        id="guest_" 
                                                                        name="guest<?php echo $detail->detailId ?>[]"
                                                                        required
                                                                        >
                                                                </div>
                                                        </div>

                                                        <?php } ?>
                                                </div>
                                                <div >
                                                <?php if ($detail->adult == 1 ) { ?> 
                                                        
                                                       <input 
                                                        type="hidden" 
                                                        class="Pax Pax_<?php echo $detail->detailId ?>" 
                                                        id="Pax_<?php echo $detail->detailId ?>" 
                                                        value="<?php echo ( ($detail->prices->pensionPrice + $detail->prices->supS) ) ?>"
                                                        data-capacity = "<?php echo $detail->adult + $detail->children  ?>"
                                                         
                                                        >
                                                        <br>
                                                       
                                                        <input 
                                                        type="hidden" 
                                                        class="rommP roomP_<?php echo $detail->detailId ?>"
                                                        name="rommP<?php echo $detail->detailId ?>" 
                                                        id="rommP_<?php echo $detail->detailId ?>" 
                                                        value="<?php echo( $detail->prices->pensionPrice + $detail->prices->supS )*( $detail->adult + $detail->children ) ?>" 
                                                        >
                                                 <?php } ?> 
                                                 <?php if ($detail->adult > 1 &&  $detail->adult < 4 ) { ?> 
                                                         
                                                       <input 
                                                        type="hidden" 
                                                        class="Pax Pax_<?php echo $detail->detailId ?>" 
                                                        id="Pax_<?php echo $detail->detailId ?>" 
                                                        value="<?php echo ( ($detail->prices->pensionPrice ) ) ?>"
                                                        data-capacity = "<?php echo $detail->adult + $detail->children  ?>"
                                                        ?>
                                                        <br>
                                                       
                                                        <input 
                                                        type="hidden" 
                                                        class="rommP roomP_<?php echo $detail->detailId ?>" 
                                                        id="rommP_<?php echo $detail->detailId ?>" 
                                                        name="rommP<?php echo $detail->detailId ?>"  
                                                        value="<?php echo( $detail->prices->pensionPrice )*( $detail->adult + $detail->children ) ?>" 
                                                        >
                                                 <?php } ?>
                                                  <?php if ($detail->adult == 4 ) { ?> 
                                                       
                                                       <input 
                                                        type="hidden" 
                                                        class="Pax Pax_<?php echo $detail->detailId ?>" 
                                                        id="Pax_<?php echo $detail->detailId ?>" 
                                                        value="<?php echo ( ($detail->prices->pensionPrice ) ) ?>"
                                                        data-capacity = "<?php echo $detail->adult + $detail->children  ?>"
                                                        ?>
                                                        <br>
                                                        
                                                        <input 
                                                        type="hidden" 
                                                        class="rommP roomP_<?php echo $detail->detailId ?>" 
                                                        id="rommP_<?php echo $detail->detailId ?>"  
                                                        name="rommP<?php echo $detail->detailId ?>"  
                                                        value="<?php echo round( ( ( $detail->prices->pensionPrice  )*3 ) + ( $detail->prices->pensionPrice  )*0.25 ) ?>" 
                                                        >
                                                 <?php } ?>

                                                  <input 
                                                        type="hidden" 
                                                       
                                                        id="adult<?php echo $detail->detailId ?>"  
                                                        name="adult<?php echo $detail->detailId ?>"  
                                                       value ="<?php echo $detail->adult ?>" > 
                                                   <input 
                                                        type="hidden" 
                                                       
                                                        id="children<?php echo $detail->detailId ?>"  
                                                        name="children<?php echo $detail->detailId ?>"  
                                                       value ="<?php echo $detail->children ?>" >   


                                                </div>
                                         <?php if (!empty($detail->options) ) {  ?>       
                                        <table class="table table-striped options_cart">
                                                <thead>
                                                    <tr>
                                                        <th colspan="3">
                                                            Add options / Services
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                        
                                                        <?php foreach ($detail->options as $option) {  ?>
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
                                                                        <input type="checkbox" class="option_" id="option_<?php echo $detail->detailId ?>" data-price="<?php echo $option->price ?>" value="<?php echo $option->price ?>" data-detail="<?php echo $detail->detailId ?>" onclick="calculate() " >
                                                                        <span>
                                                                        <span>No</span>
                                                                        <span>Yes</span>
                                                                        </span>
                                                                        <a></a>
                                                                    </label>
                                                                </td>
                                                            </tr>
                                                        <?php  }  ?>
                                                </tbody>
                                        </table>
                                        <?php  }  ?>
                                                <div class="text-right">

                                                        <span> Adult :
                                                                <strong id="nbAdult_<?php echo $detail->detailId ?>" >
                                                                        <?php echo $detail->adult ?>
                                                                </strong>   
                                                        </span>
                                                       <br>
                                                       <span>   Children
                                                                <strong id="nbChild_<?php echo $detail->detailId ?>" >
                                                                         <?php echo $detail->children ?>
                                                                </strong>   
                                                        </span>
                                                       <br>
                                                       <span class="bg-white text-right">  Price : 
                                                                        <strong id="detailPrice_<?php echo $detail->detailId ?>" >
                                                                                <?php if ($detail->adult == 1 ) { 
                                                                                        echo ( ($detail->prices->pensionPrice + $detail->prices->supS) * $detail->adult) ;
                                                                                }
                                                                                elseif ($detail->adult > 1 && $detail->adult < 4 ) { 
                                                                                 echo ( ($detail->prices->pensionPrice ) * $detail->adult) ;
                                                                                 }  ?>
                                                                                 <?php if ($detail->adult == 4 ) {  
                                                                                   echo round( ( ($detail->prices->pensionPrice ) * 3) + ($detail->prices->pensionPrice)*0.25 ) ;
                                                       
                                                                                } ?>
                                                                        </strong>   
                                                                        <sup>DT/Per night</sup>
                                                                </span> 
                                                </div>  
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
                                        <!--
                                        <div class="step">
                                                <div class="form-group">
                                                        <label>Name on card</label>
                                                        <input class="form-control" id="name_card_bookign" name="name_card_bookign" required>
                                                </div>
                                                <div class="row">
                                                        <div class="col-md-6 col-sm-12">
                                                                <div class="form-group">
                                                                        <label>Card number</label>
                                                                        <input type="tel" inputmode="numeric" pattern="[0-9\s]{13,19}" autocomplete="cc-number" maxlength="19" placeholder="xxxx xxxx xxxx xxxx"  id="card_number" name="card_number" class="form-control" required>
                                                                </div>
                                                        </div>
                                                        <div class="col-md-6 col-sm-12">
                                                                <img src="<?php echo base_url() ?>assets/img/cards-1.png" width="207" height="43" alt="Cards" class="cards" required>
                                                        </div>
                                                </div>
                                                <div class="row">
                                                        <div class="col-md-6">
                                                                <label>Expiration date</label>
                                                                <div class="row">
                                                                        <div class="col-md-6">
                                                                                <div class="form-group">
                                                                                        <input type="number" pattern="[0-9\s]{13,19}" maxlength="4" min="<?php echo date('m') ?>" id="expire_month" name="expire_month" class="form-control"  placeholder="MM" required>
                                                                                </div>
                                                                        </div>
                                                                        <div class="col-md-6">
                                                                                <div class="form-group">
                                                                                        <input type="number" pattern="[0-9\s]{13,19}" maxlength="4" min="<?php echo date('Y') ?>" id="expire_year" name="expire_year" class="form-control" placeholder="Year" required>
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
                                                                                                <input type="number" pattern="[0-9\s]{13,19}" maxlength="3" id="ccv" name="ccv" class="form-control" placeholder="CCV" required>
                                                                                        </div>
                                                                                </div>
                                                                                <div class="col-8">
                                                                                        <img src="<?php echo base_url() ?>assets/img/icon_ccv-1.gif" width="50" height="29" alt="ccv"><small>Last 3 digits</small>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                
                                                       
                                                
                                        </div>
                                        <!--End step -->

                                    
                                        
                                        <!--End step -->

                                        <div id="policy">
                                                <h4>Cancellation policy</h4>
                                                <div class="form-group">
                            <label class="container_check">
                                I accept terms and conditions and general policy.
                                <input type="checkbox" required>
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
                                                                                <?php echo COUNT($reservation->details) ?>
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
                                                <button type="submit" class="btn_full" >Book now</button>
                                                
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

        <input type="hidden" name="TTadults" id="TTadults" >
        <input type="hidden" name="TTchilds" id="TTchilds" >
        <input type="hidden" name="TTprice"  id="TTprice"  >
</form>


        <script type="text/javascript">

                child() ;

               function calculate () {

                        var roomsPrice = 0 ;
                        $(".rommP").each( function(){                                
                                roomsPrice +=  parseInt( $(this).val() )  ; 
                                $("#cost").html( parseInt(roomsPrice) * parseInt(<?php echo $reservation->nights ?>)  )  ;
                                $("#TTprice").val( parseInt(roomsPrice) * parseInt(<?php echo $reservation->nights ?>)  )  ;
                        });
                        
                        
                        var optionsPrice = 0 ;
                        $(".option_").each( function(){
                                if( $(this).is(":checked")  ){ 
                                        optionsPrice += parseInt($(this).val()) ; 
                             }
                             $("#priceOptions_total").html(optionsPrice) ;
                             $("#cost").html( ( parseInt(roomsPrice) + parseInt(optionsPrice) ) * parseInt(<?php echo $reservation->nights ?>) )  ;
                             $("#TTprice").val( parseInt(roomsPrice) * parseInt(<?php echo $reservation->nights ?>)  )  ;
                        });

                        
                }

                
                function child()
                {
                
                var child = 0 ;
                 var adult = 0 ;
                
                $(".child").each( function(){
                        if( $(this).is(":checked")  ){ 
                                child += 1 ;           
                     }
                     $("#nbChild").html(child) ;
                     $("#TTchilds").val(child) ;

                       
                       if( !($(this).is(":checked"))  )
                                { adult += 1 ; 
                                 
                     }
                      $("#nbAdult").html(adult) ;
                      $("#TTadults").val(adult) ;
                        });  


                       calculate () ;
                }

                function childPerRoom(detailId)
                {
                
                var child = 0 ;
                 var adult = 0 ;
                
                $(".child_"+detailId).each( function(){
                        if( $(this).is(":checked")  ){ 
                                child += 1 ;           
                     }
                     $("#nbChild_"+detailId).html(child) ;
                     $("#children"+detailId).val(child) ;
                       
                       if( !($(this).is(":checked"))  )
                                { adult += 1 ; 
                                 
                     }
                      $("#nbAdult_"+detailId).html(adult) ;
                      $("#adult"+detailId).val(adult) ;
                        });   

                price = 0 ; 
                        
                        if(child ==0 )
                                {
                                price= adult * parseInt( $(".Pax_"+detailId).val() )  ;
                                }
                        if(adult == 1 && child == 1  )
                                { 
                                price= (adult*parseInt( $(".Pax_"+detailId).val() ) )  + (child * (parseInt( parseInt( $(".Pax_"+detailId).val() ) - parseInt( $(".Pax_"+detailId).val() )*0.3) ) ) ;  
                                }
                        if(adult == 2 && child == 1  )
                                { 
                                price= (adult*parseInt( $(".Pax_"+detailId).val() ) )  + (child * (parseInt( parseInt( $(".Pax_"+detailId).val() ) - parseInt( $(".Pax_"+detailId).val() )*0.5) ) ) ;  
                                }
                        if(adult == 1 & child == 2  )
                                { 
                                price= (adult*parseInt( $(".Pax_"+detailId).val() ) )  + (child * (parseInt( parseInt( $(".Pax_"+detailId).val() ) - parseInt( $(".Pax_"+detailId).val() )*0.5) ) ) ;
                                }
                        if( adult == 4  )
                                { 
                                price= Math.round( (adult*parseInt( $(".Pax_"+detailId).val()   ))   - parseInt( $(".Pax_"+detailId).val()/4 )*0.25)  ;
                                }
                        if(adult == 3 && child == 1  )
                                { 
                                price= (adult*parseInt( $(".Pax_"+detailId).val() ) )  + (child * (parseInt( parseInt( $(".Pax_"+detailId).val() ) - parseInt( $(".Pax_"+detailId).val() )*0.3) ) ) ;  
                                }
                        if(adult == 2 && child == 2  )
                                { 
                                price= (adult*parseInt( $(".Pax_"+detailId).val() ) )  + (child * (parseInt( parseInt( $(".Pax_"+detailId).val() ) - parseInt( $(".Pax_"+detailId).val() )*0.5) ) ) ;  
                                }
                        if(adult == 1 & child == 3  )
                                { 
                                price= (adult*parseInt( $(".Pax_"+detailId).val() ) )  + (child * (parseInt( parseInt( $(".Pax_"+detailId).val() ) - parseInt( $(".Pax_"+detailId).val() )*0.5) ) ) ;
                                }



                
                 $(".roomP_"+detailId).val(price)   ;
                 $("#detailPrice_"+detailId).html(price) ;
                 
                     
                calculate () ;

                
                }
                                                             

               
                      
                 
                
                
                

        </script>