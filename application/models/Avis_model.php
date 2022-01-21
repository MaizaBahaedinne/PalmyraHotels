<?php if(!defined('BASEPATH')) exit('No direct script access allowed');

/**
 * Class : User_model (User Model)
 * User model class to get to handle user related data 
 * @author : Kishor Mali
 * @version : 1.1
 * @since : 15 November 2016
 */
class Avis_model extends CI_Model
{
        


      /**
     * This function is used to get the user listing count
     * @param string $searchText : This is optional search text
     * @return number $count : This is row count
     */
    function avisListing($statut = '' )
    {
        $this->db->select('BaseTbl.* ');
        $this->db->from('tbl_bar as BaseTbl');
  
        
        $query = $this->db->get();
        return $query->result();
    }




      /**
     * This function is used to get the user listing count
     * @param string $searchText : This is optional search text
     * @return number $count : This is row count
     */
    function avis($barId )
    {
        $this->db->select('BaseTbl.* ');
        $this->db->from('tbl_bar as BaseTbl');
       
        $this->db->where('BaseTbl.barId = ',$barId );
   
        $query = $this->db->get();
        return $query->row();
    }


    /**
     * This function is used to get the user listing count
     * @param string $searchText : This is optional search text
     * @return number $count : This is row count
     */
    function avisByHotelListing($hotelId)
    {
        $this->db->select('BaseTbl.* ,  (BaseTbl.location + BaseTbl.price + BaseTbl.cleanliness + BaseTbl.service )  /4 as moyenne ');
        $this->db->from('tbl_avis as BaseTbl');
       
        $this->db->where('BaseTbl.hotelId = ',$hotelId );
         $this->db->order_by('BaseTbl.createdDTM DESC ');
        $query = $this->db->get();
        return $query->result();
    }


    /**
     * This function is used to get the user listing count
     * @param string $searchText : This is optional search text
     * @return number $count : This is row count
     */
    function avisByHotel($hotelId)
    {
        $this->db->select(' AVG(BaseTbl.location) location , AVG(BaseTbl.price) price , AVG(BaseTbl.cleanliness) cleanliness , AVG(BaseTbl.service)  service , (BaseTbl.location + BaseTbl.price + BaseTbl.cleanliness + BaseTbl.service )  /4 as moyenne');
        $this->db->from('tbl_avis as BaseTbl');
       
        $this->db->where('BaseTbl.hotelId = ',$hotelId );

   
        $query = $this->db->get();

        return $query->row();
    }



        /**
     * This function is used to get the user listing count
     * @param string $searchText : This is optional search text
     * @return number $count : This is row count
     */
    function avisByBarListing($barId)
    {
        $this->db->select('BaseTbl.* ');
        $this->db->from('tbl_avis as BaseTbl');
       
        $this->db->where('BaseTbl.barId = ',$barId );

   
        $query = $this->db->get();
        return $query->result();
    }


 /**
     * This function is used to add new user to system
     * @return number $insert_id : This is last inserted id
     */
    function addNewAvis($avisInfo)
    {
        $this->db->trans_start();
        $this->db->insert('tbl_avis', $avisInfo);
        $insert_id = $this->db->insert_id();
        $this->db->trans_complete();
        
        return $insert_id;
    }


    

}

  
