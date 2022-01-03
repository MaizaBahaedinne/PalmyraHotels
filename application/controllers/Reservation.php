<?php if(!defined('BASEPATH')) exit('No direct script access allowed');

require APPPATH . '/libraries/BaseController.php';

/**
 * Class : User (UserController)
 * User Class to control all user related operations.
 * @author : Kishor Mali
 * @version : 1.1
 * @since : 15 November 2016
 */
class Reservation extends BaseController
{
    /**
     * This is default constructor of the class
     */
    public function __construct()
    {
        parent::__construct();
        $this->load->model('hotel_model');
        $this->load->model('reservation_model'); 
        $this->isLoggedIn();   
    }
    

    /**
     * This function used to load the first screen of the user
     */
    public function addNewReservation($searchId)
    {
        $newsInfo = array(  
                            'searchId' => $searchId,
                            'lastname' => $this->input->post('lastname'),
                            'code' => $this->input->post('code'),
                            'phone' => $this->input->post('phone'),
                            'email' => $this->input->post('email'), 
                            'message' => $this->input->post('message'), 

                            'createdDTM'=> date('Y-m-d H:i:s'), 
                            
                                );
    
                            $resultat = $this->contact_model->addNewContact($newsInfo);

                            
                            
                            
                            $this->global['pageTitle'] = 'Details';
                            $this->loadViews("contact/contact", $this->global, null , NULL);
    }




    

    
     

}