import { MemberQuery } from "@/types";
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

export default function EquipeMembers({ members }: { members: MemberQuery[] }) {
  return (
    <TableContainer className="border bg-white border-slate-300 rounded-lg">
      <Table>
        <Thead>
          <Tr>
            <Th>M./ Mme</Th>
            <Th>Nom et Prénom</Th>
            <Th>Dernier diplôme</Th>
            <Th>Grade</Th>
            <Th>Domaine</Th>
            <Th>Structure de rattachement</Th>
            <Th>Email actif</Th>
          </Tr>
        </Thead>
        <Tbody>
          {members.map((member, i) => (
            <Tr key={i}>
              <Td>{member.marital}</Td>
              <Td>{member.name + " " + member.surname}</Td>
              <Td>{member.lastDiploma}</Td>
              <Td>{member.grade}</Td>
              <Td>{member.domain}</Td>
              <Td>{member.attachmentStructure}</Td>
              <Td>{member.email}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
