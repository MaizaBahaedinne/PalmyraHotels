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


    $this->sig = 'Best regards , Cordialement , أطيب التحيات ,
                <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;">
                   <tbody>
                      <tr>
                         <td>
                            <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;">
                               <tbody>
                                  <tr>
                                     <td style="vertical-align: top;">
                                        <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;">
                                           <tbody>
                                              <tr>
                                                 <td class="sc-TOsTZ kjYrri" style="text-align: center;"><img src="https://palmyrahotels.tn/assets/img/logopage.png" role="presentation" width="130" class="sc-cHGsZl bHiaRe" style="max-width: 130px; display: block;"></td>
                                              </tr>
                                              <tr>
                                                 <td height="30"></td>
                                              </tr>
                                              <tr>
                                                 <td style="text-align: center;">
                                                    <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial; display: inline-block;">
                                                       <tbody>
                                                          <tr style="text-align: center;">
                                                             <td><a href="https://www.facebook.com/palmyrahotels.tn" color="#F0B942" class="sc-hzDkRC kpsoyz" style="display: inline-block; padding: 0px; background-color: rgb(240, 185, 66);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/facebook-icon-2x.png" alt="facebook" color="#F0B942" height="24" class="sc-bRBYWo ccSRck" style="background-color: rgb(240, 185, 66); max-width: 135px; display: block;"></a></td>
                                                             <td width="5">
                                                                <div></div>
                                                             </td>
                                                             <td><a href="https://www.instagram.com/palmyrahotels.tn/" color="#F0B942" class="sc-hzDkRC kpsoyz" style="display: inline-block; padding: 0px; background-color: rgb(240, 185, 66);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/instagram-icon-2x.png" alt="instagram" color="#F0B942" height="24" class="sc-bRBYWo ccSRck" style="background-color: rgb(240, 185, 66); max-width: 135px; display: block;"></a></td>
                                                             <td width="5">
                                                                <div></div>
                                                             </td>
                                                          </tr>
                                                       </tbody>
                                                    </table>
                                                 </td>
                                              </tr>
                                           </tbody>
                                        </table>
                                     </td>
                                     <td width="46">
                                        <div></div>
                                     </td>
                                     <td style="padding: 0px; vertical-align: middle;">
                                        <h3 color="#000000" class="sc-fBuWsC eeihxG" style="margin: 0px; font-size: 18px; color: rgb(0, 0, 0);"><span>Palmyra</span><span>&nbsp;</span><span>Hotels</span></h3>
                                        <p color="#000000" font-size="medium" class="sc-fMiknA bxZCMx" style="margin: 0px; color: rgb(0, 0, 0); font-size: 14px; line-height: 22px;"><span>Responsable Marketing digital</span></p>
                                        <p color="#000000" font-size="medium" class="sc-dVhcbM fghLuF" style="margin: 0px; font-weight: 500; color: rgb(0, 0, 0); font-size: 14px; line-height: 22px;"><span>Marketing</span><span>&nbsp;|&nbsp;</span><span>Palmyra Hotels</span></p>
                                        <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial; width: 100%;">
                                           <tbody>
                                              <tr>
                                                 <td height="30"></td>
                                              </tr>
                                              <tr>
                                                 <td color="#f0b942" direction="horizontal" height="1" class="sc-jhAzac hmXDXQ" style="width: 100%; border-bottom: 1px solid rgb(240, 185, 66); border-left: none; display: block;"></td>
                                              </tr>
                                              <tr>
                                                 <td height="30"></td>
                                              </tr>
                                           </tbody>
                                        </table>
                                        <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;">
                                           <tbody>
                                              <tr height="25" style="vertical-align: middle;">
                                                 <td width="30" style="vertical-align: middle;">
                                                    <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;">
                                                       <tbody>
                                                          <tr>
                                                             <td style="vertical-align: bottom;"><span color="#f0b942" width="11" class="sc-jlyJG bbyJzT" style="display: block; background-color: rgb(240, 185, 66);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/phone-icon-2x.png" color="#f0b942" width="13" class="sc-iRbamj blSEcj" style="display: block; background-color: rgb(240, 185, 66);"></span></td>
                                                          </tr>
                                                       </tbody>
                                                    </table>
                                                 </td>
                                                 <td style="padding: 0px; color: rgb(0, 0, 0);"></td>
                                              </tr>
                                              <tr height="25" style="vertical-align: middle;">
                                                 <td width="30" style="vertical-align: middle;">
                                                    <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;">
                                                       <tbody>
                                                          <tr>
                                                             <td style="vertical-align: bottom;"><span color="#f0b942" width="11" class="sc-jlyJG bbyJzT" style="display: block; background-color: rgb(240, 185, 66);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/email-icon-2x.png" color="#f0b942" width="13" class="sc-iRbamj blSEcj" style="display: block; background-color: rgb(240, 185, 66);"></span></td>
                                                          </tr>
                                                       </tbody>
                                                    </table>
                                                 </td>
                                                 <td style="padding: 0px;"><a href="mailto:contact@palmyrahotels.tn" color="#000000" class="sc-gipzik iyhjGb" style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"><span>contact@palmyrahotels.tn</span></a></td>
                                              </tr>
                                              <tr height="25" style="vertical-align: middle;">
                                                 <td width="30" style="vertical-align: middle;">
                                                    <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;">
                                                       <tbody>
                                                          <tr>
                                                             <td style="vertical-align: bottom;"><span color="#f0b942" width="11" class="sc-jlyJG bbyJzT" style="display: block; background-color: rgb(240, 185, 66);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/link-icon-2x.png" color="#f0b942" width="13" class="sc-iRbamj blSEcj" style="display: block; background-color: rgb(240, 185, 66);"></span></td>
                                                          </tr>
                                                       </tbody>
                                                    </table>
                                                 </td>
                                                 <td style="padding: 0px;"><a href="//www.palmyrahotels.tn" color="#000000" class="sc-gipzik iyhjGb" style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"><span>www.palmyrahotels.tn</span></a></td>
                                              </tr>
                                              <tr height="25" style="vertical-align: middle;">
                                                 <td width="30" style="vertical-align: middle;">
                                                    <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;">
                                                       <tbody>
                                                          <tr>
                                                             <td style="vertical-align: bottom;"><span color="#f0b942" width="11" class="sc-jlyJG bbyJzT" style="display: block; background-color: rgb(240, 185, 66);"><img src="https://cdn2.hubspot.net/hubfs/53/tools/email-signature-generator/icons/address-icon-2x.png" color="#f0b942" width="13" class="sc-iRbamj blSEcj" style="display: block; background-color: rgb(240, 185, 66);"></span></td>
                                                          </tr>
                                                       </tbody>
                                                    </table>
                                                 </td>
                                                 <td style="padding: 0px;"><span color="#000000" class="sc-csuQGl CQhxV" style="font-size: 12px; color: rgb(0, 0, 0);"><span>Blue star Hotels, route touristique kantaoui, Sousse</span></span></td>
                                              </tr>
                                           </tbody>
                                        </table>
                                        <table cellpadding="0" cellspacing="0" class="sc-gPEVay eQYmiW" style="vertical-align: -webkit-baseline-middle; font-size: medium; font-family: Arial;">
                                           <tbody>
                                              <tr>
                                                 <td height="30"></td>
                                              </tr>
                                           </tbody>
                                        </table>
                                     </td>
                                  </tr>
                               </tbody>
                            </table>
                         </td>
                      </tr>
                   </tbody>
                </table>

                <img  src="https://www.palmyrahotels.tn/assets/img/private/ban.jpg"> ' ;

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
                ".$sig ;

               if( $this->send_mail(
                    $data['reservation']->client->email  , 
                    "Booking N".$data['reservation']->reservationId." [Palmyra ".$data['reservation']->hotel->name."] " ,
                     ""  ,
                    $content ,  "booking@palmyrahotels.tn" ,  
                    "Booking2022" , 
                    $data['reservation']->hotel->mail ) ) 
                 { 


                    $contenthotel =
                 "Hello Palmyra ".$data['reservation']->hotel->name.", <br><br> a new booking request N".$data['reservation']->reservationId." for your hotel has been sent to you. 
                 Please confirm the order  
                 To ask the client you can contact him at 
                    <a href='tel:+".$data['reservation']->client->code.$data['reservation']->client->mobile."' >".$data['reservation']->client->code.$data['reservation']->client->mobile."</a> <br>
                    <a href='mailto:+".$data['reservation']->client->email."' >".$data['reservation']->client->email."</a> 
                <br><br>
                <hr>
                
               
                <br>
                ".$sig ;

                        $this->send_mail(
                    $data['reservation']->hotel->mailresa  , 
                    "Booking N".$data['reservation']->reservationId." [Palmyra ".$data['reservation']->hotel->name."] " ,
                     ""  ,
                    $contenthotel ,  "booking@palmyrahotels.tn" ,  
                    "Booking2022" , 
                    "admi@palmyrahotels.tn" )


                    redirect('Reservation/mybookings');
                 }
     
     }


    

     public function mybookings() 
     {
            

            if ( $this->vendorId > 0 ) {
            $data['reservation'] =   $this->reservation_model->myReservationListing($this->vendorId , '0,1' );
            $data['reservationC'] =   $this->reservation_model->myReservationListing($this->vendorId , '2' );
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