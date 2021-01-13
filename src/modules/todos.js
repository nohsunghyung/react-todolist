// 액션타입
const CHANGE_INPUT = "todos/CHANGE_INPUT";
const INSERT = "todos/INSERT";
const TOGGLE_COMPLETE = "todos/TOGGLE_COMPLETE";
const DELETE = "todos/DELETE";
const TOGGLE_EDIT = "todos/TOGGLE_EDIT";
const UPDATE_TODO = "todos/UPDATE_TODO";

// 액션함수

// input 핸들
export const onChangeInput = (value) => ({
  type: CHANGE_INPUT,
  value,
});

let nextId = 4;

// 리스트 추가
export const addTodo = (text) => ({
  type: INSERT,
  todo: {
    id: nextId++,
    text,
    isComplete: false,
    isEditActive: false,
  },
});

// 완료 핸들
export const onChangeComplete = (id) => ({
  type: TOGGLE_COMPLETE,
  id,
});

// 삭제 핸들
export const deleteItem = (id) => ({
  type: DELETE,
  id,
});

// 수정폼 토글
export const onChangeEdit = (id) => ({
  type: TOGGLE_EDIT,
  id,
});

// 수정하기 핸들
export const updateTodo = (id, text) => ({
  type: UPDATE_TODO,
  id,
  text,
});

// 초기 state
const initialState = {
  inputValue: "",
  todos: [
    { id: 1, text: "할일1", isComplete: false, isEditActive: false },
    { id: 2, text: "할일2", isComplete: false, isEditActive: false },
    { id: 3, text: "할일3", isComplete: false, isEditActive: false },
  ],
};

// 리듀서 함수
const todos = (state = initialState, action) => {
  const { todos } = state;
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        inputValue: action.value,
      };
    case INSERT:
      return {
        ...state,
        todos: todos.concat(action.todo),
      };
    case TOGGLE_COMPLETE:
      return {
        ...state,
        todos: todos.map((info) =>
          info.id === action.id
            ? { ...info, isComplete: !info.isComplete }
            : info
        ),
      };
    case DELETE:
      const newLists = todos.filter((info) =>
        info.id !== action.id ? info : null
      );
      return {
        ...state,
        todos: newLists,
      };
    case TOGGLE_EDIT:
      return {
        ...state,
        todos: todos.map((info) =>
          info.id === action.id
            ? { ...info, isEditActive: !info.isEditActive }
            : info
        ),
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: todos.map((info) =>
          info.id === action.id
            ? { ...info, text: action.text, isEditActive: false }
            : info
        ),
      };
    default:
      return state;
  }
};

export default todos;
