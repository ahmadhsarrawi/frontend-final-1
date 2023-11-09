import React, { useContext, useEffect } from "react";
import Context from "../../../store/context";
import fetchData from "../../../services/APIs";
import HorizontalFlexContainer from "../HorizontalFlexContainer";
import HorizontalCard from "../HorizontalCard";
import { Container} from "@mui/material";
import SpinLoader from "../SpinLoader";

export default function RelatedProducts({categoryId}) {
    const ctx = useContext(Context);

    useEffect(() => {
        async function fetchDataAsync() {
            try {
                const data = await fetchData(`categories/${categoryId}/products`);
                ctx.setRelatedProducts(data?.data);
                ctx.setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchDataAsync();
    }, []);
    return (
      <>
        {!ctx.relatedProducts ? (
          <SpinLoader />
        ) : (
          <Container maxWidth="100">
            <HorizontalFlexContainer>
              {ctx.relatedProducts &&
                ctx.relatedProducts.map((item) => (
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
                ))}
            </HorizontalFlexContainer>{" "}
          </Container>
        )}
      </>
    );
}
