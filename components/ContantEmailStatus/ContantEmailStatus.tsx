"use client";
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

const message = {
  success: {
    title: "Message Envoyé",
    body: "Le message a été envoyé avec succès",
  },
  failure: {
    title: "Message n'est pas Envoyé!",
    body: "Désolé, une erreur s'est produite lors de l'envoi du message",
  },
};

export default function ContantEmailStatus({ isSent }: { isSent: boolean }) {
  const { onClose } = useDisclosure();
  const router = useRouter();
  const handleClose = () => {
    onClose();
    router.push("/contact");
  };

  return (
    <Modal closeOnOverlayClick={false} isOpen onClose={handleClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {isSent ? message.success.title : message.failure.title}
        </ModalHeader>
        <ModalBody>
          <Text fontSize={16}>
            {isSent ? message.success.body : message.failure.body}
          </Text>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleClose}>Fermer</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
