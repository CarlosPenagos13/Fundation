import React from "react";
import { Table } from "react-bootstrap";

import { ContainerTable } from "./Styled";

const TableEstrategias = () => {
  return (
    <ContainerTable>
      <Table striped bordered hover variant="success">
        <thead>
          <tr>
            <th>Lineas Estrategicas</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Eduquémonos en ambiente</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>Pasantías</td>
          </tr>
          <tr>
            <td></td>
            <td>Practicas empresariales</td>
          </tr>
          <tr>
            <td></td>
            <td>Trabajo social</td>
          </tr>
          <tr>
            <td></td>
            <td>Capacitaciones</td>
          </tr>
          <tr>
            <td>Un nuevo aire para la región</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>Reforestación</td>
          </tr>
          <tr>
            <td></td>
            <td>Limpieza y recolección de residuos </td>
          </tr>
          <tr>
            <td>Cuidala que es vida</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td>Cuidado y mantenimiento de las fuentes hídricas naturales</td>
          </tr>
        </tbody>
      </Table>
    </ContainerTable>
  );
};
export default TableEstrategias;

// Un  nuevo aire para la región

// Reforestación
// Limpieza y recolección de residuos

// Cuídala que es vida
// Cuidado y mantenimiento de las fuentes hídricas naturales
