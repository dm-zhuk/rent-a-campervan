import {
  CheckRadioInput,
  FiltersContainer,
  FiltersTypeInput,
  CheckRadioLabel,
} from '../components/AdvertFilter/temp-index';

const RadioBtn = ({ svg, label, value }) => {
  return (
    <CheckRadioInput>
      <FiltersContainer>
        <FiltersTypeInput type="radio" id={label} value={value} />
        <CheckRadioLabel htmlFor={label}>
          {svg}
          {label}
        </CheckRadioLabel>
      </FiltersContainer>
    </CheckRadioInput>
  );
};

export default RadioBtn;
