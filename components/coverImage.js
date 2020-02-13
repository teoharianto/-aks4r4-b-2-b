import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const coverImage = (props) => {
    return(
        <Row style={{marginTop:"15%"}}>
                <Col xs="12" sm="8">
                 <h1 style={{marginTop:"2.5%", fontSize: "32px"}}>Jalin Kerjasama Dengan Para Petani Lokal</h1>
                 <h1 style={{fontSize: "30px"}}>Untuk Penuhi Semua Kebutuhan Bisnis Anda</h1> 
                 <h3 style={{marginTop:"2.5%", fontSize: "22px"}}>Bersama kita tingkatkan kesejahtraan para petani</h3>
                </Col>
                <Col sm="4" style={{marginBottom:"15%",color:"white"}}>
                  <h2>Daftar Sebagai Pembeli</h2>
                  <br />
                  <Form>
                    <FormGroup>
                        <Label for="exampleEmail" hidden>Email</Label>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Email" />
                    </FormGroup>
                    {' '}
                    <FormGroup>
                        <Label for="examplePassword" hidden>Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="Password" />
                    </FormGroup>
                    {' '}
                    <Button>Submit</Button>
                  </Form>
                </Col>
              </Row>
    );
}

export default coverImage;
