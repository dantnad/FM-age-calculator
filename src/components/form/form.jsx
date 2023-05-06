import styled from "styled-components";

const Warning = styled.p`
  color: var(--color-error, red);
`;

const Form = ({ action, warning, className, children, ...props }) => {
  return (
    <form {...props} className={className}>
      <div className='input-group'>{children}</div>
      {warning && <Warning>{warning}</Warning>}
    </form>
  );
};

export default styled(Form)`
  && .input-group {
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
    gap: 1rem;
  }
`;
