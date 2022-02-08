<div class="content" style=" padding: 35px;border-radius: 30px;   background: url('<?php echo base_url() ?>assets/img/logopageBG.png') ; background-repeat: no-repeat ; background-size: 50% auto; background-color: white; background-position: center; "  id="ivoic">
            <div class="container">
               <div class="row">
                  <div class="col-12">
                     <div class="invoice-title">
                        <table width="100%">
                           <tr>
                              <td width="30%" ><img src="<?php echo base_url() ?>assets/img/logopage.png" width="150px"></td>
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
                        <h3 class="pull-right">Palmyra <?php echo $reservation->hotel->name ?></h3>
                        <span class="pull-right"><?php echo $reservation->hotel->Adresse ?></h3>
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
                                 <br>
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
                        <                        <table width="100%">
                           <tr>
                              <td width="30%" ><img src="<?php echo base_url() ?>assets/img/logopage.png" width="150px"></td>
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
                        <span class="pull-right"><?php echo $hotel->Adresse ?></h3>
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
                           <table class="table "  width="100%"  >
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
                                    <td class="no-line text-center"><strong>Total</strong></td>
                                    <td class="no-line text-right"><?php echo $reservation->price + ( $reservation->adult * 2) ?><sup>DT</sup></td>
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