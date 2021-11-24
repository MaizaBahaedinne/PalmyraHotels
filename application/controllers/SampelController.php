<?php if(!defined('BASEPATH')) exit('No direct script access allowed');

require APPPATH . '/libraries/BaseController.php';



class SampelController extends BaseController {

    public function __construct()
    {
        parent::__construct();
        $this->load->model('x_model');
       
        
        $this->isLoggedInPub();   
    }
    

	public function xListing()
		        {    
            			 
		                $this->global['pageTitle'] = 'Academy';

		            	$data['Xs'] = $this->x_model->xListing($xId,'',$name ) ;
		                $this->loadViews("academy/list", $this->global, $data, NULL);   
		        }
        		
    	public function addNewX()
		        {
		                
		               $label = $this->input->post('label');
		               $Description = $this->input->post('description');
		               $type = $this->input->post('description');		       
			   		   	
 				/*		$filenameCC = date('d_M_Y_H_i_s_'); 
			   		   $target_dir = "uploads/Academy/".$filenameCC;
	                    $target_file = $target_dir . basename($_FILES["affiche"]["name"]);
	                    $uploadOk = 1;
	                    $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
				*/
				/*		if(move_uploaded_file($_FILES["affiche"]["tmp_name"], $target_file) ){ */
			   		   $xInfo = array(
		                 'x1' =>  $label, 
		                 'x34' => $Description ,
		                 'x87' => $filenameCC.basename($_FILES["affiche"]["name"]) , 
		                 'x4778' => $type ,
		                 'createdBy' => $this->vendorId ,
		                 'createdDTM'=> date('Y-m-d H:i:s')
		                     );

			   		   	$resultat = $this->x_model->addNewX($xInfo);
		      /*  		} */
		        	redirect('x/'.$resultat->xId) ;  
		          
		        }    

		public function x($xId)
		        {
		                $data['getXInfo'] =  $this->x_model->getXInfo($xId);
		                 $this->global['pageTitle'] = $data['getXInfo']->x1  ;
		        		 $this->loadViews("Xdirect/view", $this->global, $data  , NULL); 
		        }  

		public function editX($xId)
		        {
		                
		               $label = $this->input->post('label');
		               $Description = $this->input->post('description');
		               $type = $this->input->post('description');		       
			   		   	
 				/*		$filenameCC = date('d_M_Y_H_i_s_'); 
			   		   $target_dir = "uploads/Academy/".$filenameCC;
	                    $target_file = $target_dir . basename($_FILES["affiche"]["name"]);
	                    $uploadOk = 1;
	                    $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
				*/
				/*		if(move_uploaded_file($_FILES["affiche"]["tmp_name"], $target_file) ){ */
			   		   $xInfo = array(
		                 'x1' =>  $label, 
		                 'x34' => $Description ,
		                 'x87' => $filenameCC.basename($_FILES["affiche"]["name"]) , 
		                 'x4778' => $type ,
		                 'createdBy' => $this->vendorId ,
		                 'createdDTM'=> date('Y-m-d H:i:s')
		                     );

			   		   	$resultat = $this->x_model->editX($xInfo,$xId);
		      /*  		} */
		        	redirect('x/'.$resultat->xId) ;  
		          
		        }    

		
		
		
}