import React from 'react';
import Head from 'next/head';
import Header from '../components/nav';
import coverImage from '../components/coverImage';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';

const Home = () => (
  <div>
    <Head>
      <title>Aksara</title>
      <link rel="icon" href="/static/images/favicons/favicon.ico" />
    </Head>

    <Header />
    
    <section style={{backgroundImage:"url('https://images.pexels.com/photos/357737/pexels-photo-357737.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')", backgroundColor: "rgba(201,255,251,0.70)", backgroundBlendMode: "lighten",position:"absolute", width:"100%", display:"block",zIndex:"-1"}}>
        <Container>
        <h1>Cover image</h1>b
              <Row style={{marginTop:"10%"}}>
                <Col xs="12" sm="8" style={{marginTop:"6%"}}>
                 <h1 style={{marginTop:"2.5%", fontSize: "36px", fontWeight:"bold"}}>Jalin Kerjasama Dengan Para Petani Lokal</h1>
                 <h1 style={{fontSize: "30px",}}>Untuk Penuhi Semua Kebutuhan Bisnis Anda</h1> 
                 <h3 style={{marginTop:"2.5%", fontSize: "22px"}}>Bersama kita tingkatkan kesejahteraan para petani</h3>
                </Col>
                <Col sm="4" style={{marginBottom:"18%",}}>
                  <h2 style={{fontSize:"24px", fontWeight:"600"}}>Daftar Sebagai Pembeli</h2>
                  <br />
                  <Form>
                    <FormGroup style={{border:"2px solid #929292", borderRadius:"0.5em"}}>
                        <Label for="exampleName" hidden>Nama Depan</Label>
                        <Input name="name" id="exampleEmail" placeholder="Nama Depan" />
                    </FormGroup>
                    {' '}
                    <FormGroup style={{border:"2px solid #929292", borderRadius:"0.5em"}}>
                        <Label for="exampleName" hidden>Nama Belakang</Label>
                        <Input name="name" id="exampleEmail" placeholder="Nama Belakang" />
                    </FormGroup>
                    {' '}
                    <FormGroup style={{border:"2px solid #929292", borderRadius:"0.5em"}}>
                        <Label for="exampleEmail" hidden>Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                    </FormGroup>
                    {' '}
                    <FormGroup style={{border:"2px solid #929292", borderRadius:"0.5em"}}>
                        <Label for="examplePassword" hidden>Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                    </FormGroup>
                    {' '}
                    <FormGroup style={{border:"2px solid #929292", borderRadius:"0.5em"}}>
                        <Label for="exampleName" hidden>Nama Perusahan</Label>
                        <Input name="name" id="exampleEmail" placeholder="Nama Perusahaan" />
                    </FormGroup>
                    {' '}
                    <FormGroup style={{border:"2px solid #929292", borderRadius:"0.5em"}}>
                        <Label for="exampleName" hidden>Nomor Induk Berusaha</Label>
                        <Input name="name" id="exampleEmail" placeholder="Nomor Induk Berusaha" />
                    </FormGroup>
                    {' '}
                    <Button style={{background:"#006789", borderColor:"transparent", float:"right", padding:"7.5px", paddingLeft:"40px", paddingRight:"40px"}}>Daftar</Button>
                  </Form>
                </Col>
              </Row>
        </Container>
    </section>

  

    <style jsx>{`
    *{
      margin: 0;
	    padding: 0;
	    border: 0;
	    font-size: 100%;
	    font: inherit;
	    vertical-align: baseline;
    }
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
)

export default Home
