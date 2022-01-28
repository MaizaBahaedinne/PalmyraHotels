<?php if(!defined('BASEPATH')) exit('No direct script access allowed');

require APPPATH . '/libraries/BaseController.php';



class Users extends BaseController {

    public function __construct()
    {
        parent::__construct();
        $this->load->model('user_model');
       
        
        $this->isLoggedIn();    
    }
    
 	function register()
    	{

    	  $this->global['pageTitle'] = 'Register';
          $this->loadViews("register", $this->global, null, NULL);   
             
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
                if( !empty( $this->user_model->checkEmail($this->input->post('email'))) ){ 

                	$this->session->set_flashdata('error', 'User creation failed : Email exist');
                	redirect('Register');
                }
                else
                {

                	$result = $this->user_model->addNewUser($userInfo);
                
                if($result > 0)
                {
                   redirect('Login');
                  
                   $this->send_mail($this->input->post('email')."; admin@palmyrahotels.tn", 
                            "Welcome to PalmyraHotels.tn"  , "" , 
                            "<h2>Welcome to PalmyraHotels.tn </h2>
                            <br><br>
                                Your account has been created
                                name : ".$this->input->post('name')."<br>
                               
                                email : ".$this->input->post('email')."<br>
                                Password : <br>".$this->input->post('password')."<br>

                            <br>
                            <hr>
                            
                            Best,
                            <br>
                            The Palmyra Hotels team

                            " )   ;

                   $this->session->set_flashdata('sucess', 'Your account has been createdplease check your email');
                }
                else
                {
                    $this->session->set_flashdata('error', 'User creation failed');
                }

                }



                
                
                
          
        
    }   



	

		
		
		
}