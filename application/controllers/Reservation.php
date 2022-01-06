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
           
           
            $rooms = $this->hotel_model->hotelRoomsListing($this->input->post('hotelId') ) ;
            foreach ($rooms as $room ) 
            {  

            echo "<br> <b>Romm </b>".$room->titre ; 

                $prices = $this->hotel_model->roomMsPrice(
                        $this->input->post('hotelId') ,  
                        $this->input->post('checkin'), 
                        $this->input->get('pension')   ) ;
                echo "<br> quantité ".$this->input->post("quantity_".$room->roomId) ;
                if (  $this->input->post("quantity_".$room->roomId) > 0 )
                {   
                    
                    for ($i=0; $i <  $this->input->post('quantity_'.$room->roomId) ; $i++) 
                    { 
                       $reservationInfo1 = array(  
                        'reservationId' => $resultat ,
                        'roomId' => $room->roomId  ,
                        'adult' =>  $room->capacity  ,
                        'createdBy' => $this->vendorId ,
                        'createdDTM'=> date('Y-m-d H:i:s'), 
                      );
                      $r = $this->reservation_model->addNewReservationDetaiils($reservationInfo1); 
                      echo   "<br>".$r." saved >>>>>>> " ;
                    }   
                }
    }
      redirect('Reservation/CompletReservationDetails/'.$resultat) ;
}

    public function CompletReservationDetails($reservationId) 
     {
            $this->global['pageTitle'] = 'Details';
            $data['reservation'] =  $this->reservation_model->reservation($reservationId);
            $data['reservation']->details =  $this->reservation_model->reservationDetails($reservationId);
            foreach ($data['reservation']->details as $room ) 
                {       
                    $room->prices = $this->hotel_model->roomMsPrice($data['reservation']->hotelId ,  $data['reservation']->checkin ,  $data['reservation']->pension   ) ;
                    $room->room = $this->hotel_model->Room( $room->roomId ) ;
                }

            $data['hotel'] =  $this->hotel_model->hotel($data['reservation']->hotelId); 
            foreach ($data['reservation']->details as $detail ) {
                $detail->options  = $this->hotel_model->roomOptionsListing(  str_replace("\"", "", $detail->options )  )  ;
            }
      $this->loadViews("reservation/details", $this->global, $data , NULL);
     }

 

    

    
     

}