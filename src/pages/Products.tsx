import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetProductsByCatPrefix } from "@store/products/productsSlice";
import { useParams } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import { Product } from "@components/eCommerce";
const Products = () => {
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector((state) => state.products);

  const { prefix } = useParams();

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(prefix as string));
  }, [dispatch, prefix]);

  const productsList =
    records.length > 0
      ? records.map((record) => (
          <Col
            key={record.id}
            xs={6}
            md={3}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            <Product {...record} />
          </Col>
        ))
      : "There are no categories";

  return (
    <Container>
      <Row>
         {productsList}
      </Row>
    </Container>
  );
};

export default Products;
