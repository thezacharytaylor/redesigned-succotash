/*PayloadAction is for typings  */
import {
  createSlice,
  ThunkAction,
  Action,
  PayloadAction,
} from '@reduxjs/toolkit';
import { RootState } from 'store/reducers';
import { GolferInput } from 'app/models/golfer-input-type';
// import axios, { EndPoints } from 'api/axios';

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

interface GolferInputState {
  name: string;
  score: number;
}

const initialState: GolferInputState = {
  name: '',
  score: -1,
};

const golferInputNamespace = 'golferInput';

/*Single-File implementation of Redux-Toolkit*/
const slice = createSlice({
  /*namespace for separating related states. Namespaces are like modules*/
  name: golferInputNamespace,

  /*initialState is the default value of this namespace/module and it is required.*/
  initialState, // same as initialState: initialState

  /*Non asynchronous actions. Does not require Axios.*/
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setScore(state, action: PayloadAction<number>) {
      state.score = action.payload;
    },
    // setDate(state, action: PayloadAction<string>) {
    //   state.date = action.payload
    // },
    // setLoading(state, action: PayloadAction<boolean>) {
    //   state.loading = action.payload;
    // },
    // setError(state, action: PayloadAction<string>) {
    //   state.error = action.payload;
    // },
    // getEvents(state, action: PayloadAction<EventType[]>) {
    //   state.events = action.payload;
    // },
  },
});

/* Asynchronous actions. Actions that require Axios (HTTP client)
 or any APIs of a library or function that returns a promise. */

// export const getEvents = (): AppThunk => async dispatch => {
//   dispatch(slice.actions.setLoading(true));
//   dispatch(slice.actions.setError(''));
//   try {
//     const response = await axios.get<EventType[]>(EndPoints.events);
//     dispatch(slice.actions.getEvents(response.data));
//   } catch (error) {
//     console.log(error.message);
//     dispatch(slice.actions.setError(error.message));
//   } finally {
//     dispatch(slice.actions.setLoading(false));
//   }
// };

export const { setName, setScore } = slice.actions;

export default slice.reducer;
