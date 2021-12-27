<?php if(!defined('BASEPATH')) exit('No direct script access allowed');

require APPPATH . '/libraries/BaseController.php';

/**
 * Class : User (UserController)
 * User Class to control all user related operations.
 * @author : Kishor Mali
 * @version : 1.1
 * @since : 15 November 2016
 */
class Contact extends BaseController
{
    /**
     * This is default constructor of the class
     */
    public function __construct()
    {
        parent::__construct();
        $this->load->model('hotel_model');
        $this->load->model('contact_model'); 
        $this->isLoggedIn();   
    }
    


    
    
    /**
     * This function used to load the first screen of the user
     */
    public function index()
    {

      
                     
        
        $this->global['pageTitle'] = 'Contact';
        $this->loadViews("contact/contact", $this->global, null , NULL);
    }
    


    
    /**
     * This function used to load the first screen of the user
     */
    public function addNewMessage()
    {
        
        $this->global['pageTitle'] = 'Contact';
        $this->loadViews("contact/contact", $this->global, null , NULL);
    }



        /**
     * This function used to load the first screen of the user
     */
    public function newsletter()
    {
         $newsInfo = array(
                            'email' => $this->input->post('email'), 
                            
                            
                            'createdDTM'=> date('Y-m-d H:i:s'), 
                            
                                );
    
                            $resultat = $this->contact_model->addNewsletter($newsInfo);


                            $this->session->set_Flashdata ('success' , 'You are subscribed');
                            redirect('/') ;  

    }
    

    
     

}