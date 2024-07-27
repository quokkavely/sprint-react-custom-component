import { useState } from 'react';
import styled from 'styled-components';

export const ModalContainer = styled.div`
  // TODO : Modal을 구현하는데 전체적으로 필요한 CSS를 구현합니다.
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const ModalBackdrop = styled.div`
  // TODO : Modal이 떴을 때s의 배경을 깔아주는 CSS를 구현합니다.
  position: sticky;
  width: 1280px;
  height:450px;
  opacity: 0.8;
  background-color: gainsboro;
`;

export const ModalBtn = styled.button`
  background-color: pink;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

export const ModalView = styled.div.attrs((props) => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  role: 'dialog',

}))`
  // TODO : Modal창 CSS를 구현합니다.
  width: 200px;
  position: relative;
  left: 550px;
  top: 30px;
  height: 200px;
  padding: 20px;
  background-color: aliceblue;
  text-align: center;
`;

export const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = (e) => {
    // TODO : isOpen의 상태를 변경하는 메소드를 구현합니다.
    setIsOpen(!isOpen);
  };




  return (
    <>
      <ModalContainer>
        <ModalBtn onClick={openModalHandler}>
          {isOpen ? 'Opened!' : 'Open Modal'}
        </ModalBtn>
        {isOpen &&(
          <ModalBackdrop onClick={openModalHandler}>
            <ModalView onClick={(e) => e.stopPropagation()}>
            <h2>😛메롱👅</h2>
            <br/> <br/> <br/>
              <button onClick={openModalHandler}>
              <span>  close </span>
              <div>  </div>
            </button>
            </ModalView>
          </ModalBackdrop>)}
      </ModalContainer>
    </>
  );
};
