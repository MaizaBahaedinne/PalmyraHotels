<?php defined ( 'BASEPATH' ) or exit ( 'No direct script access allowed' ); 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;


/**
 * Class : BaseController
 * Base Class to control over all the classes
 * @author : Kishor Mali
 * @version : 1.1
 * @since : 15 November 2016
 */
class BaseController extends CI_Controller {



	protected $role = '';
	protected $vendorId = '';
	protected $HUA = '';
	protected $name = '';
	protected $avatar = '';
	protected $roleText = '';

	protected $global = array ();
	protected $lastLogin = '';
	protected $loginId = '';




	
	/**
	 * Takes mixed data and optionally a status code, then creates the response
	 *
	 * @access public
	 * @param array|NULL $data
	 *        	Data to output to the user
	 *        	running the script; otherwise, exit
	 */
	public function response($data = NULL) {
		$this->output->set_status_header ( 200 )->set_content_type ( 'application/json', 'utf-8' )->set_output ( json_encode ( $data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES ) )->_display ();
		exit ();
	}
	
	function isLoggedIn() {
		$isLoggedIn = $this->session->userdata ( 'isLoggedIn' );
		
	
		if (! isset ( $isLoggedIn ) || $isLoggedIn != TRUE) {
			$this->global ['uid'] = 0 ;
		} else {
			
			$this->role = $this->session->userdata ( 'role' );
			$this->vendorId = $this->session->userdata ( 'userId' );
			$this->name = $this->session->userdata ( 'name' );
			$this->roleText = $this->session->userdata ( 'roleText' );
			$this->lastLogin = $this->session->userdata ( 'lastLogin' );
			$this->avatar = $this->session->userdata ( 'avatar' );
			$this->isBlocked = $this->session->userdata ( 'isDeleted' );
			$this->SA = $this->session->userdata ( 'SA' );
			$this->HUA  =  $this->session->userdata ( 'HUA' )  ;
			$this->roleStore  =  $this->session->userdata ( 'roleStore' )  ;

			$this->global ['uid'] = $this->vendorId;
			$this->global ['name'] = $this->name;
			$this->global ['avatar'] = $this->avatar;
			$this->global ['role'] = $this->role;
			$this->global ['role_text'] = $this->roleText;
			$this->global ['last_login'] = $this->lastLogin;
			$this->global ['isBlocked'] = $this->isBlocked;
			$this->global ['SA'] = $this->SA;
			$this->global ['HUA']  =  $this->HUA ;
			
		}

		}

	

	

	public function send_mail($to, $subject  , $data , $content , $from = "contact@palmyrahotels.tn" , $password = "PalmyraHotels2022" , $cc ="" )
    {       
    				
                 // Load PHPMailer library
                    $this->load->library('phpmailer_lib');
                    
                    // PHPMailer object
                    $mail = $this->phpmailer_lib->load();
                    $mail->SMTPDebug = SMTP::DEBUG_SERVER;   
                    // SMTP configuration
                 
                    $mail->isSMTP();
                    $mail->Host     = 'smtp.topnet.tn';
             
                    $mail->Username = $from ;
                    $mail->Password = $password;
                   // $mail->SMTPAuth = true;
						 // $mail->SMTPAutoTLS = true; 
						  $mail->Port = 25; 
                 
                    
                    $mail->setFrom( $from , 'Palmyra Hotels ');
                    $mail->addReplyTo($from , 'Palmyra Hotels');
                    
                    if($cc != ""){ 
                    $mail->addCC($cc);
                    $mail->addBCC($from);
                    }
                    
                    // Add a recipient
                    $mail->addAddress($to);

                    // Email subject
                    $mail->Subject = $subject ;
                    
                    // Set email format to HTML
                    $mail->isHTML(true);
                    
                    // Email body content
                    
                  	$body =$content ; 

                    $mail->Body =  $body  ; 
                    
                 

                 if($mail->send()) {
						   return true ;
						} 
						else {
						   return false ;
						}
    }


	
	/**
	 * This function is used to check the access
	 */
	function isAdmin() {
		if ($this->role != ROLE_ADMIN) {
			return true;
		} else {
			return false;
		}
	}
	
