<?php if(!defined('BASEPATH')) exit('No direct script access allowed');

require APPPATH . '/libraries/BaseController.php';

/**
 * Class : User (UserController)
 * User Class to control all user related operations.
 * @author : Kishor Mali
 * @version : 1.1
 * @since : 15 November 2016
 */
class Avis extends BaseController
{
    /**
     * This is default constructor of the class
     */
    public function __construct()
    {
        parent::__construct();
        $this->load->model('hotel_model');
        $this->load->model('avis_model'); 
        $this->load->model('user_model');  
        $this->isLoggedIn();   
    }
    

    /**
     * This function used to load the first screen of the user
     */
    public function addNewAvisHotel()
    {
            $avisInfo = array(  
                            'hotelId' => $this->input->post('hotelId'),
                            'service' => $this->input->post('service'),
                            'price' => $this->input->post('price'),
                            'cleanliness' => $this->input->post('cleanliness'), 
                            'location' => $this->input->post('location'), 
                            'review' => $this->input->post('review'), 
                            'createdBy' => $this->vendorId ,
                            'createdDTM'=> date('Y-m-d H:i:s'), 
                              );
    
            $resultat = $this->avis_model->addNewAvis($avisInfo);
            redirect('Hotel/view/'.$this->input->post('hotelId') ) ;
    }

 

    

    
     

}