(() => {
	window.addEventListener('DOMContentLoaded', () => {
        generateLists();
	});
	
	const generateLists = () => {
        let items = '';

        for (let key in person.pesrsons) {
            items += '<li class="item">' + person.pesrsons[key].name + '</li>';
        }

		document.querySelector('.list').innerHTML = items;
	}
})();