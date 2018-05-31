import React from 'react';
import { compose, withHandlers } from 'recompose';
import ModalWindow from 'controls/ModalWindow';
import Input from 'controls/Input';
import Button from 'controls/Button';
import { UpdatePasswordStyled } from './UpdatePassword.styles';

export const updatePassword = ({
  onUpdatePasswordVisibleChange,
  onModalButtonClick,
  // fields: { password },
  form: { errors },
}) => (
  <ModalWindow
    title="Update password"
    onVisibleChange={onUpdatePasswordVisibleChange}
    footerContent={
      <Button onClick={onModalButtonClick} disabled={errors.length > 0}>
        Done
      </Button>
    }
    closeButtonDisabled={errors.length > 0}
    visible
  >
    <UpdatePasswordStyled>
      <UpdatePasswordStyled.Input>
        <Input label="Old password" />
      </UpdatePasswordStyled.Input>

      <UpdatePasswordStyled.Input>
        <Input label="New password" />
      </UpdatePasswordStyled.Input>

      <UpdatePasswordStyled.Input>
        <Input label="Re-enter new password" />
      </UpdatePasswordStyled.Input>
    </UpdatePasswordStyled>
  </ModalWindow>
);

export const updatePasswordHOC = compose(
  withHandlers({
    onModalButtonClick: ({ onUpdatePasswordVisibleChange }) => () => {
      onUpdatePasswordVisibleChange(false);
    },
  })
);

export default updatePasswordHOC(updatePassword);
