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
		              
		                $data['blog'] = $this->blog_model->blog($blogId) ;

		               
		               

		                 $this->global['pageTitle'] = $data['blog']->titre  ;
		        		 $this->loadViews("blog/view", $this->global, $data  , NULL); 
		        }  
		
		
		
}