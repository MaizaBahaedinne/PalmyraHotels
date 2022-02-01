<?php if(!defined('BASEPATH')) exit('No direct script access allowed');

require APPPATH . '/libraries/BaseController.php';

/**
 * Class : User (UserController)
 * User Class to control all user related operations.
 * @author : Kishor Mali
 * @version : 1.1
 * @since : 15 November 2016
 */
class Acceuil extends BaseController
{
    /**
     * This is default constructor of the class
     */
    public function __construct()
    {
        parent::__construct();
        $this->load->model('hotel_model');
         $this->load->model('events_model');
         $this->load->model('reservation_model');
         $this->load->model('bar_model');
         
         $this->load->model('avis_model');
        $this->isLoggedIn();   
    }
    


    
    
    /**
     * This function used to load the first screen of the user
     */
    public function index()
    {

         $data['events'] = $this->events_model->eventsListing() ;
         foreach ($data['events']  as $event) {
             if($event->barId != null ){ 
                $event->location = $this->bar_model->bar($event->barId)  ;
             }
             else
            {
                $event->location = $this->bar_model->bar($event->hotelId)  ;  
            }

         }
        $data['hotels'] = $this->hotel_model->hotelListing() ;  

       foreach ($data['hotels'] as $hotel ) {
                
                $hotel->prices = $this->hotel_model->roomMsPrice($hotel->hotelId,  date("Y-m-d")   ) ;
                $hotel->avisHotel = $this->avis_model->avisByHotel($hotel->hotelId) ;
                $hotel->avis = $this->avis_model->avisByHotelListing($hotel->hotelId) ;
                
            }

          

        $this->global['pageTitle'] = 'Home';
        
            $this->loadViews("acceuil", $this->global,  $data , NULL);
        

    }


     /**
     * This function used to load the first screen of the user
     */
    public function About()
    {

       
                     
        
        $this->global['pageTitle'] = 'About';
        $this->loadViews("about", $this->global,  NULL , NULL);
    }
    

}