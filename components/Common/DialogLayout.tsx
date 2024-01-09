import { AlertDialog, AlertDialogOverlay ,AlertDialogContent,AlertDialogHeader ,AlertDialogBody ,AlertDialogFooter , Button, useDisclosure } from '@chakra-ui/react';
import React from 'react';


const DialogLayout = ({ onClose ,isOpen,onSubmit }) => {
    
    const cancelRef = React.useRef() 
    return (
        <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
        >
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                        Delete 
                    </AlertDialogHeader>
                    <AlertDialogBody>
                        Are you sure? 
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='red' onClick={onSubmit} ml={3}>
                            Delete
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    );
}

export default DialogLayout;


