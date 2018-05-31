import React from 'react';
import { compose } from 'recompose';
import form from 'controls/utils/form';
import { connect } from 'react-redux';
import receiveProps from 'components/utils/receiveProps';
import { createStructuredSelector, createSelector } from 'reselect';
import { createAuthUserCurrentSelector } from 'reducers/authUsers';
import UpdatePassword from './UpdatePassword';
import * as authUsersActions from 'actions/authUsers';

export const updatePasswordForm = ({
  fields,
  form,
  onUpdatePasswordVisibleChange,
}) => (
  <UpdatePassword
    fields={fields}
    form={form}
    onUpdatePasswordVisibleChange={onUpdatePasswordVisibleChange}
  />
);

export const updatePasswordFormHOC = compose(
  receiveProps(() => [createSelector(() => authUsersActions.fetchAuthUser())]),
  connect(() => {
    const account = createAuthUserCurrentSelector();
    return createStructuredSelector({
      account,
    });
  }),
  form(({ account: { id, password = '' } = {} }) => ({
    values: {
      id,
      password,
    },

    save: authUsersActions.saveAuthUser,
    validate({ password }) {
      let error;

      if (password.trim().length > 15) {
        error = { ...error, password: 'Up to 15 characters' };
      }

      return error;
    },
  }))
);

export default updatePasswordFormHOC(updatePasswordForm);
