import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/categories/categoriesSlice";

import { Container, Row, Col } from "react-bootstrap";
import { GridList } from "@components/common";
import { Category } from "@components/eCommerce";
import { Loading } from "@components/feedback";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { records, loading, error } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);



  return (
    <Container>
      <Loading loading={loading} error={error}>
        <GridList
          records={records}
          renderItem={(record) => <Category {...record} />}
        />
     
      </Loading>
    </Container>
  );
};

export default Categories;
