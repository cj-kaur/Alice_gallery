// console.log("xscadfg");

// get all the panels
let panels = document.querySelectorAll(".quote-conatiner");
console.log({ panels });
// add a lister for click & toggle- active

panels.forEach((e) =>
	e.addEventListener("click", function () {
		console.log(e);
		// chiecking if outterHTML includes the class b-w
		// console.log(this.outerHTML.includes("b-w"));
		let test = this.outerHTML.includes("b-w");
		console.log({ test });
		// get the icons, who are a children of 'this'/ e
		let icons = this.querySelectorAll(".img-ctn");
		console.log(icons);
		this.classList.toggle("b-w");
		icons.forEach((icon) => icon.classList.toggle("open-active"));
	})
);

// if (test === true) {
// 	// if there is no b-w class then add it if not then remove it
// 	this.classList.remove("b-w");
// 	// go through the icons and add the class open-active
// 	icons.forEach((icon) => icon.classList.add("open-active"));
// } else {
// 	this.classList.add("b-w");
// 	icons.forEach((icon) => icon.classList.remove("open-active"));
// }
// panels.forEach(function (panel) {
// 	panel.addEventListener("mouseout", function () {
// 		let test = this.outerHTML.includes("b-w");
// 		console.log({ test });
// 		// console.log(panel);
// 		if (test !== true) {
// 			this.classList.add("b-w");
// 			let icons = this.querySelectorAll(".img-ctn");
// 			// go through the icons and add the class open-active
// 			icons.forEach((icon) => icon.classList.remove("open-active"));
// 		} else {
// 			return;
// 			// this.classList.add("b-w");
// 			// icons.forEach((icon) => icon.classList.remove("open-active"));
// 		}
// 	});
// });
// when listner activeated remove classlist b-w
// when listner activeated add classlist open-active
