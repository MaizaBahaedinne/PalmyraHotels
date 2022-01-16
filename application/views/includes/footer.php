    <footer class="revealed">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h3>Need help?</h3>
                    <a href="tel://+21658465249" id="phone">+216 58 465 249</a>
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
                    <h3>Hotels</h3>
                    <ul>
                      
                         <?php foreach ($hotels as $hotel ) { ?> 
                                            <li> 
                                                <a href="<?php echo base_url() ?>Hotel/view/<?php echo $hotel->hotelId ?>" >
                                                    Palmyra <?php echo $hotel->name ?>
                                                        
                                                </a>
                                            </li>
                                        <?php } ?>
                    </ul>
                </div>
                <div class="col-md-2">
                    <h3>Settings</h3>
                    <div class="styled-select">
                        <select name="lang" id="lang">
                            <option value="English" selected="">English</option>
                           <!-- <option value="French">French</option>
                            <option value="Spanish">Spanish</option>
                            <option value="Russian">Russian</option> -->
                        </select>
                    </div>
                    <div class="styled-select">
                        <select name="currency" id="currency">
                            <option value="USD" selected="">DT</option>
                          <!--  <option value="USD" selected="">DT</option>
                            <option value="EUR">EUR</option>
                            <option value="GBP">GBP</option>
                            <option value="RUB">RUB</option> -->
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
    <<div class="modal fade" id="signinForm" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            
               <div id="signinForm" >
             
                    <div id="ack" style="display : none " class="alert alert-danger" role="alert" ></div>

                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" name="email" id="login-email">
                        
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" name="password" id="password" >
                        
                    </div>
                    <div class="clearfix add_bottom_15">
                        <div class="checkboxes float-left">
                            <label class="container_check">Remember me
                              <input type="checkbox">
                              <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="float-right"><a  data-toggle="modal" data-target="#passwordForm" >Forgot Password?</a></div>
                    </div>
                    <div class="text-center">
                        <button  class="btn_login" id="btn_login"> Log In </button>
                    </div>
               
                <script type="text/javascript">
                      $(document).ready(function (){
                              $("#btn_login").click(function(){
                                    var username = $("#login-email").val().trim();
                                    var password = $("#password").val().trim();

                                    if( username != "" && password != "" ){
                                        $.ajax({
                                            url:'<?php echo base_url() ?>Login/loginMe',
                                            type:'post',
                                            data:{email:username,password:password},
                                            success:function(response){
                                                var msg = "";
                                                console.log (response) ; 
                                                if(response == 1 ){
                                                    location.reload() ;
                                                }else{
                                                    msg = "Invalid username and password!";
                                                }
                                                $("#ack").show().html(msg);
                                            }
                                        });
                                    }
                                });
                        });
                </script>
                <div class="text-center">
                    Don’t have an account? <a data-toggle="modal"  data-target=".bd-example-modal-lg" >Sign up</a>
                </div>
                </div>
  
                <div class="modal fade" id="passwordForm"  tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">              

                       
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
                      </div>
                    </div>
                </div>

                <div class="modal fade bd-example-modal-lg"  id="signupForm" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Signin to PalmyraHotels.tn</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                          <div class="modal-body">     
                    
                        <form >
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>First name</label>
                                        <input type="text" class=" form-control" placeholder="first name">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Last name</label>
                                        <input type="text" class=" form-control" placeholder="last name">
                                    </div>
                                </div>
                                <div class="col-md-12">    
                                    <div class="form-group">
                                        <label>Country</label>
                                        <input type="country" class=" form-control" placeholder="country">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group ">
                                        
                                            <label>Code Country</label>
                                            <input  type="number" class=" form-control" placeholder="code country">
                                    </div>
                                </div>
                                <div class="col-md-6">
                               
                             <div class="form-group">
                                <label>mobile</label>
                                    <input type="tel" class=" form-control" placeholder="mobile">
                            </div>
                            </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label>Email</label>
                                        <input type="email" class=" form-control" placeholder="Email">
                                    </div>
                            </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Password</label>
                                        <input type="password" class=" form-control" id="password1" placeholder="Password">
                                    </div>
                            </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Confirm password</label>
                                        <input type="password" class=" form-control" id="password2" placeholder="Confirm password">
                                    </div>
                            </div>
                            </div>
                            <div id="pass-info" class="clearfix"></div>
                            <button class="btn_full">Create an account</button>
                        </form>
                    

                      
                  <div class="modal-footer">
                        *required
                  </div>
                </div>
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
    $(function() {
      'use strict';
      $('input[name="dates"]').daterangepicker({
          autoUpdateInput: false,
          minDate:new Date(),
          locale: {
              cancelLabel: 'Clear'
          }
      });
      $('input[name="dates"]').on('apply.daterangepicker', function(ev, picker) {
          $(this).val(' from ' + picker.startDate.format('YYYY-MM-DD') + ' to ' + picker.endDate.format('YYYY-MM-DD'));
          $('input[name="checkin"]').val(picker.startDate.format('YYYY-MM-DD')) ;
          $('input[name="checkout"]').val(picker.endDate.format('YYYY-MM-DD')) ;


      });
      $('input[name="dates"]').on('cancel.daterangepicker', function(ev, picker) {
          $(this).val('');
      });
    });
    </script>
    
    <!-- Input quantity  -->
    <script src="js/input_qty-1.js"></script>

    <!-- Autocomplete -->
    <script>
    function initMap() {
      var input = document.getElementById('autocomplete');
      var autocomplete = new google.maps.places.Autocomplete(input);
     
      autocomplete.addListener('place_changed', function() {
        var place = autocomplete.getPlace();
        if (!place.geometry) {
          window.alert("Autocomplete's returned place contains no geometry");
          return;
        }

        var address = '';
        if (place.address_components) {
          address = [
            (place.address_components[0] && place.address_components[0].short_name || ''),
            (place.address_components[1] && place.address_components[1].short_name || ''),
            (place.address_components[2] && place.address_components[2].short_name || '')
          ].join(' ');
        } 
      });
    }
    </script>
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
    

</html>