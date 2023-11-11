import React, { useContext, useEffect, useState } from "react";
import Context from "../../../store/context";
import fetchData from "../../../services/APIs";
import HorizontalFlexContainer from "../HorizontalFlexContainer";
import HorizontalCard from "../HorizontalCard";
import { Container } from "@mui/material";
import SpinLoader from "../SpinLoader";

export default function RelatedProducts({ categoryId, productId }) {
  const ctx = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchDataAsync() {
      try {
        const data = await fetchData(`categories/${categoryId}/products`);
        ctx.setRelatedProducts(data?.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchDataAsync();
  }, [categoryId, ctx]);

  let filteredProducts = [];
  if (ctx.relatedProducts && !isLoading) {
    // Filter out the product with matching productId from relatedProducts
    filteredProducts = ctx.relatedProducts.filter((item) => item.id !=productId);

  }

  return (
    <Container maxWidth="100">
      <HorizontalFlexContainer>
        {isLoading ? (
          <SpinLoader />
        ) : (
          filteredProducts.map((item) => (
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
            />
          ))
        )}
      </HorizontalFlexContainer>
    </Container>
  );
}
