import styled from 'styled-components';
import Logout from '../features/authentication/Logout';

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.6rem 2rem;
  border-bottom: 1px solid var(--color-grey-100);
`;

export default function Header() {
  return (
    <StyledHeader>
      <Logout />
    </StyledHeader>
  );
}
