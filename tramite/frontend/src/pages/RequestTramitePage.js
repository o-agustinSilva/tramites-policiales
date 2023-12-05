import React, { Component } from "react";
import Header from "../components/Header";
import InfoTramite from "../components/InfoTramite";
import RequestTramite from "../components/RequestTramite";

export function RequestTramitePage() {
  return (
    <div>
      <Header />
      <InfoTramite />
      <RequestTramite />
    </div>
  );
}
