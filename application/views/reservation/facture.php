<!-- SPECIFIC CSS -->
    <link href="<?php echo base_url() ?>assets/css/admin-1.css" rel="stylesheet">

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
                                <div id="tabs" class="tabs">
                                   
                                <div class="content" style="background-color: white; padding: 50px;border-radius: 30px;">


                                  <div class="container">
                                    <div class="row">
                                        <div class="col-12">
                                    		<div class="invoice-title">
                                    			<img src="<?php echo base_url() ?>assets/img/logopage.png" width="200px">
                                                <h3 class="pull-right">Order # <?php echo $reservation->reservationId ?></h3>
                                    		</div>
                                    		<hr>
                                    		<div class="row">
                                    			<div class="col-6">
                                    				<address>
                                    				<strong>Pension:</strong><br>
                                                    <strong>Nights:</strong><br>

                                    				</address>
                                    			</div>
                                    			<div class="col-6 text-right">
                                    				<address>
                                        			<strong>Shipped To:</strong><br>
                                    					<?php echo $reservation->client->name ?><br>
                                                        <?php echo $reservation->client->address ?><br>
                                                        <?php echo $reservation->client->city ?><br>
                                                        <?php echo $reservation->client->zip ?>
                                    				</address>
                                    			</div>
                                    		</div>
                                    		<div class="row">
                                    			<div class="col-6">
                                    				<address>
                                    					<strong>Payment Method:</strong><br>
                                    					Visa ending **** 4242<br>
                                    					 <?php echo $reservation->client->email ?>
                                    				</address>
                                    			</div>
                                    			<div class="col-6 text-right">
                                    				<address>
                                    					<strong>Order Date:</strong><br>
                                    					March 7, 2014<br><br>
                                    				</address>
                                    			</div>
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
                                    					<table class="table table-condensed">
                                    						<thead>
                                                                <tr>
                                        							<td><strong>Item</strong></td>                                       							
                                                                    <td class="text-center"><strong>Adult</strong></td>
                                                                    <td class="text-center"><strong>child</strong></td>
                                                                    <td class="text-center"><strong>Price</strong></td>
                                        							<td class="text-right"><strong>Totals</strong></td>
                                                                </tr>
                                    						</thead>
                                    						<tbody>
                                    							<!-- foreach ($order->lineItems as $line) or some such thing here -->
                                                                <?php foreach ( $reservation->details as $detail ) {  ?>
                                    							<tr>
                                    								<td><?php echo $detail->room->titre ?></td>
                                    								<td class="text-center"><?php echo $detail->adult ?></td>
                                    								<td class="text-center"><?php echo $detail->children ?></td>
                                                                    <td class="text-center"><?php echo $detail->price ?></td>
                                    								
                                    							</tr>
                                                                <?php } ?>
                                    						</tbody>
                                    					</table>
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