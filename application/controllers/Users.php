<?php if(!defined('BASEPATH')) exit('No direct script access allowed');

require APPPATH . '/libraries/BaseController.php';



class Users extends BaseController {

    public function __construct()
    {
        parent::__construct();
        $this->load->model('user_model');
       
        
        $this->isLoggedIn();    
    }
    
 	function activate($userId)
    	{

              $userInfo = array(  'mailValid'=>date('Y-m-d H:i:s') , 
                                  'isDeleted'=>0 , );
              
              $this->user_model->editUser($userInfo , $userId) ;

          $this->session->set_flashdata('success', 'You account has been activated');
    	  $this->global['pageTitle'] = 'Activate';
            redirect("Login") ;  
             
   	 }   


        function register()
        {

          $this->global['pageTitle'] = 'Register';

          $this->loadViews("register" , $this->global, null  , NULL ) ;
             
        }  
        		
    function addNewUser()
    	{

                $userInfo = array(  'email'=>$this->input->post('email'), 
                					'password'=>getHashedPassword($this->input->post('password')), 
                					'roleId'=>4, 

                					'name'=> $this->input->post('first_name').' '.$this->input->post('last_name'),
                					'last_name'=>$this->input->post('last_name'),
                					'first_name'=> $this->input->post('first_name'),


                					'country_code'=> $this->input->post('country_code'),
                					'phone'=> $this->input->post('phone'),
                					

                					'country'=> $this->input->post('country'),
                					'birthday'=> $this->input->post('birthday'),
                                    'sexe'=> $this->input->post('sexe'),
                                    
                                    'address'=>$this->input->post('address'),
                                    'zip'=>$this->input->post('zip'), 

                                     'isDeleted'=>1 , 

                                    'createdBy'=>$this->vendorId, 
                                    'createdDtm'=>date('Y-m-d H:i:s'));
                if( !empty( $this->user_model->checkEmail($this->input->post('email'))) )
                { 

                	$this->session->set_flashdata('error', 'User creation failed : Email exist');
                	redirect('Register');
                }
                else
                {

                	$result = $this->user_model->addNewUser($userInfo);
                
                    if($result > 0)
                    {
                       
                     
                     $mail  = $this->send_mail($this->input->post('email')."", 
                                "Account creation for ".$this->input->post('first_name').' '.$this->input->post('last_name')  , "" , 
                                "<h2>Welcome to PalmyraHotels.tn </h2>
                                <br><br>
                                    congratulation !<br>
                                    Your account has been created
                                    <br>
                                    To activate your account open this <a href='".base_url()."Users/activate/".$result."' >link</a>    <br>
                                                               
                                    <b>email : </b>".$this->input->post('email')."<br>
                                    <b>Password : </b>".$this->input->post('password')."

                                <br>
                                <hr>
                                
                                Best,
                                <br>
                                Palmyra Hotels team" )   ;
                    
                   
                        
                        
                            if( $mail ) 
                            { 
                                redirect('/');
                            }
                            else
                            {
                               $this->session->set_flashdata('error', 'User creation failed 100');
                               redirect('Register') ;
                            }

                        
                    }
                    else
                    {
                        $this->session->set_flashdata('error', 'User creation failed 200');
                        redirect('Register');
                    }

                }



                
                
                
          
        
    }   



	

		
		
		
}