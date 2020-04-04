import { combineReducers } from "redux";
import teacherReducer from "./teacherReducer";

export default combineReducers({
	//** teacher is root state for teacher things meaning that all the property should be access as  teacher.teachers, teacher.loading and so on.
	teacher: teacherReducer
});
