import React, { useState, useEffect } from "react";
import "./AddItem.scss";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../todoSlice";
import ReactModal from "react-modal";

const AddItem = () => {
	const todoItems = useSelector((state) => state.todo.value);
	const dispatch = useDispatch();

	const [todoName, setTodoName] = useState();
	const [todoCount, setTodoCount] = useState(0);

	const [modalIsOpen, setIsOpen] = React.useState(false);

	const handleChangeName = (e) => {
		setTodoName(e.target.value);
	};

	const openModal = () => {
		setIsOpen(true);
	};

	const afterOpenModal = () => {};

	const closeModal = () => {
		setIsOpen(false);
	};

	const renderTodos = () => {
		return todoItems.map((item, i) => (
			<div className="item" key={i}>
				<li className="item-name">{item}</li>
				<div className="btn-grp">
					<button className="edit" onClick={openModal}>
						<EditIcon />
					</button>
					<button className="delete">
						<DeleteForeverIcon />
					</button>
				</div>
			</div>
		));
	};

	const handleKeypress = (e) => {
		if (e.keyCode === 13) addTodoItem();
	};

	const addTodoItem = () => {
		if (todoName !== undefined) {
			dispatch(addItem(todoName));
			setTodoCount(todoCount + 1);
		}
	};

	useEffect(() => {
		ReactModal.setAppElement("#main");
	});

	return (
		<div id="main">
			<div id="add-item-area">
				<input
					placeholder="Add item"
					id="add-item-input"
					onChange={handleChangeName}
					onKeyDown={handleKeypress}
				/>
				<button
					id="plus"
					aria-label="Add Item"
					onClick={() => {
						addTodoItem();
					}}
				>
					+
				</button>
			</div>
			<ReactModal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				contentLabel="Edit Todo Item"
			>
				<h1>Edit here...</h1>
			</ReactModal>
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
