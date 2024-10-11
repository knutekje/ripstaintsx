import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";
import { ItemDropDown } from "../Report/ItemDropDown";
import { LuInspect } from "react-icons/lu";

function ModalVerify() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Button leftIcon={<LuInspect/>} onClick={onOpen}>Inspect</Button>
  
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
                        <>Mega korwa</>
                        <ItemDropDown/>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}
  
export default ModalVerify;