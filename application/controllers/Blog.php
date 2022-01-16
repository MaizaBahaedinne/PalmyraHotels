<?php if(!defined('BASEPATH')) exit('No direct script access allowed');

require APPPATH . '/libraries/BaseController.php';



class Blog extends BaseController {

    public function __construct()
    {
        parent::__construct();
        $this->load->model('hotel_model');
        $this->load->model('search_model');
       	$this->load->model('blog_model');
        
        $this->isLoggedIn();   
    }
    

	public function index()
		        {    
            			 
		                $this->global['pageTitle'] = 'Blog';
 						
		            	 $data['blogs'] = $this->blog_model->blogListing() ;
		                
 		                $this->loadViews("blog/list", $this->global, $data, NULL);   
		        }
        		


		public function view($barId)
		        {
		              
		                $data['bar'] = $this->bar_model->bar($barId) ;

		               
		               

		                 $this->global['pageTitle'] = $data['bar']->name  ;
		        		 $this->loadViews("bar/view", $this->global, $data  , NULL); 
		        }  
		
		
		
}