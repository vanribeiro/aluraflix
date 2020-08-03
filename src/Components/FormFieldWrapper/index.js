import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Label = styled.label``;

const FormFieldWrapper = styled.div`
    position: relative;
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
`;

Label.Text = styled.span`
  color: #E5E5E5;
  height: 56px;
  position: absolute;
  top: 0;
  left: 16px;

  display:flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 1.125em;
  font-style: normal;
  font-weight: 300;

  transition: .1s ease-in-out;
`;

const Input = styled.input`
  background: #53585D;
  color: #F5F5F5;
  display: block;
  width: 100%;
  height: 56px;
  
  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585D;
  
  
  padding: ${(inputcolor) => (inputcolor ? '16px' : '5px')};
  margin-bottom: 45px;
  
  resize: none;
  border-radius: 4px;
  transition: border-color .5s;

  font-family: Roboto;
  font-style: normal;
  font-weight: 300;
  font-size: 1.125em;
  line-height: 21px;
  

    &:focus{
      border-bottom-color: var(--primary);
    }

    &:focus:not([type='color']) + span {
      transform: scale(.6) translateY(-10px);
    }

  ${({ hasValue }) => {
    return hasValue && css`
      &:not([type='color']) + span {
        transform: scale(.6) translateY(-10px);
      }
    `;
  }}
`;

const FormField = ({
  type, id, name, value, onChange, inputcolor, label,
}) => {
  const isTypeTextArea = type === 'textarea';
  const tag = isTypeTextArea ? 'textarea' : 'input';
  const hasValue = Boolean(value.length);

  return (
    <>
      <FormFieldWrapper>
        <Label>
          <Input
            as={tag}
            hasValue={hasValue}
            type={type}
            id={id}
            value={value}
            name={name}
            onChange={onChange}
            inputcolor={inputcolor}
          />
          <Label.Text>
            {label}
            :
          </Label.Text>
        </Label>
      </FormFieldWrapper>
    </>
  );
};

FormField.defaultProps = {
  type: 'text',
  value: '',
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  // eslint-disable-next-line react/require-default-props
  inputcolor: PropTypes.bool,
};

export default FormField;