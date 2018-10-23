import React from 'react';
import Button from './button';
import {NavLink} from 'react-router-dom';

const navbar = () =>{
    return(
            <div className="bg-black fixed w-100 ph3 pv1 pv2-ns ph4-m ph5-l top-0">
                <div className="f6 fw6 ttu tracked">
                    <NavLink to="/blog/"><Button SentText={"Blog"}/></NavLink>
                    <NavLink to="/store/"><Button SentText={"Store"}/></NavLink>
                </div>
            </div>
    );
}
export default navbar;
