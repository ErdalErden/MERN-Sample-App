import React from 'react'
import {Container, Form, Button, Row, Col,Link } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const AuthScreen = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
              </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Form.Group className="d-grid">
            <Button variant="primary" size="lg">Giriş Yap</Button>
            </Form.Group>
            <Form.Group className='mt-3'>
              <Form.Text>
              Henüz bir hesabın yokmu ?</Form.Text>
              <LinkContainer to="/signup"><a> Kayıt Ol</a></LinkContainer>
            </Form.Group>






            
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default AuthScreen