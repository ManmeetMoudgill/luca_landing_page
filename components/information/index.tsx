import React from "react";
import LinkText from "../shared/linkText";
import GreenText from "../shared/greenText";
const index = () => {
  return (
    <div className=" text-xl px-[1.5rem] md:px-[5rem]  justify-center items-center">
      <div className=" justify-center items-center py-8 md:py-12">
        <div className="md:mx-auto md:w-[90%] lg:w-[60%]">
          <div className="flex flex-col justify-between items-center ">
            <p className=" text-[#707070]">Quale é il vostro segreto?</p>
            <p className="text-3xl font-bold leading-14 mt-3 mb-12  text-center break-words">
              Il nostro segreto e il Money Management che un pilastro solido di
              questo settore.
            </p>
          </div>
          <div className="mt-4">
            <p className="mb-4">
              La nostra esperienza pluriennale ci ha consentito di esplorare,
              testare e perfezionare oltre
              <GreenText text="1000 strategie " />
              robotizzate. Il nostro obiettivo principale è individuare e
              offrire solo le strategie più solide e durature nel tempo.
            </p>
            <p className="mb-4">
              Operiamo con una filosofia incentrata sull'eccellenza e
              sull'adattabilità al mutevole panorama del mercato finanziario. Ci
              impegniamo costantemente per portare ai nostri clienti solo le
              strategie più consistenti, quelle che dimostrano di poter
              resistere nel lungo periodo,
              <GreenText text="garantendo affidabilità e successo" />
              nel trading.
            </p>

            <p className="mb-4">
              In SniperForex, crediamo che il successo nel trading non sia solo
              una questione di rendimenti immediati, ma piuttosto di una
              crescita costante e sostenibile nel tempo. Le nostre strategie
              selezionate con cura mirano a fornire una base solida su cui
              costruire il vostro percorso nel mondo del trading.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
