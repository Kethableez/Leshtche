import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user/user.model';
import { RegisterPayload } from '../../models/user/register-payload';

export const register = createAction('[User] Register', props<{ registerPayload: RegisterPayload }>());

export const registerSuccess = createAction('[User] Register success');

export const getData = createAction('[User] Fetch data');

export const getDataSuccess = createAction('[User] Fetch data success', props<{ user: User }>());

// export const editUser = createAction('[User] Edit user', props<{ data: any }>());

// export const editUserSuccess = createAction('[User] Edit user success', props<{ changedUser: any }>());

export const clearData = createAction('[User] Clear data');

export const userError = createAction('[User] Error', props<{ message: string; dispatchNotification: boolean }>());
