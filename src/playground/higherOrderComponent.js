import React from 'react';
import ReactDOM from 'react-dom';
const Info = (props) => (
<div>
<h1> info page</h1>
<p>this info is: {props.info}</p>
</div>
);


const withAdminWarning= (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAdmin && <p>This is private info please don't share</p>}
        <WrappedComponent {...props}/>
        </div>

    );
};
const requireAuthentication= (WrappedComponent) => {
    return (props )=>  (
        <div>
        {!props.isAuthenticated && <p>This User is not authenticated</p>}

        <WrappedComponent {...props}/>
        </div>
    );
}

// requireAuthentication
const AuthInfo = requireAuthentication(Info);


const Admin =withAdminWarning(Info);
// ReactDOM.render(<Admin isAdmin={false} info= "my information"/>, document.querySelector('#app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info= "my information"/>, document.querySelector('#app'));
