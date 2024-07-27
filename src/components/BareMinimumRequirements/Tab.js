import { useState } from 'react';
import styled from 'styled-components';

// TODO: Styled-Component 라이브러리를 활용해 TabMenu 와 Desc 컴포넌트의 CSS를 구현합니다.

const TabMenu = styled.ul`
  background-color: lightsalmon;
  color: rgba(73, 73, 73, 0.5);
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-items: center;
  align-items: center;
  list-style: none;
  margin-bottom: 7rem;
  

  .submenu {
    cursor: pointer;
    transition: 0.3s ease;
  }

  .focused {
    color: orangered;
    background: #faf6ec;
    &:hover {
      background-color: antiquewhite;
    }
  }

  & div.desc {
    text-align: center;
  }
`;

const Desc = styled.div`
  text-align: center;
`;

export const Tab = () => {

  const[currentTab, setCurrentTab]=useState(0);


  const menuArr = [
    { name: 'Tab1', content: 'Tab menu ONE' },
    { name: 'Tab2', content: 'Tab menu TWO' },
    { name: 'Tab3', content: 'Tab menu THREE' },
  ];

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };

  return (
    <>
      <div>
        <TabMenu>
          {menuArr.map((el,index)=>(
            <li
            key ={index}
              className={`submenu ${currentTab===index? 'focused' : '' }`}
              onClick={() => selectMenuHandler(index)}
            >
            {el.name}
            </li>

          ))}
        </TabMenu>
        <Desc>
          <p>{menuArr[currentTab].content}</p>
        </Desc>
      </div>
    </>
  );
};
