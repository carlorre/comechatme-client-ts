interface IMessageObject {
  username: string,
  message: string,
  time: string,
  color: string,
}

interface IMessages {
  messages: IMessageObject[]
}

const initialSate = {
  messages: [],
};

const messagesReducer = (state:IMessages = initialSate, action: any) => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case 'RESET_MESSAGES':
      return {
        messages: [],
      };
    default:
      return state;
  }
};

export default messagesReducer;
