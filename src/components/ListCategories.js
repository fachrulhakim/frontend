import React, { Component } from "react";
import { Col, ListGroup } from "react-bootstrap";
import axios from "axios";
import { API_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faCoffee,
  faCheese,
} from "@fortawesome/free-solid-svg-icons";

const Icon = ({ nama }) => {
  if (nama === "Makanan")
    return <FontAwesomeIcon icon={faUtensils} className="mr-2" />;
  if (nama === "Minuman") return <FontAwesomeIcon icon={faCoffee} />;
  if (nama === "Cemilan")
    return <FontAwesomeIcon icon={faCheese} className="mr-2" />;

  return <FontAwesomeIcon icon={faUtensils} className="mr-2" />;
};

export default class ListCategories extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kategori: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "kategori")
      .then((res) => {
        const kategori = res.data;
        this.setState({ kategori });
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
  }

  render() {
    const { kategori } = this.state;
    const { changeKategori, kategoriYangDipilih } = this.props;
    return (
      <Col md={2} className="mt-3">
        <h4>
          <strong>Daftar Kategori</strong>
        </h4>
        <hr />
        <ListGroup>
          {kategori &&
            kategori.map((kategori) => (
              <ListGroup.Item
                key={kategori.id_kategori}
                onClick={() => changeKategori(kategori.nama_kategori)}
                className={kategoriYangDipilih === kategori.nama_kategori && "kategori-aktif"}
                style={{cursor: 'pointer'}}
              >
                <h5>
                  <Icon nama={kategori.nama_kategori} /> {kategori.nama_kategori}
                </h5>
              </ListGroup.Item>
            ))}
        </ListGroup>
      </Col>
    );
  }
}
