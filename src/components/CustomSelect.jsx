import { Box } from '@chakra-ui/react'
import React from 'react'
import Select from 'react-select'

export default function CustomSelect({
  options,
  placeholder,
  isMulti = true,
  defaultValue,
}) {
  const styles = {
    control: (baseStyles) => ({
      ...baseStyles,
      background: 'rgba(202, 163, 201, 1)',
      borderColor: 'rgba(168, 127, 161, 1)',
      borderWidth: '2px',
      fontSize: '3vh',
      fontWeight: '700',
      minWidth: '11em',
      maxWidth: '15em',
    }),
    valueContainer: (baseStyles) => ({
      ...baseStyles,
      paddingRight: '0',
    }),
    multiValue: (baseStyles) => ({
      ...baseStyles,
      background: 'rgba(202, 163, 201, 1)',
    }),
    multiValueLabel: () => ({
      color: 'rgba(168, 127, 161, 1)',
      background: 'rgba(255, 255, 255, 0.2)',
      paddingRight: '0.5vw',
      paddingLeft: '1vw',
    }),
    multiValueRemove: () => ({
      color: 'rgba(168, 127, 161, 1)',
      background: 'rgba(255, 255, 255, 0.2)',
      paddingRight: '0.5vw',
    }),
    singleValue: (baseStyles) => ({
      ...baseStyles,
      color: 'rgba(168, 127, 161, 1)',
      background: 'rgba(255, 255, 255, 0.2)',
      paddingRight: '0.5vw',
      paddingLeft: '0.5vw',
    }),
    clearIndicator: (baseStyles) => ({
      ...baseStyles,
      color: 'rgba(168, 127, 161, 1)',
    }),
    dropdownIndicator: (baseStyles) => ({
      ...baseStyles,
      color: 'rgba(168, 127, 161, 1)',
    }),
    indicatorSeparator: (baseStyles) => ({
      ...baseStyles,
      width: '2px',
      backgroundColor: 'rgba(168, 127, 161, 1)',
      margin: '0',
    }),
    placeholder: (baseStyles, state) => ({
      ...baseStyles,
      // color: state.isFocused ? 'rgba(168, 127, 161, 1)' : 'red',
      color: 'rgba(168, 127, 161, 1)',
      paddingRight: '1vw',
      margin: '0',
    }),
    menuList: () => ({
      color: 'rgba(168, 127, 161, 1)',
      fontSize: '3vh',
      fontWeight: '700',
    }),
  }
  return (
    <Box>
      <Select
        isMulti={isMulti}
        options={options}
        placeholder={placeholder}
        defaultValue={defaultValue}
        isClearable
        styles={styles}
      />
    </Box>
  )
}
