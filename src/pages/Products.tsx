import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetProductsByCatPrefix,
  productsCleanUp,
} from "@store/products/productsSlice";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { GridList } from "@components/common";
import { Product } from "@components/eCommerce";
import { Loading } from "@components/feedback";

const Products = () => {
  const { prefix } = useParams();
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector((state) => state.products);

  const cartItems = useAppSelector((state) => state.cart.items);

  const productsWithQuantity = records.map((el) => ({
    ...el,
    quantity: cartItems[el.id] || 0,
  }));

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(prefix as string));
    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, prefix]);

  return (
    <Container>
      <Loading loading={loading} error={error}>
        <GridList
          records={productsWithQuantity}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Products;
