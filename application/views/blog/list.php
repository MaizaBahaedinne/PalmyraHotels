<link href="<?php echo base_url() ?>assets/css/blog-1.css" rel="stylesheet">
<section class="parallax-window" data-parallax="scroll" data-image-src="<?php echo base_url() ?>assets\img\hotels\\GoldenBeach\GB30.jpg" >
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
         <div class="col-lg-12">
            <div class="box_style_1">
            	<div class="row">
               <?php foreach ($blogs as $blog ) { ?>
               <div class="post col-lg-4 ">
                  <a href="<?php echo base_url() ?>Blog/view/<?php echo $blog->blogId ?>">
                  	<div class="img_container" style="">
	                 <center> <img src="<?php echo base_url() ?>assets/img/blog/<?php echo $blog->image ?>" alt="<?php echo $blog->titre ?>" class="img-fluid"  style="min-height: 300px;max-height: 300px;" ></center>
	                 </div>
                  </a>
                  <div class="post_info clearfix">
                     <div class="post-left">
                        <ul>
                           <li><i class="icon-calendar-empty"></i> On <span><?php echo $blog->createdDTM ?></span>
                           </li>
                           </li>
                           <li><i class="icon-tags"></i> Tags <a href="#">Works</a>, 
                           </li>
                        </ul>
                     </div>
                  </div>
                  <h2><?php echo $blog->titre ?></h2>
                  <p>
                  <?php // strip tags to avoid breaking any html
                                                            $string = strip_tags( $blog->description );
                                                            if (strlen($string) > 50) {

                                                                // truncate string
                                                                $stringCut = substr($string, 0, 50);
                                                                $endPoint = strrpos($stringCut, ' ');

                                                                //if the string doesn't contain any space then it will cut without word basis.
                                                                $string = $endPoint? substr($stringCut, 0, $endPoint) : substr($stringCut, 0);
                                                                $string .= '...';
                                                            }
                                                            echo $string; ?>                     
                  </p>
                  <a href="<?php echo base_url() ?>Blog/view/<?php echo $blog->blogId ?>" class="btn_1">Read more</a>
               </div>
               <!-- end post -->
               <?php } ?>
           		</div>
            </div>
         </div>
         <!-- End col -->
         <!-- End aside -->
      </div>
      <!-- End row-->
   </div>
   <!-- End container -->
</main>
<!-- End main -->