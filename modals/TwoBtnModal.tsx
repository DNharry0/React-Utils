import styled from '@emotion/styled';
import Image from 'next/image';
import errorSign from '../../../public/images/errorSign.svg';

type Props = {
  text: string;
  confirmText?: string;
  cancelText?: string;
  confirmFunc: (args: any) => void;
  cancelFunc: (args: any) => void;
};

const TwoBtnModal = ({
  text,
  cancelText,
  confirmFunc,
  cancelFunc,
  confirmText,
}: Props) => {
  console.log('modal2');
  return (
    <_inner>
      <_content>
        <Image src={errorSign} alt="" />
        <p>{text}</p>
      </_content>
      <_btnWrap>
        <button onClick={confirmFunc}>
          {confirmText ? confirmText : '등록'}
        </button>
        <button onClick={cancelFunc}>{cancelText ? cancelText : '취소'}</button>
      </_btnWrap>
    </_inner>
  );
};

export default TwoBtnModal;

const _inner = styled.div`
  width: 352px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0px 2px 20px 0px rgba(13, 17, 26, 0.16);
  overflow: hidden;
`;
const _content = styled.div`
  padding: 24px;
  text-align: center;
  > img {
  }
  > p {
    white-space: pre-wrap;
  }
`;

const _btnWrap = styled.div`
  display: flex;
  border-top: 1px solid var(--70, #dcdcdf);
  > button {
    border: none;
    cursor: pointer;
    background-color: white;
    flex: 1;
    text-align: center;
    padding: 20px 0px;
    &:nth-of-type(1) {
      border-right: 1px solid var(--70, #dcdcdf);
    }
  }
`;
