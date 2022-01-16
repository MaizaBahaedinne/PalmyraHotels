<?php if(!defined('BASEPATH')) exit('No direct script access allowed');

/**
 * Class : User_model (User Model)
 * User model class to get to handle user related data 
 * @author : Kishor Mali
 * @version : 1.1
 * @since : 15 November 2016
 */
class Bar_model extends CI_Model
{
        


      /**
     * This function is used to get the user listing count
     * @param string $searchText : This is optional search text
     * @return number $count : This is row count
     */
    function barListing($statut = '' )
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
    function bar($barId )
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
    function hotelMediaListing($barId)
    {
        $this->db->select('BaseTbl.* ');
        $this->db->from('tbl_bar as BaseTbl');
       
        $this->db->where('BaseTbl.barId = ',$barId );
   
        $query = $this->db->get();
        return $query->result();
    }



    

}

  
