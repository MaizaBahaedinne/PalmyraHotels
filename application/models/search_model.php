<?php if(!defined('BASEPATH')) exit('No direct script access allowed');


class search_model extends CI_Model
{




            /**
     * This function used to get user information by id
     * @param number $userId : This is user id
     * @return array $result : This is user information
     */
    function getSearchInfo($searchId)
    {
        $this->db->select('BaseTbl.*');
        $this->db->from('tbl_search BaseTbl');
        $this->db->where('searchId', $searchId);
        $query = $this->db->get();
        return $query->row();
    }

    /**
     * This function is used to add new user to system
     * @return number $insert_id : This is last inserted id
     */
    function addNewSearch($searchInfo)
    {
        $this->db->trans_start();
        $this->db->insert('tbl_search', $searchInfo);
        $insert_id = $this->db->insert_id();
        $this->db->trans_complete();
        return $insert_id;
    }
    
    /**
     * This function is used to update the user information
     * @param array $userInfo : This is users updated information
     * @param number $userId : This is user id
     */
    function editSearch($searchInfo, $searchId)
    {
        $this->db->where('searchId', $searchId);
        $this->db->update('tbl_search', $searchInfo);
        return TRUE;
    }




   
}

  