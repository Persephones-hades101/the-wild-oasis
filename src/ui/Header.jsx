import styled from 'styled-components';
import Logout from '../features/authentication/Logout';
import HeaderMenu from './HeaderMenu';
import UserAvatar from '../features/authentication/UserAvatar';

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.6rem 2rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  justify-content: flex-end;
  gap: 2.6rem;
  align-items: center;
`;

export default function Header() {
  return (
    <StyledHeader>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}
