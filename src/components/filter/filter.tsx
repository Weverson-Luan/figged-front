/**
 * IMPORTS
 */

import { useTheme } from "styled-components";

import Select from "react-select";

//Use o componente Async para carregar opções de uma fonte remota enquanto o usuário digita.
import AsyncSelect from "react-select/async";

// components
import { Text } from "../text/text";

// data fake
import {
  options,
  colourOptions,
  ColourOption,
  optionsNameMotorista,
  DrivernameOption,
} from "./data-fake";

// styles
import {
  ContainerFiltered,
  WrapperSelect,
  WrapperTitle,
  FooterBottom,
} from "./styles";
import { Button } from "../button";

const Filter = () => {
  const theme = useTheme();

  const filterColors = (inputValue: string) => {
    return colourOptions.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const filterDriveName = (inputValue: string) => {
    return optionsNameMotorista.filter((driveName) =>
      driveName.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadOptions = (
    inputValue: string,
    callback: (options: ColourOption[]) => void
  ) => {
    setTimeout(() => {
      callback(filterColors(inputValue));
    }, 1000);
  };

  const loadOptionsDriveName = (
    inputValue: string,
    callback: (options: DrivernameOption[]) => void
  ) => {
    setTimeout(() => {
      callback(filterDriveName(inputValue));
    }, 1000);
  };
  return (
    <ContainerFiltered>
      <WrapperTitle>
        <Text
          marginTop={8}
          text="Filtrar Resultados"
          align="left"
          letterHeight={36}
          color={theme.colors.black_200}
          size={24}
          marginLeft={16}
          weight="600"
        />
      </WrapperTitle>
      <WrapperSelect>
        {/*** SELECT GRUPO*/}

        <Select
          placeholder={"Selecione o Grupo"}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? "grey" : theme.colors.gray_200,
              marginBottom: 12,
            }),
          }}
          options={options}
          onChange={(text) => console.log("texto-selecionado", text)}
        />

        {/*** SELECT TIPO*/}
        <Select
          placeholder={"Selecione o Tipo"}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? "grey" : theme.colors.gray_200,
              marginBottom: 12,
            }),
          }}
          options={options}
          onChange={(text) => console.log("texto-selecionado", text)}
        />

        {/*** SELECT TIPO*/}
        <Select
          placeholder={"Selecione o Staus"}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? "grey" : theme.colors.gray_200,
              marginBottom: 12,
            }),
          }}
          options={options}
          onChange={(text) => console.log("texto-selecionado", text)}
        />

        {/*** SELECT BOBINAS*/}
        <AsyncSelect
          placeholder={"Digite o número da bobina"}
          cacheOptions
          loadOptions={loadOptions}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? "grey" : theme.colors.gray_200,
              marginBottom: 12,
            }),
          }}
        />

        {/*** SELECT MOTORISTA*/}
        <AsyncSelect
          placeholder={"Selecione o nome do motorista(a)"}
          cacheOptions
          loadOptions={loadOptionsDriveName}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? "grey" : theme.colors.gray_200,
              marginBottom: 12,
            }),
          }}
        />

        {/*** SELECT PLACA DO VEÍCULO*/}
        <AsyncSelect
          placeholder={"Digite a placa do veículo"}
          cacheOptions
          loadOptions={loadOptionsDriveName}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? "grey" : theme.colors.gray_200,
              marginBottom: 12,
            }),
          }}
        />

        {/*** SELECT PLACA DO NÚMERO DA VIAGEM*/}
        <AsyncSelect
          placeholder={"Digite número da viagem"}
          cacheOptions
          loadOptions={loadOptionsDriveName}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? "grey" : theme.colors.gray_200,
            }),
          }}
        />
        <FooterBottom>
          <Button
            title="Limpar"
            backgroundColor={theme.colors.red_300}
            loading={false}
          />

          <Button
            title="Realizar Filtro"
            backgroundColor={theme.colors.blue_100}
            color={theme.colors.natural}
            loading={false}
          />
        </FooterBottom>
      </WrapperSelect>
    </ContainerFiltered>
  );
};

/**
 * EXPORTS
 */
export { Filter };
