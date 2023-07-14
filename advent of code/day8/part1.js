const { data } = require('./input')

const COL_SIZE = data[0].length - 1;
const ROW_SIZE = data.length - 1;

function is_edge_tree(tree_row_pos, tree_col_pos){
	if (tree_row_pos === 0 | tree_row_pos === ROW_SIZE){
		return true;	
	}
	if (tree_col_pos === 0 | tree_col_pos === COL_SIZE){
		return true;
	}
	return false;
}


function is_visible_from_top(tree_row_pos, tree_col_pos){
	let found_taller_tree = false;
	for (let row_index=0; row_index<tree_row_pos; row_index++){
		if (data[row_index][tree_col_pos] >= data[tree_row_pos][tree_col_pos]) {
			found_taller_tree = true;
			break;
		}
	}
	return !found_taller_tree;
}


function is_visible_from_bottom(tree_row_pos, tree_col_pos){
	let found_taller_tree = false;
	for (let row_index=tree_row_pos+1; row_index<=ROW_SIZE; row_index++){
		if (data[row_index][tree_col_pos] >= data[tree_row_pos][tree_col_pos]) {
			found_taller_tree = true;
			break;
		}
	}
	return !found_taller_tree;
}

function is_visible_from_left(tree_row_pos, tree_col_pos){
	let found_taller_tree = false;
	for (let col_index=0; col_index<tree_col_pos; col_index++){
		if (data[tree_row_pos][col_index] >= data[tree_row_pos][tree_col_pos]) {
			found_taller_tree = true;
			break;
		}
	}
	return !found_taller_tree;
}

function is_visible_from_right(tree_row_pos, tree_col_pos){
	let found_taller_tree = false;
	for (let col_index=tree_col_pos+1; col_index<=COL_SIZE; col_index++){
		if (data[tree_row_pos][col_index] >= data[tree_row_pos][tree_col_pos]) {
			found_taller_tree = true;
			break;
		}
	}
	return !found_taller_tree;
}

function is_visible(tree_row_pos, tree_col_pos){
	return is_edge_tree(tree_row_pos, tree_col_pos) | is_visible_from_top(tree_row_pos, tree_col_pos) | is_visible_from_bottom(tree_row_pos, tree_col_pos) | is_visible_from_right(tree_row_pos, tree_col_pos) | is_visible_from_left(tree_row_pos, tree_col_pos)
}

const visible_trees = [];
for (let row_index=0; row_index<=ROW_SIZE; row_index++){
	for (let col_index=0; col_index<=COL_SIZE; col_index++){
		if (is_visible(row_index, col_index)){
			element = row_index.toString() + col_index.toString();
			visible_trees.push(element)
		}
	}
}

console.log(visible_trees.length);
