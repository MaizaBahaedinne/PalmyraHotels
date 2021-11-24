<?php if(!defined('BASEPATH')) exit('No direct script access allowed');


class X_model extends CI_Model
{


     /**
     * This function used to get user information by id
     * @param number $userId : This is user id
     * @return array $result : This is user information
     */
    function xListing($xId,$limit = '' ,$name )
    {
        $this->db->select('BaseTbl.x1 , BaseTbl.x12 , BaseTbl.x78');
        $this->db->from('tbl_x BaseTbl');
        $this->db->join('tbl_x2 X2', 'BaseTbl.xId = X2.x2Id', 'Left');
        if($limit != '' )
            {
                $this->db->limit($limit);
            }
        $this->db->where('BaseTbl.x2 = ',$name) ;
        $query = $this->db->get();
        return $query->result();
    }


            /**
     * This function used to get user information by id
     * @param number $userId : This is user id
     * @return array $result : This is user information
     */
    function getXInfo($xId)
    {
        $this->db->select('BaseTbl.*');
        $this->db->from('tbl_x BaseTbl');
        $this->db->where('xId', $xId);
        $query = $this->db->get();
        return $query->row();
    }

    /**
     * This function is used to add new user to system
     * @return number $insert_id : This is last inserted id
     */
    function addNewX($xInfo)
    {
        $this->db->trans_start();
        $this->db->insert('tbl_x', $xInfo);
        $insert_id = $this->db->insert_id();
        $this->db->trans_complete();
        return $insert_id;
    }
    
    /**
     * This function is used to update the user information
     * @param array $userInfo : This is users updated information
     * @param number $userId : This is user id
     */
    function editX($xInfo, $xId)
    {
        $this->db->where('xId', $xId);
        $this->db->update('tbl_x', $xInfo);
        return TRUE;
    }




   
}

  