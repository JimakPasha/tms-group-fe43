import { confirmEmailReducer } from "./reducer";
import { setConfirmEmailAction, resetConfirmEmailAction } from "./actions";
import { RESET_CONFIRM_EMAIL } from "./actionTypes";

describe('confirmEmail reducer', () => {

    test('should return the initial state', () => {
        const state = confirmEmailReducer(undefined, { type: RESET_CONFIRM_EMAIL });
    
        expect(state).toEqual({
          confirmEmail: '',
        });
    });

    test('should handle SET_CONFIRM_EMAIL', () => {
        const initialState = {
          confirmEmail: '',
        };
    
        const actionResult = setConfirmEmailAction('example@example.com');
        const newState = confirmEmailReducer(initialState, actionResult);
    
        expect(newState).toEqual({
          confirmEmail: 'example@example.com',
        });
      });

      test('should handle RESET_CONFIRM_EMAIL', () => {
        const initialState = {
          confirmEmail: 'example@example.com',
        };
    
        const actionResult = resetConfirmEmailAction();
        const newState = confirmEmailReducer(initialState, actionResult);
    
        expect(newState).toEqual({
          confirmEmail: '',
        });
      });

});