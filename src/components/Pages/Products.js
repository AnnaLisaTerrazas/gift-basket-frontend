import React from 'react';
//import { SplitButton } from 'react-bootstrap';

import '../../App.css';
import Dropdown from 'react-dropdown';
import 'react-dropdown/styles.css';

const options = ['Cheese Basket','','Fruit Basket','Snack Basket','Wine Basket', 'Chocolate Basket'];
const defaultOptions = options [0];


export default function Products (){

        return (
<>
<h1 >Products</h1>
<div> 
      <Dropdown options= {Options} value = {defaultOptions} placeholder ='Select an Option'>

        <Dropdown.Item eventKey="1">Cheese Basket</Dropdown.Item>
        <Dropdown.Item eventKey="2">Fruit Basket</Dropdown.Item>
        <Dropdown.Item eventKey="2">Snack  Basket</Dropdown.Item>
        <Dropdown.Item eventKey="2">Wine Basket</Dropdown.Item>
        <Dropdown.Item eventKey="2">Chocolate Basket</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>Active Item</Dropdown.Item>
       {/* <Dropdown.Divider/>*/}
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </Dropdown>
      </div>
      </>
    );
  }
