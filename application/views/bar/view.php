<section class="parallax-window" data-parallax="scroll" data-image-src="<?php echo base_url() ?>assets/img/facade/bar/<?php echo $bar->repo ?>" >
		<div class="parallax-content-2">
			<div class="container">
				<div class="row">
					<div class="col-md-8">
						<h1><?php echo $bar->name ?></h1>
						<span><?php echo $bar->adresse ?></span>
						<span class="rating"><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile"></i><small>(75)</small></span>
					</div>
					<div class="col-md-4">
						<div id="price_single_main">
		<!--					from/per person <span> <sup>$</sup>52</span>  -->
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
					<li><a href="#">Category</a>
					</li>
					<li>Page active</li>
				</ul>
			</div>
		</div>
		<!-- End Position -->

		<div class="collapse" id="collapseMap">
			<div id="map" class="map"></div>
		</div>
		<!-- End Map -->

		<div class="container margin_60">
			<div class="row">
				<div class="col-lg-8" id="single_tour_desc">

					<div id="single_tour_feat">
						<div id="Img_carousel" class="slider-pro">
                        <div class="sp-slides">

                             <?php
                                $dir = "./assets/img/bars/".$bar->acro."/";
                                $dir1 = base_url()."/assets/img/bars/".$bar->acro."/";
                              

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
					</div>

					<p class="d-none d-md-block d-block d-lg-none"><a class="btn_map" data-toggle="collapse" href="#collapseMap" aria-expanded="false" aria-controls="collapseMap" data-text-swap="Hide map" data-text-original="View on map">View on map</a></p>
					<!-- Map button for tablets/mobiles -->
					<hr>
					<div class="row" >
						<div class="col-lg-3">
							<h3>Description</h3>
						</div>
						<div class="col-lg-9">
							<h4>About us</h4>
							<p>
								<?php echo $bar->description ?>
							</p>
							<div class="row">
								<div class="col-md-6">
									<ul class="list_ok">
										<li>Lorem ipsum dolor sit amet</li>
										<li>No scripta electram necessitatibus sit</li>
										<li>Quidam percipitur instructior an eum</li>
										<li>Ut est saepe munere ceteros</li>
										<li>No scripta electram necessitatibus sit</li>
										<li>Quidam percipitur instructior an eum</li>
									</ul>
								</div>
								<div class="col-md-6">
									<ul class="list_ok">
										<li>Lorem ipsum dolor sit amet</li>
										<li>No scripta electram necessitatibus sit</li>
										<li>Quidam percipitur instructior an eum</li>
										<li>No scripta electram necessitatibus sit</li>
									</ul>
								</div>
							</div>
							<!-- End row  -->
						</div>
						<div class="col-md-12">
							
							
						</div>
					</div>

					<hr>

					<div class="row">
						<div class="col-lg-3">
							<h3>Opening time</h3>
						</div>
						<div class="col-lg-9">
							<div class="table-responsive">
								<table class="table table-striped">
									<thead>
										<tr>
											<th colspan="2">
												1st March to 31st October
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												Monday
											</td>
											<td>
												10.00 - 17.30
											</td>
										</tr>
										<tr>
											<td>
												Tuesday
											</td>
											<td>
												09.00 - 17.30
											</td>
										</tr>
										<tr>
											<td>
												Wednesday
											</td>
											<td>
												09.00 - 17.30
											</td>
										</tr>
										<tr>
											<td>
												Thursday
											</td>
											<td>
												<span class="label label-danger">Closed</span>
											</td>
										</tr>
										<tr>
											<td>
												Friday
											</td>
											<td>
												09.00 - 17.30
											</td>
										</tr>
										<tr>
											<td>
												Saturday
											</td>
											<td>
												09.00 - 17.30
											</td>
										</tr>
										<tr>
											<td>
												Sunday
											</td>
											<td>
												10.00 - 17.30
											</td>
										</tr>
									</tbody>
								</table>
							</div>

						</div>
					</div>

					<hr>
					
					<div class="row">
						<div class="col-lg-3">
							<h3>Reviews </h3>
							<a href="#" class="btn_1 add_bottom_30" data-toggle="modal" data-target="#myReview">Leave a review</a>
						</div>
						<div class="col-lg-9">
							<div id="general_rating">11 Reviews
								<div class="rating">
									<i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile"></i><i class="icon-smile"></i>
								</div>
							</div>
							<!-- End general_rating -->
							<div class="row" id="rating_summary">
								<div class="col-md-6">
									<ul>
										<li>Position
											<div class="rating">
												<i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile"></i><i class="icon-smile"></i>
											</div>
										</li>
										<li>Service
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
							<!-- End row -->
							<hr>
							<div class="review_strip_single">
								<img src="img/avatar1-1.jpg" alt="Image" class="rounded-circle">
								<small> - 10 March 2015 -</small>
								<h4>Jhon Doe</h4>
								<p>
									"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus."
								</p>
								<div class="rating">
									<i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile"></i><i class="icon-smile"></i>
								</div>
							</div>
							<!-- End review strip -->

							<div class="review_strip_single">
								<img src="img/avatar3-1.jpg" alt="Image" class="rounded-circle">
								<small> - 10 March 2015 -</small>
								<h4>Jhon Doe</h4>
								<p>
									"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus."
								</p>
								<div class="rating">
									<i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile"></i><i class="icon-smile"></i>
								</div>
							</div>
							<!-- End review strip -->

							<div class="review_strip_single last">
								<img src="img/avatar2-1.jpg" alt="Image" class="rounded-circle">
								<small> - 10 March 2015 -</small>
								<h4>Jhon Doe</h4>
								<p>
									"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a lorem quis neque interdum consequat ut sed sem. Duis quis tempor nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus."
								</p>
								<div class="rating">
									<i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile voted"></i><i class="icon-smile"></i><i class="icon-smile"></i>
								</div>
							</div>
							<!-- End review strip -->
						</div>
					</div>
				</div>
				<!--End  single_tour_desc-->

				<aside class="col-lg-4">
					<p class="d-none d-xl-block d-lg-block d-xl-none">
						<a class="btn_map" data-toggle="collapse" href="#collapseMap" aria-expanded="false" aria-controls="collapseMap" data-text-swap="Hide map" data-text-original="View on map">View on map</a>
					</p>
					
					<!--/box_style_1 -->

					<div class="box_style_4">
						<i class="icon_set_1_icon-90"></i>
						<h4><span>Book</span> by phone</h4>
						<a href="tel://+216<?php echo $bar->phone ?>" class="phone">+216 <?php echo $bar->phone ?></a>
						<small>Monday to Friday 9.00am - 7.30pm</small>
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