import React from 'react';
import cl from  './Layout.css';

const Layout=(props)=>

    (<React.Fragment>

        <div>
            Toolbar,sidbar,backdrop
        </div>
        <main className={cl.Content}>
            {props.children}
        </main>
    </React.Fragment>
    );


export default Layout;