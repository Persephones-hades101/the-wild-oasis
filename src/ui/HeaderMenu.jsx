import styled from 'styled-components';
import { HiOutlineUser } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

import Logout from '../features/authentication/Logout';
import ButtonIcon from './ButtonIcon';
import DarkModeToggle from './DarkModeToggle';

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.8rem;
`;

export default function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate('/account')}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>
        <Logout />
      </li>
    </StyledHeaderMenu>
  );
}
