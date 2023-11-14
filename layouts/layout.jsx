import { AppBar, Toolbar } from "@mui/material";



export default function Layout({ children }) {
    return (
        <>

            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <AppBar position="static">
                    <Toolbar>
                        <h1>Lab 4</h1>
                    </Toolbar>
                </AppBar>
                <div style={{ flex: '1' }}>
                    {children}
                </div>
                <footer style={{ background: 'black', color: 'white', textAlign: 'center' }}>Footer</footer>
            </div>

        </>
    );
}