import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
} from "@chakra-ui/modal";
import { Button, ModalOverlay } from "@chakra-ui/react";
import { friendSchema } from "@whatsapp-clone/common-validate";
import { Form, Formik } from "formik";
import TextField from "../TextField";
const AddFriendModal = ({isOpen, onClose}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Add a Friend!</ModalHeader>
                <ModalCloseButton/>
                <Formik initialValues={{friendName : ''}}
                    onSubmit={values => {
                        onClose()
                    }}
                    validationSchema={friendSchema}
                >
                    <Form>
                        <ModalBody>
                            <TextField
                                label="friend's name"
                                placeholder="enter your friend's name"
                                autoComplete="off"
                                name="friendName" />
                        </ModalBody>
                        <ModalFooter>
                            <Button color={"blue"} type={"submit"}>submit</Button>
                        </ModalFooter>
                    </Form>
                </Formik>
            </ModalContent>
        </Modal>
    )
}

export default AddFriendModal;