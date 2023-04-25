(() => {
  // app/scripts/common/function/initEventChangeCollectionGridStyle.js
  var initEventChangeCollectionGridStyle = function() {
    let buttonsContainer = document.getElementById("grid_style_list");
    if (!buttonsContainer) {
      return;
    }
    let { container } = this;
    let originClass = [...container.classList].join(" ");
    let { productGridContainer } = this.elms;
    buttonsContainer.children.forEach((button) => {
      let gridClass = button.dataset.class;
      let styleClass = button.dataset.style;
      button.addEvent("click", () => {
        productGridContainer.className = gridClass;
        container.className = `${originClass} ${styleClass}`;
      });
    });
  };

  // app/scripts/common/snippet/collection/filter-group.js
  function initFilterGroup() {
    let { sidebarContainer } = this.elms;
    if (!sidebarContainer)
      return;
    let filterGroups = sidebarContainer.querySelectorAll(".featured_block-filter_group");
    sidebarContainer && filterGroups.forEach((element) => {
      let enableMultipleValue = element.dataset.multiple === "true";
      let clearButton = element.querySelector(".filter-clear");
      let filterItems = element.querySelectorAll(".tags-link");
      let action;
      filterItems.forEach((button) => {
        let tagValue = button.dataset.tagValue;
        button.addEvent("click", (e) => {
          e.preventDefault();
          if (button.hasClass("active")) {
            this.currentTags = this.currentTags.filter((tag) => tag != tagValue);
            action = "remove";
          } else {
            if (!enableMultipleValue) {
              [...filterItems].filter((item) => item.hasClass("active")).forEach((item) => (item.removeClass("active"), this.currentTags = this.currentTags.filter((tag) => tag != item.dataset.tagValue)));
            }
            this.currentTags.push(tagValue);
            action = "add";
          }
          clearButton.addClass("pending");
          clearButton.removeClass("d-none");
          this.getProductList(this.getUrlAjaxRequest(null, "filter")).then(() => {
            switch (action) {
              case "add":
                button.addClass("active");
                break;
              case "remove":
                button.removeClass("active");
                if (![...filterItems].find((item) => item.hasClass("active"))) {
                  clearButton.addClass("d-none");
                }
                break;
            }
            clearButton.removeClass("pending");
            scrollToTop();
          });
        });
      });
      clearButton.addEvent("click", (e) => {
        e.preventDefault();
        let clearTags = [...filterItems].map((element2) => element2.hasClass("active") && element2.dataset.tagValue).filter(Boolean);
        this.currentTags = this.currentTags.filter((tag) => !clearTags.includes(tag));
        clearButton.addClass("pending");
        this.getProductList(this.getUrlAjaxRequest(null, "filter")).then(() => {
          clearButton.addClass("d-none");
          clearButton.removeClass("pending");
          filterItems.forEach((item) => item.removeClass("active"));
          scrollToTop();
        });
      });
      function scrollToTop() {
        theme.settings.collection.scrollTopWhenFilter && AT.scrollTo(document.getElementById("main-layout").offsetTop - 100);
      }
    });
  }

  // app/scripts/common/section/collection-no-sidebar.js
  var CollectionNoSidebar = {
    onLoad: function() {
      let { container } = this;
      Object.assign(this, theme.collection);
      !this.currentTags && (this.currentTags = []);
      this.elms = {
        sortContainer: container.querySelector(".js-collection-sort-container"),
        selectDesk: document.getElementById("select_desk"),
        selectDeskTitle: document.getElementById("select_desk_title"),
        selectDeskContainer: document.getElementById("select_desk_container"),
        productItems: [...container.getElementsByClassName("product-section")],
        infiniteBtn: container.querySelector(".js-infinite-btn"),
        productGridContainer: container.querySelector("#product-grid-container"),
        collectionPaginationContainer: container.querySelector(".js-colletion-pagination-container"),
        paginationShowing: container.querySelector(".js-pagination-showing"),
        sidebarContainer: container.querySelector("#sidebarDrawer"),
        toggleSbButton: container.getElementsByClassName("js-toggle-sb"),
        filterContainer: document.querySelector(".js-filter-container")
      };
      this.initSortCollection();
      this.initCollapse();
      this.getProductList(this.getUrlAjaxRequest());
      initFilterGroup.call(this);
      this.initToggleSidebar();
      this.initFilter();
      initEventChangeCollectionGridStyle.call(this);
    },
    initFilter() {
      let { filterContainer } = this.elms;
      if (!filterContainer) {
        return;
      }
      if (typeof Filter !== "undefined") {
        new Filter(filterContainer);
      } else {
        AT.loadCollectionFilter().then(() => {
          new Filter(filterContainer);
        });
      }
    },
    initSortCollection: function() {
      let { sortContainer } = this.elms;
      let desktopSelectContainer = sortContainer.querySelector("#select_desk_container");
      let deskSelectElement = sortContainer.querySelector("#select_desk");
      let deskSelectTitleElement = desktopSelectContainer.querySelector("#select_desk_title");
      let mobileSelectContainer = sortContainer.querySelector("#mobile-select-container");
      let mobileSelectElement = mobileSelectContainer.firstElementChild;
      desktopSelectContainer.addEvent("click", function() {
        if (this.hasClass("is-open")) {
          this.removeClass("is-open");
        } else {
          this.addClass("is-open");
        }
      });
      document.addEvent("click", (e) => {
        if (!desktopSelectContainer.contains(e.target)) {
          desktopSelectContainer.removeClass("is-open");
        }
      });
      deskSelectElement.children.addEvents("click", function() {
        let title = this.innerHTML;
        let value = this.dataset.value;
        deskSelectTitleElement.innerHTML = title;
        mobileSelectElement.value = value;
        mobileSelectElement.dispatchEvent(new Event("change"));
      });
      mobileSelectElement.addEvent("change", (e) => {
        let { value } = e.target;
        this.getProductList(this.getUrlAjaxRequest(value, "sort-by"));
      });
    },
    getUrlAjaxRequest: function(value, action) {
      let newURL = "", vendors;
      if (window.location.href.includes("vendors")) {
        vendors = AT.getParameterByName("q");
      }
      switch (action) {
        case "sort-by": {
          if (vendors) {
            let paramsSearch = [
              ...window.location.search.replace("?", "").split("&").filter((i) => !i.includes("sort_by")),
              `sort_by=${value}`,
              "view=ajax-request"
            ];
            newURL = `${window.location.pathname}?${paramsSearch.join("&")}`;
            console.log(newURL);
          } else {
            if (!!window.location.search) {
              if (location.search.includes("sort_by")) {
                let paramsSearch = location.search.split("&");
                paramsSearch = paramsSearch.map((item) => {
                  if (item.includes("sort_by")) {
                    return item.split("=")[0] + "=" + value;
                  }
                  return item;
                });
                paramsSearch.push("view=ajax-request");
                newURL = `${location.origin}${location.pathname}${paramsSearch.join("&")}`;
              } else {
                newURL = `${location.href}&sort_by=${value}&view=ajax-request`;
              }
            } else {
              newURL = `${location.href}?sort_by=${value}&view=ajax-request`;
            }
          }
          break;
        }
        case "filter": {
          if (vendors) {
            let paramsSearch = [
              this.currentTags.length ? `constraint=${encodeURIComponent(this.currentTags.join("+"))}` : "",
              ...window.location.search.replace("?", "").split("&").filter((i) => !i.includes("constraint") && !i.includes("page")),
              "view=ajax-request"
            ].filter(Boolean).join("&");
            newURL = `${window.location.pathname}?${paramsSearch}`;
          } else {
            if (!!location.search) {
              let paramsSearch = location.search.split("&");
              paramsSearch = paramsSearch.map((item) => {
                if (item.includes("page=") && +item.split("=")[1] > 1) {
                  return item.split("=")[0] + "=1";
                }
                return item;
              });
              newURL = `${this.url}${this.currentTags.length ? "/" + this.currentTags.join("+") : ""}${paramsSearch.join("&")}&view=ajax-request`;
            } else {
              newURL = `${this.url}${this.currentTags.length ? "/" + this.currentTags.join("+") : ""}?view=ajax-request`;
            }
          }
          break;
        }
        default:
          if (!!window.location.search) {
            newURL = `${this.url.includes("collections/vendors") ? window.location.pathname : this.url}${this.currentTags.length ? "/" + this.currentTags.join("+") : ""}${window.location.search}&view=ajax-request`;
          } else {
            newURL = `${this.url.includes("collections/vendors") ? window.location.pathname : this.url}${this.currentTags.length ? "/" + this.currentTags.join("+") : ""}?view=ajax-request`;
          }
          break;
      }
      return newURL;
    },
    getProductList: function(url) {
      let { productGridContainer, collectionPaginationContainer, paginationShowing } = this.elms;
      return fetch(url, { dataType: "text" }).then((content) => {
        let div = document.createElement("div");
        div.innerHTML = content;
        let productElmList = div.querySelectorAll(".js-product-card");
        let paginationElm = div.querySelector(".collection-pagination");
        paginationShowing.innerHTML = div.querySelector(".pagination-showing").innerHTML;
        if (productElmList.length) {
          productGridContainer.innerHTML = "";
          productElmList.forEach((item) => {
            ProductCard.initEvent(item);
            productGridContainer.append(item);
          });
        } else {
          productGridContainer.innerHTML = `<p class="text-center">${this.notFound}</p>`;
        }
        collectionPaginationContainer.innerHTML = paginationElm.innerHTML || "";
        collectionPaginationContainer.querySelectorAll("a").forEach((item) => {
          item.href = AT.removeParam("view", item.href);
        });
        history.replaceState({}, "", url.replace("?view=ajax-request&", "?").replace("?view=ajax-request", "").replace("&view=ajax-request", ""));
        document.title = div.querySelector(".page-title").textContent;
        if (typeof window.SPR !== "undefined") {
          window.SPR.initDomEls();
          window.SPR.loadBadges();
          window.SPR.loadProducts();
        }
      });
    },
    initCollapse: function() {
      let collapseButtons = this.container.getElementsByClassName("js-btn-collapse");
      collapseButtons.addEvents("click", function() {
        if (this.hasClass("is-open")) {
          this.removeClass("is-open");
          this.nextElementSibling.removeClass("is-open");
        } else {
          this.addClass("is-open");
          this.nextElementSibling.addClass("is-open");
        }
      });
    },
    initToggleSidebar: function() {
      let { toggleSbButton, sidebarContainer } = this.elms;
      if (!sidebarContainer)
        return;
      toggleSbButton.forEach((button) => {
        button.addEvent("click", function() {
          let { role } = button.dataset;
          switch (role) {
            case "open":
              sidebarContainer.addClass("is-open");
              break;
            case "close":
              sidebarContainer.removeClass("is-open");
              break;
          }
        });
      });
    }
  };

  // app/scripts/collection-no-sidebar-page.js
  (() => {
    register("collection-no-sidebar", CollectionNoSidebar);
    load("*");
  })();
})();
