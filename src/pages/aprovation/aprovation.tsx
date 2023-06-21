/**
 * IMPORTS
 */

import { useTheme } from "styled-components";
import { useParams } from "react-router-dom";

// components
import { Text } from "../../components/text";

// styles
import { ContainerMain, WrapperImage, WrapperTitle } from "./styles"
import { ImageCustom } from "../../components/image";
import { Table } from "../../components/table";

const Aprovation = () => {
  const theme = useTheme();

  const { id_bobina } = useParams();
  return (
    <ContainerMain>
      <WrapperTitle>
        <Text
          width={'100%'}
          marginTop={18}
          text={`Documento do Comprovante da Viagem ${id_bobina} (Aguardando)`}
          align="left"
          letterHeight={24}
          letterSpacing={0.5}
          color={theme.colors.black_200}
          size={24}
          weight="600"
          marginBottom={16}
        />
      </WrapperTitle>

      <WrapperImage>
            <ImageCustom type="pedente" onClickApproved={()=> alert("Aprovar?")} onClickDisapproved={()=> alert("Reprovar?")}/>
            <ImageCustom type="pedente" onClickApproved={()=> alert("Aprovar?")} onClickDisapproved={()=> alert("Reprovar?")}/>
            <ImageCustom type="pedente" onClickApproved={()=> alert("Aprovar?")} onClickDisapproved={()=> alert("Reprovar?")}/>
      </WrapperImage>

  
      <Table />
    </ContainerMain>
  );
};

/**
 * EXPORTS
 */
export { Aprovation };