	/**
	 * This function is used to check the access
	 */
	function isTicketter() {
		if ($this->role != ROLE_ADMIN || $this->role != ROLE_MANAGER) {
			return true;
		} else {
			return false;
		}
	}
	
	/**
	 * This function is used to load the set of views
	 */
	function loadThis() {
		
		if($this->SA != 1){
		$this->load->view ( 'includes/header', $this->global );
		$this->load->view ( 'access' );
		$this->load->view ( 'includes/footer' );
		}else {
			$this->load->view ( 'soon' );
		}
	}
	
	


	/**
	 * This function is used to logged out user from system
	 */
	function logout() {
		$this->session->sess_destroy ();
		
		redirect ( '/' );
	}

	/**
     * This function used to load views
     * @param {string} $viewName : This is view name
     * @param {mixed} $headerInfo : This is array of header information
     * @param {mixed} $pageInfo : This is array of page information
     * @param {mixed} $footerInfo : This is array of footer information
     * @return {null} $result : null
     */
    function loadViews($viewName = "", $headerInfo = NULL, $pageInfo = NULL, $footerInfo = NULL){

    	$this->load->model('hotel_model');
    	$this->load->model('bar_model');
      
         $this->load->model('reservation_model');
    
    			 $headerInfo['hotels'] = $this->hotel_model->hotelListing() ;
    			 $footerInfo['hotels'] = $this->hotel_model->hotelListing() ;
    			 
    	  		 $headerInfo['MyReservations'] =  $this->reservation_model->myReservationListing($this->vendorId );

    	  		 $headerInfo['bars'] = $this->bar_model->barListing() ;

				$this->load->view('includes/header', $headerInfo);
	        	$this->load->view($viewName, $pageInfo);
	        	$this->load->view('includes/footer', $footerInfo);
	     
    }
	
	/**
	 * This function used provide the pagination resources
	 * @param {string} $link : This is page link
	 * @param {number} $count : This is page count
	 * @param {number} $perPage : This is records per page limit
	 * @return {mixed} $result : This is array of records and pagination data
	 */
	function paginationCompress($link, $count, $perPage = 10, $segment = SEGMENT) {
		$this->load->library ( 'pagination' );

		$config ['base_url'] = base_url () . $link;
		$config ['total_rows'] = $count;
		$config ['uri_segment'] = $segment;
		$config ['per_page'] = $perPage;
		$config ['num_links'] = 5;
		$config ['full_tag_open'] = '<nav><ul class="pagination">';
		$config ['full_tag_close'] = '</ul></nav>';
		$config ['first_tag_open'] = '<li class="arrow">';
		$config ['first_link'] = 'First';
		$config ['first_tag_close'] = '</li>';
		$config ['prev_link'] = 'Previous';
		$config ['prev_tag_open'] = '<li class="arrow">';
		$config ['prev_tag_close'] = '</li>';
		$config ['next_link'] = 'Next';
		$config ['next_tag_open'] = '<li class="arrow">';
		$config ['next_tag_close'] = '</li>';
		$config ['cur_tag_open'] = '<li class="active"><a href="#">';
		$config ['cur_tag_close'] = '</a></li>';
		$config ['num_tag_open'] = '<li>';
		$config ['num_tag_close'] = '</li>';
		$config ['last_tag_open'] = '<li class="arrow">';
		$config ['last_link'] = 'Last';
		$config ['last_tag_close'] = '</li>';
	
		$this->pagination->initialize ( $config );
		$page = $config ['per_page'];
		$segment = $this->uri->segment ( $segment );
	
		return array (
				"page" => $page,
				"segment" => $segment
		);
	}




}