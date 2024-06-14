export type MemberQuery = {
  marital: "Mr" | "Mme" | "Melle";
  name: string;
  surname: string;
  birthday?: string; // Date of birth can be optional
  lastDiploma: "Doc. D'état" | "Doctorat" | "DESM" | "Magister" | "DEMS" | "Master";
  grade: "Pr" | "Doc" | "MAB, Doc." | "MAA, Doc." | "MAB" | "MAA" | "MCB" | "MCA";
  attachmentStructure: string;
  domain: string
  email?: string; // Email can be optional
}