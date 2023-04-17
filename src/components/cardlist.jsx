import React from "react";
import Card from "./card";

export default function CardGroup(){
    return(
        <div className="cardList">
            <h4 className="hero4">Topics</h4>
            <div className="row row-cols-1 row-cols-md-3  lg-4 card-row ">
            <div class="col-xl-3 col-md-4 col-lg-4 col-sm-6 cardItem"><Card/></div>
            <div class="col-xl-3 col-md-4 col-lg-4 col-sm-6 cardItem"><Card/></div>
            <div class="col-xl-3 col-md-4 col-lg-4 col-sm-6 cardItem"><Card/></div>
            <div class="col-xl-3 col-md-4 col-lg-4 col-sm-6 cardItem"><Card/></div>
            <div class="col-xl-3 col-md-4 col-lg-4 col-sm-6 cardItem"><Card/></div>
            <div class="col-xl-3 col-md-4 col-lg-4 col-sm-6 cardItem"><Card/></div>
            <div class="col-xl-3 col-md-4 col-lg-4 col-sm-6 cardItem"><Card/></div>
            <div class="col-xl-3 col-md-4 col-lg-4 col-sm-6 cardItem"><Card/></div>
            <div class="col-xl-3 col-md-4 col-lg-4 col-sm-6 cardItem"><Card/></div>
            <div class="col-xl-3 col-md-4 col-lg-4 col-sm-6 cardItem"><Card/></div>
            <div class="col-xl-3 col-md-4 col-lg-4 col-sm-6 cardItem"><Card/></div>
            <div class="col-xl-3 col-md-4 col-lg-4 col-sm-6 cardItem"><Card/></div>
            <div class="col-xl-3 col-md-4 col-lg-4 col-sm-6 cardItem"><Card/></div>
            <div class="col-xl-3 col-md-4 col-lg-4 col-sm-6 cardItem"><Card/></div>
            <div class="col-xl-3 col-md-4 col-lg-4 col-sm-6 cardItem"><Card/></div>
            <div class="col-xl-3 col-md-4 col-lg-4 col-sm-6 cardItem"><Card/></div>
            </div>
        </div>
    );
}