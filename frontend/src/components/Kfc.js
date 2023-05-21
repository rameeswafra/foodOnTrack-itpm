import React, {useState,useEffect} from 'react';
import axios from 'axios';
import ViewKfc from './ViewKfc';
import HomeNavBar from './HomeNavBar';
import {Row,Container} from 'react-bootstrap';
import { useSelector } from 'react-redux';


export default function Kfc() {

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
                            <ViewKfc product={product} userInfo={userInfo}/>
                        )
                    })}
                 </Row>
            </Container>
                
            
        </>
    )
}