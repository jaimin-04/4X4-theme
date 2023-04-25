(() => {
    // app/scripts/filter.js
    var Filter = class {
        constructor(container) {
            let dataUrls = "https://jaimin.dakshyafreondtech.com/api/get-make";
            this.collectionPosition = +container.dataset.collectionPosition;
            this.elms = {
                container,
                field1: container.querySelector(".chosen-container[data-field-index='1']"),
                field2: container.querySelector(".chosen-container[data-field-index='2']"),
                field3: container.querySelector(".chosen-container[data-field-index='3']"),
                buttonSubmit: container.querySelector(".js-btn-submit"),
                buttonReset: container.querySelector(".js-btn-reset")
            };
            this.getData(dataUrls).then((data) => {
                data = data.flat(2);
                this.initField(this.elms.field1, data, true);
                this.initEventFieldTitle();
                this.initEventButtonReset();
                this.initEventButtonSubmit();
            });
        }

        initField(element, data, lastField) {
            let newData = lastField ? data : data.map((item) => item.name);
            let index = element.dataset.fieldIndex;
            let titleElement = element.querySelector(".js-title");
            let chosenResults = element.querySelector(".chosen-results");
            let chosenDrop = element.querySelector(".chosen-drop");
            chosenResults.innerHTML = "";
            newData.forEach((item) => {
                let li = document.createElement("li");
                li.addClass("active-result");
                li.innerHTML = String(item).toUpperCase();
                li.setAttribute("data-value", item);
                chosenResults.append(li);
            });
            chosenResults.children.addEvents("click", (e) => {
                e.stopPropagation();
                let {target} = e;
                let value = target.dataset.value;
                titleElement.innerHTML = value;
                element.setAttribute("data-value", value);
                chosenDrop.removeClass("active");
                this.change(index, data, value);
            });
        }

        setField(element, value, data, lastField) {
            this.initField(element, data, lastField);
            element.setAttribute("data-value", value);
            element.querySelector(".js-title").innerHTML = value.toUpperCase();
            element.addClass("active");
        }

        change(index, data, value) {
            let {field2, field3, buttonSubmit} = this.elms;
            switch (index) {
                case "1": {
                    this.getData("https://jaimin.dakshyafreondtech.com/api/get-model/" + value)
                        .then((data) => {
                            data = data.flat(2)
                            this.resetField(field2);
                            this.resetField(field3);
                            this.initField(field2, data, true);
                            field2.addClass("active");
                            field2.querySelector(".chosen-drop").addClass("active");
                        });
                    break;
                }
                case "2": {
                    this.getData("https://jaimin.dakshyafreondtech.com/api/get-year/" + $("#make-dd").attr('data-value') + "/" + value)
                        .then((data) => {
                            data = data.flat(2);
                            this.initField(field3, data, true);
                            this.resetField(field3);
                            field3.addClass("active");
                            field3.querySelector(".chosen-single").click();

                        });
                    break;
                }
                case "3":
                    break;
            }
        }

        resetField(element) {
            let title = element.querySelector(".js-title");
            element.removeClass("active");
            title.innerHTML = title.dataset.placeholder;
            element.setAttribute("data-value", "");
            element.querySelector(".chosen-results").innerHTMl = "";
        }

        initEventFieldTitle() {
            let {container} = this.elms;
            container.querySelectorAll(".chosen-container").forEach((fieldContainer) => {
                let filterTitle = fieldContainer.querySelector(".chosen-single");
                let inputSearch = fieldContainer.querySelector("input[name='search']");
                let fieldResults = fieldContainer.querySelector(".chosen-results");
                let target = filterTitle.nextElementSibling;
                filterTitle.addEvent("click", () => {
                    if (target.hasClass("active")) {
                        target.removeClass("active");
                    } else {
                        target.addClass("active");
                    }
                });
                document.addEvent("click", (e) => {
                    if (!filterTitle.parentElement.contains(e.target)) {
                        target.removeClass("active");
                    }
                });
                inputSearch.addEvent("input", () => {
                    let value = inputSearch.value.toLowerCase();
                    fieldResults.children.forEach((item) => {
                        if (item.innerHTML.toLowerCase().includes(value)) {
                            item.style.display = "block";
                        } else {
                            item.style.display = "none";
                        }
                    });
                });
            });
        }

        getData(urls) {
            return Promise.all(urls.split(",").map((url) => fetch(url, {dataType: "json"})));
        }

        initEventButtonReset() {
            let {field1, field2, field3, buttonReset} = this.elms;
            buttonReset.addEvent("click", () => {
                this.resetField(field1);
                field1.addClass("active");
                this.resetField(field2);
                this.resetField(field3);
                AT.cookie.delete("arn-filter");
            });
        }

        initEventButtonSubmit() {
            let {buttonSubmit, field1, field2, field3} = this.elms;
            buttonSubmit.addEvent("click", (e) => {
                let optionValues = this.getOptionValues();
                console.log(field1.querySelector(".chosen-drop"));
                if (optionValues.filter(Boolean).length < 3) {
                    switch (optionValues.filter(Boolean).length) {
                        case 0:
                            field1.querySelector(".chosen-drop").addClass("active");
                            break;
                        case 1:
                            field2.querySelector(".chosen-drop").addClass("active");
                            break;
                        case 2:
                            field3.querySelector(".chosen-drop").addClass("active");
                            break;
                    }
                    e.stopPropagation();
                    return;
                }
                var makeTag = $("#make-dd").attr('data-value').replaceAll(' ', '_').replaceAll('&', '');
                var modelTag = $("#model-dd").attr('data-value').replaceAll(' ', '_').replaceAll('&', '');
                var yearTag = $("#year-dd").attr('data-value').replaceAll(' ', '_').replaceAll('&', '');

                let url = `${theme.routes.collectionsUrl}` + "/all/make:" + makeTag + "+model:" + modelTag + "+year:" + makeTag + ":" + modelTag + ":" + yearTag + "?view=main-collection-product-grid";
                AT.cookie.set("arn-filter", optionValues, 7);
                window.location.href = url;
            });
        }

        getOptionValues() {
            let {field1, field2, field3} = this.elms;
            return [`${field1.dataset.value}`, `${field2.dataset.value}`, `${field3.dataset.value}`];
        }
    };
    window.Filter = Filter;
    console.log("filter.js loaded");
})();
