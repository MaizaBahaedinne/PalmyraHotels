
	<section class="parallax-window" data-parallax="scroll" data-image-src="<?php echo base_url() ?>assets\img\hotels\golden\GB30.jpg" >
		<div class="parallax-content-1 opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.6)">
			<div class="animated fadeInDown">
				<h1>Palmyra Hotels Blogs</h1>
				
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
		<!-- End position -->

		<div class="container margin_60">
			<div class="row">

				<div class="col-lg-9">
					<div class="box_style_1">
						<?php foreach ($blogs as $blog ) { ?>

						<div class="post">
							<a href="<?php echo base_url() ?>Blog/view/<?php echo $blog->blogId ?>"><img src="<?php echo base_url() ?>assets/img/blog/<?php echo $blog->image ?>" alt="Image" class="img-fluid">
							</a>
							<div class="post_info clearfix">
								<div class="post-left">
									<ul>
										<li><i class="icon-calendar-empty"></i> On <span>12 Nov 2020</span>
										</li>
										<li><i class="icon-inbox-alt"></i> In <a href="#">Top tours</a>
										</li>
										<li><i class="icon-tags"></i> Tags <a href="#">Works</a>, <a href="#">Personal</a>
										</li>
									</ul>
								</div>
								<div class="post-right"><i class="icon-comment"></i><a href="#">25 </a>
								</div>
							</div>
							<h2><?php echo $blog->titre ?></h2>
							<p>
								<?php echo $blog->description ?>
							</p>
							<a href="<?php echo base_url() ?>Blog/view/<?php echo $blog->blogId ?>" class="btn_1">Read more</a>
						</div>
						<!-- end post -->

						<hr>

						<?php } ?>
						
						<!-- end post -->
					</div>

					<!--
					<nav aria-label="Page navigation">
						<ul class="pagination justify-content-center">
							<li class="page-item">
								<a class="page-link" href="#" aria-label="Previous">
									<span aria-hidden="true">&laquo;</span>
									<span class="sr-only">Previous</span>
								</a>
							</li>
							<li class="page-item active"><span class="page-link">1<span class="sr-only">(current)</span></span>
							</li>
							<li class="page-item"><a class="page-link" href="#">2</a></li>
							<li class="page-item"><a class="page-link" href="#">3</a></li>
							<li class="page-item">
								<a class="page-link" href="#" aria-label="Next">
									<span aria-hidden="true">&raquo;</span>
									<span class="sr-only">Next</span>
								</a>
							</li>
						</ul>
					</nav>
					<!-- end pagination-->
					
				</div>
				<!-- End col -->

				<aside class="col-lg-3">

					<div class="widget">
						<div class="input-group">
							<input type="text" class="form-control" placeholder="Search...">
							<span class="input-group-btn">
						<button class="btn btn-default" type="button" style="margin-left:0;"><i class="icon-search"></i></button>
						</span>
						</div>
						<!-- /input-group -->
					</div>
					<!-- End Search -->
					<hr>
					<div class="widget" id="cat_blog">
						<h4>Categories</h4>
						<ul>
							<li><a href="#">Places to visit</a>
							</li>
							<li><a href="#">Top tours</a>
							</li>
							<li><a href="#">Tips for travellers</a>
							</li>
							<li><a href="#">Events</a>
							</li>
						</ul>
					</div>
					<!-- End widget -->

					<hr>

					<div class="widget">
						<h4>Recent post</h4>
						<ul class="recent_post">

							<?php foreach ($blogs as $blog ) { ?>

						<li>
								<i class="icon-calendar-empty"></i> <?php echo $blog->createdDTM ?>
								<div><a href="#"> <?php echo $blog->titre ?></a>
								</div>
							</li>
						<hr>

						<?php } ?>
							
						</ul>
					</div>
					<!-- End widget -->
					<hr>
					<div class="widget tags">
						<h4>Tags</h4>
						
					</div>
					<!-- End widget -->

				</aside>
				<!-- End aside -->

			</div>
			<!-- End row-->
		</div>
		<!-- End container -->
	</main>
	<!-- End main -->