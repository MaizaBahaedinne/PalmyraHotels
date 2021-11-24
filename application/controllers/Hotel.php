<?php if(!defined('BASEPATH')) exit('No direct script access allowed');

require APPPATH . '/libraries/BaseController.php';



class Hotel extends BaseController {

    public function __construct()
    {
        parent::__construct();
        $this->load->model('hotel_model');
       
        
        $this->isLoggedIn();   
    }
    

	public function hotelListing()
		        {    
            			 
		                $this->global['pageTitle'] = 'Hotel';
 						
		            	$data['hotels'] = $this->hotel_model->hotelListing() ;
		                
 		                $this->loadViews("hotel/list", $this->global, $data, NULL);   
		        }
        		
    

		public function view($hotelId)
		        {
		                $data['hotel'] =  $this->hotel_model->hotel($hotelId);
		                $data['medias'] = $this->hotel_model->hotelMediaListing($hotelId) ;
		                $data['rooms'] = $this->hotel_model->hotelRoomsListing($hotelId) ;

		               
		                	foreach ($data['rooms'] as $room ) {
		                		$room->media = $this->hotel_model->roomMediaListing($room->roomId) ;
		                	}
 
		                	

		                 $this->global['pageTitle'] = $data['hotel']->name  ;
		        		 $this->loadViews("hotel/view", $this->global, $data  , NULL); 
		        }  

		 

		
		
		
}