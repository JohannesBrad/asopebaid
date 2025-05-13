import React from "react";
import AulavirtualHeader from "../components/AulavirtualHeader";
import { Outlet } from "react-router-dom";

const AulaVirtualLayout = () => {
  return (
    <>
      <div className="flex flex-col h-screen bg-[#f9fafb]">
        {/* Header en la parte superior */}
        <AulavirtualHeader className="w-full z-50" />
        {/* <div className="flex flex-1 pt-[5.2rem]"> */}
        {/* Sidebar en la izquierda */}
        {/* <DashboardSidebar className="" /> */}
        {/* Contenido principal */}
        <main className="flex-1 px-6   overflow-auto  h-[calc(100vh-4rem)]">
          <Outlet />
        </main>
        {/*         </div> */}
      </div>
    </>
  );
};

export default AulaVirtualLayout;
