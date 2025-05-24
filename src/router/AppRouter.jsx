import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { MainLayouts } from "../layouts/MainLayouts";
import { Home } from "../pages/Home";
import { Nosotros } from "../pages/Nosotros";
import { Eventos } from "../pages/Eventos";
import { Biblioteca } from "../pages/Biblioteca";
import { Unete } from "../pages/Unete";
import { Contacto } from "../pages/Contacto";
import { Directiva } from "../pages/Directiva";
import { Miembros } from "../pages/Miembros";
import { EventosNacionales } from "../pages/EventosNacionales";
import { EventosInternacionales } from "../pages/EventosInternacionales";
import { EventosAsopebaid } from "../pages/EventosAsopebaid";
import { Enlaces } from "../pages/Enlaces";
import { Noticias } from "../pages/Noticias";
import { Articulos } from "../pages/Articulos";
import { Login } from "../pages/login/Login";
import { PageNotFound } from "../pages/PageNotFound";
import MisionVision from "../pages/MisionVision";
import { Objetivos } from "../pages/Objetivos";
import AulaVirtualLayout from "../layouts/AulaVirtualLayout";
import AulaVirtualHome from "../pages/aulaVirtual/AulaVirtualHome";
import Register from "../pages/login/Register";
import ProtectedRouter from "../router/ProtectedRouter";
import { Covid19 } from "../pages/Covid19";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayouts />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/mision-vision" element={<MisionVision />}></Route>
          <Route path="/objetivos" element={<Objetivos />}></Route>
          <Route path="/nosotros" element={<Nosotros />}></Route>
          <Route path="/directiva" element={<Directiva />}></Route>
          <Route path="/miembros" element={<Miembros />}></Route>
          <Route path="/eventos" element={<Eventos />}></Route>
          <Route
            path="/eventos-nacionales"
            element={<EventosNacionales />}
          ></Route>
          <Route
            path="/eventos-internacionales"
            element={<EventosInternacionales />}
          ></Route>
          <Route
            path="/eventos-asopebaid"
            element={<EventosAsopebaid />}
          ></Route>
          <Route path="/biblioteca" element={<Biblioteca />}></Route>
          <Route path="/enlaces" element={<Enlaces />}></Route>s
          <Route path="/noticias" element={<Noticias />}></Route>
          <Route path="/articulos" element={<Articulos />}></Route>
          <Route path="/covid" element={<Covid19 />}></Route>
          <Route path="/unete-a-nosotros" element={<Unete />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
        {/* <Route path="*" element={<h1>404 Not Found</h1>} /> */}

        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        {/*  <Route path="/aula-virtual" element={<AulaVirtualLayout />}>
          <Route path="/aula-virtual" element={<AulaVirtualHome />} />
        </Route> */}
        <Route
          path="/aula-virtual"
          element={
            <ProtectedRouter>
              <AulaVirtualLayout />
            </ProtectedRouter>
          }
        >
          <Route index element={<AulaVirtualHome />} />
        </Route>
      </Routes>
    </>
  );
};
