<?php if(!defined('BASEPATH')) exit('No direct script access allowed');

require APPPATH . '/libraries/BaseController.php';



class Bars extends BaseController {

    public function __construct()
    {
        parent::__construct();
        $this->load->model('hotel_model');
        $this->load->model('search_model');
       	$this->load->model('bar_model');
        
        $this->isLoggedIn();   
    }
    

	public function hotelListing()
		        {    
            			 
		                $this->global['pageTitle'] = 'Bars';
 						
		            	 $headerInfo['bars'] = $this->bar_model->barListing() ;
		                
 		                $this->loadViews("bar/list", $this->global, $data, NULL);   
		        }
        		


		public function view($barId)
		        {
		              
		                $data['bar'] = $this->bar_model->bar($barId) ;

		               
		               

		                 $this->global['pageTitle'] = $data['bar']->name  ;
		        		 $this->loadViews("bar/view", $this->global, $data  , NULL); 
		        }  
		
		
		
}