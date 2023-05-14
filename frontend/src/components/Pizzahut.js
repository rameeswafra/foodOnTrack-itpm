import React, {useState,useEffect,Fragment} from 'react';
import axios from 'axios';
import HomeNavBar from './HomeNavBar';
import {Row,Container} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ViewPizzahut from './ViewPizzahut';


export default function Pizzahut() {

    const [products,setProducts] = useState([]);

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    useEffect(() =>{

        function getProducts() {
            axios.get("http://localhost:5000/product/view").then((res) => {

                setProducts(res.data);
            }).catch((err) => {

                alert(err.message);
            })
        }

        getProducts();

    }, [])

    return (
        <>
            <HomeNavBar/>
           
           <Container className='justify-content-center p-2'>
           <Row>
              {products.map((product)=> {
                  return(
                    <ViewPizzahut product={product} userInfo={userInfo}/>
                  )
              })}
           </Row>
            </Container> 
                
            
        </>
    )
}