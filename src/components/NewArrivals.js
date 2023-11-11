import React, { useContext, useEffect,  } from "react";
import HorizontalFlexContainer from "./common/HorizontalFlexContainer";
import HorizontalCard from "./common/HorizontalCard";
import { Container,  } from "@mui/material";
import TitleWithButton from "./common/TitleWithButton";
import Context from "../store/context";
import fetchData from "../services/APIs";
import SpinLoader from "./common/SpinLoader";

const NewArrivals = React.forwardRef((props, ref) => {
  const ctx = useContext(Context);

  useEffect(() => {
    ctx.setIsLoading(true);
    ctx.setNewArrivals([]);
    fetchData("products/new-arrivals").then((data) => ctx.setNewArrivals(data));
    ctx.newArrivals && ctx.setIsLoading(false);
  }, []);

  return (
    <>
      {!ctx.newArrivals ? (
        <SpinLoader />
      ) : (
        <Container maxWidth="100%" ref={ctx.newArrivalsRef} id="featured">
          <TitleWithButton
            title={"New Arrivals"}
            button
            titleColor={"dark.main"}
          />
          <HorizontalFlexContainer>
            {ctx.newArrivals.data &&
              ctx.newArrivals.data.map((item) => {
                return (
                  <HorizontalCard
                    key={item.id}
                    image={item.image}
                    id={item.id}
                    name={item.name}
                    description={item.description}
                    price={item.price}
                    rating={item.rating}
                    discount={item.discount}
                    color={item.color}
                    category_id={item.category_id}
                    brand_id={item.brand_id}
                    longDescription={item.longDescription}
                  />
                );
              })}
          </HorizontalFlexContainer>
        </Container>
      )}
    </>
  );
});

export default NewArrivals;
