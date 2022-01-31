<link href="<?php echo base_url() ?>assets/css/blog-1.css" rel="stylesheet">
<section class="parallax-window" data-parallax="scroll" data-image-src="<?php echo base_url() ?>assets\img\blog/<?php echo $blog->image ?>" >
		<div class="parallax-content-1 opacity-mask" data-opacity-mask="rgba(0, 0, 0, 0.6)">
			<div class="animated fadeInDown">
				<h1><?php echo $blog->titre ?></h1>
				
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
						<div class="post nopadding ">
							<img src="<?php echo base_url() ?>assets\img\blog/<?php echo $blog->image ?>" alt="Image" class="img-fluid" >
							<div class="post_info clearfix">
								<div class="post-left">
									<ul>
										<li><i class="icon-calendar-empty"></i>On <span>/<?php echo $blog->createdDTM ?></span>
										</li>
										<li><i class="icon-inbox-alt"></i>By <a href="#"><?php echo $blog->createdBy->name ?></a>
										</li>
										<li><i class="icon-tags"></i>Tags  
										</li>
									</ul>
								</div>
								<div class="post-right"><i class="icon-comment"></i><a href="#">0 </a>Comments</div>
							</div>
							<h2><?php echo $blog->titre ?></h2>
							<?php echo $blog->description ?>
								
						</div>
						<!-- end post -->
					</div>
					<!-- end box_style_1 -->

					<h4>0 comments</h4>
					<!--
					<div id="comments">
						<ol>
							<li>
								<div class="avatar">
									<a href="#"><img src="img/avatar1-1.jpg" alt="Image">
									</a>
								</div>
								<div class="comment_right clearfix">
									<div class="comment_info">
										Posted by <a href="#"><?php echo $blog->createdBy->name ?></a><span>|</span> 25 apr 2019 <span>|</span><a href="#">Reply</a>
									</div>
									<p>
										Nam cursus tellus quis magna porta adipiscing. Donec et eros leo, non pellentesque arcu. Curabitur vitae mi enim, at vestibulum magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed sit amet sem a urna rutrumeger fringilla. Nam vel enim ipsum, et congue ante.
									</p>
								</div>
								
							</li>
							
						</ol>
					</div>
					<!-- End Comments -->

					<h4>Leave a comment</h4>
					<form action="#" method="post">
						
						<div class="form-group">
							<textarea name="message" class="form-control style_2" style="height:150px;" placeholder="Message"></textarea>
						</div>
						<div class="form-group">
							<input type="reset" class="btn_1" value="Clear form">
							<input type="submit" class="btn_1" value="Post Comment">
						</div>
					</form>
				</div>
				<!-- End col-md-8-->

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
