import { customSelect, inputAnimation } from '../utils';

const CustomForm = () => {
  customSelect($('.select-item--custom'));
  customSelect($('.select-item--placeholder'));
  inputAnimation($('.input-animation input'));
};

export default CustomForm;
