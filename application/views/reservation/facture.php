<!-- SPECIFIC CSS -->
<link href="<?php echo base_url() ?>assets/css/admin-1.css" rel="stylesheet">
<link href="https://printjs-4de6.kxcdn.com/print.min.css" rel="stylesheet">
<script src="<?php echo base_url() ?>assets/js/qrcode.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.12.313/pdf.min.js"></script>
<section class="parallax-window" data-parallax="scroll" data-image-src="<?php echo base_url() ?>assets/img/facade/hotel/golden.jpg" >
   <div class="parallax-content-1 opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.4)">
      <div class="animated fadeInDown">
         <h1>Hello <?php echo $name?>!</h1>
         <p></p>
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
            <li><a href="#">Reservation</a>
            </li>
            <li></li>
         </ul>
      </div>
   </div>
   <!-- End Position -->
   <div class="margin_60 container">
     
         
          <div class="col-12">
            <div class="card">
             
               <div class="card-body">
                  <div id="tabs" class="tabs">
                    
                     <div class="content" style=" padding: 35px;border-radius: 30px;   background: url('https://www.palmyrahotels.tn/assets/img/logopageBG.webp' ; background-repeat: no-repeat ; background-size: 50% auto; background-color: white; background-position: center; "  id="ivoic">
                        <div class="container">
                           <div class="row">
                              <div class="col-12">
                                 <div class="invoice-title">
                                       
                                        <table width="100%">
                           <tr>
                              <td width="30%" ><img src="https://www.palmyrahotels.tn/assets/img/logopage.png" width="150px"></td>
                              <td></td>
                              <td width="30%">
                                 <div id="qrcode" style="float:right;"></div>
                                 <script type="text/javascript">
                                    var qrcode = new QRCode("qrcode", {
                                                        text: "<?php echo $reservation->reservationId ?>",
                                                        width: 128,
                                                        height: 128,
                                                        colorDark : "#000000",
                                                        colorLight : "#ffffff",
                                                        correctLevel : QRCode.CorrectLevel.H
                                                    });
                                    qrcode.clear(); // clear the code.
                                    qrcode.makeCode("<?php echo $reservation->reservationId ?>"); // make another code.
                                 </script>
                              </td>
                           </tr>
                        </table>
                        <h3 class="pull-right">Order # <?php echo $reservation->reservationId ?></h3>
                        <h3 class="pull-right">Palmyra <?php echo $hotel->name ?></h3>
                        <span class="pull-right"><?php echo $hotel->Adresse ?></span>
                     </div>
                     <hr>
                     <table width="100%">
                        <tr>
                           <td>
                              <address>
                                 <strong>From :</strong> <?php echo $reservation->checkin ?> 14:00 <br>
                                 <strong>To :</strong> <?php echo $reservation->checkout ?> 12:00 <br>
                                 <strong>Stay :</strong> <?php echo $reservation->nights ?> nghits <br>
                                 <strong>Pension:</strong> <?php if($reservation->pension == 'PD'  ){ echo 'Continental breakfast included' ;  } ?>
                                                                                <?php if($reservation->pension == 'DP'  ){ echo 'Continental breakfast & dinner included' ;  } ?>
                                                                                <?php if($reservation->pension == 'PC'  ){ echo 'Continental breakfast , lunch & dinner included' ;  } ?>
                                                                                <?php if($reservation->pension == 'ALLS'  ){ echo 'All in soft' ;  } ?>
                                                                                <?php if($reservation->pension == 'ALLH'  ){ echo 'All in hard' ;  } ?><br>
                              </address>
                           </td>
                           <td>
                              <address>
                                 <strong>Shipped To:</strong><br>
                                 <?php echo $reservation->client->name ?><br>
                                 <?php echo $reservation->client->address ?><br>
                                 <?php echo $reservation->client->city ?> <?php echo $reservation->client->country ?><br>
                                 <?php echo $reservation->client->zip ?>
                              </address>
                           </td>
                        </tr>
                        <tr>
                           <td>
                              <address>
                                 <strong>Payment Method:</strong><br>
                                 
                                 <?php echo $reservation->client->email ?>
                              </address>
                           </td>
                           <td width="30%">
                              <address>
                                 <strong>Order Date:</strong><br>
                                 <?php echo $reservation->createdDTM ?><br><br>
                              </address>
                           </td>
                        </tr>
                     </table>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-lg-12">
                  <div class="panel panel-default">
                     <div class="panel-heading">
                        <h3 class="panel-title"><strong>Order summary</strong></h3>
                     </div>
                     <div class="panel-body">
                        <div class="table-responsive">
                            <table class="table "  width="100%" border="1">
                              <thead>
                                 <tr>
                                    
                                    <td width="20%"><strong>Item</strong></td>
                                    <td class="text-center" width="5%"><strong>Adult</strong></td>
                                    <td class="text-center" width="5%"><strong>child</strong></td>
                                    <td class="text-center" width="20%"><strong>Guests</strong></td>
                                    <td class="text-center" width="25%"><strong>Options</strong></td>
                                    <td class="text-center" width="10%" ><strong>Price</strong></td>
                                    <td class="text-center" width="10%" ><strong>Total</strong></td>
                                 </tr>
                              </thead>
                              <tbody>
                                 <!-- foreach ($order->lineItems as $line) or some such thing here -->
                                 <?php foreach ( $reservation->details as $detail ) {  ?>
                                 <tr>
                                    
                                    <td><?php echo $detail->room->titre ?></td>
                                    <td class="text-center"><?php echo $detail->adult ?></td>
                                    <td class="text-center"><?php echo $detail->children ?></td>
                                    <td> <?php foreach ( json_decode($detail->guests) as $gt) { echo '<li>'.$gt.'</li>' ; }  ?>   </td>
                                    <td >
                                       <ul>
                                          <?php foreach ($detail->opts as $option ){ echo "<li>".$option->option."</li>" ; } ?>
                                       </ul>
                                    </td>
                                    <td class="text-center"><?php echo $detail->price ?> <sup>DT</sup></td>
                                     <td class="text-center"><?php echo $detail->price *  $reservation->nights *  $reservation->adult  ?> <sup>DT</sup></td>
                                 </tr>
                                 <?php } ?>
                              </tbody>
                           </table>
                           <table class=" "  width="100%"  >
                              <tbody>
                                 <tr>
                                    <td class="thick-line"></td>
                                    <td class="thick-line"></td>
                                    <td class="thick-line"></td>
                                    <td class="thick-line"></td>
                                    <td class="thick-line"></td>
                                    <td class="thick-line text-center"><strong>Sub total</strong></td>
                                    <td class="thick-line text-right"><?php echo $reservation->price ?><sup>DT</sup></td>
                                 </tr>
                                 <tr>
                                    <td class="thick-line"></td>
                                    <td class="thick-line"></td>
                                    <td class="thick-line"></td>
                                    <td class="thick-line"></td>
                                    <td class="thick-line"></td>
                                    <td class="no-line text-center"><strong>Taxe</strong></td>
                                    <td class="no-line text-right"><?php  echo $reservation->adult * 2 *  $reservation->nights ?><sup>DT</sup></td>
                                 </tr>
                                  <tr>
                                    <td class="thick-line"></td>
                                    <td class="thick-line"></td>
                                    <td class="thick-line"></td>
                                    <td class="thick-line"></td>
                                    <td class="thick-line"></td>
                                    <td class="no-line text-center" width="10%"><strong>Total</strong></td>
                                    <td class="no-line text-right" width="10%" ><?php echo $reservation->price + (  $reservation->adult * 2 *  $reservation->nights ) ?><sup>DT</sup></td>
                                 </tr>
                              </tbody>
                           </table>

                           <b>thank you for your trust.<br>

                           Your reservation request will only be definitively confirmed after payment at the hotel </b>
                           <br>
                           <b style="color:palevioletred ;"> Amount to pay at the hotel: <?php echo $reservation->price + ( $reservation->adult * 2)   ?>   <sup>DT</sup> </b>                                                         

                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      
      <!-- End tabs -->
   </div>
   <!-- end container -->
</main>
<!-- End main -->
<!-- Specific scripts -->
<script src="<?php echo base_url() ?>assets/js/tabs-1.js"></script>
<script>
   new CBPFWTabs(document.getElementById('tabs'));
</script>
<script>
   $('.wishlist_close_admin').on('click', function (c) {
       $(this).parent().parent().parent().fadeOut('slow', function (c) {});
   });
</script>