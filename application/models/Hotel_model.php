<?php if(!defined('BASEPATH')) exit('No direct script access allowed');

/**
 * Class : User_model (User Model)
 * User model class to get to handle user related data 
 * @author : Kishor Mali
 * @version : 1.1
 * @since : 15 November 2016
 */
class Hotel_model extends CI_Model
{
        


      /**
     * This function is used to get the user listing count
     * @param string $searchText : This is optional search text
     * @return number $count : This is row count
     */
    function hotelListing($statut = '' )
    {
        $this->db->select('BaseTbl.* ');
        $this->db->from('tbl_hotels as BaseTbl');
        if($statut != '' ){
            $this->db->where('BaseTbl.statut = ',$statut );
        }
        
        $query = $this->db->get();
        return $query->result();
    }




      /**
     * This function is used to get the user listing count
     * @param string $searchText : This is optional search text
     * @return number $count : This is row count
     */
    function hotel($hotelId )
    {
        $this->db->select('BaseTbl.* ');
        $this->db->from('tbl_hotels as BaseTbl');
       
        $this->db->where('BaseTbl.hotelId = ',$hotelId );
   
        $query = $this->db->get();
        return $query->row();
    }


          /**
     * This function is used to get the user listing count
     * @param string $searchText : This is optional search text
     * @return number $count : This is row count
     */
    function hotelMediaListing($hotelId)
    {
        $this->db->select('BaseTbl.* ');
        $this->db->from('tbl_media as BaseTbl');
       
        $this->db->where('BaseTbl.hotelId = ',$hotelId );
   
        $query = $this->db->get();
        return $query->result();
    }



          /**
     * This function is used to get the user listing count
     * @param string $searchText : This is optional search text
     * @return number $count : This is row count
     */
    function hotelRoomsListing($hotelId)
    {
        $this->db->select('BaseTbl.*  , Room.* , BaseTbl.capacity');
        $this->db->from('tbl_rooms as BaseTbl');
        $this->db->join('tbl_hotel_room as Room' , 'BaseTbl.roomId = Room.roomId ','Left');
       
        $this->db->where('Room.hotelId = ',$hotelId );

        $this->db->order_by('BaseTbl.capacity  ','ASC' );

        $query = $this->db->get();
        return $query->result();
    }

          /**
     * This function is used to get the user listing count
     * @param string $searchText : This is optional search text
     * @return number $count : This is row count
     */
    function roomMediaListing($roomId)
    {
        $this->db->select('BaseTbl.* ');
        $this->db->from('tbl_media as BaseTbl');
       
        $this->db->where('BaseTbl.roomId = ',$roomId );
   
        $query = $this->db->get();
        return $query->result();
    }

    

}

  
