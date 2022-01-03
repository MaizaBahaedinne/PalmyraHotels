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
        $reservationInfo = array(  
                            'searchId' => $searchId,


                            'hotelId' => $this->input->post('hotelId'),
                            'checkin' => $this->input->post('checkin'),
                            'checkout' => $this->input->post('checkout'),
                            'room' => $this->input->post('room'), 
                            'adult' => $this->input->post('adult'), 
                            'children' => $this->input->post('children'), 
                            'pension'   => $this->input->post('pension'), 
                            'nights'    => $this->input->post('nights'), 
                            'createdBy' => $this->vendorId ,
                            'createdDTM'=> date('Y-m-d H:i:s'), 
                            
                                );
    
                            $resultat = $this->reservation_model->addNewReservation($reservationInfo);

                            $data['hotel'] =  $this->input->post('hotelId') ;
                            
                            
                            $this->global['pageTitle'] = 'Details';
                            $this->loadViews("reservation/details", $this->global, null , NULL);
    }




    

    
     

}