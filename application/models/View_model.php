<?php if(!defined('BASEPATH')) exit('No direct script access allowed');


class View_model extends CI_Model
{






    /**
     * This function is used to add new user to system
     * @return number $insert_id : This is last inserted id
     */
    function addNewView($viewInfo)
    {
        
        $this->db->trans_start();
        $this->db->insert('tbl_views', $viewInfo);
        $insert_id = $this->db->insert_id();
        $this->db->trans_complete();
        return $insert_id;
    }
    
  




   
}

  