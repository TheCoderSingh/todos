import React, { useState } from "react";
import "./AddItem.scss";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../todoSlice";

const AddItem = () => {
	const todoItems = useSelector((state) => state.todo.value);
	const dispatch = useDispatch();

	const [todoName, setTodoName] = useState();
	const [todoCount, setTodoCount] = useState(0);

	const handleChangeName = (e) => {
		setTodoName(e.target.value);
	};

	const renderTodos = () => {
		return todoItems.map((item, i) => (
			<div className="item" key={i}>
				<li className="item-name">{item}</li>
				<div className="btn-grp">
					<button className="edit">
						<EditIcon />
					</button>
					<button className="delete">
						<DeleteForeverIcon />
					</button>
				</div>
			</div>
		));
	};

	return (
		<div>
			<div id="add-item-area">
				<input
					placeholder="Add item"
					id="add-item-input"
					onChange={handleChangeName}
				/>
				<button
					id="plus"
					aria-label="Add Item"
					onClick={() =>
						dispatch(addItem(todoName), setTodoCount(todoCount + 1))
					}
				>
					+
				</button>
			</div>
			<div id="items">
				<ul id="items-list">{renderTodos()}</ul>
			</div>
			<div id="bottom-area">
				<span>You have {todoCount} pending tasks.</span>
				<button>Delete All</button>
			</div>
		</div>
	);
};

export default AddItem;
