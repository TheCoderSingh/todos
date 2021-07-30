import React from "react";
import "./AddItem.scss";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../todoSlice";

const AddItem = () => {
	const todoItem = useSelector((state) => state.todo.value);
	const dispatch = useDispatch();

	return (
		<div>
			<div id="add-item-area">
				<input placeholder="Add item" id="add-item-input" />
				<button
					id="plus"
					aria-label="Add Item"
					onClick={() => dispatch(addItem("Hello"))}
				>
					+
				</button>
			</div>
			<div id="items">
				<ul id="items-list">
					<div className="item">
						<li className="item-name">{todoItem}</li>
						<div className="btn-grp">
							<button className="edit">
								<EditIcon />
							</button>
							<button className="delete">
								<DeleteForeverIcon />
							</button>
						</div>
					</div>
					<div className="item">
						<li className="item-name">Item 2</li>
						<div className="btn-grp">
							<button className="edit">
								<EditIcon />
							</button>
							<button className="delete">
								<DeleteForeverIcon />
							</button>
						</div>
					</div>
					<div className="item">
						<li className="item-name">Item 3</li>
						<div className="btn-grp">
							<button className="edit">
								<EditIcon />
							</button>
							<button className="delete">
								<DeleteForeverIcon />
							</button>
						</div>
					</div>
					<div className="item">
						<li className="item-name">Item 4</li>
						<div className="btn-grp">
							<button className="edit">
								<EditIcon />
							</button>
							<button className="delete">
								<DeleteForeverIcon />
							</button>
						</div>
					</div>
					<div className="item">
						<li className="item-name">Item 5</li>
						<div className="btn-grp">
							<button className="edit">
								<EditIcon />
							</button>
							<button className="delete">
								<DeleteForeverIcon />
							</button>
						</div>
					</div>
					<div className="item">
						<li className="item-name">Item 6</li>
						<div className="btn-grp">
							<button className="edit">
								<EditIcon />
							</button>
							<button className="delete">
								<DeleteForeverIcon />
							</button>
						</div>
					</div>
				</ul>
			</div>
			<div id="bottom-area">
				<span>You have 6 pending tasks.</span>
				<button>Delete All</button>
			</div>
		</div>
	);
};

export default AddItem;
