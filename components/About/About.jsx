import React from "react";
import style from "../../styles/About.module.css";
import styled from "styled-components";
import Image from "next/image";
import img from "../../assets/mandala.png";

const Container = styled.div`
  heigth: 80px;
  width: 100%;
  border-bottom: white 3px dashed;
  background-color: rgb(75, 2, 58);
  @media screen and (max-width: 770px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-item: center;
  @media screen and (max-width: 770px) {
    width: 100%;
    display: flex;
    align-item: center;
    justify-content: space-between;
  }
`;
const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 770px) {
    height: 100%;
    width: 100%;
    justify-content: start;
  }
`;

const Right = styled.div`
  width: 20%;
  @media screen and (max-width: 770px) {
    display: none;
  }
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  @media screen and (max-width: 770px) {
    height: 40px;
    display: flex;
    align-items: center;
  }
`;

const MenuItem = styled.li`
  margin-right: 120px;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 15%;
  color: white;
  @media screen and (max-width: 770px) {
    font-size: 15px;
    display: flex;
    justify-content: center;
  }
`;

const About = () => {
  return (
    <Container id="About">
      <Wrapper>
        <Left>
          <a href="#home">
            <Image
              className={style.Mandala}
              src={img}
              alt="Mandala"
              width={50}
              height={50}
            />
          </a>
          <Menu style={{ cursor: "pointer" }} className={style.menu}>
            <p className={style.p}>
              <MenuItem className={style.menuItem}>About Me</MenuItem>
            </p>
          </Menu>
          <p className={style.TitleAbout}>
            I started in the world of programming more than a year ago, I am
            very curious and studious, I am really interested in knowing a
            little more every day. and know what's behind the scenes. Before
            starting my career as a programmer, I dedicated myself to study and
            work in visual arts. I have a t-shirt firm where I make exclusive
            designs in prints, sublimation and plotting. I really have a lot of
            ease when it comes to creating and designing.{" "}
          </p>
        </Left>
      </Wrapper>

      <Right></Right>
    </Container>
  );
};

export default About;
