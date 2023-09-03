import { FC, useState, useEffect } from 'react';
import { useWidth } from '@/hooks/useWidth';
import { BIG_MENU } from '@/assets/constant';
import MenuLayout from './menuLayout/MenuLayout';
import Wrapper from './Wrapper/Wrapper';
type Params = {
  isMenuOpen: boolean;
};
const SideMenu: FC<Params> = ({ isMenuOpen }) => {
  const { width } = useWidth();
  const [leftPosition, setLeftPosition] = useState<number>(
    width >= BIG_MENU ? 0 : -1
  );
  useEffect(() => {
    setLeftPosition(isMenuOpen ? 0 : -1);
  }, [isMenuOpen]);

  return (
    <>
      <Wrapper left={leftPosition * width}>
        <MenuLayout />
      </Wrapper>
    </>
  );
};
export default SideMenu;
