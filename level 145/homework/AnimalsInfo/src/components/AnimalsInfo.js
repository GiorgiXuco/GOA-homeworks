import React from "react";
import AnimalsList from "./AnimalsList";
import DragonComponent from "./DragonComponent";
import CatComponent from "./CatComponent";
import DogComponent from "./DogComponent";

function AnimalsInfo() {
    return (
        <AnimalsList>
            <DragonComponent />
            <CatComponent />
            <DogComponent />
        </AnimalsList>
    );
}

export default AnimalsInfo;