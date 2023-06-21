/**
 * IMPORTS
 */
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { Container,Title } from "./styles";
import { IButtonProps } from "./interface";


const Button = ({ width, height, backgroundColor, color, title, weight, loading ,...rest }: IButtonProps) => {

  return(
    <Container {...rest} width={width} height={height} backgroundColor={backgroundColor}>
      { 
      loading ?
       <AiOutlineLoading3Quarters
          size={22}
          color={color}
        /> :
       <Title 
        color={'#fff'} 
        weight={weight}
        >
          {title}
        </Title> 
       }
       
    </Container>
  );
};

/**
 * EXPORTS
 */
export { Button };