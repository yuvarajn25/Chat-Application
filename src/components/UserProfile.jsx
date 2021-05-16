import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Input } from "@chakra-ui/input";
import { Flex, Text } from "@chakra-ui/layout";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { saveUserProfile } from "../redux/actions/users";
import { imageToURL } from "../utils";

function UserProfile({ dispatch, users: { openUserProfile, currentUser } }) {
  const [localUser, setLocalUser] = useState(currentUser);

  const onSave = () => {
    dispatch(
      saveUserProfile({
        ...localUser,
        profile:
          currentUser.profile !== localUser.profile
            ? localUser.profileFile
            : currentUser.profile,
      })
    );
  };

  const onClose = () => {
    dispatch({ type: "CLOSE_USER_PROFILE" });
  };

  const onNameChange = (event) => {
    setLocalUser({ ...localUser, name: event.target.value });
  };

  const loadProfile = async () => {
    const profile = await imageToURL(currentUser.profile);
    setLocalUser({ ...currentUser, profile });
  };
  useEffect(async () => {
    loadProfile();
  }, [currentUser]);

  const onProfilePick = (event) => {
    console.log(event.target.files[0]);

    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setLocalUser({
          ...localUser,
          profile: e.target.result,
          profileFile: event.target.files[0],
        });
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };
  const profile = useRef();
  return (
    <Modal closeOnOverlayClick={false} isOpen={openUserProfile}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Profile</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex direction="column" alignItems="center">
            {/* <Avatar
              boxSize="150px"
              fontSize="2.5em"
              src={localUser.profile}
              onClick={() => {
                profile.current.click();
              }}
            /> */}

            <Image
              borderRadius="full"
              boxSize="150px"
              src={localUser.profile}
              fallbackSrc="https://via.placeholder.com/150"
              alt={localUser.name}
              onClick={() => {
                profile.current.click();
              }}
            />
            <Text
              textAlign="left"
              width="100%"
              fontWeight="bold"
              marginTop="10px"
            >
              Name
            </Text>
            <Input type="text" value={localUser.name} onChange={onNameChange} />
            <input
              id="myInput"
              type="file"
              ref={profile}
              style={{ display: "none" }}
              onChange={onProfilePick}
              accept="image/png, image/gif, image/jpeg"
            />
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onSave}>
            Save
          </Button>
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

const mapStateToProps = (state, props) => {
  return { ...state, ...props };
};

export default connect(mapStateToProps)(UserProfile);
