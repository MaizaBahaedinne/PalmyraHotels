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
        $this->load->model('user_model');  
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

           

                $prices = $this->hotel_model->roomMsPrice(
                        $this->input->post('hotelId') ,  
                        $this->input->post('checkin'), 
                        $this->input->get('pension')   ) ;
                
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
                      
                    }   
                }
    }
      redirect('Reservation/CompletReservationDetails/'.$resultat) ;
}

    public function CompletReservationDetails($reservationId) 
     {
            $this->global['pageTitle'] = 'Details';
            $data['reservation'] =  $this->reservation_model->reservation($reservationId);
    if( (!empty($data['reservation'])) && $data['reservation']->createdBy == $this->vendorId  ) { 

            $data['reservation']->details =  $this->reservation_model->reservationDetails($reservationId);
            foreach ($data['reservation']->details as $room ) 
                {       
                    $room->prices = $this->hotel_model->roomMsPrice($data['reservation']->hotelId ,  $data['reservation']->checkin ,  $data['reservation']->pension   ) ;
                    $room->room = $this->hotel_model->Room( $room->roomId ) ;
                }

            $data['hotel'] =  $this->hotel_model->hotel($data['reservation']->hotelId); 

            foreach ($data['reservation']->details as $detail ) 
            {
                   $detail->options  = $this->hotel_model->roomOptionsListing(  str_replace("\"", "", $detail->options )  )  ;
            }
      $this->loadViews("reservation/details", $this->global, $data , NULL);
         }else{
                 $this->global['pageTitle'] = '404';
             $this->loadViews("404", $this->global, null , NULL); 
         }
            

     }




         public function  BookNow       ($reservationId) 
     {
            
            $data['reservation'] =  $this->reservation_model->reservation($reservationId);
            $data['reservation']->client =  $this->user_model->user($data['reservation']->createdBy );
            $data['reservation']->hotel =  $this->hotel_model->hotel($data['reservation']->hotelId );
            $data['reservation']->details =  $this->reservation_model->reservationDetails($reservationId);

            $data['reservation']->details =  $this->reservation_model->reservationDetails($reservationId);
                foreach ($data['reservation']->details as $detail ) 
                    {       
                        $detail->prices = $this->hotel_model->roomMsPrice($data['reservation']->hotelId ,  $data['reservation']->checkin ,  $data['reservation']->pension   ) ;
                        $detail->room = $this->hotel_model->Room( $detail->roomId ) ;
                        $detail->opts  = $this->hotel_model->roomOptionsListing(  str_replace("\"", "", $detail->options )  )  ;

                    }
            
            
           
            foreach ($data['reservation']->details as $room ) 
                {       
                    
                       $reservationInfo1 = array(  
                        'guests' =>  json_encode($this->input->post("guest".$room->detailId ) )  ,
                        'adult' =>  $this->input->post("adult".$room->detailId )  ,
                        'children'  =>  $this->input->post("children".$room->detailId )  ,
                        'price'  =>  $this->input->post("rommP".$room->detailId )  ,
                        'createdBy' => $this->vendorId ,
                        'createdDTM'=> date('Y-m-d H:i:s'), 
                      );

                    

                       $this->reservation_model->editreservationDetails($reservationInfo1 , $room->detailId);   
                }


                $reservationInfo = array(  
                        'adult' =>  $this->input->post("TTadults")  ,
                        'children'  =>  $this->input->post("TTchilds" )  ,
                        'price'  =>  $this->input->post("TTprice")  ,
                        'statut' =>  1 ,
                        'createdBy' => $this->vendorId ,
                        'createdDTM'=> date('Y-m-d H:i:s'), 
                      );
                 $this->reservation_model->editreservation($reservationInfo , $reservationId); 

                 $content =
                 "Hello ".$data['reservation']->client->name.", <br><br> Welcome to palmyra Hotels, Your booking request N".$data['reservation']->reservationId." for the hotel <b>".$data['reservation']->hotel->name."</b> has been sent to the administration <br> To confirm your order please contact us at <a href='tel:+216".$data['reservation']->hotel->phone."' >+216".$data['reservation']->hotel->phone."</a>  
                <br><br>
                <hr>
                
                
                <br>
                ".$this->global['sig'] ;

               if( $this->send_mail(
                    $data['reservation']->client->email  , 
                    "Booking N".$data['reservation']->reservationId." [Palmyra ".$data['reservation']->hotel->name."] " ,
                     ""  ,
                    $content ,  "booking@palmyrahotels.tn" ,  
                    "Booking2022" , 
                    $data['reservation']->hotel->mail ) ) 
                 { 


                    $contenthotel =
                 "Hello Palmyra ".$data['reservation']->hotel->name.", <br><br> a new booking request N ".$data['reservation']->reservationId." for your hotel has been sent to you. 
                 <br>Please accept or decline the order in this <a href='admin.palmyrahotels.tn/Confirmation/view/".$data['reservation']->reservationId."?resa=".$data['reservation']->hotel->mailresa."' >link</a>  .
                    
                <br><br>

                <hr>
                
               
                <br>
                ". $this->global['sig'] ;

                        $this->send_mail(
                    $data['reservation']->hotel->mailresa  , 
                    "Booking N".$data['reservation']->reservationId." [Palmyra ".$data['reservation']->hotel->name."] " ,
                     ""  ,
                    $contenthotel ,  "booking@palmyrahotels.tn" ,  
                    "Booking2022" , 
                    "admin@palmyrahotels.tn" );


                    redirect('Reservation/mybookings');
                 }
     
     }


    

     public function mybookings() 
     {
            

            if ( $this->vendorId > 0 ) {
            $data['reservationC'] =   $this->reservation_model->myReservationListing($this->vendorId , '0,1,2,3' );
           // $data['reservationC'] =   $this->reservation_model->myReservationListing($this->vendorId , '2' );
            $data['user'] =   $this->user_model->user($this->vendorId );
            
            $this->global['pageTitle'] = 'My Bookings';
            $this->loadViews("reservation/mybookings", $this->global, $data , NULL);
            }else{
                 $this->global['pageTitle'] = '404';
             $this->loadViews("404", $this->global, null , NULL); 
         }
     }


    public function invoic($reservationId) 
     {      
            $data['reservation'] =  $this->reservation_model->reservation($reservationId);
            
            
            if( (!empty($data['reservation'])) && ($data['reservation']->createdBy == $this->vendorId || $this->role == 1 )  ) { 

            $this->global['pageTitle'] = 'My Bookings';

            $data['reservation'] =  $this->reservation_model->reservation($reservationId);

            $data['reservation']->details =  $this->reservation_model->reservationDetails($reservationId);
                foreach ($data['reservation']->details as $detail ) 
                    {       
                        $detail->prices = $this->hotel_model->roomMsPrice($data['reservation']->hotelId ,  $data['reservation']->checkin ,  $data['reservation']->pension   ) ;
                        $detail->room = $this->hotel_model->Room( $detail->roomId ) ;
                        $detail->opts  = $this->hotel_model->roomOptionsListing(  str_replace("\"", "", $detail->options )  )  ;

                    }
            $data['reservation']->client = $this->user_model->user($data['reservation']->createdBy);
             $data['hotel'] =  $this->hotel_model->hotel($data['reservation']->hotelId);
            
           
            $data['user'] =   $this->user_model->user($this->vendorId );
            
            $this->loadViews("reservation/facture", $this->global, $data , NULL);
            }else{
                 $this->global['pageTitle'] = '404';
             $this->loadViews("404", $this->global, null , NULL); }
            }

    

    
     

}