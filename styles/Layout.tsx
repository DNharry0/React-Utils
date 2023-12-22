import styled from '@emotion/styled';
type LayoutProps = {
    children: React.ReactNode;
};
const Layout:React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
        <Wrapper>
            {children}
        </Wrapper>
        </>
    );
}
export default Layout;

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    background-color: beige;
`;