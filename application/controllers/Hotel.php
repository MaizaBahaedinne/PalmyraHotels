<?php if(!defined('BASEPATH')) exit('No direct script access allowed');

require APPPATH . '/libraries/BaseController.php';



class Hotel extends BaseController {

    public function __construct()
    {
        parent::__construct();
        $this->load->model('hotel_model');
        $this->load->model('search_model');
         $this->load->model('avis_model');
         $this->load->model('user_model');
         $this->load->model('view_model') ;
       
        
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
			                 		            	
	        			 redirect("Hotel/searchHotel/".$resultat  ) ;
       }
        

        public function updatePension($searchId , $pension )
        {				
        				$searchInfo = array(  
                            'pension' => $pension,
                         );

                        $resultat = $this->search_model->editSearch($searchInfo, $searchId) ;
			                 		            	
	        			 redirect("Hotel/searchHotel/".$searchId  ) ;
       }
        

        public function searchHotel ($searchId){

    	  				$data['search'] = $this->search_model->getSearchInfo($searchId) ; 

    	  				if ((!(empty ($data['search'] )))  ) {
    	  				$data['hotel'] =  $this->hotel_model->hotel($data['search']->hotelId) ;
    	  				$data['rooms'] = $this->hotel_model->hotelRoomsListing($data['search']->hotelId) ;
		                foreach ($data['rooms'] as $room ) 
		                {		
		                	$room->prices = $this->hotel_model->roomMsPrice($data['search']->hotelId , $data['search']->checkin , $data['search']->pension   ) ;
		        		}
			  	             $this->global['pageTitle'] = 'Booking  '.$data['hotel']->name  ;  		            	
	        			    $this->loadViews("hotel/booking" , $this->global, $data  , NULL ) ;

	        			 }else{
                 			$this->global['pageTitle'] = '404';
			             	$this->loadViews("404", $this->global, null , NULL); 
			        	 }
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
		                	
		                $data['avisHotel'] = $this->avis_model->avisByHotel($hotelId) ;
		                $data['avis'] = $this->avis_model->avisByHotelListing($hotelId) ;
		                if( ! empty($data['avis']) ) 
		                {
 						foreach ($data['avis'] as $avi ) 
 							{
		                	 $avi->user = $this->user_model->user($avi->createdBy) ; 
		                	}
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