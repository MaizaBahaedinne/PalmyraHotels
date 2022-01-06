<?php if(!defined('BASEPATH')) exit('No direct script access allowed');

/**
 * Class : User_model (User Model)
 * User model class to get to handle user related data 
 * @author : Kishor Mali
 * @version : 1.1
 * @since : 15 November 2016
 */
class Reservation_model extends CI_Model
{
        

    /**
     * This function is used to add new user to system
     * @return number $insert_id : This is last inserted id
     */
    function addNewReservation($reservationInfo)
    {
        $this->db->trans_start();
        $this->db->insert('tbl_reservation', $reservationInfo);
        $insert_id = $this->db->insert_id();
        $this->db->trans_complete();
        
        return $insert_id;
    }

        /**
     * This function is used to add new user to system
     * @return number $insert_id : This is last inserted id
     */
    function addNewReservationDetaiils($reservationInfo)
    {
        $this->db->trans_start();
        $this->db->insert('tbl_reservation_details', $reservationInfo);
        $insert_id = $this->db->insert_id();
        $this->db->trans_complete();
        
        return $insert_id;
    }




    
    /**
     * This function is used to update the user information
     * @param array $userInfo : This is users updated information
     * @param number $userId : This is user id
     */
    function editContact($reservationInfo, $reservationId)
    {
        $this->db->where('reservationId', $reservationId);
        $this->db->update('tbl_reservation', $reservationInfo);
        return TRUE;
    }

  /**
     * This function is used to get the user listing count
     * @param string $searchText : This is optional search text
     * @return number $count : This is row count
     */
    function reservation($reservationId )
    {
        $this->db->select('BaseTbl.*  ');
        $this->db->from('tbl_reservation as BaseTbl');
        $this->db->where('BaseTbl.reservationId =', $reservationId );        

        $query = $this->db->get();
        return $query->row();
    }

      /**
     * This function is used to get the user listing count
     * @param string $searchText : This is optional search text
     * @return number $count : This is row count
     */
    function reservationDetails($reservationId )
    {
        $this->db->from('tbl_reservation_details as BaseTbl');
        $this->db->join('tbl_hotel_room as Room' , 'BaseTbl.roomId = Room.roomId ','Left');
        $this->db->where('BaseTbl.reservationId =', $reservationId ); 
        $this->db->group_by('BaseTbl.detailId ' );        
        

        $query = $this->db->get();
        return $query->result();
    }



      /**
     * This function is used to get the user listing count
     * @param string $searchText : This is optional search text
     * @return number $count : This is row count
     */
    function reservationListing($limit = '' )
    {
        $this->db->select('BaseTbl.* , Hotel.* , BaseTbl.description ');
        $this->db->from('tbl_reservation as BaseTbl');
     
        $query = $this->db->get();
        return $query->result();
    }


    

}

  
