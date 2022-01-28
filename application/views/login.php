 <main>
    <section id="hero" class="login">
    	<div class="container">
        	<div class="row justify-content-center">
            	<div class="col-xl-4 col-lg-5 col-md-6 col-sm-8">
                	<div id="login">
                    		<div class="text-center"><img src="<?php echo base_url() ?>assets/img/logo_sticky-1.png" alt="Image" width="200" ></div>
                            <hr>
                             <?php if( !empty($this->session->flashdata('error')) ) {?>
                                <div class="alert alert-danger"> <?php echo $this->session->flashdata('error');?></div>
                            <?php } ?>
                             <?php if( !empty($this->session->flashdata('success')) ) {?>
                                <div class="alert alert-success"> <?php echo $this->session->flashdata('success');?></div>
                            <?php } ?>
                            
                                
                                <div id="ack" class="alert alert-danger" style="display:none"></div>
							
                                <div class="form-group">
                                    <label>Username</label>
                                    <input  type="email"  id="email"  class=" form-control " placeholder="E-mail" required>
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input type="password" id="password"  class=" form-control" placeholder="Password"> 
                                </div>
                                <p class="small">
                                    <a href="#">Forgot Password?</a>
                                </p>
                                <button id="btn_login" class="btn_full">Sign in</button>
                                <a href="<?php echo base_url() ?>Register" class="btn_full_outline">Register</a>
                            
                        </div>
                </div>
            </div>
        </div>
    </section>
	</main>


    <script type="text/javascript">
                      $(document).ready(function (){
                              $("#btn_login").click(function(){
                                    var username = $("#email").val().trim();
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
                                                    msg = "Invalid email and password!";
                                                     $("#ack").show().html(msg);
                                                }
                                               
                                            }
                                        });
                                    }
                                });
                        });
                </script>