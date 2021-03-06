import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";

const Menus = ({ menu }) => {
  return (
    <Col md={4} xs={6} className="mb-4">
      <Card className="shadow">
        <Card.Img
          variant="top"
          src={
            "assets/images/" +
            menu.kategori.nama_kategori.toLowerCase() +
            "/" +
            menu.gambar
          }
        />
        <Card.Body>
          <Card.Title>{menu.nama} <strong>({menu.kode})</strong></Card.Title>
          <Card.Text>Rp. {numberWithCommas(menu.harga)}</Card.Text>
          <Button variant="primary">Pesan Delivery</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Menus;
