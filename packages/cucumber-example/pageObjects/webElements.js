module.exports = {
    elements: {
        searchBox: {
            locateStrategy: 'xpath',
            selector : "//input[@id='twotabsearchtextbox']"
         },
        goButton: {
            locateStrategy: 'xpath',
            selector :"//input[@class='nav-input' and @value='Go']"
        },
        onResultspage: {
            locateStrategy: 'xpath',
            selector : "//h3[@class='a-size-medium a-spacing-base a-spacing-top-small a-color-tertiary a-text-normal' and text()='Show results for']"   
            

            //(//span[contains(text(),'results for')])[1]
        },

        filterSection: {
            locateStrategy: 'xpath',
            selector : "//h3[text()='Refine by']"
        },

        minPriceFilter : {
        locateStrategy: 'xpath',
        selector : "//input[@id='low-price' and @placeholder='Min']"
        },

        maxPriceFilter : {
            locateStrategy: 'xpath',
            selector : "//input[@id='high-price' and @placeholder='Max']"
            },
        
        goButtonFilter : {
            locateStrategy: 'xpath',
            selector : "//input[@class='a-button-input' and @value='Go']"
        },

        priceSortFilter : {
            locateStrategy: 'xpath',
            selector: "//select[@id='sort']//option[@value='price-desc-rank']"
        },

        firstProdPrice : {

            locateStrategy: 'xpath',
            selector: "//span[@class='a-size-base a-color-price s-price a-text-bold']"
        }


    }}


