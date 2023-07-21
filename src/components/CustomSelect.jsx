import { Box } from '@chakra-ui/react'
import React from 'react'
import Select from 'react-select'

export default function CustomSelect({
  options,
  placeholder,
  isMulti = true,
  defaultValue,
}) {
  return (
    <Box w='200px'>
      <Select
        isMulti={isMulti}
        options={options}
        placeholder={placeholder}
        defaultValue={defaultValue}
        isClearable
      />
    </Box>
  )
}
