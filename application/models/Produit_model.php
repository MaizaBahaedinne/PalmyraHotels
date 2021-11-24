<?php if(!defined('BASEPATH')) exit('No direct script access allowed');

/**
 * Class : User_model (User Model)
 * User model class to get to handle user related data 
 * @author : Kishor Mali
 * @version : 1.1
 * @since : 15 November 2016
 */
class Produit_model extends CI_Model
{
        


      /**
     * This function is used to get the user listing count
     * @param string $searchText : This is optional search text
     * @return number $count : This is row count
     */
    function produitListing()
    {
        $this->db->select('BaseTbl.* , exporter.rs exporterName , exporter.logo exporterLogo');
        $this->db->from('tbl_produit as BaseTbl');
        $this->db->from('tbl_exporter exporter', 'exporter.expoterId = BaseTbl.exporterId');
        
        
        $query = $this->db->get();
        return $query->result();
    }




      /**
     * This function is used to get the user listing count
     * @param string $searchText : This is optional search text
     * @return number $count : This is row count
     */
    function produit($produitId )
    {
        $this->db->select('BaseTbl.* ');
        $this->db->from('tbl_produit as BaseTbl');
       
        $this->db->where('BaseTbl.produitId = ',$produitId );
   
        $query = $this->db->get();
        return $query->row();
    }


    /**
     * This function is used to add new user to system
     * @return number $insert_id : This is last inserted id
     */
    function addNewProduit($produitInfo)
    {

        $this->db->trans_start();
        $this->db->insert('tbl_produit', $produitInfo);
        
        $insert_id = $this->db->insert_id();
        
        $this->db->trans_complete();
        
        return $insert_id;
    }

    
    /**
     * This function is used to update the user information
     * @param array $userInfo : This is users updated information
     * @param number $userId : This is user id
     */
    function editExporter($exporterInfo, $exporterId)
    {
        $this->db->where('exporterId', $exporterId);
        $this->db->update('tbl_exporter', $exporterInfo);
        return TRUE;
    }

    

}

  
