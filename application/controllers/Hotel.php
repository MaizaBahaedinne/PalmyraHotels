<?php if(!defined('BASEPATH')) exit('No direct script access allowed');

require APPPATH . '/libraries/BaseController.php';



class Hotel extends BaseController {

    public function __construct()
    {
        parent::__construct();
        $this->load->model('hotel_model');
        $this->load->model('search_model');
       
        
        $this->isLoggedIn();   
    }
    

	public function hotelListing()
		        {    
            			 
		                $this->global['pageTitle'] = 'Hotel';

 						
		            	$data['hotels'] = $this->hotel_model->hotelListing() ;
		                
 		                $this->loadViews("hotel/list", $this->global, $data, NULL);   
		        }
        		
        public function search( )
        {				
        				
		                $data['hotel'] =  $this->hotel_model->hotel($this->input->get('hotelId'));
		                $data['medias'] = $this->hotel_model->hotelMediaListing($this->input->get('hotelId')) ;
		                $data['rooms'] = $this->hotel_model->hotelRoomsListing($this->input->get('hotelId')) ;
		                foreach ($data['rooms'] as $room ) 
		                {		
		                	$room->prices = $this->hotel_model->roomMsPrice($this->input->get('hotelId') , $this->input->get('checkin') , $this->input->get('pension')   ) ;
		        		}

		        		 $searchInfo = array(  
                            'hotelId' => $this->input->get('hotelId'),
                            'checkin' => $this->input->get('checkin'),
                            'checkout' => $this->input->get('checkout'),
                            'room' => $this->input->get('room'), 
                            'adult' => $this->input->get('adult'), 
                            'children' => $this->input->get('children'), 
                            'pension'	=> $this->input->get('pension'), 

                            'createdBy' => $this->vendorId ,
                            'createdDTM'=> date('Y-m-d H:i:s'), 
                            );
    
                            $resultat = $this->search_model->addNewSearch($searchInfo) ;

                            $data['search'] = $this->search_model->getSearchInfo($resultat) ; 
		       		
		                $this->global['pageTitle'] = 'Booking  '.$data['hotel']->name  ;  		            	

        			    $this->loadViews("hotel/booking" , $this->global, $data  , NULL ) ;
        


        }

		public function view($hotelId)
		        {
		                $data['hotel'] =  $this->hotel_model->hotel($hotelId);
		                $data['medias'] = $this->hotel_model->hotelMediaListing($hotelId) ;
		                $data['rooms'] = $this->hotel_model->hotelRoomsListing($hotelId) ;

		               
		                	foreach ($data['rooms'] as $room ) {
		                		$room->media = $this->hotel_model->roomMediaListing($room->roomId) ;
		                		$room->prices = $this->hotel_model->roomMsPrice($hotelId,  date("Y-m-d")   ) ;
		                		
		                	}
 
		               
		                 $this->global['type'] = 'hotel';	
		                 $this->global['hotelDetails'] =  $data['hotel'] ;
		                 $this->global['pageTitle'] = $data['hotel']->name  ;
		        		 $this->loadViews("hotel/view", $this->global, $data  , NULL); 
		        }  



		        public function booking($hotelId,$roomId)
		        {
		        	 $data['hotel'] =  $this->hotel_model->hotel($hotelId);        	 
		             $data['price'] = $this->hotel_model->roomPrice($hotelId , $roomId , date("d/m/Y") , date("d/m/Y")   ) ;	

		                
		             $data['opts'] 	= $this->hotel_model->roomOptionsListing(  $data['price']->options   )  ;	

		             

		             $data['roomHotel'] = $roomId ; 

		             	 
		                 $this->global['pageTitle'] = 'Booking  '.$data['hotel']->name  ;
		        		 $this->loadViews("hotel/booking", $this->global, $data  , NULL); 

		        }  

		 

		
		
		
}