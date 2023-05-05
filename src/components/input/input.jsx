import breakpoints from "../../breakpoints";
import styled from "styled-components";

const Input = styled.input`
  font-weight: 700;
  font-size: var(--fontsize-input, 1rem);
  width: 100%;
  border-radius: 15px;
  border: 0.2px solid var(--color-smoke-grey, black);
  padding: 1rem;

  @media ${breakpoints.tablet} {
    width: 10rem;
  }
`;

const Label = styled.label`
  letter-spacing: 0.4rem;
`;

const Warning = styled.p`
  color: var(--color-error, red);
`;

const Component = ({ name, label, value, onChange, warning, className }) => {
  return (
    <div className={className}>
      <Label>{label.toUpperCase()}</Label>
      <Input name={name} type='number' value={value} onChange={onChange} />
      {warning && <Warning>{warning}</Warning>}
    </div>
  );
};

export default styled(Component)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 1rem;
  ${(props) =>
    props.warning
      ? "color: var(--color-error, red);"
      : "color: var(--color-off-black, black);"}
`;
