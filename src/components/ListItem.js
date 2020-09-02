import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { mouse } from "../utils";
import cat from "../resources/img/cat.png";

export default function ListItem({ data }) {
  const [select, setSelect] = useState(false);
  const [mouseLeave, setMouseLeave] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (data.amount === 0) {
      setDisabled(true);
    }
  }, [setDisabled, data.amount]);

  const handleSelect = () => {
    if (disabled) {
      return;
    }
    setSelect(!select);
  };

  const onMouseLeave = () => {
    if (disabled) {
      return;
    }
    if (select) {
      setMouseLeave(true);
    } else {
      setMouseLeave(false);
    }
  };

  const mouses = ["мышь", "мыши", "мышей"];
  const serving = ["порция", "порции", "порций"];

  return (
    <Wrapper>
      <Container
        className={mouseLeave && select ? "hovered" : ""}
        onClick={handleSelect}
        color={select ? "#d91667" : "#1698d9"}
        disabled={disabled}
        onMouseLeave={onMouseLeave}
      >
        <Product>
          {mouseLeave ? (
            <SubTitle>Котэ не одобряет?</SubTitle>
          ) : (
            <SubTitle>{data.slogan}</SubTitle>
          )}
          <Title>{data.productName}</Title>
          <TitleDesc>{data.ingredient}</TitleDesc>
          <Ul>
            <Li>{mouse(data.servings, serving)}</Li>
            <Li>{mouse(data.gift, mouses)} в подарок</Li>
            {data.id === 3 && <Li>заказчик доволен</Li>}
          </Ul>
          <Weight color={select ? "#d91667" : "#1698d9"}>
            <Quantity>{data.weight}</Quantity>
            кг
          </Weight>
        </Product>
      </Container>

      {select ? (
        <Desc>{data.desc}</Desc>
      ) : !disabled ? (
        <Desc>
          Чего сидишь? Порадуй котэ, <span onClick={handleSelect}>купи.</span>
        </Desc>
      ) : (
        <Desc yellow>Печалька, {data.ingredient} закончился.</Desc>
      )}
    </Wrapper>
  );
}

const Weight = styled.div`
  position: absolute;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  padding: 5px;
  right: 10px;
  bottom: 10px;
  display: flex;
  min-width: 81px;
  min-height: 81px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  font-size: 21px;
  color: #fff;
`;

const Wrapper = styled.div`
  max-width: 320px;
  width: 100%;
  margin: 20px 40px;
  @media (max-width: 600px) {
    margin: 20px 10px;
  }
`;

const Product = styled.div`
  max-width: 100%;
  height: 100%;
  padding: 20px 15px 15px 45px;
  background: url(${cat}) no-repeat,
    linear-gradient(135deg, transparent 31px, #fff 0), 0 0;
  background-size: contain;
  background-position: 50% 100%;
  border-radius: 10px;
  position: relative;
  box-sizing: border-box;
`;

const Container = styled.div`
  max-width: 320px;
  width: 100%;
  height: 480px;
  padding: 4px;
  background: linear-gradient(
      135deg,
      transparent 32px,
      ${(props) => props.color} 0
    ),
    0 0, no-repeat;
  border-radius: 13px;
  box-sizing: border-box;
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    ${(props) => {
      if (props.color === "#1698d9") {
        return `background: linear-gradient(
          135deg,
          transparent 32px,
          #2ea8e6 0
        ),
        0 0, no-repeat;`;
      } else if (props.color === "#d91667") {
        return `background: linear-gradient(
          135deg,
          transparent 32px,
          #e62e7a 0
        ),
        0 0, no-repeat;`;
      }
    }}
  }
  &:hover ${Weight} {
    ${(props) => {
      if (props.color === "#1698d9") {
        return `background-color: #2ea8e6`;
      }
    }}
  }
  &.hovered {
    background: linear-gradient(135deg, transparent 32px, #e62e7a 0), 0 0,
      no-repeat;
    ${Weight} {
      ${(props) => {
        if (props.color === "#1698d9") {
          return `background-color: #2ea8e6`;
        } else if (props.color === "#d91667") {
          return `background-color: #e62e7a `;
        }
      }}
    }
  }
  ${(props) => {
    if (props.disabled) {
      return `background: linear-gradient(135deg, transparent 32px, #b3b3b3 0), 0 0,
      no-repeat;
      ${Product}{
        opacity: 0.5;
      }
      &:hover{
        background: linear-gradient(135deg, transparent 32px, #b3b3b3 0), 0 0,
      no-repeat;
      }
      ${Weight} {
        background-color: #b3b3b3;
       }
      &:hover ${Weight} {
           background-color: #b3b3b3;
          }
      }
      `;
    }
  }}
`;

const SubTitle = styled.p`
  color: #666666;
  font-size: 16px;
  font-weight: 400;
  padding-bottom: 10px;
`;

const Title = styled.h2`
  color: #000;
  font-size: 48px;
  font-weight: 700;
  padding-bottom: 4px;
`;

const TitleDesc = styled.div`
  color: #000;
  font-size: 24px;
  font-weight: 700;
  padding-bottom: 15px;
`;

const Ul = styled.ul`
  list-style: none;
`;

const Li = styled.li`
  font-family: "Trebuchet MS";
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
`;

const Quantity = styled.span`
  color: #ffffff;
  font-family: "Trebuchet MS", sans-serif;
  font-size: 42px;
  font-weight: 400;
  display: block;
`;

const Desc = styled.p`
  text-shadow: 0 1px 0 #000000;
  color: ${(props) => (props.yellow ? "#ffff66" : "#fff")};
  font-size: 13px;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
  span {
    color: #1698d9;
    cursor: pointer;
  }
`;
