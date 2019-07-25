import React from "react";
import { MDBDataTable } from "mdbreact";

const Dfolders = () => {
  const data = {
    columns: [
      {
        label: "Folder",
        field: "folder",
        sort: "asc",
        width: 150
      },
      {
        label: "Descripción",
        field: "descripcion",
        sort: "asc",
        width: 270
      },
      {
        label: "Dueño",
        field: "dueno",
        sort: "asc",
        width: 200
      },
      {
        label: "Fecha Modificación",
        field: "fechamod",
        sort: "asc",
        width: 150
      }
    ],
    rows: [
      {
        folder: "Personal",
        descripcion: "Carpeta Personal de Archivos",
        dueno: "Hugo Moreno",
        fecham: "2011/04/25"
      },
      {
        folder: "Personal",
        descripcion: "Carpeta Personal de Archivos",
        dueno: "Hugo Moreno",
        fecham: "2011/04/25"
      },
      {
        folder: "Nueva",
        descripcion: "Carpeta Personal de Archivos",
        dueno: "Hugo Moreno",
        fecham: "2011/04/25"
      }
    ]
  };

  return <MDBDataTable striped bordered small data={data} />;
};

export default Dfolders;
