import { EquipeQuery } from "@/types";
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import React from "react";

export default function DocEquipeMembers({
  docMembers,
}: Pick<EquipeQuery, "docMembers">) {
  return (
    <TableContainer className="border bg-white border-slate-300 rounded-lg">
      <Table>
        <Thead>
          <Tr>
            <Th>Nom et Prénom</Th>
            <Th>Nom et Prénom du ou des encadreurs</Th>
          </Tr>
        </Thead>
        <Tbody>
          {docMembers.map((doc, i) => (
            <Tr key={i}>
              <Td>{doc.name + " " + doc.surname}</Td>
              <Td>{doc.encadreurs}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
