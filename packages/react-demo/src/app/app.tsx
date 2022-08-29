import { IoButton } from '@io/web-components-react';

export function App() {
    return (
        <>
            <IoButton appearance='primary'>Primary</IoButton>
            <IoButton appearance='secondary'>Secondary</IoButton>
            <IoButton appearance='tertiary'>Tertiary</IoButton>
            <IoButton appearance='warning'>Warning</IoButton>
            <IoButton appearance='danger'>Danger</IoButton>
            <IoButton appearance='flat'>Flat</IoButton>
        </>
    );
}

export default App;
