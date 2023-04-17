import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer(){
    return (
        <section id="footer">
            <div className="Footer">
            <a href="https://github.com/Sampad-Adhikary" target="blank"><GitHubIcon/></a>
            <p>Designed and developed by <a className="footerA" href="https://sampadadhikary.cyclic.app/" target="blank">Sampad Adhikary</a> ©️ 2023</p>
            </div>
        </section>
    );
}