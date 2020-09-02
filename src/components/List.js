import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem";
import catdata from "../data/data.json";

export default function List() {
  return (
    <Container>
      {catdata.catfood.map((item) => (
        <ListItem key={item.id} data={item} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
`;
