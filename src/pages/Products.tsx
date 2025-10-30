import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetProductsByCatPrefix,
  productsCleanUp,
} from "@store/products/productsSlice";
import { useParams } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import { Product } from "@components/eCommerce";
import { Loading } from "@components/feedback";

const Products = () => {
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector((state) => state.products);

  const { prefix } = useParams();

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(prefix as string));
    return () => {
      dispatch(productsCleanUp());
    };
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
      <Loading loading={loading} error={error}>
        <Row>{productsList}</Row>
      </Loading>
    </Container>
  );
};

export default Products;
