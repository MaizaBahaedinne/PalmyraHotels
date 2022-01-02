    <footer class="revealed">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h3>Need help?</h3>
                    <a href="tel://004542344599" id="phone">+45 423 445 99</a>
                    <a href="mailto:help@citytours.com" id="email_footer">contact@palmyrahotels.tn</a>
                </div>
                <div class="col-md-3">
                    <h3>About</h3>
                    <ul>
                        <li><a href="<?php echo base_url() ?>About">About us</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="<?php echo base_url() ?>Login">Login</a></li>
                        <li><a href="#">Register</a></li>
                         <li><a href="#">Terms and condition</a></li>
                    </ul>
                </div>
                <div class="col-md-3">
                    <h3>Discover</h3>
                    <ul>
                        <li><a href="#">Community blog</a></li>
                        <li><a href="#">Tour guide</a></li>
                        <li><a href="#">Wishlist</a></li>
                         <li><a href="#">Gallery</a></li>
                    </ul>
                </div>
                <div class="col-md-2">
                    <h3>Settings</h3>
                    <div class="styled-select">
                        <select name="lang" id="lang">
                            <option value="English" selected="">English</option>
                            <option value="French">French</option>
                            <option value="Spanish">Spanish</option>
                            <option value="Russian">Russian</option>
                        </select>
                    </div>
                    <div class="styled-select">
                        <select name="currency" id="currency">
                            <option value="USD" selected="">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                            <option value="RUB">RUB</option>
                        </select>
                    </div>
                </div>
            </div><!-- End row -->
            <div class="row">
                <div class="col-md-12">
                    <div id="social_footer">
                        <ul>
                            <li><a  target="_blank" href="https://www.facebook.com/palmyrahotels.tn" ><i class="icon-facebook"></i></a></li>
                 
                        </ul>
                        <p>Palmyra Hotels © 2022 Made by Bahaedinne Maiza </p>
                    </div>
                </div>
            </div><!-- End row -->
        </div><!-- End container -->
    </footer><!-- End footer -->

    <div id="toTop"></div><!-- Back to top button -->
    
    <!-- Search Menu -->
    <div class="search-overlay-menu">
        <span class="search-overlay-close"><i class="icon_set_1_icon-77"></i></span>
        <form role="search" id="searchform" method="get">
            <input value="" name="q" type="search" placeholder="Search...">
            <button type="submit"><i class="icon_set_1_icon-78"></i>
            </button>
        </form>
    </div><!-- End Search Menu -->
    
    <!-- Sign In Popup -->
    <div id="sign-in-dialog" >
        <div class="small-dialog-header">
            <h3>Sign In</h3>
        </div>
        
            <div   >
               <div id="signinForm" >
                <form action="<?php echo base_url() ?>Login/loginMe" method="post" >
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" name="email" id="email">
                        <i class="icon_mail_alt"></i>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" name="password" id="password" >
                        <i class="icon_lock_alt"></i>
                    </div>
                    <div class="clearfix add_bottom_15">
                        <div class="checkboxes float-left">
                            <label class="container_check">Remember me
                              <input type="checkbox">
                              <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="float-right"><a id="forgot">Forgot Password?</a></div>
                    </div>
                    <div class="text-center">
                        <input type="submit" value="Log In" class="btn_login">
                    </div>
                </form>
                <div class="text-center">
                    Don’t have an account? <a id="signupBtn" >Sign up</a>
                </div>
                </div>
                

                <div id="passwordForm" style="display:none;">
                    <form>
                    <div class="form-group">
                        <label>Please confirm login email below</label>
                        <input type="email" class="form-control" name="email_forgot" id="email_forgot">
                        <i class="icon_mail_alt"></i>
                    </div>

                    <p>You will receive an email containing a link allowing you to reset your password to a new preferred one.</p>
                    <div class="text-center"><input type="submit" value="Reset Password" class="btn_1"></div>
                    </form>
                </div>

                <div id="signupForm"  style="display:none;"  >
                    <form >
                        <div class="form-group">
                            <label>First name</label>
                            <input type="text" class=" form-control" placeholder="first name">
                        </div>
                        <div class="form-group">
                            <label>Last name</label>
                            <input type="text" class=" form-control" placeholder="last name">
                        </div>
                        <div class="form-group">
                            <label>Country</label>
                            <input type="country" class=" form-control" placeholder="country">
                        </div>
                        <div class="form-group ">
                            
                                <label>Code Country</label>
                                <input type="code" class=" form-control" placeholder="code country">
                           
                         <div class="form-group">
                            <label>mobile</label>
                                <input type="mobile" class=" form-control" placeholder="mobile">
                        </div>
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" class=" form-control" placeholder="Email">
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class=" form-control" id="password1" placeholder="Password">
                        </div>
                        <div class="form-group">
                            <label>Confirm password</label>
                            <input type="password" class=" form-control" id="password2" placeholder="Confirm password">
                        </div>
                        <div id="pass-info" class="clearfix"></div>
                        <button class="btn_full">Create an account</button>
                    </form>
                </div>

            </div>
            <script type="text/javascript">
                    $("#signupBtn").click(function() { $("#signinForm").hide() ; $("#signupForm").hide() ; $("#signupForm").show() ;  }) ; 
                    $("#forgot").click(function() { $("#signinForm").hide() ; $("#signupForm").hide() ;  $("#passwordForm").show() ;  }) ; 

            </script>
        
        <!--form -->
    </div>
    <!-- /Sign In Popup -->

    <!-- Common scripts -->
  
    <script src="<?php echo base_url() ?>assets/js/common_scripts_min-1.js"></script>
    <script src="<?php echo base_url() ?>assets/js/functions-1.js"></script>

     <!-- SWITCHER  -->
    <script src="<?php echo base_url() ?>assets/js/switcher-1.js"></script>
    <script src="<?php echo base_url() ?>assets/js/jquery.sliderPro.min-1.js"></script>
        
    <script type="text/javascript">
        $(document).ready(function ($) {
            $('#Img_carousel').sliderPro({
                width: 960,
                height: 500,
                fade: true,
                arrows: true,
                buttons: false,
                fullScreen: false,
                smallSize: 500,
                startSlide: 0,
                mediumSize: 1000,
                largeSize: 3000,
                thumbnailArrows: true,
                autoplay: false
            });
        });
    </script>
    <script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyAUQKuq-IHkzCt4VoGq2z4XYJ_ip7ZRkws"></script>
    <script src="<?php echo base_url() ?>assets/js/map-1.js"></script>
    <script src="<?php echo base_url() ?>assets/js/infobox-1.js"></script>

    <script>
        $('.carousel-thumbs-2').owlCarousel({
        loop:false,
        margin:5,
        responsiveClass:true,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4,
                nav:false
            }
        }
    });
    </script>

    <!-- Specific scripts -->
    <script>
        const date = new Date();
        date.setDate(date.getDate() + 1);

    $(function() {
      $('input.date-pick').daterangepicker({
          autoUpdateInput: true,
          singleDatePicker: true,
          autoApply: true,
          minDate:new Date(),
          showCustomRangeLabel: false,
          locale: {
            format: 'YYYY-MM-DD'
          }
          }, function(start, end, label) {
          console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
        });

       $('input.date-pick-out').daterangepicker({
          autoUpdateInput: true,
          singleDatePicker: true,
          autoApply: true,
          minDate:date ,
          showCustomRangeLabel: false,
          locale: {
            format: 'YYYY-MM-DD'
          }
          }, function(start, end, label) {
          console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')');
        });

        });



    </script>
    <script>
        $('input.time-pick').timepicker({
            minuteStep: 15,
            showInpunts: false
        })
    </script>
    
    <script src="<?php echo base_url() ?>assets/js/jquery.ddslick-1.js"></script>
    <script>
        $("select.ddslick").each(function() {
            $(this).ddslick({
                showSelectedHTML: true
            });
        });
    </script>   



    
  </body>
</html>