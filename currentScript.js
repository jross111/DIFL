<link rel="stylesheet" href="//assets.squarewebsites.org/custom-filter/custom-filter.min.css"/>

<script>
window.customFilterSettings = {
    'targets': [{
        container: '#block-d3c82ac9d662a2119f56',  // "#block-66f1661bd5905df7ab3b" for map test
        items: '.summary-item',

        settings: {
            position: 'left',
            showItemsCount: false,
            filter: {
                enabled: true,
                category: false,
                tag: false,
                items: [{
                        name: 'Type of Buisness',
                        allLabel: '',
                        allOption: 'All',
                        allowedOptions: "Entertainment, Fitness, Food, Health, Pet Friendly",
                        multiple: false,
                        getAttr: 'categories'
                    },
                    {
                        name: 'Location',
                        allLabel: '',
                        allOption: 'All',
                        allowedOptions: "Brooklyn, Manhattan, Queens, Bronx, Staten Island, Williamsburg, SoHo, Upper West Side, Upper East Side, Harlem, West Village, Lower East Side",
                        multiple: true,
                        getAttr: 'tags'
                    },
                    {
                        name: 'State',
                        allLabel: '',
                        allOption: 'All', 
                        allowedOptions: "New York, New Jersey",
                        multiple: false,
                        getAttr: 'tags'

                    }
                ]
            },
          	

        	search: {
            enabled: true,
            text: ''
            },
    }
    }]
}
</script>

<script src="//assets.squarewebsites.org/custom-filter/custom-filter.min.js"></script>