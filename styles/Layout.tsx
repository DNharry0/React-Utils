import styled from '@emotion/styled';
type LayoutProps = {
    children: React.ReactNode;
};
const Layout:React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
        <Wrapper>
            <h1>Layout</h1>
        </Wrapper>
        </>
    );
}
export default Layout;

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background-color: red;
`;