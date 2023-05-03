import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import Accordion from "../Accordion";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  position: relative;
  color: ${(props) => props.theme.body};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};

  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.cauroselColor};
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 64em) {
    width: 80%;
  }

  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;
  }

  & > *::last-child {
    & > *::first-child {
      margin-top: 0;
    }
  }
`;

const Box = styled.div`
  width: 45%;

  @media (max-width: 64em) {
    width: 90%;
    align-self: center;
  }
`;

const Faq = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: "top top",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: true,
      // markers: true,
    });

    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="faq">
      <Title>FAQ</Title>
      <Container>
      <Box>
          <Accordion title="ONDE POSSO VER MEUS NFTS?">
            Depois de comprado, basta conectar-se à sua conta OpenSea para
            visualizar suas NFTs.
          </Accordion>
          <Accordion title="O QUE É O METAVERSO?">
            O metaverso é uma rede de mundos virtuais 3D focados em conexão. No
            futurismo e na ficção científica, é frequentemente descrito como uma
            iteração hipotética da Internet como um único e universal mundo
            virtual que é facilitado pelo uso de recursos virtuais e fones de
            ouvido de realidade aumentada.
          </Accordion>
          <Accordion title="POR QUE PRECISAMOS DE ROYALTIES?">
            O valor dos royalties foi fixado em 5% para financiar os projetos do
            CYBER CLUB. Temos a ambição de organizar vários eventos em todo o
            mundo, a fim de fortalecer a comunidade e construir uma rede de
            empreendedores e investidores com a mesma mentalidade e interesses
            em comum.
          </Accordion>
        </Box>
        <Box>
          <Accordion title="COMO POSSO USAR MEU NFT?">
            Você poderá usar seu NFT como avatar no Metaverso e nosso futuro
            game. Você faz parte de um rede exclusiva de investidores e
            empreendedores.
          </Accordion>
          <Accordion title="O QUE É O CYBER CLUB?">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            deserunt consequatur quisquam maxime molestias dolores ipsum,
            exercitationem vel sint quidem aliquam modi quis impedit corporis
            unde inventore fugiat provident in..
          </Accordion>
          <Accordion title="O QUE É O PROCESSO DE FUSÃO?">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            deserunt consequatur quisquam maxime molestias dolores ipsum,
            exercitationem vel sint quidem aliquam modi quis impedit corporis
            unde inventore fugiat provident in.
          </Accordion>
        </Box>
      </Container>
    </Section>
  );
};

export default Faq;