import breakpoints from "../../breakpoints";
import styled from "styled-components";

const Button = styled.button`
  background-color: var(--color-primary);
  position: absolute;
  padding: 1rem;
  font-size: 1.5rem;
  color: white;
  border: none;
  border-radius: 100%;
  width: 4rem;
  aspect-ratio: 1/1;

  &&:hover {
    cursor: pointer;
  }

  @media ${breakpoints.tablet} {
    width: 6rem;
    right: 12%;
  }
`;

const ButtonSubmit = ({ className, ...props }) => {
  return (
    <div className={className}>
      <Button {...props} type='submit'>
        ▼
      </Button>
      <hr />
    </div>
  );
};

export default styled(ButtonSubmit)`
  display: flex;
  margin: 2rem 0 0;
  justify-content: center;
  align-items: center;

  > hr {
    width: 100%;
    border: 1px solid var(--color-light-grey, black);
  }

  @media ${breakpoints.tablet} {
    justify-content: right;
  }
`;
