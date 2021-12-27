<?php if(!defined('BASEPATH')) exit('No direct script access allowed');

/**
 * Class : User_model (User Model)
 * User model class to get to handle user related data 
 * @author : Kishor Mali
 * @version : 1.1
 * @since : 15 November 2016
 */
class Contact_model extends CI_Model
{
        

    /**
     * This function is used to add new user to system
     * @return number $insert_id : This is last inserted id
     */
    function addNewContact($contactInfo)
    {
        $this->db->trans_start();
        $this->db->insert('tbl_contact', $contactInfo);
        $insert_id = $this->db->insert_id();
        $this->db->trans_complete();
        
        return $insert_id;
    }


      /**
     * This function is used to add new user to system
     * @return number $insert_id : This is last inserted id
     */
    function addNewsletter($contactInfo)
    {
        $this->db->trans_start();
        $this->db->insert('tbl_news', $contactInfo);
        $insert_id = $this->db->insert_id();
        $this->db->trans_complete();
        
        return $insert_id;
    }

    
    /**
     * This function is used to update the user information
     * @param array $userInfo : This is users updated information
     * @param number $userId : This is user id
     */
    function editContact($contactInfo, $contactId)
    {
        $this->db->where('contactId', $contactId);
        $this->db->update('tbl_contact', $contactInfo);
        return TRUE;
    }

    

}

  
