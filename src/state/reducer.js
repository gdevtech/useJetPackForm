export const FORM_SUBMISSIONS = 'FORM_SUBMISSIONS';

const formReducer = (draft, action) => {
  switch (action.type) {
    case FORM_SUBMISSIONS : {
      draft.formSubmissions = action.payload;
      return;
    }
    default:
      return;
  }
};


export { formReducer };