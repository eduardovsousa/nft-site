import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Carousel from "../Carousel";
import { dark } from "../../styles/Themes";
import Button from "../Button";

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Container = styled.div`
  width: 75%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;
`;

const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;
`;

const SubTextLight = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;
`;

const ButtonContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  align-self: flex-start;
`;

const About = () => {
  return (
    <Section id="about">
      <Container>
        <Box>
          {" "}
          <Carousel />{" "}
        </Box>
        <Box>
          <Title>Bem vindo ao CYBER CLUB.</Title>
          <SubText>
            O CYBER CLUB é uma coleção privada de NFTs—exclusivo digital
            colecionáveis. Todos eles são armazenados como tokens ERC-721 no
            Blockchain Ethereum e hospedado em IPFS.
          </SubText>
          <SubTextLight>
            Com mais de 200 traços desenhados à mão, cada NFT é único e vem com
            a adesão a um grupo exclusivo de investidores de sucesso. Junte-se a
            uma comunidade ambiciosa em constante crescimento com múltiplos
            benefícios e serviços de utilidade pública.
          </SubTextLight>
          <ButtonContainer>
            <ThemeProvider theme={dark}>
              <Button text="Entre no Discord" link="#" />
            </ThemeProvider>
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  );
};

export default About;
