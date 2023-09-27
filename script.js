const cardOverlay = document.querySelector(`#overlay`),
	allCards = document.querySelectorAll(`.card`);

const unfoldEvent = () => {
	for (const card of allCards) {
		card.classList.toggle(`unfolded`);
	}
};
const foldEvent = () => {
	for (const card of allCards) {
		card.classList.toggle(`unfolded`);
	}
};

const eventProducer = () => {
	cardOverlay.addEventListener(`mouseover`, unfoldEvent);
	cardOverlay.addEventListener(`mouseout`, foldEvent);
	for (const card of allCards) {
		card.addEventListener("mouseover", unfoldEvent);
		card.addEventListener("mouseout", foldEvent);
	}
};
eventProducer();
