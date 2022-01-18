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
                                    
                                    'address'=>$this->input->post('address'),
                                    'zip'=>$this->input->post('zip'), 

                                    'createdBy'=>$this->vendorId, 
                                    'createdDtm'=>date('Y-m-d H:i:s'));
                if( !empty( $this->user_model->checkEmail($this->input->post('email'))) ){ 

                	$this->session->set_flashdata('error', 'User creation failed');
                	redirect('Register');
                }
                else
                {

                	$result = $this->user_model->addNewUser($userInfo);
                
                if($result > 0)
                {
                   redirect('Login');
                   $this->session->set_flashdata('sucess', 'User creation failed');
                }
                else
                {
                    $this->session->set_flashdata('error', 'User creation failed');
                }

                }



                
                
                
          
        
    }   



	

		
		
		
}