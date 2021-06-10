const listItems = [
	'Item 1',
	'Item 2',
	'Item 3',
	'Item 4',
	'Item 5',
	'Item 6',
	'Item 7',
	'Item 8',
	'Item 9',
	'Item 10',
	'Item 11',
	'Item 12',
	'Item 13',
	'Item 14',
	'Item 15',
	'Item 16',
	'Item 17',
	'Item 18',
	'Item 19',
	'Item 20',
	'Item 21',
	'Item 22'
];

console.log('hello Friends');
let list_elemnts = document.querySelector('#list');
let pagination_elemnts = document.querySelector('#pagination');

current_page = 1;
row = 5;

function DisplaysItems(current_page, row, items, wrapper) {
	wrapper.innerHTML = '';
	current_page--;
	// console.log(current_page);
	// console.log(row);

	let start = current_page * row;
	let end = start + row;
	// console.log(start);
	// console.log(end);
	// console.log(items);
	let PaginationItems = items.slice(start, end);

	PaginationItems.map((item) => {
		let items_elemnts = document.createElement('div');
		items_elemnts.classList.add('item');
		items_elemnts.innerText = item;
		wrapper.appendChild(items_elemnts);
	});
}
function setUpPagination(items, row, pagination_elemnts) {
	pagination_elemnts.innerHTML = '';
	let PageCount = Math.ceil(items.length / row);
	for (let i = 1; i < PageCount + 1; i++) {
		let btn = PaginationButton(items, i);
		pagination_elemnts.appendChild(btn);
	}
}
function PaginationButton(items, page) {
	let button = document.createElement('button');
	button.innerText = page;
	if (current_page === page) {
		button.classList.add('active');
	}
	button.addEventListener('click', function() {
		current_page = page;
		DisplaysItems(current_page, row, items, list_elemnts);
		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');
		button.classList.add('active');
	});
	return button;
}
DisplaysItems(current_page, row, listItems, list_elemnts);
setUpPagination(listItems, row, pagination_elemnts);
